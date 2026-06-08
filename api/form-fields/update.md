---
outline: deep
---

# Update Form Field

<ApiEndpoint method="PATCH" path="/form-fields/:id" />

Update an existing form field. Only the attributes you include are changed.

## Attributes

| Attribute     | Type   | Description                                                                                                                         |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | string | Human-readable field label.                                                                                                         |
| `description` | string | Optional help text for the field.                                                                                                   |
| `field`       | enum   | `text`, `textarea`, `radio`, `checkbox`, `select`, `country`, `rating`, `section`, `company`, `title`. The input type of the field. |
| `order`       | string | Display order within the form.                                                                                                      |
| `settings`    | string |                                                                                                                                     |
| `formId`      | number | Form this field belongs to.                                                                                                         |
| `sectionId`   | string | Parent section field ID, if nested.                                                                                                 |
| `status`      | enum   | `created`, `locked`                                                                                                                 |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const formField = await confetti.formFields.update(1, {
  title: 'example',
})
```

```sh [cURL]
curl -X PATCH "https://api.confetti.events/form-fields/1" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "formField",
    "id": "1",
    "attributes": {
      "title": "example"
    }
  }
}'
```

:::
