import { Fragment, h } from "@stencil/core";
export class Alert {
    constructor() {
        this.type = "default";
        this.isSlim = false;
        this.headerText = undefined;
    }
    componentWillLoad() {
        const headerSlot = this.hostElement.querySelector('[slot="header"]');
        this.hasHeaderSlot = !!headerSlot;
        if (this.hasHeaderSlot) {
            headerSlot.classList.add("usa-alert__heading");
        }
    }
    render() {
        const alertTypeClass = this.type === "default" ? "" : `usa-alert--${this.type}`;
        const roleAttr = (this.type === "error" || this.type === "emergency")
            ? "alert"
            : null;
        const slimClass = this.isSlim ? "usa-alert--slim" : "";
        return (h("div", { key: '6a80968b612707d8db92aa461fb4bfbe736fb263', class: `usa-alert ${alertTypeClass} ${slimClass}`, role: roleAttr }, h("div", { key: '61df0224656c2c5f3574789019d36acfbe257223', class: "usa-alert__body" }, !this.isSlim && this.hasHeaderSlot
            ? h("slot", { name: "header" })
            : h(Fragment, null), h("p", { key: '7fc7323627b4b62db182f5427c4cd658789f911e', class: "usa-alert__text" }, h("slot", { key: '5c8de0105f477a968bc85deefe48926b4963a67f' })))));
    }
    static get is() { return "njwds-alert"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"default\" | \"info\" | \"warning\" | \"error\" | \"emergency\"",
                    "resolved": "\"default\" | \"emergency\" | \"error\" | \"info\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "\"default\""
            },
            "isSlim": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-slim",
                "reflect": false,
                "defaultValue": "false"
            },
            "headerText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "header-text",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=alert.js.map
