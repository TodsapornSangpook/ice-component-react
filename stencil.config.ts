import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ice-component-react',
  bundles: [{ components: ['my-component'] }, { components: ['my-button'] }],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
