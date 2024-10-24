import { Component, h } from "@stencil/core";
import { Event, EventEmitter, HTMLStencilElement, Listen, Method, Prop, State, Watch } from "@stencil/core/internal";
import { Element } from '@stencil/core';
import { RadioGroupValidityState, NjwdsChangeEventDetail, NjwdsInvalidEventDetail } from "../../interface";

const validityStates = Object.freeze({
    VALID: {
        valid: true,
    },
    INVALID: {
        valid: false,
    },
})

@Component({
    tag: "njwds-radio-group",
    styles: `
        njwds-radio-group .nj-form__required--asterisk {
            color: #d54309;
            margin-left: 0.2em;
        }
    `
})
export class RadioGroup {
    @Prop() name!: string;
    @Prop() required: boolean = false;
    @Prop() tile: boolean = false;
    @Prop({ reflect: true, mutable: true }) value: string = "";
    @Prop({ reflect: true, mutable: true }) showValidity: boolean;
    @Prop() validationMessage: string = "Please select an option.";

    @State() validity: RadioGroupValidityState = validityStates.VALID;

    @Event() njwdsChange: EventEmitter<NjwdsChangeEventDetail>;
    @Event() njwdsInvalid: EventEmitter<NjwdsInvalidEventDetail>;

    @Element() private hostElement: HTMLStencilElement


    @Listen('change')
    changeHandler(event: Event) {
        if ("value" in event.target && typeof event.target.value === "string") {
            const newValue = event.target.value
            this.value = newValue
            this.njwdsChange.emit({
                value: newValue
            })
        }
    }

    @Watch('value')
    watchValueHandler(newValue: string) {
        const inputs = this.hostElement.querySelectorAll("input")
        inputs.forEach(input => {
            const radioValue = input.getAttribute("value")
            if (radioValue === newValue && !input.checked) {
                input.checked = true
            }
        })
        this.validity = this.computeValidity()
        if (this.showValidity) {
            this.changeErrorPropOnChildRadios(!this.validity.valid)
        }
    }

    @Watch('showValidity')
    watchShowValidityHandler(newValidity: RadioGroupValidityState) {
        if (this.showValidity) {
            this.changeErrorPropOnChildRadios(!newValidity.valid)
        }
    }

    @Method()
    async getValidity(): Promise<RadioGroupValidityState> {
        const validityCopy = { ...this.validity }
        return validityCopy
    }

    private computeValidity(): RadioGroupValidityState {
        if (this.required && !this.value) {
            return validityStates.INVALID
        }
        return validityStates.VALID
    }

    private changeErrorPropOnChildRadios(isError: boolean) {
        const njwdsRadios = this.hostElement.querySelectorAll("njwds-radio")

        njwdsRadios.forEach((radio: HTMLNjwdsRadioElement) => {
            radio.error = isError
        })
    }


    private njwdsInvalidHandler(
        njwdsInvalidEventEmitter: EventEmitter<NjwdsInvalidEventDetail>,
    ) {
        njwdsInvalidEventEmitter.emit({
            validity: this.validity
        })
    }

    private applyTileAttributeToChildRadios() {
        const njwdsRadios = this.hostElement.querySelectorAll("njwds-radio")

        njwdsRadios.forEach(radio => {
            if (this.tile) {
                radio.setAttribute("tile", "")
            }
        })
    }

    private updateValidityAndRadioErrorStates() {
        this.validity = this.computeValidity()
        if (this.showValidity && !this.validity.valid) {
            this.changeErrorPropOnChildRadios(true)
        }
    }

    private addInvalidEventListenerToFirstRadioChild(inputs: NodeListOf<HTMLInputElement>) {
        if (inputs.length > 0) {
            inputs[0].addEventListener('invalid', () => this.njwdsInvalidHandler(this.njwdsInvalid))
        }
    }

    private applyAttributesToChildInputs(inputs: NodeListOf<HTMLInputElement>) {
        inputs.forEach(input => {
            input.setAttribute("name", this.name)

            if (this.required) {
                input.setAttribute("required", "")
            }

            const radioValue = input.getAttribute("value")
            if (radioValue === this.value) {
                input.setAttribute("checked", "")
            }
        })
    }

    componentWillLoad() {
        this.applyTileAttributeToChildRadios()
        this.updateValidityAndRadioErrorStates()
    }

    componentDidLoad() {
        const inputs = this.hostElement.querySelectorAll("input")

        this.addInvalidEventListenerToFirstRadioChild(inputs)
        this.applyAttributesToChildInputs(inputs)
    }

    render() {
        return (
            <fieldset class="usa-fieldset">
                <legend class="usa-legend">
                    <slot name="legend" />
                    {this.required &&
                        <span
                            aria-hidden="true"
                            class="nj-form__required--asterisk"
                        >
                            *
                        </span>
                    }
                </legend>
                <slot />
                {this.showValidity && !this.validity.valid &&
                    <p
                        class="usa-error-message margin-top-05"
                        aria-live="polite"
                    >
                        {this.validationMessage}
                    </p>}
            </fieldset>
        )
    }
}