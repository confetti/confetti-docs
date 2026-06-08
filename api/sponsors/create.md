---
outline: deep
---

# Create Sponsor

<ApiEndpoint method="POST" path="/sponsors" />

Create a new sponsor.

## Attributes

| Attribute          | Type   | Description |
| ------------------ | ------ | ----------- |
| `name` *           | string |             |
| `sponsorLevelId` * | number |             |
| `description`      | string |             |
| `website`          | string |             |
| `order`            | number |             |
| `imageId`          | number |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsor = await confetti.sponsors.create({
  name: 'example',
  sponsorLevelId: 1,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/sponsors" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "sponsor",
    "attributes": {
      "name": "example"
    }
  }
}'
```

:::
