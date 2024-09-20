import { Component, Prop, h, getAssetPath } from "@stencil/core";
import { ButtonVariant, Mode, IconPosition } from "../../interface";

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "primary";
    @Prop() mode: Mode = "light";
    @Prop() icon?: string;
    @Prop() iconPosition: IconPosition = "leading";
    @Prop() iconTitle?: string;

    private getButtonClassName(): string {

        const getVariantClassName = (variant: ButtonVariant): string => {
            switch (variant) {
                case 'primary':
                    return ""
                case "secondary":
                    return "usa-button--outline"
                case 'link':
                    return "usa-button--unstyled"
            }
        }

        const getDarkModeVariantClassName = (variant: ButtonVariant) => {
            switch (variant) {
                case 'primary':
                    return "primary-button-dark"
                case "secondary":
                    return "usa-button--outline usa-button--inverse"
                case 'link':
                    return "usa-button--unstyled unstyled-button-dark"
                default:
                    return 'primary-button-dark'
            }
        }

        const getDangerModeVariantClassName = (variant: ButtonVariant) => {
            switch (variant) {
                case 'primary':
                    return "usa-button--secondary"
                case "secondary":
                    return "usa-button--outline outline-danger"
                case 'link':
                    return "usa-button--unstyled unstyled-button-danger"
                default:
                    return getVariantClassName(variant)
            }
        }

        let getClassName;
        switch (this.mode) {
            case "light":
                getClassName = getVariantClassName;
                break;
            case "dark":
                getClassName = getDarkModeVariantClassName;
                break;
            case "danger":
                getClassName = getDangerModeVariantClassName;
                break;
            default:
                getClassName = getVariantClassName;
        }

        return `usa-button ${getClassName(this.variant)} ${this.icon ? 'button-icon' : ''}`
    }

    private renderIcon() {
        let iconClass = 'usa-icon usa-icon--size-3'
        switch (this.iconPosition) {
            case "leading":
                iconClass += ' margin-right-105'
                break;
            case "trailing":
                iconClass += ' margin-left-105'
                break;
        }

        if (this.icon) {
            const spriteSrc = getAssetPath("img/sprite.svg");
            const iconSrc = `${spriteSrc}#${this.icon}`
            const iconTitleId = crypto.randomUUID();

            if (this.iconPosition === 'icon-only') {
                return (
                    <svg class={iconClass} aria-labelledby={iconTitleId} role="img" focusable="false">
                        <title id={iconTitleId}>{this.iconTitle ?? this.icon}</title>
                        <use xlinkHref={iconSrc}></use>
                    </svg>
                )

            } else {
                return (
                    <svg class={iconClass} aria-hidden="true" role="img" focusable="false">
                        <use xlinkHref={iconSrc}></use>
                    </svg>
                )
            }
        }
        return null;
    }

    render() {
        const buttonClassName = this.getButtonClassName()
        return (
            <button class={buttonClassName}>
                {this.iconPosition === 'leading' || this.iconPosition === 'icon-only' ? this.renderIcon() : null}
                <slot />
                {this.iconPosition === 'trailing' ? this.renderIcon() : null}
            </button>
        )
    }
}