---
outline: deep
---

# Update Image

<ApiEndpoint method="PATCH" path="/images/:id" />

Update an existing image. Only the attributes you include are changed.

## Attributes

| Attribute      | Type   | Description                  |
| -------------- | ------ | ---------------------------- |
| `type`         | string |                              |
| `provider`     | string | Image provider, e.g. "s3".   |
| `public_id`    | string | Provider-specific image key. |
| `url`          | string |                              |
| `base64`       | string |                              |
| `description`  | string |                              |
| `title`        | string |                              |
| `link`         | string |                              |
| `order`        | string |                              |
| `width`        | string |                              |
| `height`       | string |                              |
| `content`      | string |                              |
| `blockId`      | string |                              |
| `blockStyleId` | string |                              |
| `themeId`      | string |                              |
| `eventId`      | string |                              |
| `workspaceId`  | string |                              |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const image = await confetti.images.update(4242, {
  title: 'example',
})
```

```sh [cURL]
curl -X PATCH "https://api.confetti.events/images/4242" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "image",
    "id": "4242",
    "attributes": {
      "title": "example"
    }
  }
}'
```

:::
