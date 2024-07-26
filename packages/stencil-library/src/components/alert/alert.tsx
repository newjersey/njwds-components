import { Component, Fragment, Prop, h } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";
import { Element } from '@stencil/core';


@Component({
    tag: "njwds-alert",
})
export class Alert {
    @Prop() type: "default" | "info" | "warning" | "error" | "emergency" = "default";
    @Prop() isSlim: boolean = false;
    @Prop() noIcon: boolean = false;
    @Element() private hostElement: HTMLStencilElement;

    private hasHeaderSlot: boolean;

    componentWillLoad() {
        const headerSlot = this.hostElement.querySelector('[slot="header"]');
        this.hasHeaderSlot = !!headerSlot
        if (this.hasHeaderSlot) {
            headerSlot.classList.add("usa-alert__heading")
        }
    }

    render() {
        const alertTypeClass = this.type === "default" ? "" : `usa-alert--${this.type}`

        const roleAttr = (this.type === "error" || this.type === "emergency")
            ? "alert"
            : null;

        const slimClass = this.isSlim ? "usa-alert--slim" : "";

        const noIconClass = this.noIcon ? "usa-alert--no-icon" : ""

        return (
            <div class={`usa-alert ${alertTypeClass} ${slimClass} ${noIconClass}`} role={roleAttr}>
                <div class="usa-alert__body">
                    {!this.isSlim && this.hasHeaderSlot
                        ? <slot name="header" />
                        : <Fragment />
                    }
                    <p class="usa-alert__text">
                        <slot />
                    </p>
                </div>
            </div>)
    }
}