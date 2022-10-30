# Vue Masteclass

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Technologies

- JS framework - [Vue](https://vuejs.org/)
- Frontend tooling (builder) - [Vite](https://vitejs.dev/)
- Frontend workshop - [Storybook](https://storybook.js.org/)
- Linting
	- [ESLint](https://eslint.org/)
	- [ESLint-plugin-vue](https://eslint.vuejs.org/)
	- [TypeScript ESLint](https://typescript-eslint.io/)
- Programming language - [TypeScript](https://www.typescriptlang.org/)
- Routing - [Vue Router](https://router.vuejs.org/)
- State management - [Pinia](https://pinia.vuejs.org/)
- Styling language - [Sass](https://sass-lang.com/)
- Test suite - [Cypress](https://www.cypress.io/)

## Getting Started

### 1 Install Dependencies

Since `package-lock.json` is included in the repo, we want to avoid overriding it with `npm i`. Instead we run `npm ci`:

Run `npm ci` to install dependencies.

### 2 Connect External Library

This repo is using an external component library, which must be installed locally (until it gets published). The library can be cloned from GitHub and linked to this repo:

1. We want the library to be a sibling directory to this one, so navigate to the parent with `cd ..`.
1. Clone the library with `git clone https://github.com/CasperSocio/vue-masterclass-library.git`.
1. Navigate into the library `cd vue-masterclass-library` and run `npm ci` to install dependencies.
1. Run `npm run build` to generate component exports. The generated files in `./dist/` is what we're going to import in this project.
1. Now we need to link the library to this project:
	1. Run `npm link`. You can check that the link was established with `npm ls -g`.
	1. Navigate back to this project `cd ../vue-masterclass` and run `npm link vue-masterclass-library`.

You now have access to the external library in this project. You might have to reload VS Code in order to get rid of some TypeScript warnings.

## Commands

Run `npm run dev` to start development server.

Run `npm run storybook` to start design system server.

Run `npm test` to open the testing suite (Cypress).
