---
outline: deep
---

# Get Page

<ApiEndpoint method="GET" path="/pages/:id" />

Retrieve a single page by its ID.

## Parameters

| Parameter | Default | Values / Description      |
| --------- | ------- | ------------------------- |
| `include` |         | `blocks`, `blocks.images` |

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const page = await confetti.pages.find(26074)
```

```sh [cURL]
curl "https://api.confetti.events/pages/26074" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Page {
  id: number
  name: string
  slug: string
  order: number
  settings: Record<string, unknown>
}
```

```json [Formatted (SDK)]
{
  "id": "26074",
  "name": "Start",
  "slug": null,
  "order": 1,
  "settings": {
    "index": true,
    "access": "all",
    "menuDisplay": "show"
  },
  "blocks": [
    {
      "id": "210644"
    },
    {
      "id": "210645"
    },
    {
      "id": "210646"
    },
    {
      "id": "210647"
    },
    {
      "id": "210651"
    }
  ]
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "26074",
    "type": "page",
    "attributes": {
      "name": "Start",
      "slug": null,
      "order": 1,
      "settings": {
        "index": true,
        "access": "all",
        "menuDisplay": "show"
      }
    },
    "relationships": {
      "blocks": {
        "data": [
          {
            "id": "210644",
            "type": "block"
          },
          {
            "id": "210645",
            "type": "block"
          },
          {
            "id": "210646",
            "type": "block"
          },
          {
            "id": "210647",
            "type": "block"
          },
          {
            "id": "210651",
            "type": "block"
          }
        ]
      }
    }
  }
}
```

:::
