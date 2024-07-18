import { getAssetPath } from "@stencil/core";
export const setCSSAssetPathByCustomProperty = (propertyName, assetPath) => {
    document.documentElement.style.setProperty(propertyName, `url(${getAssetPath(assetPath)})`);
};
//# sourceMappingURL=utils.js.map
