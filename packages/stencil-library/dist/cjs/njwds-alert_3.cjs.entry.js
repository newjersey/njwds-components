'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-28474a8d.js');

const Alert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '6a80968b612707d8db92aa461fb4bfbe736fb263', class: `usa-alert ${alertTypeClass} ${slimClass}`, role: roleAttr }, index.h("div", { key: '61df0224656c2c5f3574789019d36acfbe257223', class: "usa-alert__body" }, !this.isSlim && this.hasHeaderSlot
            ? index.h("slot", { name: "header" })
            : index.h(index.Fragment, null), index.h("p", { key: '7fc7323627b4b62db182f5427c4cd658789f911e', class: "usa-alert__text" }, index.h("slot", { key: '5c8de0105f477a968bc85deefe48926b4963a67f' })))));
    }
    get hostElement() { return index.getElement(this); }
};

const Banner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const spriteSrc = index.getAssetPath("img/sprite.svg");
        const sealSrc = index.getAssetPath("img/nj_state_seal.png");
        return (index.h("div", { key: 'a50902f3af75a96d14a89645dc46c641a77ad5e9', class: "nj-banner blue-bg" }, index.h("div", { key: '6f2b9f7f11f4101670ed259e66cedee3354ce716', class: "nj-banner__header" }, index.h("div", { key: '42932a732bcc3692d3be98b20e14db5066aebeca', class: "grid-container-widescreen desktop:padding-x-7" }, index.h("div", { key: '09b0e41ae4063a507c640f1d02fb44bf2d04a762', class: "nj-banner__inner" }, index.h("div", { key: '3b492c6a92873231462f51cda702df4e63971369', class: "grid-col-auto" }, index.h("img", { key: 'db46f71b03445473f232117644a1c483fde67ca7', class: "nj-banner__header-seal", src: sealSrc, alt: "NJ flag" })), index.h("div", { key: 'a67e4b992e2287207dd3b168ac074f3097491629', class: "grid-col-fill" }, index.h("a", { key: 'f1e081bc401a81f806efbb8a17195742a5475db6', href: "https://nj.gov" }, "Official Site of the State of New Jersey")), index.h("div", { key: '8053e97694c7ac770f1daf8e6c5d7284ba299c7e', class: "grid-col-auto" }, index.h("div", { key: '40725cd6dac6738e406bd99c84a53a2121c767bb', class: "text-white" }, index.h("ul", { key: 'ef6560acc4e858b827a2e80940c6e625b9437a55' }, index.h("li", { key: '2310a8cb065e2a3c7ebd394a220601a9bf29319a' }, "Governor Phil Murphy \u2022 Lt. Governor Tahesha Way"), index.h("li", { key: 'f0e97bd3dd01cc4be97d1dda22d4c10bb5981f8a' }, index.h("a", { key: '56e9b72e22c70797b251089a8fabee02833377b8', href: "https://nj.gov/subscribe/", target: "_blank", rel: "noreferrer" }, index.h("svg", { key: '82fdb1b41f968b8be33c2c7fee55fa8e10100463', class: "usa-icon bottom-neg-2px margin-right-05", "aria-hidden": "true", focusable: "false", role: "img" }, index.h("use", { key: '880fc41b67fe92bede8a48557f7e98b25f598e66', xlinkHref: `${spriteSrc}#mail` })), "Get Updates"))))))))));
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