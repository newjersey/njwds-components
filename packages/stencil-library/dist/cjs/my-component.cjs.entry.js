'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8569154d.js');
const utils = require('./utils-bcad3386.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return utils.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '69870481d23433a6c44c6411b88bff00c3a50e6f' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

//# sourceMappingURL=my-component.cjs.entry.js.map