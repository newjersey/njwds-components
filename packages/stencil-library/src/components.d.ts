/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariant } from "./components/button/button";
import { Mode } from "./interface";
export { ButtonVariant } from "./components/button/button";
export { Mode } from "./interface";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NjwdsAlert {
        "noIcon": boolean;
        "slim": boolean;
        "type": "default" | "info" | "warning" | "error" | "emergency";
    }
    interface NjwdsBanner {
    }
    interface NjwdsButton {
        "asChild": boolean;
        "mode": Mode;
        "variant": ButtonVariant;
    }
    interface NjwdsIcon {
        "decorative": boolean;
        "icon": string;
        "iconTitle"?: string;
        "size": "small" | "medium" | "large" | "scale";
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNjwdsAlertElement extends Components.NjwdsAlert, HTMLStencilElement {
    }
    var HTMLNjwdsAlertElement: {
        prototype: HTMLNjwdsAlertElement;
        new (): HTMLNjwdsAlertElement;
    };
    interface HTMLNjwdsBannerElement extends Components.NjwdsBanner, HTMLStencilElement {
    }
    var HTMLNjwdsBannerElement: {
        prototype: HTMLNjwdsBannerElement;
        new (): HTMLNjwdsBannerElement;
    };
    interface HTMLNjwdsButtonElement extends Components.NjwdsButton, HTMLStencilElement {
    }
    var HTMLNjwdsButtonElement: {
        prototype: HTMLNjwdsButtonElement;
        new (): HTMLNjwdsButtonElement;
    };
    interface HTMLNjwdsIconElement extends Components.NjwdsIcon, HTMLStencilElement {
    }
    var HTMLNjwdsIconElement: {
        prototype: HTMLNjwdsIconElement;
        new (): HTMLNjwdsIconElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "njwds-alert": HTMLNjwdsAlertElement;
        "njwds-banner": HTMLNjwdsBannerElement;
        "njwds-button": HTMLNjwdsButtonElement;
        "njwds-icon": HTMLNjwdsIconElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NjwdsAlert {
        "noIcon"?: boolean;
        "slim"?: boolean;
        "type"?: "default" | "info" | "warning" | "error" | "emergency";
    }
    interface NjwdsBanner {
    }
    interface NjwdsButton {
        "asChild"?: boolean;
        "mode"?: Mode;
        "variant"?: ButtonVariant;
    }
    interface NjwdsIcon {
        "decorative"?: boolean;
        "icon"?: string;
        "iconTitle"?: string;
        "size"?: "small" | "medium" | "large" | "scale";
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "njwds-alert": NjwdsAlert;
        "njwds-banner": NjwdsBanner;
        "njwds-button": NjwdsButton;
        "njwds-icon": NjwdsIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "njwds-alert": LocalJSX.NjwdsAlert & JSXBase.HTMLAttributes<HTMLNjwdsAlertElement>;
            "njwds-banner": LocalJSX.NjwdsBanner & JSXBase.HTMLAttributes<HTMLNjwdsBannerElement>;
            "njwds-button": LocalJSX.NjwdsButton & JSXBase.HTMLAttributes<HTMLNjwdsButtonElement>;
            "njwds-icon": LocalJSX.NjwdsIcon & JSXBase.HTMLAttributes<HTMLNjwdsIconElement>;
        }
    }
}
