import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "njwds-alert",
})
export class Alert {
    @Prop() type: "default" | "info" | "warning" | "error" | "emergency" = "default";
    @Prop() isSlim: boolean = false;
    @Prop() headerText?: string;

    render() {
        const alertTypeClass = this.type === "default" ? "" : `usa-alert--${this.type}`

        // TODO: What if h4 isn't the appropriate heading level?
        const headerElement = (this.headerText && !this.isSlim)
            ? (<h4 id="alert-heading" class="usa-alert__heading">{this.headerText}</h4>)
            : "";

        const roleAttr = (this.type === "error" || this.type === "emergency")
            ? "alert"
            : null;

        const slimClass = this.isSlim ? "usa-alert--slim" : "";

        return (
            <div class={`usa-alert ${alertTypeClass} ${slimClass}`} role={roleAttr}>
                <div class="usa-alert__body">
                    {headerElement}
                    <p class="usa-alert__text">
                        <slot />
                    </p>
                </div>
            </div>)
    }
}