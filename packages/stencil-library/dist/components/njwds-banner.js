import { p as proxyCustomElement, H, g as getAssetPath, h } from './p-85d73f65.js';

const Banner = /*@__PURE__*/ proxyCustomElement(class Banner extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const sealSrc = getAssetPath("img/nj_state_seal.png");
        return (h("div", { key: 'a50902f3af75a96d14a89645dc46c641a77ad5e9', class: "nj-banner blue-bg" }, h("div", { key: '6f2b9f7f11f4101670ed259e66cedee3354ce716', class: "nj-banner__header" }, h("div", { key: '42932a732bcc3692d3be98b20e14db5066aebeca', class: "grid-container-widescreen desktop:padding-x-7" }, h("div", { key: '09b0e41ae4063a507c640f1d02fb44bf2d04a762', class: "nj-banner__inner" }, h("div", { key: '3b492c6a92873231462f51cda702df4e63971369', class: "grid-col-auto" }, h("img", { key: 'db46f71b03445473f232117644a1c483fde67ca7', class: "nj-banner__header-seal", src: sealSrc, alt: "NJ flag" })), h("div", { key: 'a67e4b992e2287207dd3b168ac074f3097491629', class: "grid-col-fill" }, h("a", { key: 'f1e081bc401a81f806efbb8a17195742a5475db6', href: "https://nj.gov" }, "Official Site of the State of New Jersey")), h("div", { key: '8053e97694c7ac770f1daf8e6c5d7284ba299c7e', class: "grid-col-auto" }, h("div", { key: '40725cd6dac6738e406bd99c84a53a2121c767bb', class: "text-white" }, h("ul", { key: 'ef6560acc4e858b827a2e80940c6e625b9437a55' }, h("li", { key: '2310a8cb065e2a3c7ebd394a220601a9bf29319a' }, "Governor Phil Murphy \u2022 Lt. Governor Tahesha Way"), h("li", { key: 'f0e97bd3dd01cc4be97d1dda22d4c10bb5981f8a' }, h("a", { key: '56e9b72e22c70797b251089a8fabee02833377b8', href: "https://nj.gov/subscribe/", target: "_blank", rel: "noreferrer" }, h("svg", { key: '82fdb1b41f968b8be33c2c7fee55fa8e10100463', class: "usa-icon bottom-neg-2px margin-right-05", "aria-hidden": "true", focusable: "false", role: "img" }, h("use", { key: '880fc41b67fe92bede8a48557f7e98b25f598e66', xlinkHref: `${spriteSrc}#mail` })), "Get Updates"))))))))));
    }
}, [0, "njwds-banner"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["njwds-banner"];
    components.forEach(tagName => { switch (tagName) {
        case "njwds-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Banner);
            }
            break;
    } });
}
defineCustomElement$1();

const NjwdsBanner = Banner;
const defineCustomElement = defineCustomElement$1;

export { NjwdsBanner, defineCustomElement };

//# sourceMappingURL=njwds-banner.js.map