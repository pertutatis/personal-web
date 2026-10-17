import { createRouter, createMemoryHistory } from "vue-router";
import { notFoundLocation, showNotFoundOnFirstNavigation, NOT_FOUND_ROUTE_NAME } from "../notFound";

const Page = { template: "<div />" };

function buildRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/blog", component: Page, name: "blog" },
      { path: "/blog/:slug", component: Page, name: "article" },
      { path: "/:pathMatch(.*)*", component: Page, name: NOT_FOUND_ROUTE_NAME },
    ],
  });
}

describe("notFoundLocation", () => {
  it("points to the not found route keeping the same url", () => {
    const router = buildRouter();
    const route = router.resolve("/blog/missing/?ref=x#top");

    const resolved = router.resolve(notFoundLocation(route));

    expect(resolved.name).toBe(NOT_FOUND_ROUTE_NAME);
    expect(resolved.fullPath).toBe("/blog/missing/?ref=x#top");
  });
});

describe("showNotFoundOnFirstNavigation", () => {
  it("shows the not found page for the first url without changing it", async () => {
    const router = buildRouter();
    showNotFoundOnFirstNavigation(router);

    await router.push("/blog/missing/");

    expect(router.currentRoute.value.name).toBe(NOT_FOUND_ROUTE_NAME);
    expect(router.currentRoute.value.fullPath).toBe("/blog/missing/");
  });

  it("lets later navigations reach their own pages", async () => {
    const router = buildRouter();
    showNotFoundOnFirstNavigation(router);
    await router.push("/blog/missing/");

    await router.push("/blog");

    expect(router.currentRoute.value.name).toBe("blog");
  });
});
