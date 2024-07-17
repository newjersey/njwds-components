export declare class Alert {
    type: "default" | "info" | "warning" | "error" | "emergency";
    isSlim: boolean;
    headerText?: string;
    render(): any;
}
