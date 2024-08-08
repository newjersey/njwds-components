import { Component, Prop, h } from "@stencil/core";
import { Host, HTMLStencilElement } from "@stencil/core/internal";
import { Element } from '@stencil/core';


export type ButtonVariant = "default" | "secondary" | "outline" | "unstyled" | "unstyled-inverse"

@Component({
    tag: "njwds-button",
})
export class Button {
    @Prop() variant: ButtonVariant = "default";
    @Prop() asChild: boolean = false
    @Element() private hostElement: HTMLStencilElement;

    private getButtonClassName(): string {
        const getVariantClass = (): string => {
            switch (this.variant) {
                case 'default':
                    return ""
                case 'unstyled-inverse':
                    return "usa-button--unstyled usa-button--inverse"
                default:
                    return `usa-button--${this.variant}`
            }
        }
        const variantClass = getVariantClass()
        return `usa-button ${variantClass}`
    }

    componentWillLoad() {
        if (this.asChild) {
            const slotElements = this.hostElement.children
            if (slotElements.length !== 1) {
                throw new Error(`If the asChild property is set to true on the njwds-button component, the component must have exactly one slot element. Instead got ${slotElements.length} elements.`)
            }
            if (slotElements[0].tagName !== "BUTTON") {
                throw new Error(`If the asChild property is set to true on the njwds-button component, the slot element must be a <button>. Instead got ${slotElements[0].outerHTML}`)
            }
            const buttonElement = slotElements[0] as HTMLButtonElement
            const buttonClassName = this.getButtonClassName()
            buttonElement.className = `${buttonElement.className} ${buttonClassName}`
        }

    }


    render() {
        const buttonClassName = this.getButtonClassName()

        return this.asChild
            ? (
                <Host>
                    <slot />
                </Host>
            )
            : (
                <button class={buttonClassName}>
                    <slot />
                </button>
            )
    }
}