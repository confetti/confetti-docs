---
outline: deep
---

# Update Image

<ApiEndpoint method="PUT" path="/images/:id" />

Update an existing image. Only the attributes you include are changed.

## Attributes

| Attribute      | Type   | Description |
| -------------- | ------ | ----------- |
| `type`         | string |             |
| `provider`     | string |             |
| `public_id`    | string |             |
| `url`          | string |             |
| `base64`       | string |             |
| `description`  | string |             |
| `title`        | string |             |
| `link`         | string |             |
| `order`        | number |             |
| `width`        | number |             |
| `height`       | number |             |
| `content`      | object |             |
| `blockId`      | number |             |
| `blockStyleId` | number |             |
| `themeId`      | number |             |
| `eventId`      | number |             |
| `workspaceId`  | number |             |

> All attributes are optional.

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
curl -X PUT "https://api.confetti.events/images/4242" \
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
