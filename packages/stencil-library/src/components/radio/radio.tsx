import { Component, Event, EventEmitter, h, Host, Listen, Prop } from "@stencil/core";
import { RadioGroupValidityState } from "../radio-group/radio-group";


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

    // @Event() njwdsInvalid: EventEmitter<RadioGroupValidityState>

    // private invalidHandler(event: Event) {
    //     if (!("validity" in event.target && typeof event.target.validity === "object")) {
    //         return
    //     }
    //     const validity = event.target.validity
    //     if (!("valid" in validity && typeof validity.valid === "boolean")) {
    //         return
    //     }
    //     if (!("valueMissing" in validity && typeof validity.valueMissing === "boolean")) {
    //         return
    //     }
    //     this.njwdsInvalid.emit({
    //         valid: validity.valid,
    //         valueMissing: validity.valueMissing
    //     })
    // }


    render() {
        const tileClass = this.tile ? "usa-radio__input--tile" : ""
        return (
            <Host class="usa-radio">
                <input
                    class={`usa-radio__input ${tileClass}`}
                    id={this.inputId}
                    type="radio"
                    value={this.value}
                // onInvalid={(e) => this.invalidHandler(e)}
                />
                <label class="usa-radio__label" htmlFor={this.inputId}>
                    <slot />
                </label>
            </Host>
        )
    }
}