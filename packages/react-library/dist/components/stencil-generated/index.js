import { createReactComponent } from "./react-component-lib";
import { defineCustomElement as defineMyComponent } from "../../../../stencil-library/dist/components/my-component.js";
import { defineCustomElement as defineNjwdsAlert } from "../../../../stencil-library/dist/components/njwds-alert.js";
import { defineCustomElement as defineNjwdsBanner } from "../../../../stencil-library/dist/components/njwds-banner.js";
import { defineCustomElement as defineNjwdsButton } from "../../../../stencil-library/dist/components/njwds-button.js";
export const MyComponent = createReactComponent("my-component", undefined, undefined, defineMyComponent);
export const NjwdsAlert = createReactComponent("njwds-alert", undefined, undefined, defineNjwdsAlert);
export const NjwdsBanner = createReactComponent("njwds-banner", undefined, undefined, defineNjwdsBanner);
export const NjwdsButton = createReactComponent("njwds-button", undefined, undefined, defineNjwdsButton);
//# sourceMappingURL=index.js.map