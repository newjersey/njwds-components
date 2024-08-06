# Alert Component

- Web component name: `njwds-alert`
- React component name: `NjwdsAlert`
- [Base NJWDS Component Documentation](https://newjersey.github.io/njwds/components/detail/alerts--default.html)

## Properties

| Property | Attribute | Type                                                         | Default     |
| -------- | --------- | ------------------------------------------------------------ | ----------- |
| `noIcon` | `no-icon` | `boolean`                                                    | `false`     |
| `slim`   | `slim`    | `boolean`                                                    | `false`     |
| `type`   | `type`    | `"default" \| "emergency" \| "error" \| "info" \| "warning"` | `"default"` |

## Slots

| Name           | Description             |
| -------------- | ----------------------- |
| _default slot_ | The alert body content. |
| `header`       | The alert heading.      |

## Notes

- If `slim = true`, the `header` slot is hidden
