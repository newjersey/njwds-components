import { p as proxyCustomElement, H, h } from './p-85d73f65.js';

const Alert = /*@__PURE__*/ proxyCustomElement(class Alert extends H {
    constructor() {
        super();
        this.__registerHost();
        this.type = "default";
        this.isSlim = false;
        this.headerText = undefined;
    }
    render() {
        const alertTypeClass = this.type === "default" ? "" : `usa-alert--${this.type}`;
        // TODO: What if h4 isn't the appropriate heading level?
        const headerElement = (this.headerText && !this.isSlim)
            ? (h("h4", { id: "alert-heading", class: "usa-alert__heading" }, this.headerText))
            : "";
        const roleAttr = (this.type === "error" || this.type === "emergency")
            ? "alert"
            : null;
        const slimClass = this.isSlim ? "usa-alert--slim" : "";
        return (h("div", { key: 'ff6f0f83921304e70e9e787a0eb5bbd90e3065b6', class: `usa-alert ${alertTypeClass} ${slimClass}`, role: roleAttr }, h("div", { key: 'eec00e2c679c472aa2db81b9491b974743c55d24', class: "usa-alert__body" }, headerElement, h("p", { key: 'be8ba4168e85b2539611fa9d52d82d82f8cd85a9', class: "usa-alert__text" }, h("slot", { key: '0c5ddad07a454630eb80513e5a089abb323376ce' })))));
    }
}, [4, "njwds-alert", {
        "type": [1],
        "isSlim": [4, "is-slim"],
        "headerText": [1, "header-text"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["njwds-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "njwds-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Alert);
            }
            break;
    } });
}
defineCustomElement$1();

const NjwdsAlert = Alert;
const defineCustomElement = defineCustomElement$1;

export { NjwdsAlert, defineCustomElement };

//# sourceMappingURL=njwds-alert.js.map