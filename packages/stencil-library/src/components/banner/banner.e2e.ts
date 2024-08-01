import { newE2EPage } from '@stencil/core/testing';
import { getByTestId } from '../test/utils';

describe('<njwds-banner>', () => {
  it('renders banner title linking to NJ gov website', async () => {
    const page = await newE2EPage();
    await page.setContent(`<njwds-banner></njwds-banner>`);
    const linkToNJSiteElt = await getByTestId(page, 'njwds-banner-site-link');

    expect(linkToNJSiteElt).toEqualText('Official Site of the State of New Jersey');
    expect(linkToNJSiteElt.tagName).toBe('A');
    expect(linkToNJSiteElt).toEqualAttribute('href', 'https://nj.gov');
  });

  it('renders "Get Updates" text linking to "https://nj.gov/subscribe/"', async () => {
    const page = await newE2EPage();
    await page.setContent(`<njwds-banner></njwds-banner>`);
    const mailUpdatesLinkElt = await getByTestId(page, 'njwds-banner-updates-link');

    expect(mailUpdatesLinkElt).toEqualText('Get Updates');
    expect(mailUpdatesLinkElt.tagName).toBe('A');
    expect(mailUpdatesLinkElt).toEqualAttribute('href', 'https://nj.gov/subscribe/');
  });

  it("renders the governor and lt. governor's names", async () => {
    const page = await newE2EPage();
    await page.setContent(`<njwds-banner></njwds-banner>`);
    const mailUpdatesLinkElt = await getByTestId(page, 'njwds-banner-governor-names');

    expect(mailUpdatesLinkElt.textContent).toContain('Governor Phil Murphy');
    expect(mailUpdatesLinkElt.textContent).toContain('Lt. Governor Tahesha Way');
  });
});
