---
outline: deep
---

# List Blocks

<ApiEndpoint method="GET" path="/blocks" />

Retrieve a paginated list of blocks.

## Parameters

| Parameter         | Default | Values / Description               |
| ----------------- | ------- | ---------------------------------- |
| `filter[pageId]`  |         | number                             |
| `filter[eventId]` |         | number                             |
| `page[size]`      | `50`    | Maximum number of results per page |
| `page[number]`    | `1`     | Page number                        |
| `include`         |         | `images`                           |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const blocks = await confetti.blocks.findAll({
  filter: { pageId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/blocks?filter[pageId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Block {
  id: number
  type: string
  content: string
  order: number
  status: string
}
```

```json [Formatted (SDK)]
[
  {
    "id": "210645",
    "type": "text",
    "status": "published",
    "order": 2,
    "content": {
      "html": "<h3>This is a headline</h3><p>Here is a longer text about your event.</p>",
      "showSocial": true,
      "showRsvpButton": false
    },
    "images": null
  },
  {
    "id": "210645",
    "type": "text",
    "status": "published",
    "order": 2,
    "content": {
      "html": "<h3>This is a headline</h3><p>Here is a longer text about your event.</p>",
      "showSocial": true,
      "showRsvpButton": false
    },
    "images": null
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
      "id": "210645",
      "type": "block",
      "attributes": {
        "type": "text",
        "status": "published",
        "order": 2,
        "content": {
          "html": "<h3>This is a headline</h3><p>Here is a longer text about your event.</p>",
          "showSocial": true,
          "showRsvpButton": false
        }
      },
      "relationships": {
        "images": {
          "data": null
        }
      }
    },
    {
      "id": "210645",
      "type": "block",
      "attributes": {
        "type": "text",
        "status": "published",
        "order": 2,
        "content": {
          "html": "<h3>This is a headline</h3><p>Here is a longer text about your event.</p>",
          "showSocial": true,
          "showRsvpButton": false
        }
      },
      "relationships": {
        "images": {
          "data": null
        }
      }
    }
  ]
}
```

:::
