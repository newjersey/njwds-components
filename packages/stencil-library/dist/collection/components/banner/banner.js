import { getAssetPath, h } from "@stencil/core";
export class Banner {
    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const sealSrc = getAssetPath("img/nj_state_seal.png");
        return (h("div", { key: 'f969d3131bb9bb7f0a9a366ced11a4c25a1aa46d', class: "nj-banner blue-bg" }, h("div", { key: 'b7eb9424548aa92ffb5e7a163671a54090c0c0c2', class: "nj-banner__header" }, h("div", { key: '2d65bf18a093d455e42253fcdc240516a6d9b10a', class: "grid-container-widescreen desktop:padding-x-7" }, h("div", { key: '005cda3acc2040e0bc0e4752a9d57e937a102c41', class: "nj-banner__inner" }, h("div", { key: '2853229ac06340098ee514c2b36bd172cb7054fc', class: "grid-col-auto" }, h("img", { key: '50e56f5731b69bff696a34f00cd4eb50868b3379', class: "nj-banner__header-seal", src: sealSrc, alt: "NJ flag" })), h("div", { key: 'b8b57eddde465d1530ba948ffa390772aeba67bd', class: "grid-col-fill" }, h("a", { key: '439ab052ea90d8516ea74810a2e6bc4216381d5b', href: "https://nj.gov" }, "Official Site of the State of New Jersey")), h("div", { key: 'cad35a857535f25162328770f985002df35a94ad', class: "grid-col-auto" }, h("div", { key: '85002ca08885aec9831e4079bcb7bd2f472ef020', class: "text-white" }, h("ul", { key: '1d62bcd03136eb8b0118ab9d84a9c4df3701ca4c' }, h("li", { key: '04a47eb6500ce8e2b8f90088bc3d8507ba1ea8d3' }, "Governor Phil Murphy \u2022 Lt. Governor Tahesha Way"), h("li", { key: 'fe9bbf237f17f6db349152a569f97c14288f1b9e' }, h("a", { key: 'b73bcf7891211859bb4acc948388573f0b3a04f0', href: "https://nj.gov/subscribe/", target: "_blank", rel: "noreferrer" }, h("svg", { key: 'b09a636292d14173e1a1085917b8110919fb4827', class: "usa-icon bottom-neg-2px margin-right-05", "aria-hidden": "true", focusable: "false", role: "img" }, h("use", { key: 'de1df989df2ce5d7c902f92116089ef0865d6ad0', xlinkHref: `${spriteSrc}#mail` })), "Get Updates"))))))))));
    }
    static get is() { return "njwds-banner"; }
}
//# sourceMappingURL=banner.js.map
