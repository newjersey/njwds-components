'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8569154d.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["njwds-alert.cjs",[[4,"njwds-alert",{"type":[1],"isSlim":[4,"is-slim"],"headerText":[1,"header-text"]}]]],["njwds-banner.cjs",[[0,"njwds-banner"]]],["njwds-button.cjs",[[4,"njwds-button",{"variant":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map