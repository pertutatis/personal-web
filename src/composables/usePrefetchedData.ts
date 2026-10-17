import type { App, InjectionKey, Ref } from "vue";
import { inject, onMounted, onServerPrefetch, ref, watch } from "vue";

// Shared with vite-ssg's initialState: filled while prerendering, serialised
// into the page and restored in the browser before hydration.
type PrefetchedState = Record<string, unknown>;

const PREFETCHED_STATE_KEY: InjectionKey<PrefetchedState> = Symbol("prefetchedState");

export function providePrefetchedState(app: App, state: PrefetchedState): void {
  app.provide(PREFETCHED_STATE_KEY, state);
}

export function usePrefetchedState(): PrefetchedState {
  return inject(PREFETCHED_STATE_KEY, {});
}

type PrefetchedData<T> = {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
};

export default function usePrefetchedData<T>(
  key: () => string,
  load: () => Promise<T | null>
): PrefetchedData<T> {
  const state = usePrefetchedState();
  const hasData = (dataKey: string) => dataKey in state;

  const data = ref(hasData(key()) ? state[key()] : null) as Ref<T | null>;
  const isLoading = ref(!hasData(key()));

  async function loadData() {
    const requestedKey = key();
    isLoading.value = true;

    const loadedData = await load();
    state[requestedKey] = loadedData;

    // A newer key may have been requested while this one was loading
    if (key() !== requestedKey) return;

    data.value = loadedData;
    isLoading.value = false;
  }

  function showData(dataKey: string) {
    if (!hasData(dataKey)) {
      return loadData();
    }

    data.value = state[dataKey] as T | null;
    isLoading.value = false;
  }

  onServerPrefetch(async () => {
    if (!hasData(key())) await loadData();
  });

  onMounted(() => showData(key()));
  watch(key, showData);

  return { data, isLoading };
}
