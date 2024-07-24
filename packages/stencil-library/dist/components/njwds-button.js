import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const Button = /*@__PURE__*/ proxyCustomElement(class Button extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.variant = "default";
    }
    render() {
        const variantClass = `usa-button--${this.variant}`;
        return (h("button", { key: '394e3db0d2e1f18404a62551b8054e527b12bb52', class: `usa-button ${variantClass}` }, h("slot", { key: '0376431a6c31c620515b81059fa45520e0e8f04c' })));
    }
}, [4, "njwds-button", {
        "variant": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["njwds-button"];
    components.forEach(tagName => { switch (tagName) {
        case "njwds-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
    } });
}

const NjwdsButton = Button;
const defineCustomElement = defineCustomElement$1;

export { NjwdsButton, defineCustomElement };

//# sourceMappingURL=njwds-button.js.map