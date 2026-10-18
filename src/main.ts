import { ViteSSG } from 'vite-ssg';
// Self-hosted variable fonts (only the subsets a page uses are downloaded)
import '@fontsource-variable/montserrat/wght.css';
import '@fontsource-variable/montserrat/wght-italic.css';
import '@fontsource-variable/roboto-mono/wght.css';
import App from './App.vue';
import { routes, scrollBehavior } from './routes';
import { providePrefetchedState } from './composables/usePrefetchedData';
import { NOT_FOUND_STATE_KEY, showNotFoundOnFirstNavigation } from './routes/notFound';

// vite-ssg creates the app: prerendered at build time, hydrated in the browser.
// Data loaded while prerendering travels in initialState so the browser reuses it.
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, initialState, isClient }) => {
    providePrefetchedState(app, initialState);

    if (isClient && initialState[NOT_FOUND_STATE_KEY]) {
      showNotFoundOnFirstNavigation(router);
    }
  }
);
