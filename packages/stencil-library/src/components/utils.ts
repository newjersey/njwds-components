import { getAssetPath } from '@stencil/core';

export const setCSSAssetPathByCustomProperty = (propertyName: string, assetPath: string): void => {
  document.documentElement.style.setProperty(propertyName, `url(${getAssetPath(assetPath)})`);
};
