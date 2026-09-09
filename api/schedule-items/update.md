---
outline: deep
---

# Update Schedule Item

<ApiEndpoint method="PUT" path="/schedule-items/:id" />

Update an existing schedule item. Only the attributes you include are changed.

## Attributes

| Attribute     | Type   | Description |
| ------------- | ------ | ----------- |
| `title`       | string |             |
| `eventId`     | number |             |
| `start`       | date   |             |
| `location`    | string |             |
| `description` | string |             |
| `duration`    | number |             |
| `settings`    | object |             |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const scheduleItem = await confetti.scheduleItems.update(173, {
  title: 'example',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/schedule-items/173" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "scheduleItem",
    "id": "173",
    "attributes": {
      "title": "example"
    }
  }
}'
```

:::
