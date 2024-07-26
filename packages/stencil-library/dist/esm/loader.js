import { b as bootstrapLazy } from './index-dfdd9019.js';
export { s as setNonce } from './index-dfdd9019.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["njwds-alert_3",[[4,"njwds-alert",{"type":[1],"isSlim":[4,"is-slim"],"headerText":[1,"header-text"]}],[0,"njwds-banner"],[4,"njwds-button",{"variant":[1]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map