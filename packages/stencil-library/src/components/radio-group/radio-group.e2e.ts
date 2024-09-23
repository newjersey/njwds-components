import { E2EElement, newE2EPage } from '@stencil/core/testing';

const renderAndGetFieldset = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const fieldset = await page.find('njwds-radio-group > fieldset');
  return fieldset;
};

describe('<njwds-radio-group>', () => {
  describe('<fieldset> child', () => {
    it('renders a fieldset element as its only child', async () => {
      const page = await newE2EPage();
      await page.setContent('<njwds-radio-group></njwds-radio-group>');
      const radioGroup = await page.find('njwds-radio-group');
      const fieldsetList = await radioGroup.findAll('fieldset');
      expect(fieldsetList).toHaveLength(1);
    });

    it('renders a fieldset element with the "usa-fieldset" class', async () => {
      const fieldset = await renderAndGetFieldset('<njwds-radio-group></njwds-radio-group>');
      expect(fieldset.className).toBe('usa-fieldset');
    });
  });

  describe('<legend> child', () => {
    it('renders a single <legend> element within the fieldset element', async () => {
      const fieldset = await renderAndGetFieldset('<njwds-radio-group></njwds-radio-group>');
      const legendList = await fieldset.findAll('legend');
      expect(legendList).toHaveLength(1);
    });

    it('renders the <legend> element with the "usa-legend" class', async () => {
      const fieldset = await renderAndGetFieldset('<njwds-radio-group></njwds-radio-group>');
      const legend = await fieldset.find('legend');
      expect(legend.className).toBe('usa-legend');
    });

    it('renders the "legend" slot inside the <legend> element', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group>
          <span slot="legend">Radio Legend</span>  
      </njwds-radio-group>`);
      const legend = await fieldset.find('legend');
      expect(legend.innerHTML).toBe('<span slot="legend">Radio Legend</span>');
    });
  });

  describe('<njwds-radio> children', () => {
    it('renders default slot content inside the <fieldset> element', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group>
             <njwds-radio>Sojourner Truth</njwds-radio>
             <njwds-radio>Frederick Douglass</njwds-radio>
        </njwds-radio-group>`);

      const radioComponents = await fieldset.findAll(':scope > njwds-radio');

      expect(radioComponents).toHaveLength(2);
    });

    it('applies the "name" prop to all <njwds-radio> children', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group name="historical-figures">
            <njwds-radio>Sojourner Truth</njwds-radio>
            <njwds-radio>Frederick Douglass</njwds-radio>
       </njwds-radio-group>`);

      const njwdsRadios = await fieldset.findAll('njwds-radio');

      for (const radio of njwdsRadios) {
        const input = await radio.find('input');
        expect(input).toEqualAttribute('name', 'historical-figures');
      }
    });

    it('applies the "required" prop to all <njwds-radio> children', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group required>
              <njwds-radio>Sojourner Truth</njwds-radio>
              <njwds-radio>Frederick Douglass</njwds-radio>
         </njwds-radio-group>`);

      const njwdsRadios = await fieldset.findAll('njwds-radio');

      for (const radio of njwdsRadios) {
        const input = await radio.find('input');
        expect(input).toHaveAttribute('required');
        expect(input).not.toEqualAttribute('required', 'false');
      }
    });

    it('applies the "tile" prop to all <njwds-radio> children', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group
            name="historical-figures"
            tile
        >
            <njwds-radio>Sojourner Truth</njwds-radio>
            <njwds-radio>Frederick Douglass</njwds-radio>
       </njwds-radio-group>`);

      const njwdsRadios = await fieldset.findAll('njwds-radio');

      for (const radio of njwdsRadios) {
        expect(radio).toHaveAttribute('tile');
        expect(radio).not.toEqualAttribute('tile', 'false');
      }
    });
  });
});
