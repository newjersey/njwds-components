import { Component, h, Host, Prop } from "@stencil/core";


@Component({
    tag: "njwds-radio",
    styles: `
        njwds-radio {
            display: block;
        } 

        .usa-radio__input--tile.nj-radio--error+[class*=__label] {
            border-color: #b50909;
        }
    `
})
export class Radio {
    @Prop() inputId!: string;
    @Prop() value!: string;
    @Prop() tile: boolean = false
    @Prop({ mutable: true }) error: boolean = false


    render() {
        const tileClass = this.tile ? "usa-radio__input--tile" : ""
        const errorClass = this.error ? "nj-radio--error" : ""
        return (
            <Host class="usa-radio">
                <input
                    class={`usa-radio__input ${tileClass}  ${errorClass}`}
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