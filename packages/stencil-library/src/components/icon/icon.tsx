import { Component, getAssetPath, h, Prop } from "@stencil/core";

@Component({
    tag: 'njwds-icon'
})
export class Icon {
    @Prop() icon: string
    @Prop() size: "3" | "4" | "scale" = "3"
    @Prop() decorative: boolean = false;
    @Prop() iconTitle?: string

    componentWillLoad() {
        if (!this.decorative && this.iconTitle === undefined) {
            throw Error('<njwds-icon>: missing the "iconTitle" prop. The "iconTitle" prop is required unless the "decorative" prop is set to true.')
        }
    }


    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const iconSrc = `${spriteSrc}#${this.icon}`

        const sizeToClass = {
            "scale": "",
            "3": "usa-icon--size-3",
            "4": "usa-icon--size-4"
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
                <svg class={iconClass} aria-labelledby={iconTitleId} role="img" focusable="false">
                    <title id={iconTitleId}>{this.iconTitle ?? this.icon}</title>
                    <use xlinkHref={iconSrc}></use>
                </svg>
            )
    }
}