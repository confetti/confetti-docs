---
outline: deep
---

# Update Sponsor Level

<ApiEndpoint method="PUT" path="/sponsor-levels/:id" />

Update an existing sponsor level. Only the attributes you include are changed.

## Attributes

| Attribute | Type   | Description                |
| --------- | ------ | -------------------------- |
| `name`    | string |                            |
| `eventId` | number |                            |
| `style`   | enum   | `large`, `medium`, `small` |
| `order`   | number |                            |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsorLevel = await confetti.sponsorLevels.update(882, {
  name: 'example',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/sponsor-levels/882" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "sponsorLevel",
    "id": "882",
    "attributes": {
      "name": "example"
    }
  }
}'
```

:::
