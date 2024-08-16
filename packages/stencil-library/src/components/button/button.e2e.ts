import { E2EElement, newE2EPage } from '@stencil/core/testing';

const renderAndGetButtonElement = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const button = await page.find('njwds-button > button');
  return button;
};

describe('<njwds-button>', () => {
  describe('variant', () => {
    it('renders with only the "usa-button" class by default', async () => {
      const button = await renderAndGetButtonElement('<njwds-button></njwds-button>');
      expect(button.className).toBe('usa-button');
    });

    it('renders the primary variant with only the "usa-button" class', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="primary"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button']);
    });

    it('renders the secondary variant with "usa-button--outline" class', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="secondary"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline'].sort());
    });

    it('renders the link variant with USWDS unstyled styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="link"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled'].sort());
    });

    it('renders danger variant with USWDS secondary styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="danger"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--secondary'].sort());
    });
  });

  describe('mode', () => {
    // TODO: How to write a test checking if mode="light" by default

    it.each(['primary', 'danger'])("mode doesn't affect %s variant", async variant => {
      const lightButtonClasses = (
        await renderAndGetButtonElement(`
          <njwds-button variant="${variant}" mode="light"></njwds-button>
      `)
      ).className.split(' ');
      const darkButtonClasses = (
        await renderAndGetButtonElement(`
        <njwds-button variant="${variant}" mode="dark"></njwds-button>
    `)
      ).className.split(' ');
      expect(lightButtonClasses.sort()).toEqual(darkButtonClasses.sort());
    });

    it('renders dark mode link variant as USWDS outline inverse, unstyled variant', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="link" mode="dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders dark mode link variant as USWDS outline inverse, unstyled variant', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="link" mode="dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--outline', 'usa-button--inverse'].sort());
    });
  });
});
