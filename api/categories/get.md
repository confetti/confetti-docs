---
outline: deep
---

# Get Category

<ApiEndpoint method="GET" path="/categories/:id" />

Retrieve a single category by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const category = await confetti.categories.find(1)
```

```sh [cURL]
curl "https://api.confetti.events/categories/1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Category {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  organisationId: number
}
```

```json [Formatted (SDK)]
{
  "id": 1,
  "name": "My category",
  "createdAt": "2023-02-01T10:27:57.026Z",
  "updatedAt": "2023-06-19T14:45:12.605Z",
  "organisationId": 1
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": 1,
    "type": "category",
    "attributes": {
      "name": "My category",
      "createdAt": "2023-02-01T10:27:57.026Z",
      "updatedAt": "2023-06-19T14:45:12.605Z",
      "organisationId": 1
    }
  }
}
```

:::
