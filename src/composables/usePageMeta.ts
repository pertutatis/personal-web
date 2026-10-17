import { computed } from "vue";
import { useHead } from "@unhead/vue";

import type { PageMeta } from "../module/presentation/pageMeta";
import toHeadInput from "../module/presentation/toHeadInput";

// Rendered into the prerendered <head> and kept in sync while navigating.
// Returning null keeps the current tags, e.g. while an article is loading.
export default function usePageMeta(meta: () => PageMeta | null): void {
  useHead(
    computed(() => {
      const pageMeta = meta();
      return pageMeta ? toHeadInput(pageMeta) : {};
    })
  );
}
