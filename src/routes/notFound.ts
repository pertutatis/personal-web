import type { RouteLocationNormalized, RouteLocationRaw, Router } from 'vue-router';

export const NOT_FOUND_ROUTE_NAME = 'not-found';

// Set in the prerendered state of the 404 document
export const NOT_FOUND_STATE_KEY = 'page:not-found';

// Same url, but rendered by the not found page
export function notFoundLocation(route: Pick<RouteLocationNormalized, 'path' | 'query' | 'hash'>): RouteLocationRaw {
  return {
    name: NOT_FOUND_ROUTE_NAME,
    params: { pathMatch: route.path.substring(1).split('/') },
    query: route.query,
    hash: route.hash,
  };
}

// Netlify serves the prerendered 404 page for unknown urls such as /blog/missing/,
// which would otherwise match the article route once the app starts.
export function showNotFoundOnFirstNavigation(router: Router): void {
  const removeGuard = router.beforeEach((to) => {
    removeGuard();
    if (to.name === NOT_FOUND_ROUTE_NAME) return true;
    return notFoundLocation(to);
  });
}
