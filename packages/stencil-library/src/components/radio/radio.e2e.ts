import { E2EElement, newE2EPage } from '@stencil/core/testing';

const renderAndGetRadioComponent = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const radio = await page.find('njwds-radio');
  return radio;
};

describe('<njwds-radio>', () => {
  it('renders with only the "usa-radio" class', async () => {
    const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
    const radioClasses = radio.className.split(' ').sort();
    // the 'hydrated' class is added to Stencil components when they have been mounted properly
    expect(radioClasses).toEqual(['usa-radio', 'hydrated'].sort());
  });

  describe('<input> child', () => {
    it('contains a radio <input> element', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toEqualAttribute('type', 'radio');
    });

    it('contains an <input> element with only the "usa-radio__input" class', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input.className).toBe('usa-radio__input');
    });

    it('when the "tile" prop is include, the <input> element contains the "usa-radio__input--tile" as well', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio tile></njwds-radio>');
      const input = await radio.find(':scope > input');
      const inputClasses = input.className.split(' ').sort();
      expect(inputClasses).toEqual(['usa-radio__input', 'usa-radio__input--tile'].sort());
    });

    it("whose 'inputId' prop sets the <input> element's id", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio input-id="radio-id"></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input.id).toBe('radio-id');
    });

    it("whose 'name' prop sets the <input> element's name attribute", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio name="radio-name"></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toEqualAttribute('name', 'radio-name');
    });

    it("whose 'value' prop sets the <input> element's value attribute", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio value="radio-value"></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toEqualAttribute('value', 'radio-value');
    });

    it('whose <input> element does not have the required attribute by default', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).not.toHaveAttribute('required');
    });

    it("whose 'required' prop sets the <input> element's required attribute", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio required></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toHaveAttribute('required');
      expect(input).not.toEqualAttribute('required', 'false');
    });

    it("whose 'checked' prop sets the <input> element's checked property", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio checked></njwds-radio>');
      const input = await radio.find(':scope > input');
      const checkedProperty = await input.getProperty('checked');
      expect(checkedProperty).toBe(true);
    });

    it("whose <input> element's checked property is false by default", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
      const input = await radio.find(':scope > input');
      const checkedProperty = await input.getProperty('checked');
      expect(checkedProperty).toBe(false);
    });
  });

  describe('<label> child', () => {
    it('contains a <label> element with the "usa-radio__label" class', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio></njwds-radio>');
      const label = await radio.find(':scope > label');
      expect(label.className).toBe('usa-radio__label');
    });

    it('contains a <label> element associated with the <input> element', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio input-id="id-prop"></njwds-radio>');
      const label = await radio.find(':scope > label');
      const input = await radio.find(':scope > input');
      expect(label).toEqualAttribute('for', input.id);
    });

    it('renders the default slot inside the <label> element', async () => {
      const radio = await renderAndGetRadioComponent(`<njwds-radio value="radio-value">
            Radio Label
        </njwds-radio>`);
      const label = await radio.find(':scope > label');
      expect(label).toEqualText('Radio Label');
    });
  });
});
