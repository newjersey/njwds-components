import { Component, Prop, h } from "@stencil/core";
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

        const getLightModeVariantClassName = (variant: ButtonVariant): string => {
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
                    return getLightModeVariantClassName(variant)
            }
        }

        let getClassName: string;
        
        switch (this.mode) {
            case "light":
                getClassName = getLightModeVariantClassName(this.variant);
                break;
            case "dark":
                getClassName = getDarkModeVariantClassName(this.variant);
                break;
            case "danger":
                getClassName = getDangerModeVariantClassName(this.variant);
                break;
            default:
                getClassName = getLightModeVariantClassName(this.variant);
        }
        
        return `usa-button ${getClassName} ${this.icon ? 'button-icon' : ''}`
    }

    private renderIcon() {
        let iconClass = ''
        switch (this.iconPosition) {
            case "leading":
                iconClass = ' margin-right-105'
                break;
            case "trailing":
                iconClass = ' margin-left-105'
                break;
        }

        if (this.icon) {
            return (
                <njwds-icon
                    class={this.iconPosition !== 'icon-only' ? iconClass : undefined}
                    icon={this.icon}
                    size="3"
                    decorative={this.iconPosition === 'icon-only' ? false : true}
                    iconTitle={this.iconTitle}
                ></njwds-icon>
            )
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