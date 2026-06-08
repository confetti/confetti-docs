---
outline: deep
---

# Update Sponsor

<ApiEndpoint method="PATCH" path="/sponsors/:id" />

Update an existing sponsor. Only the attributes you include are changed.

## Attributes

| Attribute        | Type   | Description |
| ---------------- | ------ | ----------- |
| `name`           | string |             |
| `sponsorLevelId` | number |             |
| `description`    | string |             |
| `website`        | string |             |
| `order`          | string |             |
| `imageId`        | string |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsor = await confetti.sponsors.update(5421, {
  name: 'example',
})
```

```sh [cURL]
curl -X PATCH "https://api.confetti.events/sponsors/5421" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "sponsor",
    "id": "5421",
    "attributes": {
      "name": "example"
    }
  }
}'
```

:::
