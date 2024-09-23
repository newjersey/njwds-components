import { Component, h } from "@stencil/core";
import { HTMLStencilElement, Prop } from "@stencil/core/internal";
import { Element } from '@stencil/core';

@Component({
    tag: "njwds-radio-group",
})
export class RadioGroup {
    @Prop() name: string;
    @Prop() required: boolean = false;
    @Prop() tile: boolean = false;
    @Element() private hostElement: HTMLStencilElement


    componentWillLoad() {
        const njwdsRadios = this.hostElement.querySelectorAll(":scope > njwds-radio")

        njwdsRadios.forEach(radio => {
            radio.setAttribute("name", this.name)
            if (this.required) {
                radio.setAttribute("required", "")
            }
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