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

@Component({
    tag: "njwds-radio-group",
})
export class RadioGroup {
    @Prop() name!: string;
    @Prop() required: boolean = false;
    @Prop() tile: boolean = false;
    @Prop({ reflect: true, mutable: true }) value: string;
    @Prop({ reflect: true, mutable: true }) showValidity: boolean;
    @Prop() validationMessage: string = "Please select an option."

    @State() validity: RadioGroupValidityState = validityStates.VALID;

    @Event() njwdsChange!: EventEmitter<string>;

    @Element() private hostElement: HTMLStencilElement

    private computeValidity(): RadioGroupValidityState {
        if (this.required && !this.value) {
            return validityStates.MISSING_VALUE
        }
        return validityStates.VALID
    }

    @Listen('change')
    changeHandler(event: Event) {
        if ("value" in event.target && typeof event.target.value === "string") {
            const newValue = event.target.value
            this.value = newValue
            this.njwdsChange.emit(newValue)
        }
    }

    @Watch('value')
    async watchValueHandler(newValue: string) {
        const inputs = this.hostElement.querySelectorAll("input")
        inputs.forEach(input => {
            const radioValue = input.getAttribute("value")
            if (radioValue === newValue) {
                input.checked = true
            }
        })
        this.validity = this.computeValidity()
    }

    @Method()
    async getValidity(): Promise<RadioGroupValidityState> {
        const validityCopy = { ...this.validity }
        return validityCopy
    }

    componentWillLoad() {
        const njwdsRadios = this.hostElement.querySelectorAll(":scope > njwds-radio")

        njwdsRadios.forEach(radio => {
            if (this.tile) {
                radio.setAttribute("tile", "")
            }
        })

        this.validity = this.computeValidity()
    }

    componentDidLoad() {
        const inputs = this.hostElement.querySelectorAll("input")

        if (inputs.length > 0 && this.validationMessage === undefined) {
            this.validationMessage = inputs[0].validationMessage
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
                </legend>
                <slot />
                {this.showValidity && !this.validity.valid &&
                    <span
                        class="nj-radio-group__validation--message" aria-live="polite"
                    >
                        {this.validationMessage}
                    </span>}
            </fieldset>
        )
    }
}