---
outline: deep
---

# Create Speaker

<ApiEndpoint method="POST" path="/speakers" />

Create a new speaker.

## Attributes

| Attribute     | Type   | Description           |
| ------------- | ------ | --------------------- |
| `firstName` * | string |                       |
| `eventId` *   | number |                       |
| `lastName`    | string |                       |
| `order`       | number |                       |
| `occupation`  | string |                       |
| `bio`         | string |                       |
| `status`      | enum   | `announced`, `hidden` |
| `settings`    | object |                       |
| `imageId`     | number |                       |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const speaker = await confetti.speakers.create({
  firstName: 'Jane',
  eventId: 1,
  lastName: 'Doe',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/speakers" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "speaker",
    "attributes": {
      "firstName": "Jane",
      "eventId": 1,
      "lastName": "Doe"
    }
  }
}'
```

:::
