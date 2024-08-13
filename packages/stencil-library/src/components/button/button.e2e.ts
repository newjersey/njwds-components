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

    it('renders secondary-dark variant with USWDS outline inverse styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="secondary-dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders the link variant with USWDS unstyled styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="link"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled'].sort());
    });
    it('renders link-dark variant as USWDS outline inverse, unstyled variant', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="link-dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders danger variant with USWDS secondary styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button variant="danger"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--secondary'].sort());
    });
  });

  describe('asChild', () => {
    it('renders a button element when asChild is false (default)', async () => {
      const button = await renderAndGetButtonElement('<njwds-button></njwds-button>');
      expect(button.tagName).toBe('BUTTON');
    });

    it('renders with only the "usa-button" class by default', async () => {
      const button = await renderAndGetButtonElement('<njwds-button as-child><button></button></njwds-button>');
      expect(button.className.trim()).toBe('usa-button');
    });

    it('renders the button slot element with custom attributes when asChild is true', async () => {
      const button = await renderAndGetButtonElement(`
        <njwds-button as-child>
          <button data-test-1="1" data-test-2="2"></button>
        </njwds-button>
      `);
      expect(button).toEqualAttribute('data-test-1', '1');
      expect(button).toEqualAttribute('data-test-2', '2');
    });
  });
});
