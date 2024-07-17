import { Component, Prop, h } from "@stencil/core";

export type ButtonVariant = "default" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline"

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "default";

    render() {
        const variantClass = `usa-button--${this.variant}`
        return (
            <button class={`usa-button ${variantClass}`}>
                <slot />
            </button>
        )
    }
}