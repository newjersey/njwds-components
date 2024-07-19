import { r as registerInstance, h } from './index-66b3c03e.js';

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};

export { Alert as njwds_alert };

//# sourceMappingURL=njwds-alert.entry.js.map