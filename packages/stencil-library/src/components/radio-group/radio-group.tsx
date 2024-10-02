import { Component, h } from "@stencil/core";
import { Event, EventEmitter, HTMLStencilElement, Listen, Method, Prop, State, Watch } from "@stencil/core/internal";
import { Element } from '@stencil/core';

export interface RadioGroupValidityState {
    readonly valid: boolean
    readonly valueMissing: boolean
}

const validityStates = Object.freeze({
    VALID: {
        valid: true,
        valueMissing: false
    },
    MISSING_VALUE: {
        valid: false,
        valueMissing: true
    },
})

export interface NjwdsChangeEventDetail {
    readonly value: string
}

export interface NjwdsInvalidEventDetail {
    readonly validity: RadioGroupValidityState
}

@Component({
    tag: "njwds-radio-group",
    styles: `
        .nj-radio-group__validation--message {
            font-weight: bold;
            color: #b50909;
            margin-top: 0.5em;
        }
    `
})
export class RadioGroup {
    @Prop() name!: string;
    @Prop() required: boolean = false;
    @Prop() tile: boolean = false;
    @Prop({ reflect: true, mutable: true }) value: string;
    @Prop({ reflect: true, mutable: true }) showValidity: boolean;
    @Prop() validationMessage: string = "Please select an option.";

    @State() validity: RadioGroupValidityState = validityStates.VALID;

    @Event() njwdsChange: EventEmitter<NjwdsChangeEventDetail>;
    @Event() njwdsInvalid: EventEmitter<NjwdsInvalidEventDetail>;

    @Element() private hostElement: HTMLStencilElement

    private computeValidity(): RadioGroupValidityState {
        if (this.required && !this.value) {
            return validityStates.MISSING_VALUE
        }
        return validityStates.VALID
    }

    private changeErrorPropOnRadios(isError: boolean) {
        const njwdsRadios = this.hostElement.querySelectorAll("njwds-radio")

        njwdsRadios.forEach((radio: HTMLNjwdsRadioElement) => {
            radio.error = isError
        })
    }

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
            this.changeErrorPropOnRadios(!this.validity.valid)
        }
    }

    @Watch('showValidity')
    watchShowValidityHandler(newValidity: RadioGroupValidityState) {
        if (this.showValidity) {
            this.changeErrorPropOnRadios(!newValidity.valid)
        }
    }

    @Method()
    async getValidity(): Promise<RadioGroupValidityState> {
        const validityCopy = { ...this.validity }
        return validityCopy
    }

    private njwdsInvalidHandler(
        njwdsInvalidEventEmitter: EventEmitter<NjwdsInvalidEventDetail>,
    ) {
        njwdsInvalidEventEmitter.emit({
            validity: this.validity
        })
    }

    componentWillLoad() {
        const njwdsRadios = this.hostElement.querySelectorAll("njwds-radio")

        njwdsRadios.forEach(radio => {
            if (this.tile) {
                radio.setAttribute("tile", "")
            }
        })

        this.validity = this.computeValidity()
        if (this.showValidity && !this.validity.valid) {
            this.changeErrorPropOnRadios(true)
        }
    }

    componentDidLoad() {
        const inputs = this.hostElement.querySelectorAll("input")

        if (inputs.length > 0) {
            inputs[0].addEventListener('invalid', () => this.njwdsInvalidHandler(this.njwdsInvalid))
        }

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
                        class="nj-radio-group__validation--message"
                        aria-live="polite"
                    >
                        {this.validationMessage}
                    </p>}
            </fieldset>
        )
    }
}