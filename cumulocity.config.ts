import { EnvironmentOptions } from '@c8y/devkit/dist/options';
import { author, description, version } from './package.json';

export default {
  runTime: {
    author,
    description,
    version,
    name: 'IUG',
    contextPath: 'iug',
    key: 'iug-application-key',
    dynamicOptionsUrl: '/apps/public/public-options/options.json',
    isPackage: true,
    package: 'blueprint'
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies EnvironmentOptions;
