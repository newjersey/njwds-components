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

    it('when the "tile" prop is included, the <input> element contains the "usa-radio__input--tile" as well', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio tile></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toHaveClass('usa-radio__input--tile');
    });

    it('when the "error" prop is included, the <input> element contains the "nj-radio--error" class as well', async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio error></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toHaveClass('nj-radio--error');
    });

    it("whose 'inputId' prop sets the <input> element's id", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio input-id="radio-id"></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input.id).toBe('radio-id');
    });

    it("whose 'value' prop sets the <input> element's value attribute", async () => {
      const radio = await renderAndGetRadioComponent('<njwds-radio value="radio-value"></njwds-radio>');
      const input = await radio.find(':scope > input');
      expect(input).toEqualAttribute('value', 'radio-value');
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
