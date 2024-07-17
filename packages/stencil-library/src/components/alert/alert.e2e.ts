import { newE2EPage } from '@stencil/core/testing';

describe('<njwds-alert>', () => {
  it('should render an njwds-alert component', async () => {
    const page = await newE2EPage();
    await page.setContent(`<njwds-alert><span>Body alert text</span></njwds-alert`);
    const alertComponent = await page.find('njwds-alert');
    expect(alertComponent).not.toBeNull();
  });
});
