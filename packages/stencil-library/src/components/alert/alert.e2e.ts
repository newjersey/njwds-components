import { newE2EPage } from '@stencil/core/testing';

describe('<njwds-alert>', () => {
  it('should render an njwds-alert component', async () => {
    const page = await newE2EPage();
    await page.setContent(`<njwds-alert><span>Body alert text</span></njwds-alert>`);
    const alertComponent = await page.find('njwds-alert');
    expect(alertComponent).not.toBeNull();
  });
});

describe('<njwds-alert>', () => {
  describe('type', () => {
    it('renders without special styling by default', async () => {
      const page = await newE2EPage();
      await page.setContent(`<njwds-alert><span>Body alert text</span></njwds-alert>`);
      const alertDiv = await page.find('.usa-alert');
      expect(alertDiv.className).toBe('usa-alert');
    });

    it.each(['info', 'warning', 'error', 'emergency'])('renders type %s when passed', async type => {
      const page = await newE2EPage();
      await page.setContent(`<njwds-alert type=${type}><span>Body alert text</span></njwds-alert>`);
      const alertDiv = await page.find('.usa-alert');
      expect(alertDiv).toHaveClass(`usa-alert--${type}`);
    });

    describe('role', () => {
      it.each(['error', 'emergency'])('sets role alert for %s', async type => {
        const page = await newE2EPage();
        await page.setContent(`<njwds-alert type=${type}><span>Body alert text</span></njwds-alert>`);
        const alertDiv = await page.find('.usa-alert');
        expect(alertDiv.getAttribute('role')).toEqual('alert');
      });

      it.each(['info', 'warning'])('does not set role for %s', async type => {
        const page = await newE2EPage();
        await page.setContent(`<njwds-alert type=${type}><span>Body alert text</span></njwds-alert>`);
        const alertDiv = await page.find('.usa-alert');
        expect(alertDiv.getAttribute('role')).toBeNull();
      });
    });

    describe('is-slim', () => {
      it('adds slim when is-slim is true', async () => {
        const page = await newE2EPage();
        await page.setContent(`<njwds-alert is-slim=true><span>Body alert text</span></njwds-alert>`);
        const alertDiv = await page.find('.usa-alert');
        expect(alertDiv).toHaveClass(`usa-alert--slim`);
      });

      describe('header slot', () => {
        it("renders without a header when the header slot isn't provided", async () => {
          const page = await newE2EPage();
          await page.setContent(`<njwds-alert><span>Body alert text</span></njwds-alert>`);
          const alertDiv = await page.find('.usa-alert');
          const header = await alertDiv.find('[slot="header"]');
          expect(header).toBeNull();
        });

        it('renders a header when the header slot is provided', async () => {
          const page = await newE2EPage();
          await page.setContent(`<njwds-alert>
            <h3 slot="header">Heading Text</h3>
            <span>Body alert text</span></njwds-alert>
          `);
          const alertDiv = await page.find('.usa-alert');
          const header = await alertDiv.find('[slot="header"]');
          expect(header).toHaveClass('usa-alert__heading');
          expect(header).toEqualText('Heading Text');
        });

        it('does not display header when is-slim is true, even if header slot is provided', async () => {
          const page = await newE2EPage();
          await page.setContent(`<njwds-alert is-slim=true>
             <h3 slot="header">Heading Text</h3>
             <span>Body alert text</span></njwds-alert>`);
          const alertDiv = await page.find('.usa-alert');
          const header = await alertDiv.find('[slot="header"]');
          expect(header).toBeNull();
        });
      });
    });
  });
});
