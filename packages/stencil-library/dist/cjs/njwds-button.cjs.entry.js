'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8569154d.js');

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

exports.njwds_button = Button;

//# sourceMappingURL=njwds-button.cjs.entry.js.map