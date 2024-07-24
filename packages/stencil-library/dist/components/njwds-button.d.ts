import type { Components, JSX } from "../types/components";

interface NjwdsButton extends Components.NjwdsButton, HTMLElement {}
export const NjwdsButton: {
    prototype: NjwdsButton;
    new (): NjwdsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
