import { b as bootstrapLazy } from './index-66b3c03e.js';
export { s as setNonce } from './index-66b3c03e.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["njwds-alert",[[4,"njwds-alert",{"type":[1],"isSlim":[4,"is-slim"],"headerText":[1,"header-text"]}]]],["njwds-banner",[[0,"njwds-banner"]]],["njwds-button",[[4,"njwds-button",{"variant":[1]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map