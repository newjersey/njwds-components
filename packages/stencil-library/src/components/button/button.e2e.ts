import { E2EElement, newE2EPage } from '@stencil/core/testing';

const renderAndGetButtonElement = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const button = await page.find('njwds-button > button');
  return button;
};

describe('<njwds-button>', () => {
  describe('type', () => {
    it('renders with only the "usa-button" class by default', async () => {
      const button = await renderAndGetButtonElement('<njwds-button></njwds-button>');
      expect(button.className).toBe('usa-button');
    });

    it('renders the primary type with only the "usa-button" class', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="primary"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button']);
    });

    it('renders the secondary type with "usa-button--outline" class', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="secondary"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline'].sort());
    });

    it('renders secondary-dark type with USWDS outline inverse styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="secondary-dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders the link type with USWDS unstyled styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="link"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled'].sort());
    });
    it('renders link-dark type as USWDS outline inverse, unstyled type', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="link-dark"></njwds-button>
      `);
      const buttonClasses = button.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders danger type with USWDS secondary styling', async () => {
      const button = await renderAndGetButtonElement(`
          <njwds-button type="danger"></njwds-button>
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
