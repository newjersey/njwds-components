# NJWDS Components

[`njwds-components`](https://www.npmjs.com/package/@newjersey/njwds-components) implements the [New Jersey Web Design System](https://github.com/newjersey/njwds) as web components and React components, build using [Stencil](https://stenciljs.com/).

## Table of Contents

1. [Demos](#demos)
2. [How to install and use NJWDS Web components](#how-to-install-and-use-njwds-web-components)
3. [How to install and use NJWDS React Components](#how-to-install-and-use-njwds-react-components)
4. [Developing the library](#developing-the-library)
5. [Releasing a new version to NPM](#releasing-a-new-version-to-npm)

## Demos

See the [`njwds-components-demo`](https://github.com/newjersey/njwds-components-demo/tree/main) repository for examples and instructions of how to use NJWDS web and react components in the following frameworks:

- [Vanilla HTML](https://github.com/newjersey/njwds-components-demo/tree/main/demos/vanilla-html)
- [React + Vite](https://github.com/newjersey/njwds-components-demo/tree/main/demos/react-vite)
- [Next.js](https://github.com/newjersey/njwds-components-demo/tree/main/demos/next-js)
- [Astro](https://github.com/newjersey/njwds-components-demo/tree/main/demos/astro)

Otherwise, read on for general instructions on how to use the package.

## How to install and use NJWDS Web Components

### Adding web components to vanilla HTML

To use the component library in vanilla HTML, you will add the entry script and the global styles to the HTML head.

The entry script will allow you to [lazy load components](https://stenciljs.com/docs/publishing#lazy-loading).

#### NPM

Install njwds-components by running npm install @newjersey/stencil-react-export.

Add an HTML script tag to the entry file.

```html
<script
  type="module"
  src="/node_modules/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/stencil-library.esm.js"
></script>
```

Add an HTML link tag referencing the NJWDS global stylesheet:

```html
<link
  rel="stylesheet"
  href="/node_modules/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css"
/>
```

#### Unpkg

> **Note:** There is a known bug in which SVG icons linked in component HTML (e.g. the Banner component) cannot be rendered using the unpkg link _(Updated 8/2/2024)_

If you’re unable to use NPM to access the package, you can add the same HTML tags, but instead reference files served via unpkg instead of referencing the local files in your node_modules. We recommend using the unpkg approach when writing HTML that will be integrated into an agency site and/or handed off for them to maintain.

Add an HTML script tag to the entry file.

```html
<script
  type="module"
  src="https://unpkg.com/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/stencil-library.esm.js"
></script>
```

Add an HTML link tag referencing the NJWDS global stylesheet:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css"
/>
```

**Loading a specific version**

If you would like to load a specific version of `njwds-components`, you can add a version number to the unpkg link.

```
https://unpkg.com/@newjersey/njwds-components@0.1.1/packages/stencil-library/dist/stencil-library/stencil-library.esm.js
```

### Adding web components to React and other front-end frameworks

When using React or another front end framework, you can access the NJWDS web components the same way as vanilla HTML.

Alternatively, you can import both the web components and styles using package imports.

#### Adding Styles

Import the NJWDS CSS wherever you would import global styles for your framework (usually the entry point of your application).

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";
```

#### Importing web components using package imports

Then, you can import specific components at the top of your files. This allows you to colocate the import with the usage of the component.

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";
```

#### Entry Scripts vs. Package Imports

The main difference between these import methods is that the entry script (stencil-library.esm.js) lazy-loads web components while the package import does not. Therefore, we recommend using the package import only when your project uses an external bundler such as Vite.

To read more about the difference between these two import methods, see Stencil’s [Publishing a Component Library](https://stenciljs.com/docs/publishing#lazy-loading) page.

## How to install and use NJWDS React Components

### Installation

To use the NJWDS React components, install [`njwds-components`](https://github.com/newjersey/njwds-components)

```bash
npm install @newjersey/njwds-components
```

### Adding styles

Make NJWDS styles available globally by importing the stylesheet to the app's entrypoint.

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";
```

### Importing components

React components can then be imported from `@newjersey/njwds-components`:

```ts
import { NjwdsAlert, NjwdsBanner } from "@newjersey/stencil-react-export";
```

#### Registering web components using defineCustomElements

To use the React component, you have to call the `defineCustomElements` function exported by the library on the client-side somewhere in your application. For example, you could add the `DefineCustomElementsLoader` component to each page of your app:

```tsx
import { defineCustomElements } from "@newjersey/stencil-react-export/packages/stencil-library/loader";
import { useEffect } from "react";
export default function DefineCustomElementsLoader() {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return <></>;
}
```

## Developing the library

### Architecture

This project is a monorepo containing the NJWDS web components, React components, and two example projects for viewing components during development.

- [`packages/stencil-library`](/packages/stencil-library) contains the NJWDS web components
- [`packages/react-library`](/packages/react-library) contains the NJWDS React components, created using [Stencil's React Integration](https://stenciljs.com/docs/react).
- [`packages/example-static`](/packages/example-static) implements the web components in vanilla HTML
- [`packages/example-react`](/packages/example-react) implements the web and React components in React

### Installation

Run `npm install` from the project root.

### Build the component library

1. Run `npm run build` from `packages/stencil-library` to build the web components.
2. Run `npm run build` from `packages/react-library` to build the React components from the Stencil web components.

This will also auto-generate docs for each component in a `readme.md` file colocated with the component (e.g. [`src/components/alert/readme.md`](https://github.com/newjersey/njwds-components/tree/main/packages/stencil-library/src/components/alert/readme.md)).

### Tests

Run `npm run test` from `packages/stencil-library` to run the test suites on the web components.

Tests are implemented using Jest and [Stencil's testing API](https://stenciljs.com/docs/testing-overview).

## Releasing a new version to NPM

1. Go to the [Draft Release GitHub Action](https://github.com/newjersey/njwds-components/actions/workflows/draft-release.yml)
2. Click the "Run workflow" dropdown, keep the branch set to `main`, and update the Semver Level based on what has changed since the previous release ([semver documentation](https://semver.org/)). Click the green button to "Run workflow".
3. Go to the [GitHub Releases page](https://github.com/newjersey/njwds-components/releases) and confirm that you see a new draft release with this version.
4. On the releases page, click the pencil icon on the top right to Edit the release. Document what has changed in this release; be sure to note any breaking changes. Once all looks good, click "Publish release" at the bottom.
5. This will automatically trigger the [Publish Release GitHub Action](https://github.com/newjersey/njwds-components/actions/workflows/public-release.yml). Confirm this action succeeded by checking the the [`njwds-components` package](https://www.npmjs.com/package/@newjersey/njwds-components) on the NPM registry.

## Contact

If you want to get in touch with the Office of Innovation team, please email us at
[team@innovation.nj.gov](mailto:team@innovation.nj.gov).

### Join the Office of Innovation!

If you are excited to design and deliver modern policies and services to improve the lives of all
New Jerseyans, you should
[join the New Jersey State Office of Innovation](https://innovation.nj.gov/join.html)!
