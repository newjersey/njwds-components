import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { RadioGroupValidityState } from '../../interface';

const renderAndGetFieldset = async (content: string): Promise<E2EElement> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const fieldset = await page.find('njwds-radio-group > fieldset');
  return fieldset;
};

const renderAndGetRadioGroupAndPage = async (content: string): Promise<{ radioGroup: E2EElement; page: E2EPage }> => {
  const page = await newE2EPage();
  await page.setContent(content);
  const radioGroup = await page.find('njwds-radio-group');
  return { radioGroup, page };
};

const validationMessage = 'Invalid field';

describe('<njwds-radio-group>', () => {
  it('renders default slot content inside the <fieldset> element', async () => {
    const fieldset = await renderAndGetFieldset(`<njwds-radio-group>
             <njwds-radio>Sojourner Truth</njwds-radio>
             <njwds-radio>Frederick Douglass</njwds-radio>
        </njwds-radio-group>`);

    const radioComponents = await fieldset.findAll(':scope > njwds-radio');

    expect(radioComponents).toHaveLength(2);
  });

  it('applies the "name" attribute to all <njwds-radio> children when the required prop is specified on the radio group', async () => {
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

  it('applies the "tile" attribute to all <njwds-radio> children when the tile prop is specified on the radio group', async () => {
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
    }
  });

  describe('required asterisk', () => {
    it('renders a required asterisk on a required field', async () => {
      const fieldset = await renderAndGetFieldset(`
        <njwds-radio-group required>
          <span slot="legend">Radio Legend</span>  
        </njwds-radio-group>
      `);
      const asterisk = await fieldset.find('legend > .nj-form__required--asterisk');
      expect(asterisk).toEqualText('*');
      expect(asterisk).toEqualAttribute('aria-hidden', true);
    });

    it('does not render a required asterisk on an optional field', async () => {
      const fieldset = await renderAndGetFieldset(`
        <njwds-radio-group>
          <span slot="legend">Radio Legend</span>  
        </njwds-radio-group>
      `);
      const asterisk = await fieldset.find('legend > .nj-form__required--asterisk');
      expect(asterisk).toBe(null);
    });
  });

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
      const fieldset = await renderAndGetFieldset(`
        <njwds-radio-group>
          <span slot="legend">Radio Legend</span>  
        </njwds-radio-group>
      `);
      const legend = await fieldset.find('legend');
      expect(legend.innerHTML).toBe('<span slot="legend">Radio Legend</span>');
    });
  });

  it('applies the "required" prop to all <njwds-radio> children when the required prop is specified on the radio group', async () => {
    const fieldset = await renderAndGetFieldset(`
      <njwds-radio-group required>
            <njwds-radio>Sojourner Truth</njwds-radio>
            <njwds-radio>Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

    const njwdsRadios = await fieldset.findAll('njwds-radio');

    for (const radio of njwdsRadios) {
      const input = await radio.find('input');
      expect(input).toHaveAttribute('required');
    }
  });

  describe('value prop', () => {
    it('no njwds-radios are checked by default when the value prop is not provided', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group
          name="historical-figures"
          >
              <njwds-radio value="truth">Sojourner Truth</njwds-radio>
              <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
        </njwds-radio-group>`);
      const inputs = await fieldset.findAll('input');
      for (const input of inputs) {
        expect(await input.getProperty('checked')).toBe(false);
      }
    });

    it('checks the njwds-radio element specified by the value prop on component load', async () => {
      const fieldset = await renderAndGetFieldset(`<njwds-radio-group
          name="historical-figures"
          value="douglass"
          >
              <njwds-radio value="truth">Sojourner Truth</njwds-radio>
              <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
        </njwds-radio-group>`);
      const douglassInput = await fieldset.find('input[value="douglass"]');
      expect(await douglassInput.getProperty('checked')).toBe(true);
    });

    it('updates the value prop correctly when a njwds-radio element is selected', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
        name="historical-figures"
        value="douglass"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);
      expect(await radioGroup.getProperty('value')).toBe('douglass');
      const truthInput = await radioGroup.find('input[value="truth"]');
      await truthInput.click();
      expect(await radioGroup.getProperty('value')).toBe('truth');
    });

    it('when the value prop is programmatically set, selects the correct njwds-radio element', async () => {
      const { radioGroup, page } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);
      const douglassInput = await radioGroup.find('input[value="douglass"]');
      expect(await douglassInput.getProperty('checked')).toBe(false);

      radioGroup.setAttribute('value', 'douglass');
      await page.waitForChanges();
      expect(await douglassInput.getProperty('checked')).toBe(true);
    });
  });

  describe('getValidity() method', () => {
    it('returns a value missing validity state when required input is missing', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const validity: RadioGroupValidityState = await radioGroup.callMethod('getValidity');
      expect(validity.valid).toBe(false);
      expect(validity.valueMissing).toBe(true);
    });

    it('returns a valid validity state when input is not required', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const validity: RadioGroupValidityState = await radioGroup.callMethod('getValidity');
      expect(validity.valid).toBe(true);
      expect(validity.valueMissing).toBe(false);
    });
  });

  it('sets the validationMessage prop to a non-empty string by default', async () => {
    const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
        name="historical-figures"
      >
          <njwds-radio value="truth">Sojourner Truth</njwds-radio>
          <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
    </njwds-radio-group>`);
    const validationMessage = await radioGroup.getProperty('validationMessage');
    expect(typeof validationMessage).toBe('string');
    expect(validationMessage.length).toBeGreaterThan(0);
  });

  describe('showValidity prop', () => {
    it('does not display the validation message when the showValidity prop is absent', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).not.toContain(validationMessage);
    });

    it('does not display the validation message when the showValidity prop is false', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
          show-validity="false"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).not.toContain(validationMessage);
    });

    it('does not display the validation message when the showValidity prop is added to a valid radio group on load', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          show-validity
          value="douglass"
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).not.toContain(validationMessage);
    });

    it('displays the validation message when the showValidity prop is added to an invalid radio group on component load', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          show-validity
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).toContain(validationMessage);
    });

    it('displays the validation message when the showValidity prop is added to an invalid radio group after component load', async () => {
      const { radioGroup, page } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      radioGroup.setAttribute('show-validity', true);
      await page.waitForChanges();
      const updatedRadioGroup = await page.find('njwds-radio-group');
      expect(updatedRadioGroup.textContent).toContain(validationMessage);
    });

    it('when showValidity prop is added on a required field, the validation message disappears when the value prop is set', async () => {
      const { radioGroup, page } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
          show-validity
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).toContain(validationMessage);
      radioGroup.setAttribute('value', 'douglass');
      await page.waitForChanges();
      const updatedRadioGroup = await page.find('njwds-radio-group');
      expect(updatedRadioGroup.textContent).not.toContain(validationMessage);
    });

    it('when showValidity prop is added on a required field, the validation message disappears when user clicks an option', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
          show-validity
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).toContain(validationMessage);
      const douglassInput = await radioGroup.find('input[value="douglass"]');
      await douglassInput.click();
      expect(douglassInput.textContent).not.toContain(validationMessage);
    });

    it('when showValidity prop is added on a required field, the validation message disappears when user clicks an option', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          required
          show-validity
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      expect(radioGroup.textContent).toContain(validationMessage);
      const douglassInput = await radioGroup.find('input[value="douglass"]');
      await douglassInput.click();
      expect(douglassInput.textContent).not.toContain(validationMessage);
    });

    it('when showValidity prop is added on a required field, the error class is removed from the radios when user clicks an option', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          required
          show-validity
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const inputs = await radioGroup.findAll('input');
      for (const input of inputs) {
        expect(input.classList.contains('nj-radio--error')).toBe(true);
      }
      const douglassInput = await radioGroup.find('input[value="douglass"]');
      await douglassInput.click();
      const updatedInputs = await radioGroup.findAll('input');
      for (const updatedInput of updatedInputs) {
        expect(updatedInput.classList.contains('nj-radio--error')).toBe(false);
      }
    });

    it('when showValidity prop is added on an invalid field on component load, input children render with the nj-radio--error class', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          show-validity
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const inputs = await radioGroup.findAll('input');
      for (const input of inputs) {
        expect(input.classList.contains('nj-radio--error')).toBe(true);
      }
    });

    it('when showValidity prop is added on an invalid field after component load, <njwds-radio> children render with the nj-radio--error class', async () => {
      const { radioGroup, page } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      radioGroup.setAttribute('show-validity', true);
      await page.waitForChanges();
      const inputs = await radioGroup.findAll('input');
      for (const input of inputs) {
        expect(input.classList.contains('nj-radio--error')).toBe(true);
      }
    });

    it('when showValidity prop is added on an valid field, <njwds-radio> children will not render with the nj-radio--error class', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          show-validity
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const radios = await radioGroup.findAll('njwds-radio');
      for (const radio of radios) {
        expect(radio.classList.contains('nj-radio--error')).toBe(false);
      }
    });

    it('renders a validation message with the nj-radio-group__validation--message class', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
          name="historical-figures"
          validation-message="${validationMessage}"
          show-validity
          required
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);

      const message = await radioGroup.find('.nj-radio-group__validation--message');
      expect(message).toEqualText(validationMessage);
    });
  });

  describe('njwdsChange event', () => {
    it('emits a njwdsChange event when the user clicks an option', async () => {
      const { radioGroup } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
        name="historical-figures"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);
      const truthInput = await radioGroup.find('input[value="truth"]');
      const njwdsChangeEventSpy = await radioGroup.spyOnEvent('njwdsChange');
      await truthInput.click();
      expect(njwdsChangeEventSpy).toHaveReceivedEventTimes(1);
      expect(njwdsChangeEventSpy).toHaveReceivedEventDetail({
        value: 'truth',
      });
    });

    it('does not emit a njwdsChange event when the value attribute is programmatically changed', async () => {
      const { radioGroup, page } = await renderAndGetRadioGroupAndPage(`<njwds-radio-group
        name="historical-figures"
        value="douglass"
        >
            <njwds-radio value="truth">Sojourner Truth</njwds-radio>
            <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
      </njwds-radio-group>`);
      const njwdsChangeEventSpy = await radioGroup.spyOnEvent('njwdsChange');

      radioGroup.setAttribute('value', 'truth');
      await page.waitForChanges();
      expect(njwdsChangeEventSpy).toHaveReceivedEventTimes(0);
    });
  });

  describe('njwdsInvalid event', () => {
    it('emits an njwdsInvalid event when an invalid radio group is submitted', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <form>
          <njwds-radio-group
            name="historical-figures"
            required
          >
              <njwds-radio value="truth">Sojourner Truth</njwds-radio>
              <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
          </njwds-radio-group>
          <button>Submit</button>
        <form>
      `);
      const submitButton = await page.find('button');
      const njwdsInvalidEventSpy = await page.spyOnEvent('njwdsInvalid');
      await submitButton.click();
      expect(njwdsInvalidEventSpy).toHaveReceivedEventTimes(1);
      expect(njwdsInvalidEventSpy).toHaveReceivedEventDetail({
        validity: {
          valid: false,
          valueMissing: true,
        },
      });
    });

    it('does not emit an njwdsInvalid event when a valid radio group is submitted', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <form>
          <njwds-radio-group
            name="historical-figures"
          >
              <njwds-radio value="truth">Sojourner Truth</njwds-radio>
              <njwds-radio value="douglass">Frederick Douglass</njwds-radio>
          </njwds-radio-group>
          <button>Submit</button>
        <form>
      `);
      const submitButton = await page.find('button');
      const njwdsInvalidEventSpy = await page.spyOnEvent('njwdsInvalid');
      await submitButton.click();
      expect(njwdsInvalidEventSpy).toHaveReceivedEventTimes(0);
    });
  });
});
