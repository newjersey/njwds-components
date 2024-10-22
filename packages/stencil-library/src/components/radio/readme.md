# Radio Component

- Web component name: `njwds-radio`
- React component name: `NjwdsRadio`
- [Base NJWDS Component Documentation](https://newjersey.github.io/njwds/components/detail/radio-buttons.html)

The `njwds-radio` component is meant to be used with the `njwds-radio-group` component.

## Properties

| Property  | Attribute  | Type      | Default | Description                                                                                                            |
| --------- | ---------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `inputId` | `input-id` | `string`  | _none_  | **Required**. Sets internal `input` element's ID                                                                       |
| `value`   | `value`    | `string`  | _none_  | **Required**. The value of the radio. Sets the internal input's `value` attribute                                      |
| `tile`    | `tile`     | `boolean` | `false` | Whether to render the tile variant.                                                                                    |
| `error`   | `error`    | `boolean` | `false` | Used by the parent radio group to display an error state on each radio option. Generally shouldn't be set by the user. |

## Slots

| Name           | Description       |
| -------------- | ----------------- |
| _default slot_ | The radio's label |

## Unsupported Features

- A `disabled` property
