import { E2EElement, newE2EPage } from '@stencil/core/testing';
import { ButtonVariant } from './button';
import { Mode } from '../../interface';

const renderAndGetButtonElement = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const button = await page.find('njwds-button > button');
  return button;
};

const getClassesOfRenderedButton = async (variant?: ButtonVariant, mode?: Mode) => {
  const variantAttr = variant ? `variant="${variant}"` : '';
  const modeAttr = mode ? `mode="${mode}"` : '';
  const button = await renderAndGetButtonElement(`
      <njwds-button ${variantAttr} ${modeAttr}></njwds-button>
  `);
  return button.className.split(' ').sort();
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
  });

  describe('mode', () => {
    it('renders light mode primary variant as USWDS button with only the usa-button class', async () => {
      const buttonClasses = await getClassesOfRenderedButton('primary', 'light');
      expect(buttonClasses).toEqual(['usa-button'].sort());
    });

    it('renders light mode secondary variant as USWDS outline inverse variant', async () => {
      const buttonClasses = await getClassesOfRenderedButton('secondary', 'light');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline'].sort());
    });

    it('renders light mode link variant as USWDS unstyled button with custom styling', async () => {
      const buttonClasses = await getClassesOfRenderedButton('link', 'light');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled'].sort());
    });

    it('renders dark mode primary variant as USWDS button with custom styling', async () => {
      const buttonClasses = await getClassesOfRenderedButton('primary', 'dark');
      expect(buttonClasses).toEqual(['usa-button', 'primary-button-dark'].sort());
    });

    it('renders dark mode secondary variant as USWDS outline inverse variant', async () => {
      const buttonClasses = await getClassesOfRenderedButton('secondary', 'dark');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline', 'usa-button--inverse'].sort());
    });

    it('renders dark mode link variant as USWDS unstyled button with custom styling', async () => {
      const buttonClasses = await getClassesOfRenderedButton('link', 'dark');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'unstyled-button-dark'].sort());
    });

    it('renders danger mode primary variant as a USWDS secondary button ', async () => {
      const buttonClasses = await getClassesOfRenderedButton('primary', 'danger');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--secondary'].sort());
    });

    it('renders danger mode secondary variant as USWDS outline with custom styling', async () => {
      const buttonClasses = await getClassesOfRenderedButton('secondary', 'danger');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--outline', 'outline-danger'].sort());
    });

    it('renders danger mode link variant as USWDS unstyled button with custom styling', async () => {
      const buttonClasses = await getClassesOfRenderedButton('link', 'danger');
      expect(buttonClasses).toEqual(['usa-button', 'usa-button--unstyled', 'unstyled-button-danger'].sort());
    });
  });
  describe('icon', () => {
    const testIconName = 'test';

    it('renders a button with an icon', async () => {
      const button = await renderAndGetButtonElement(`<njwds-button icon=${testIconName}</njwds-button>`);
      const icon = await button.find('svg');
      const use = await icon.find('use');
      expect(icon).toHaveAttribute('aria-hidden');
      expect(icon).toEqualAttribute('role', 'img');
      expect(use.getAttribute('xlink:href')).toContain(testIconName);
    });

    it('renders a leading icon button by default with the correct icon classes', async () => {
      const button = await renderAndGetButtonElement('<njwds-button icon="test">button</njwds-button>');
      const buttonClasses = button.className.split(' ').sort();
      const icon = await button.find('svg');
      const iconClasses = icon.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'button-icon'].sort());
      expect(iconClasses).toEqual(['usa-icon', 'usa-icon--size-3', 'margin-right-105'].sort());
    });

    it('renders a leading icon button with the correct icon classes when position set to leading', async () => {
      const button = await renderAndGetButtonElement('<njwds-button icon="test" iconPosition="leading">button</njwds-button>');
      const buttonClasses = button.className.split(' ').sort();
      const icon = await button.find('svg');
      const iconClasses = icon.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'button-icon'].sort());
      expect(iconClasses).toEqual(['usa-icon', 'usa-icon--size-3', 'margin-right-105'].sort());
      expect(icon).toHaveAttribute('aria-hidden');
    });

    it('renders a trailing icon button with the correct icon classes when position set to trailing', async () => {
      const button = await renderAndGetButtonElement('<njwds-button icon="test2" icon-position="trailing">button</njwds-button>');
      const buttonClasses = button.className.split(' ').sort();
      const icon = await button.find('svg');
      const iconClasses = icon.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'button-icon'].sort());
      expect(iconClasses).toEqual(['usa-icon', 'usa-icon--size-3', 'margin-left-105'].sort());
    });

    it('renders a icon-only button with the correct icon classes when position set to icon-only', async () => {
      const button = await renderAndGetButtonElement('<njwds-button icon="test3" icon-position="icon-only"></njwds-button>');
      const buttonClasses = button.className.split(' ').sort();
      const icon = await button.find('svg');
      const iconClasses = icon.className.split(' ').sort();
      expect(buttonClasses).toEqual(['usa-button', 'button-icon'].sort());
      expect(iconClasses).toEqual(['usa-icon', 'usa-icon--size-3'].sort());
    });
  });
});
