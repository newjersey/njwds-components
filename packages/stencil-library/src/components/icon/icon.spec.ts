import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

describe('njwds-icon', () => {
  it('throws an error when a non-decorative icon is not provided an icon title', async () => {
    const renderIconWithoutTitle = () =>
      newSpecPage({
        components: [Icon],
        html: `<njwds-icon icon="mail"></njwds-icon>`,
      });
    await expect(renderIconWithoutTitle).rejects.toThrow();
  });
});
