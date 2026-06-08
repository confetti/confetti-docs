---
outline: deep
---

# Create Image

<ApiEndpoint method="POST" path="/images" />

Create a new image.

## Attributes

| Attribute      | Type   | Description                  |
| -------------- | ------ | ---------------------------- |
| `type` *       | string |                              |
| `provider`     | string | Image provider, e.g. "s3".   |
| `public_id`    | string | Provider-specific image key. |
| `url`          | string |                              |
| `base64`       | string |                              |
| `description`  | string |                              |
| `title`        | string |                              |
| `link`         | string |                              |
| `order`        | number |                              |
| `width`        | number |                              |
| `height`       | number |                              |
| `content`      | object |                              |
| `blockId`      | number |                              |
| `blockStyleId` | number |                              |
| `themeId`      | number |                              |
| `eventId`      | number |                              |
| `workspaceId`  | number |                              |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const image = await confetti.images.create({
  type: 'ticket.attending',
  title: 'example',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/images" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "image",
    "attributes": {
      "type": "ticket.attending",
      "title": "example"
    }
  }
}'
```

:::
