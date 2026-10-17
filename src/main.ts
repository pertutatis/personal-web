import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes, scrollBehavior } from './routes';
import { providePrefetchedState } from './composables/usePrefetchedData';

// vite-ssg creates the app: prerendered at build time, hydrated in the browser.
// Data loaded while prerendering travels in initialState so the browser reuses it.
export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, initialState }) => {
  providePrefetchedState(app, initialState);
});
