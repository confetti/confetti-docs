---
outline: deep
---

# Create Page

<ApiEndpoint method="POST" path="/pages" />

Create a new page.

## Attributes

| Attribute       | Type    | Description |
| --------------- | ------- | ----------- |
| `name` *        | string  |             |
| `slug`          | string  |             |
| `status`        | string  |             |
| `order`         | number  |             |
| `settings`      | object  |             |
| `prefillBlocks` | boolean |             |
| `eventId`       | number  |             |
| `workspaceId`   | number  |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const page = await confetti.pages.create({
  name: 'example',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/pages" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "page",
    "attributes": {
      "name": "example"
    }
  }
}'
```

:::
