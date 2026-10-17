import { createSSRApp, createApp, defineComponent, h, nextTick, ref } from "vue";
import { renderToString } from "vue/server-renderer";
import usePrefetchedData, { providePrefetchedState } from "../usePrefetchedData";

const flushPromises = () => new Promise((resolve) => setTimeout(resolve));

function buildComponent(currentKey, load) {
  return defineComponent({
    setup() {
      const { data, isLoading } = usePrefetchedData(() => currentKey.value, load);
      return () => h("p", isLoading.value ? "loading" : `data:${data.value}`);
    },
  });
}

function mountInBrowser(component, state) {
  const app = createApp(component);
  providePrefetchedState(app, state);
  const container = document.createElement("div");
  app.mount(container);
  return container;
}

describe("usePrefetchedData", () => {
  it("waits for the data while prerendering and stores it in the shared state", async () => {
    const state = {};
    const load = jest.fn(() => Promise.resolve("article A"));
    const app = createSSRApp(buildComponent(ref("article:a"), load));
    providePrefetchedState(app, state);

    const html = await renderToString(app);

    expect(html).toContain("data:article A");
    expect(state).toEqual({ "article:a": "article A" });
  });

  it("reuses prerendered data in the browser without loading it again", async () => {
    const load = jest.fn(() => Promise.resolve("fresh"));

    const container = mountInBrowser(buildComponent(ref("article:a"), load), {
      "article:a": "prerendered",
    });
    await flushPromises();

    expect(container.textContent).toBe("data:prerendered");
    expect(load).not.toHaveBeenCalled();
  });

  it("loads the data in the browser when it was not prerendered", async () => {
    const load = jest.fn(() => Promise.resolve("loaded"));

    const container = mountInBrowser(buildComponent(ref("article:a"), load), {});
    expect(container.textContent).toBe("loading");
    await flushPromises();

    expect(container.textContent).toBe("data:loaded");
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("loads again when the key changes", async () => {
    const currentKey = ref("article:a");
    const load = jest.fn(() => Promise.resolve(currentKey.value));
    const container = mountInBrowser(buildComponent(currentKey, load), { "article:a": "article:a" });

    currentKey.value = "article:b";
    await nextTick();
    await flushPromises();

    expect(container.textContent).toBe("data:article:b");
    expect(load).toHaveBeenCalledTimes(1);
  });

  it("keeps not found results so they are not requested again", async () => {
    const state = {};
    const app = createSSRApp(buildComponent(ref("article:missing"), () => Promise.resolve(null)));
    providePrefetchedState(app, state);

    await renderToString(app);

    expect(state).toEqual({ "article:missing": null });
  });
});
