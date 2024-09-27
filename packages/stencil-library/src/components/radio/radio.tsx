import { Component, h, Host, Prop } from "@stencil/core";

@Component({
    tag: "njwds-radio",
    styles: `
        njwds-radio {
            display: block;
        }    
    `
})
export class Radio {
    @Prop() inputId!: string;
    @Prop() value!: string;
    @Prop() tile: boolean = false

    render() {
        const tileClass = this.tile ? "usa-radio__input--tile" : ""
        return (
            <Host class="usa-radio">
                <input
                    class={`usa-radio__input ${tileClass}`}
                    id={this.inputId}
                    type="radio"
                    value={this.value}
                />
                <label class="usa-radio__label" htmlFor={this.inputId}>
                    <slot />
                </label>
            </Host>
        )
    }
}