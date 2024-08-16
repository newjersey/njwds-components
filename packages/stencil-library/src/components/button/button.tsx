import { Component, Prop, h } from "@stencil/core";
import { Mode } from "../../interface";


export type ButtonVariant = "primary" | "secondary" | "link" | "danger"

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "primary";
    @Prop() mode: Mode = "light"

    private getButtonClassName(): string {
        const getVariantClassName = (variant: ButtonVariant): string => {
            switch (variant) {
                case 'primary':
                    return ""
                case "secondary":
                    return "usa-button--outline"
                case 'link':
                    return "usa-button--unstyled"
                case 'danger':
                    return "usa-button--secondary"
            }
        }

        const getDarkModeVariantClassName = (variant: ButtonVariant) => {
            switch (variant) {
                case "secondary":
                    return "usa-button--outline usa-button--inverse"
                case 'link':
                    return "usa-button--unstyled usa-button--outline usa-button--inverse"
                default:
                    return getVariantClassName(variant)
            }
        }

        return this.mode === "light"
            ? `usa-button ${getVariantClassName(this.variant)}`
            : `usa-button ${getDarkModeVariantClassName(this.variant)}`


    }


    render() {
        const buttonClassName = this.getButtonClassName()

        return (
            <button class={buttonClassName}>
                <slot />
            </button>
        )
    }
}