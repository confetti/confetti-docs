---
outline: deep
---

# Create Schedule Item

<ApiEndpoint method="POST" path="/schedule-items" />

Create a new schedule item.

## Attributes

| Attribute     | Type   | Description |
| ------------- | ------ | ----------- |
| `title` *     | string |             |
| `eventId` *   | number |             |
| `start`       | date   |             |
| `location`    | string |             |
| `description` | string |             |
| `duration`    | number |             |
| `settings`    | object |             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const scheduleItem = await confetti.scheduleItems.create({
  title: 'example',
  eventId: 1,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/schedule-items" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "scheduleItem",
    "attributes": {
      "title": "example",
      "eventId": 1
    }
  }
}'
```

:::
