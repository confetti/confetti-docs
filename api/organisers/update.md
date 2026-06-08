---
outline: deep
---

# Update Organiser

<ApiEndpoint method="PATCH" path="/organisers/:id" />

Update an existing organiser. Only the attributes you include are changed.

## Attributes

| Attribute     | Type   | Description |
| ------------- | ------ | ----------- |
| `name`        | string |             |
| `eventId`     | number |             |
| `email`       | string |             |
| `description` | string |             |
| `twitter`     | string |             |
| `instagram`   | string |             |
| `url`         | string |             |
| `order`       | string |             |
| `settings`    | string |             |
| `imageId`     | string |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const organiser = await confetti.organisers.update(112, {
  name: 'example',
  email: 'jane@example.com',
})
```

```sh [cURL]
curl -X PATCH "https://api.confetti.events/organisers/112" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "organiser",
    "id": "112",
    "attributes": {
      "name": "example",
      "email": "jane@example.com"
    }
  }
}'
```

:::
