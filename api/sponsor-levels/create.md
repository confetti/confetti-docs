---
outline: deep
---

# Create Sponsor Level

<ApiEndpoint method="POST" path="/sponsor-levels" />

Create a new sponsor level.

## Attributes

| Attribute   | Type   | Description                |
| ----------- | ------ | -------------------------- |
| `name` *    | string |                            |
| `eventId` * | number |                            |
| `style`     | enum   | `large`, `medium`, `small` |
| `order`     | number |                            |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsorLevel = await confetti.sponsorLevels.create({
  name: 'example',
  eventId: 1,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/sponsor-levels" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "sponsorLevel",
    "attributes": {
      "name": "example",
      "eventId": 1
    }
  }
}'
```

:::
