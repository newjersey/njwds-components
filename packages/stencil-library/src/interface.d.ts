export type Mode = 'light' | 'dark' | 'danger';
export type ButtonVariant = 'primary' | 'secondary' | 'link';
export type IconPosition = 'leading' | 'trailing' | 'icon-only';

export interface NjwdsChangeEventDetail {
  readonly value: string;
}
export interface RadioGroupValidityState {
  readonly valid: boolean;
}
export interface NjwdsInvalidEventDetail {
  readonly validity: RadioGroupValidityState;
}
