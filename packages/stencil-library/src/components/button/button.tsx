import { Component, Prop, h } from "@stencil/core";

export type ButtonVariant = "default" | "secondary" | "outline" | "unstyled" | "unstyled-inverse"

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "default";

    private getVariantClass(): string {
        switch (this.variant) {
            case 'default':
                return ""
            case 'unstyled-inverse':
                return "usa-button--unstyled usa-button--inverse"
            default:
                return `usa-button--${this.variant}`
        }

    }

    render() {
        const variantClass = this.getVariantClass()

        return (
            <button class={`usa-button ${variantClass}`}>
                <slot />
            </button>
        )
    }
}