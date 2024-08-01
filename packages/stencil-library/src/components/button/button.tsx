import { Component, Prop, h } from "@stencil/core";

export type ButtonVariant = "default" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "outline-inverse"

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "default";
    @Prop() isBig: boolean = false;
    @Prop() isUnstyled: boolean = false;

    private getVariantClass(): string {
        if (this.variant === "default") {
            return ""
        } else if (this.variant === "outline-inverse") {
            return "usa-button--outline usa-button--inverse"
        } else {
            return `usa-button--${this.variant}`
        }
    }

    render() {
        const variantClass = this.getVariantClass()

        const unstyledClass = this.isUnstyled ? "usa-button--unstyled" : ""
        const bigClass = this.isBig ? "usa-button--big" : ""

        return (
            <button class={`usa-button ${variantClass} ${unstyledClass} ${bigClass}`}>
                <slot />
            </button>
        )
    }
}