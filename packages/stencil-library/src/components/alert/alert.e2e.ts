import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

const renderAndGetAlertDiv = async (content: string): Promise<{ alertDiv: E2EElement; page: E2EPage }> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const alertDiv = await page.find('.usa-alert');
  return { alertDiv, page };
};

describe('<njwds-alert>', () => {
  it('should render an njwds-alert component where default slotted content displays as alert text', async () => {
    const { alertDiv } = await renderAndGetAlertDiv(`
      <njwds-alert>
        <span>Body alert text</span>
      </njwds-alert>
    `);

    expect(alertDiv).not.toBeNull();
    const slotContainer = await alertDiv.find('p');
    expect(slotContainer).toHaveClass('usa-alert__text');
    const slottedContent = await slotContainer.find('span');
    expect(slottedContent).toEqualText('Body alert text');
  });

  it('applies no-icon class when no-icon is true', async () => {
    const { alertDiv } = await renderAndGetAlertDiv(`
      <njwds-alert no-icon>
        <span>Body alert text</span>
      </njwds-alert>
    `);
    expect(alertDiv).toHaveClass('usa-alert--no-icon');
  });

  describe('type', () => {
    it('renders without special styling by default', async () => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      expect(alertDiv.className).toBe('usa-alert');
    });

    it.each(['info', 'warning', 'error', 'emergency'])('renders type %s when passed', async type => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert type=${type}>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      expect(alertDiv).toHaveClass(`usa-alert--${type}`);
    });
  });

  describe('role', () => {
    it.each(['error', 'emergency'])('sets role alert for %s', async type => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert type=${type}>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      expect(alertDiv.getAttribute('role')).toEqual('alert');
    });

    it.each(['info', 'warning'])('does not set role for %s', async type => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert type=${type}>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      expect(alertDiv.getAttribute('role')).toBeNull();
    });
  });

  describe('header slot', () => {
    it("renders without a header when the header slot isn't provided", async () => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      const header = await alertDiv.find('[slot="header"]');
      expect(header).toBeNull();
    });

    it('renders a header when the header slot is provided', async () => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert>
          <h3 slot="header">Heading Text</h3>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      const header = await alertDiv.find('[slot="header"]');
      expect(header).toHaveClass('usa-alert__heading');
      expect(header).toEqualText('Heading Text');
    });
  });

  describe('is-slim', () => {
    it('adds slim when slim is true', async () => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert slim>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      expect(alertDiv).toHaveClass(`usa-alert--slim`);
    });

    it('does not display header when slim is true, even if header slot is provided', async () => {
      const { alertDiv } = await renderAndGetAlertDiv(`
        <njwds-alert slim>
          <h3 slot="header">Heading Text</h3>
          <span>Body alert text</span>
        </njwds-alert>
      `);
      const header = await alertDiv.find('[slot="header"]');
      expect(header).toBeNull();
    });
  });
});
