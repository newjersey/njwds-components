import type { Components, JSX } from "../types/components";

interface NjwdsAlert extends Components.NjwdsAlert, HTMLElement {}
export const NjwdsAlert: {
    prototype: NjwdsAlert;
    new (): NjwdsAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
