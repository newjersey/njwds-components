import { r as registerInstance, h } from './index-66b3c03e.js';

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

export { Button as njwds_button };

//# sourceMappingURL=njwds-button.entry.js.map