import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: '../njwds/img', dest: 'img' },
        { src: '../njwds/fonts', dest: 'fonts' },
        { src: '../njwds/js', dest: 'js' },
        { src: '../njwds/css', dest: 'css' },
      ],
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '../../../../stencil-library/dist',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../njwds/img', dest: 'build/img' },
        { src: '../njwds/fonts', dest: 'build/fonts' },
        { src: '../njwds/js', dest: 'build/js' },
        { src: '../njwds/css', dest: 'build/css' },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  enableCache: false,
};
