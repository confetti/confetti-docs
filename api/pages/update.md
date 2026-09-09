---
outline: deep
---

# Update Page

<ApiEndpoint method="PUT" path="/pages/:id" />

Update an existing page. Only the attributes you include are changed.

## Attributes

| Attribute       | Type    | Description |
| --------------- | ------- | ----------- |
| `name`          | string  |             |
| `slug`          | string  |             |
| `status`        | string  |             |
| `order`         | number  |             |
| `settings`      | object  |             |
| `prefillBlocks` | boolean |             |
| `eventId`       | number  |             |
| `workspaceId`   | number  |             |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const page = await confetti.pages.update(26074, {
  name: 'example',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/pages/26074" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "page",
    "id": "26074",
    "attributes": {
      "name": "example"
    }
  }
}'
```

:::
