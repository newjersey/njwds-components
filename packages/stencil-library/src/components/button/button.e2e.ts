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
});
