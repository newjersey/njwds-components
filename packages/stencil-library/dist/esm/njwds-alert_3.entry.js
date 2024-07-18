import { r as registerInstance, h, g as getAssetPath } from './index-151c70b8.js';

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

const Banner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const sealSrc = getAssetPath("img/nj_state_seal.png");
        return (h("div", { key: 'a50902f3af75a96d14a89645dc46c641a77ad5e9', class: "nj-banner blue-bg" }, h("div", { key: '6f2b9f7f11f4101670ed259e66cedee3354ce716', class: "nj-banner__header" }, h("div", { key: '42932a732bcc3692d3be98b20e14db5066aebeca', class: "grid-container-widescreen desktop:padding-x-7" }, h("div", { key: '09b0e41ae4063a507c640f1d02fb44bf2d04a762', class: "nj-banner__inner" }, h("div", { key: '3b492c6a92873231462f51cda702df4e63971369', class: "grid-col-auto" }, h("img", { key: 'db46f71b03445473f232117644a1c483fde67ca7', class: "nj-banner__header-seal", src: sealSrc, alt: "NJ flag" })), h("div", { key: 'a67e4b992e2287207dd3b168ac074f3097491629', class: "grid-col-fill" }, h("a", { key: 'f1e081bc401a81f806efbb8a17195742a5475db6', href: "https://nj.gov" }, "Official Site of the State of New Jersey")), h("div", { key: '8053e97694c7ac770f1daf8e6c5d7284ba299c7e', class: "grid-col-auto" }, h("div", { key: '40725cd6dac6738e406bd99c84a53a2121c767bb', class: "text-white" }, h("ul", { key: 'ef6560acc4e858b827a2e80940c6e625b9437a55' }, h("li", { key: '2310a8cb065e2a3c7ebd394a220601a9bf29319a' }, "Governor Phil Murphy \u2022 Lt. Governor Tahesha Way"), h("li", { key: 'f0e97bd3dd01cc4be97d1dda22d4c10bb5981f8a' }, h("a", { key: '56e9b72e22c70797b251089a8fabee02833377b8', href: "https://nj.gov/subscribe/", target: "_blank", rel: "noreferrer" }, h("svg", { key: '82fdb1b41f968b8be33c2c7fee55fa8e10100463', class: "usa-icon bottom-neg-2px margin-right-05", "aria-hidden": "true", focusable: "false", role: "img" }, h("use", { key: '880fc41b67fe92bede8a48557f7e98b25f598e66', xlinkHref: `${spriteSrc}#mail` })), "Get Updates"))))))))));
    }
};

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = "default";
    }
    render() {
        const variantClass = `usa-button--${this.variant}`;
        return (h("button", { key: '394e3db0d2e1f18404a62551b8054e527b12bb52', class: `usa-button ${variantClass}` }, h("slot", { key: '0376431a6c31c620515b81059fa45520e0e8f04c' })));
    }
};

export { Alert as njwds_alert, Banner as njwds_banner, Button as njwds_button };

//# sourceMappingURL=njwds-alert_3.entry.js.map