# Radio Group Component

- Web component name: `njwds-radio-group`
- React component name: `NjwdsRadioGroup`
- [Base NJWDS Component Documentation](https://newjersey.github.io/njwds/components/detail/radio-buttons.html)

The `njwds-radio-group` component is meant to be used with the `njwds-radio` component.

## Properties

| Property            | Type      | Default                                        | Description                                                                                                                                                                                                       |
| ------------------- | --------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | `string`  | _none_                                         | **Required for the component to function**. The name associated with the form control (sets the `name` attribute on the child inputs).                                                                            |
| `value`             | `string`  | `""`                                           | The current value of the radio. This attribute can be left empty or set to initialize a default option.                                                                                                           |
| `required`          | `boolean` | `false`                                        | Whether an option must be selected before the parent form is submitted (sets the `required` attribute on the child inputs). Also used to compute the component's validity for `showValidity` and `getValidity()`. |
| `showValidity`      | `boolean` | `false`                                        | When `true` and the field is invalid, shows the validation message and error state on the child radio.                                                                                                            |
| `validationMessage` | `string`  | The child input's `validationMessage` property | The validation message displayed when the radio group is invalid and `showValidity` is true.                                                                                                                      |
| `tile`              | `boolean` | `false`                                        | Whether to render the tile variant on the child radios.                                                                                                                                                           |

## Slots

| Name           | Description                                        |
| -------------- | -------------------------------------------------- |
| _default slot_ | The `<njwds-radio>` elements should be placed here |
| `legend`       | The radio group's label                            |

## Events

| Name           | Description                                                                                                                                                    | Event Detail Type                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `njwdsChange`  | Emitted when the user selects a new radio option (not when the `value` property is programmatically set)                                                       | ` { value: string }`                    |
| `njwdsInvalid` | Emitted when an `invalid` event is fired from a child input element (typically this occurs when the user attempts to submit a form with invalid form controls) | `{ validity: RadioGroupValidityState }` |

## Methods

| Name          | Description                                  | Type                            |
| ------------- | -------------------------------------------- | ------------------------------- |
| `getValidity` | Gets the current validity of the radio group | `() => RadioGroupValidityState` |

## Custom Types

### `RadioGroupValidityState`

The `RadioGroupValidityState` takes a subset of properties from the [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) interface.

```typescript
{
  valid: boolean;
  valueMissing: boolean;
}
```

## Notes

- A red asterisk follows the legend when the radio group is required

## Unsupported Features

- A `disabled` property
- Custom validation logic - currently, validity is calculated solely based off the `required` attribute, and there isn't a way to customize this.
- Label descriptions on options
- Help text on the radio group
