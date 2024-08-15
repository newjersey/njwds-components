import { Component, getAssetPath, h, Prop } from "@stencil/core";

@Component({
    tag: 'njwds-icon'
})
export class Icon {
    @Prop() icon: string
    @Prop() size: "small" | "medium" | "large" | "scale" = "medium"
    @Prop() decorative: boolean = false;
    @Prop() iconTitle?: string

    componentWillLoad() {
        if (!this.decorative && this.iconTitle === undefined) {
            throw Error('<njwds-icon>: missing the "iconTitle" prop. The "iconTitle" prop is required unless the "decorative" prop is set to true.')
        }
        if (this.size === "small") {
            throw Error("<njwds-icon>: the small size is currently unsupported. Currently supported size values: 'medium', 'large', 'scale'")
        }
    }


    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const iconSrc = `${spriteSrc}#${this.icon}`

        const sizeToClass = {
            "scale": "",
            "small": "", // 20px icon is not defined by uswds utility classes
            "medium": "usa-icon--size-3",
            "large": "usa-icon--size-4"
        }

        const iconClass = `usa-icon ${sizeToClass[this.size]}`
        const iconTitleId = crypto.randomUUID();

        return this.decorative
            ? (
                <svg class={iconClass} aria-hidden="true" focusable="false" role="img">
                    <use xlinkHref={iconSrc}></use>
                </svg>
            )
            : (
                <svg class={iconClass} aria-labelledby={iconTitleId} role="img">
                    <title id={iconTitleId}>{this.iconTitle}</title>
                    <use xlinkHref={iconSrc}></use>
                </svg>
            )
    }
}