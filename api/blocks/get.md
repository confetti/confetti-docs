---
outline: deep
---

# Get Block

<ApiEndpoint method="GET" path="/blocks/:id" />

Retrieve a single block by its ID.

## Parameters

| Parameter | Default | Values / Description |
| --------- | ------- | -------------------- |
| `include` |         | `images`             |

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const block = await confetti.blocks.find(210645)
```

```sh [cURL]
curl "https://api.confetti.events/blocks/210645" \
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
```

```json [Raw (JSON:API)]
{
  "data": {
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
}
```

:::
