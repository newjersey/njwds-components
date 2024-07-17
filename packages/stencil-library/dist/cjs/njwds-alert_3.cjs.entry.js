'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-19fae74b.js');

const Alert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = "default";
        this.isSlim = false;
        this.headerText = undefined;
    }
    render() {
        const alertTypeClass = this.type === "default" ? "" : `usa-alert--${this.type}`;
        // TODO: What if h4 isn't the appropriate heading level?
        const headerElement = (this.headerText && !this.isSlim)
            ? (index.h("h4", { id: "alert-heading", class: "usa-alert__heading" }, this.headerText))
            : "";
        const roleAttr = (this.type === "error" || this.type === "emergency")
            ? "alert"
            : null;
        const slimClass = this.isSlim ? "usa-alert--slim" : "";
        return (index.h("div", { key: 'ff6f0f83921304e70e9e787a0eb5bbd90e3065b6', class: `usa-alert ${alertTypeClass} ${slimClass}`, role: roleAttr }, index.h("div", { key: 'eec00e2c679c472aa2db81b9491b974743c55d24', class: "usa-alert__body" }, headerElement, index.h("p", { key: 'be8ba4168e85b2539611fa9d52d82d82f8cd85a9', class: "usa-alert__text" }, index.h("slot", { key: '0c5ddad07a454630eb80513e5a089abb323376ce' })))));
    }
};

const Banner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const spriteSrc = index.getAssetPath("img/sprite.svg");
        const sealSrc = index.getAssetPath("img/nj_state_seal.png");
        return (index.h("div", { key: 'f969d3131bb9bb7f0a9a366ced11a4c25a1aa46d', class: "nj-banner blue-bg" }, index.h("div", { key: 'b7eb9424548aa92ffb5e7a163671a54090c0c0c2', class: "nj-banner__header" }, index.h("div", { key: '2d65bf18a093d455e42253fcdc240516a6d9b10a', class: "grid-container-widescreen desktop:padding-x-7" }, index.h("div", { key: '005cda3acc2040e0bc0e4752a9d57e937a102c41', class: "nj-banner__inner" }, index.h("div", { key: '2853229ac06340098ee514c2b36bd172cb7054fc', class: "grid-col-auto" }, index.h("img", { key: '50e56f5731b69bff696a34f00cd4eb50868b3379', class: "nj-banner__header-seal", src: sealSrc, alt: "NJ flag" })), index.h("div", { key: 'b8b57eddde465d1530ba948ffa390772aeba67bd', class: "grid-col-fill" }, index.h("a", { key: '439ab052ea90d8516ea74810a2e6bc4216381d5b', href: "https://nj.gov" }, "Official Site of the State of New Jersey")), index.h("div", { key: 'cad35a857535f25162328770f985002df35a94ad', class: "grid-col-auto" }, index.h("div", { key: '85002ca08885aec9831e4079bcb7bd2f472ef020', class: "text-white" }, index.h("ul", { key: '1d62bcd03136eb8b0118ab9d84a9c4df3701ca4c' }, index.h("li", { key: '04a47eb6500ce8e2b8f90088bc3d8507ba1ea8d3' }, "Governor Phil Murphy \u2022 Lt. Governor Tahesha Way"), index.h("li", { key: 'fe9bbf237f17f6db349152a569f97c14288f1b9e' }, index.h("a", { key: 'b73bcf7891211859bb4acc948388573f0b3a04f0', href: "https://nj.gov/subscribe/", target: "_blank", rel: "noreferrer" }, index.h("svg", { key: 'b09a636292d14173e1a1085917b8110919fb4827', class: "usa-icon bottom-neg-2px margin-right-05", "aria-hidden": "true", focusable: "false", role: "img" }, index.h("use", { key: 'de1df989df2ce5d7c902f92116089ef0865d6ad0', xlinkHref: `${spriteSrc}#mail` })), "Get Updates"))))))))));
    }
};

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = "default";
    }
    render() {
        const variantClass = `usa-button--${this.variant}`;
        return (index.h("button", { key: '394e3db0d2e1f18404a62551b8054e527b12bb52', class: `usa-button ${variantClass}` }, index.h("slot", { key: '0376431a6c31c620515b81059fa45520e0e8f04c' })));
    }
};

exports.njwds_alert = Alert;
exports.njwds_banner = Banner;
exports.njwds_button = Button;

//# sourceMappingURL=njwds-alert_3.cjs.entry.js.map