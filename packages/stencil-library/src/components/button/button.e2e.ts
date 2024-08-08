import { E2EElement, newE2EPage } from '@stencil/core/testing';
import { ButtonVariant } from './button';

const renderAndGetButtonElement = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const button = await page.find('njwds-button > button');
  return button;
};

describe('<njwds-button>', () => {
  describe('variant', () => {
    describe('asChild false', () => {
      it('renders with only the "usa-button" class by default', async () => {
        const button = await renderAndGetButtonElement('<njwds-button></njwds-button>');
        expect(button.className).toBe('usa-button');
      });

      it.each(['secondary', 'outline', 'unstyled'])('renders %s variant with "usa-button--[variant]" class', async (variant: ButtonVariant) => {
        const button = await renderAndGetButtonElement(`<njwds-button variant="${variant}"></njwds-button>`);
        const buttonClasses = button.className.split(' ').sort();
        expect(buttonClasses).toEqual(['usa-button', `usa-button--${variant}`].sort());
      });

      it('renders unstyled-inverse variant with "usa-button--unstyled" and "usa-button--inverse" classes', async () => {
        const button = await renderAndGetButtonElement(`
          <njwds-button variant="unstyled-inverse"></njwds-button>
      `);
        const buttonClasses = button.className.split(' ').sort();
        expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--inverse'].sort());
      });
    });
    describe('asChild true', () => {
      it('renders with only the "usa-button" class by default', async () => {
        const button = await renderAndGetButtonElement('<njwds-button as-child><button></button></njwds-button>');
        expect(button.className.trim()).toBe('usa-button');
      });

      it.each(['secondary', 'outline', 'unstyled'])('renders %s variant with "usa-button--[variant]" class', async (variant: ButtonVariant) => {
        const button = await renderAndGetButtonElement(`<njwds-button variant="${variant}"><button></button></njwds-button>`);
        const buttonClasses = button.className.split(' ').sort();
        expect(buttonClasses).toEqual(['usa-button', `usa-button--${variant}`].sort());
      });

      it('renders unstyled-inverse variant with "usa-button--unstyled" and "usa-button--inverse" classes', async () => {
        const button = await renderAndGetButtonElement(`
          <njwds-button variant="unstyled-inverse"><button></button></njwds-button>
      `);
        const buttonClasses = button.className.split(' ').sort();
        expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'usa-button--inverse'].sort());
      });
    });
  });

  describe('asChild', () => {
    it('renders a button element when asChild is false (default)', async () => {
      const button = await renderAndGetButtonElement('<njwds-button></njwds-button>');
      expect(button.tagName).toBe('BUTTON');
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
