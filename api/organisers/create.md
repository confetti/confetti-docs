---
outline: deep
---

# Create Organiser

<ApiEndpoint method="POST" path="/organisers" />

Create a new organiser.

## Attributes

| Attribute     | Type   | Description |
| ------------- | ------ | ----------- |
| `name` *      | string |             |
| `eventId` *   | number |             |
| `email`       | string |             |
| `description` | string |             |
| `twitter`     | string |             |
| `instagram`   | string |             |
| `url`         | string |             |
| `order`       | number |             |
| `settings`    | object |             |
| `imageId`     | number |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const organiser = await confetti.organisers.create({
  name: 'example',
  eventId: 1,
  email: 'jane@example.com',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/organisers" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "organiser",
    "attributes": {
      "name": "example",
      "eventId": 1,
      "email": "jane@example.com"
    }
  }
}'
```

:::
