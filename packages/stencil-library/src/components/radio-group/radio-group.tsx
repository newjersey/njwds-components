import { Component, h } from "@stencil/core";
import { HTMLStencilElement, Listen, Method, Prop, Watch } from "@stencil/core/internal";
import { Element } from '@stencil/core';

export interface RadioGroupValidityState {
    readonly valid: boolean
    readonly valueMissing: boolean
}

const validityStates: { [state: string]: RadioGroupValidityState } = Object.freeze({
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

    validationMessage: string = ""

    @Element() private hostElement: HTMLStencilElement

    @Listen('change')
    changeHandler(event: Event) {
        if ("value" in event.target && typeof event.target.value === "string") {
            this.value = event.target.value
        }
    }

    @Watch('value')
    watchValueHandler(newValue: string) {
        const inputs = this.hostElement.querySelectorAll("input")
        inputs.forEach(input => {
            const radioValue = input.getAttribute("value")
            if (radioValue === newValue) {
                input.checked = true
            }
        })
    }

    @Method()
    async setCustomValidity(message: string): Promise<void> {
        this.validationMessage = message
    }

    @Method()
    async getValidity(): Promise<RadioGroupValidityState> {
        if (this.required && !this.value) {
            return validityStates.MISSING_VALUE
        }
        return validityStates.VALID
    }

    componentDidLoad() {
        const inputs = this.hostElement.querySelectorAll("input")

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
        const njwdsRadios = this.hostElement.querySelectorAll(":scope > njwds-radio")

        njwdsRadios.forEach(radio => {
            if (this.tile) {
                radio.setAttribute("tile", "")
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
            </fieldset>
        )
    }
}