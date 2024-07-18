import { h } from "@stencil/core";
export class Button {
    constructor() {
        this.variant = "default";
    }
    render() {
        const variantClass = `usa-button--${this.variant}`;
        return (h("button", { key: '394e3db0d2e1f18404a62551b8054e527b12bb52', class: `usa-button ${variantClass}` }, h("slot", { key: '0376431a6c31c620515b81059fa45520e0e8f04c' })));
    }
    static get is() { return "njwds-button"; }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonVariant",
                    "resolved": "\"accent-cool\" | \"accent-warm\" | \"base\" | \"default\" | \"outline\" | \"secondary\"",
                    "references": {
                        "ButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/stencil-react-export/stencil-react-export/packages/stencil-library/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "\"default\""
            }
        };
    }
}
//# sourceMappingURL=button.js.map
