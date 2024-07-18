import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-c494fe6c.js';
export { s as setNonce } from './index-c494fe6c.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[2,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["njwds-alert",[[4,"njwds-alert",{"type":[1],"isSlim":[4,"is-slim"],"headerText":[1,"header-text"]}]]],["njwds-banner",[[0,"njwds-banner"]]],["njwds-button",[[4,"njwds-button",{"variant":[1]}]]]], options);
});

//# sourceMappingURL=stencil-library.esm.js.map