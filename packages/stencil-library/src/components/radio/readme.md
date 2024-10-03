# Radio Component

- Web component name: `njwds-radio`
- React component name: `NjwdsRadio`
- [Base NJWDS Component Documentation](https://newjersey.github.io/njwds/components/detail/radio-buttons.html)

The `njwds-radio` component is meant to be used with the `njwds-radio-group` component.

## Properties

| Property  | Attribute  | Type      | Default | Description                          |
| --------- | ---------- | --------- | ------- | ------------------------------------ |
| `inputId` | `input-id` | `string`  | _none_  | the internal input's HTML id         |
| `value`   | `value`    | `string`  | _none_  | the internal input's value attribute |
| `tile`    | `tile`     | `boolean` | `false` | whether to render the tile variant   |
| `error`   | `error`    | `boolean` | `false` | whether to render the error state    |

## Slots

| Name           | Description       |
| -------------- | ----------------- |
| _default slot_ | The radio's label |

## Unsupported Features

- A `disabled` property
