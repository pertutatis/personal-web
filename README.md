# Vue 3 + Typescript + Vite + Pinia

This project is a experiment to test the new stack related with Vue 3.
* Vue 3 script setup
* Typescript
* Vite
* Pinia

It has been deployed into `Netlify` and the content is managed via `Storyblok`
preview: https://lucid-boyd-970208.netlify.app/

## Launch project
* `yarn dev`: start dev server, aliases: `vite dev`, `vite serve`
* `yarn build`: build for production
* `yarn preview`: locally preview production build

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Pending
* e2e
* env file
* refactor css
* review folder org (utils? seriously?)
