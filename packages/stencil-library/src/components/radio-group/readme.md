# Radio Component

- Web component name: `njwds-radio-group`
- React component name: `NjwdsRadioGroup`
- [Base NJWDS Component Documentation](https://newjersey.github.io/njwds/components/detail/radio-buttons.html)

The `njwds-radio-group` component is meant to be used with the `njwds-radio` component.

## Properties

| Property            | Type      | Default | Description                                                                                                                |
| ------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`              | `string`  | _none_  | the name associated with the form control (sets the `name` attribute on the child inputs)                                  |
| `value`             | `string`  | _none_  | the current value of the radio group                                                                                       |
| `required`          | `boolean` | `false` | whether an option must be selected before the parent form is submitted (sets the `required` attribute on the child inputs) |
| `showValidity`      | `boolean` | `false` | when `true` and the field is invalid, shows the validation message and error state on the child radios                     |
| `validationMessage` | `string`  | _none_  | the validation message displayed when the radio group is invalid and `showValidity` is true                                |
| `tile`              | `boolean` | `false` | whether to render the tile variant for all child radios                                                                    |

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

```json
{
    valid: boolean
    valueMissing: boolean
}
```

## Notes

- A red asterisk follows the legend when the radio group is required

## Unsupported Features

- A `disabled` property
- Custom validation logic - currently, validity is calculated solely based off the `required` attribute, and there isn't a way to customize this.
- Label descriptions on options
- Help text on the radio group
