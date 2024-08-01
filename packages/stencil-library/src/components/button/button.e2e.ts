import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { ButtonVariant } from './button';

const renderAndGetButtonElement = async (content: string): Promise<{ button: E2EElement; page: E2EPage }> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const button = await page.find('njwds-button > button');
  return { button, page };
};

describe('<njwds-button>', () => {
  describe('variant', () => {
    it('renders with only the "usa-button" class by default', async () => {
      const { button } = await renderAndGetButtonElement('<njwds-button></njwds-button>');
      expect(button.className).toBe('usa-button');
    });

    it.each(['secondary', 'accent-cool', 'accent-warm', 'base', 'outline'])('renders %s variant with "usa-button--[variant]" class', async (variant: ButtonVariant) => {
      const { button } = await renderAndGetButtonElement(`<njwds-button variant="${variant}"></njwds-button>`);
      console.log(button.outerHTML);
      expect(button).toHaveClass(`usa-button--${variant}`);
    });

    it('renders outline-inverse variant with both usa-button classes', async () => {
      const { button } = await renderAndGetButtonElement(`
        <njwds-button variant="outline-inverse"></njwds-button>
    `);
      expect(button).toHaveClasses(['usa-button--outline', 'usa-button--inverse']);
    });
  });
});
