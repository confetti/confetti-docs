---
outline: deep
---

# Update Speaker

<ApiEndpoint method="PUT" path="/speakers/:id" />

Update an existing speaker. Only the attributes you include are changed.

## Attributes

| Attribute    | Type   | Description           |
| ------------ | ------ | --------------------- |
| `firstName`  | string |                       |
| `eventId`    | number |                       |
| `lastName`   | string |                       |
| `order`      | number |                       |
| `occupation` | string |                       |
| `bio`        | string |                       |
| `status`     | enum   | `announced`, `hidden` |
| `settings`   | object |                       |
| `imageId`    | number |                       |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const speaker = await confetti.speakers.update(107634, {
  firstName: 'Jane',
  lastName: 'Doe',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/speakers/107634" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "speaker",
    "id": "107634",
    "attributes": {
      "firstName": "Jane",
      "lastName": "Doe"
    }
  }
}'
```

:::
