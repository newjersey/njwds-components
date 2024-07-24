import type { Components, JSX } from "../types/components";

interface NjwdsBanner extends Components.NjwdsBanner, HTMLElement {}
export const NjwdsBanner: {
    prototype: NjwdsBanner;
    new (): NjwdsBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
