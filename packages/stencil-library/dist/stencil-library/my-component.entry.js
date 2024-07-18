import { r as registerInstance, h } from './index-c494fe6c.js';
import { f as format } from './utils-11fcde98.js';

const myComponentCss = ".sc-my-component-h{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '69870481d23433a6c44c6411b88bff00c3a50e6f' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

//# sourceMappingURL=my-component.entry.js.map