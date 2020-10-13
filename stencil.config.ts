import { Config, h } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ice-component-react',
  srcDir: 'src',
  bundles: [{ components: ['my-component'] }, { components: ['my-button'] }],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'ice-component-react  ',
      proxiesFile: '../ice-component-react/src/components.d.ts',
    }),
  ],
  // outputTargets: [
  //   {
  //     type: 'dist',
  //     esmLoaderPath: '../loader',
  //   },
  //   {
  //     type: 'dist-custom-elements-bundle',
  //   },
  //   {
  //     type: 'docs-readme',
  //   },
  //   {
  //     type: 'www',
  //     serviceWorker: null, // disable service workers
  //   },
  // ],
};
