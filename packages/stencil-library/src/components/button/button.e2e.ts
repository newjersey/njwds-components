import { E2EElement, newE2EPage } from '@stencil/core/testing';
import { Mode, ButtonVariant, IconPosition } from '../../interface';

const renderAndGetButtonElement = async (content: string): Promise<E2EElement> => {
    const page = await newE2EPage();
    await page.setContent(content);
    const button = await page.find('njwds-button > button');
    return button;
};

const getElementClasses = (element: E2EElement): string[] => {
    return element.className.split(' ').sort();
};

const variant: Record<ButtonVariant, ButtonVariant> = {
    primary: 'primary',
    secondary: 'secondary',
    link: 'link',
};

const mode: Record<Mode, Mode> = {
    light: 'light',
    dark: 'dark',
    danger: 'danger',
};

const iconPosition: Record<IconPosition, IconPosition> = {
    'leading': 'leading',
    'trailing': 'trailing',
    'icon-only': 'icon-only',
};

const testIcon = 'iconName';
const testTitleText = 'titleText';

describe('<njwds-button>', () => {
    describe('variant', () => {
        it('renders with only the "usa-button" class by default', async () => {
            const button = await renderAndGetButtonElement(`<njwds-button></njwds-button>`);
            expect(button.className).toBe('usa-button');
        });

        it('renders the primary variant with only the "usa-button" class', async () => {
            const button = await renderAndGetButtonElement(`<njwds-button variant=${variant.primary}></njwds-button>`);
            expect(button.className).toBe('usa-button');
        });

        it('renders the secondary variant with "usa-button--outline" class', async () => {
            const button = await renderAndGetButtonElement(`<njwds-button variant=${variant.secondary}></njwds-button>`);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--outline'].sort());
        });

        it('renders the link variant with USWDS unstyled styling', async () => {
            const button = await renderAndGetButtonElement(`<njwds-button variant=${variant.link}></njwds-button>`);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--unstyled'].sort());
        });
    });

    describe('mode', () => {
        it('renders light mode primary variant as USWDS button with only the usa-button class', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.primary} mode=${mode.light}></njwds-button>
            `);
            expect(button.className).toBe('usa-button');
        });

        it('renders light mode secondary variant as USWDS outline variant', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.secondary} mode=${mode.light}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--outline'].sort());
        });

        it('renders light mode link variant as USWDS unstyled button with custom styling', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.link} mode=${mode.light}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--unstyled'].sort());
        });

        it('renders dark mode primary variant as USWDS button with custom styling', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.primary} mode=${mode.dark}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'primary-button-dark'].sort());
        });

        it('renders dark mode secondary variant as USWDS outline inverse variant', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.secondary} mode=${mode.dark}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--outline', 'usa-button--inverse'].sort());
        });

        it('renders dark mode link variant as USWDS unstyled button with custom styling', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.link} mode=${mode.dark}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--unstyled', 'unstyled-button-dark'].sort());
        });

        it('renders danger mode primary variant as a USWDS secondary button ', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.primary} mode=${mode.danger}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--secondary'].sort());
        });

        it('renders danger mode secondary variant as USWDS outline with custom styling', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.secondary} mode=${mode.danger}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--outline', 'outline-danger'].sort());
        });

        it('renders danger mode link variant as USWDS unstyled button with custom styling', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button variant=${variant.link} mode=${mode.danger}></njwds-button>
            `);
            expect(getElementClasses(button)).toEqual(['usa-button', 'usa-button--unstyled', 'unstyled-button-danger'].sort());
        });
    });
    describe('icon', () => {
        it('renders an icon button with the usa-button and button-icon classes', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon}</njwds-button>
            `);
            const icon = await button.find('svg');
            const use = await icon.find('use');
            expect(getElementClasses(button)).toEqual(['usa-button', 'button-icon'].sort());
            expect(icon).toEqualAttribute('role', 'img');
            expect(use.getAttribute('xlink:href')).toContain(testIcon);
        });

        it('renders a leading icon button by default with the correct icon classes and attributes', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon}>button</njwds-button>
            `);
            const iconComponent = await button.find('njwds-icon');
            expect(getElementClasses(iconComponent)).toEqual(['hydrated','margin-right-105'].sort());
        });

        it('renders a leading icon button with the correct icon classes and attributes when position set to leading', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon} icon-position=${iconPosition.leading}>button</njwds-button>
            `);
            const iconComponent = await button.find('njwds-icon');
            expect(getElementClasses(iconComponent)).toEqual(['hydrated', 'margin-right-105'].sort());
        });

        it('renders a trailing icon button with the correct icon classes and attributes when position set to trailing', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon} icon-position=${iconPosition.trailing}>button</njwds-button>
            `);
            const iconComponent = await button.find('njwds-icon');
            expect(getElementClasses(iconComponent)).toEqual(['hydrated', 'margin-left-105'].sort());
        });

        it('renders an icon-only button with the correct icon classes, attributes, and a title when position set to icon-only', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon} icon-position=${iconPosition['icon-only']}></njwds-button>
            `);
            const icon = await button.find('svg');
            const title = await button.find('svg > title');
            expect(getElementClasses(icon)).toEqual(['usa-icon', 'usa-icon--size-3'].sort());
            expect(icon).not.toHaveAttribute('aria-hidden');
            expect(icon).toHaveAttribute('aria-labelledby');
            expect(title).not.toBeNull();
        });

        it('renders an icon-only button a title tag having the icon title as the content when an icon-title is included', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon} icon-position=${iconPosition['icon-only']} icon-title=${testTitleText}></njwds-button>
            `);
            const title = await button.find('svg > title');
            expect(title.textContent).toBe(testTitleText);
        });

        it('renders a icon-only button a title tag having the icon name as the content when an icon-title is not included', async () => {
            const button = await renderAndGetButtonElement(`
                    <njwds-button icon=${testIcon} icon-position=${iconPosition['icon-only']}></njwds-button>
            `);
            const title = await button.find('svg > title');
            expect(title.textContent).toBe(testIcon);
        });
    });
});
