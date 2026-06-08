---
outline: deep
---

# List Pages

<ApiEndpoint method="GET" path="/pages" />

Retrieve a paginated list of pages.

## Parameters

| Parameter         | Default | Values / Description               |
| ----------------- | ------- | ---------------------------------- |
| `filter[eventId]` |         | number                             |
| `page[size]`      | `50`    | Maximum number of results per page |
| `page[number]`    | `1`     | Page number                        |
| `include`         |         | `blocks`, `blocks.images`          |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const pages = await confetti.pages.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/pages?filter[eventId]=1" \
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
[
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
  },
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
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
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
    },
    {
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
  ]
}
```

:::
