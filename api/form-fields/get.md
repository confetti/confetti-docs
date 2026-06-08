---
outline: deep
---

# Get Form Field

<ApiEndpoint method="GET" path="/form-fields/:id" />

Retrieve a single form field by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const formField = await confetti.formFields.find(1)
```

```sh [cURL]
curl "https://api.confetti.events/form-fields/1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface FormField {
  id: number
  name: string
  title: string
  description: string
  field: string
  order: number
  status: string
  sectionId: string
  settings: Record<string, unknown>
}
```

```json [Formatted (SDK)]
{
  "id": 1,
  "name": "email",
  "title": "Email",
  "description": null,
  "field": "text",
  "order": 1,
  "status": "created",
  "sectionId": null,
  "settings": {
    "required": true
  }
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": 1,
    "type": "formField",
    "attributes": {
      "name": "email",
      "title": "Email",
      "description": null,
      "field": "text",
      "order": 1,
      "status": "created",
      "sectionId": null,
      "settings": {
        "required": true
      }
    }
  }
}
```

:::
