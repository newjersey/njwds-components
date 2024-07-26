import { HTMLStencilElement } from "../../stencil-public-runtime";
export declare class Alert {
    type: "default" | "info" | "warning" | "error" | "emergency";
    isSlim: boolean;
    headerText?: string;
    hostElement: HTMLStencilElement;
    hasHeaderSlot: boolean;
    componentWillLoad(): void;
    render(): any;
}
