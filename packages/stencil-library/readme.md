# NJWDS Web Components

NJWDS web components implemented using [Stencil](https://stenciljs.com/)

## Developing the library

### Setup

1. Make sure you're in the `packages/stencil-library` directory.
2. Run `npm install`.

### Build the web components

Run `npm run build` from from `packages/stencil-library` to generate the `dist` package.

The `stencil.config.ts` is configured to generate three [output targets](https://stenciljs.com/docs/output-targets):

- [`dist`](https://stenciljs.com/docs/distribution)
- [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements)
- [`react-output-target`](https://stenciljs.com/docs/react#api)

### Tests

Run `npm run test` from `packages/stencil-library`.

Tests are implemented using Jest and [Stencil's testing API](https://stenciljs.com/docs/testing-overview).
