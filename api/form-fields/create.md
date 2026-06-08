---
outline: deep
---

# Create Form Field

<ApiEndpoint method="POST" path="/form-fields" />

Create a new form field.

## Attributes

| Attribute     | Type   | Description                                                                                                                                        |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | string | Machine-readable field name (used as key in ticket.values). Auto-generated from the title if omitted. Immutable, cannot be changed after creation. |
| `title` *     | string | Human-readable field label.                                                                                                                        |
| `description` | string | Optional help text for the field.                                                                                                                  |
| `field` *     | enum   | `text`, `textarea`, `radio`, `checkbox`, `select`, `country`, `rating`, `section`, `company`, `title`. The input type of the field.                |
| `order`       | number | Display order within the form.                                                                                                                     |
| `settings`    | object |                                                                                                                                                    |
| `formId` *    | number | Form this field belongs to.                                                                                                                        |
| `sectionId`   | string | Parent section field ID, if nested.                                                                                                                |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const formField = await confetti.formFields.create({
  name: 'example',
  title: 'example',
  field: 'text',
  formId: 1,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/form-fields" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "formField",
    "attributes": {
      "name": "example",
      "title": "example",
      "field": "text"
    }
  }
}'
```

:::
