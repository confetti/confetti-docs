---
outline: deep
---

# Get Form

<ApiEndpoint method="GET" path="/forms/:id" />

Retrieve a single form by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const form = await confetti.forms.find(1)
```

```sh [cURL]
curl "https://api.confetti.events/forms/1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Form {
  id: number
  name: string
  type: string
  default: boolean
  settings: Record<string, unknown>
}
```

```json [Formatted (SDK)]
{
  "id": 1,
  "name": "Signup Form",
  "type": "signup",
  "default": true,
  "settings": {}
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": 1,
    "type": "form",
    "attributes": {
      "name": "Signup Form",
      "type": "signup",
      "default": true,
      "settings": {}
    }
  }
}
```

:::
