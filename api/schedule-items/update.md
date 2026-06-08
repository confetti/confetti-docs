---
outline: deep
---

# Update Schedule Item

<ApiEndpoint method="PATCH" path="/schedule-items/:id" />

Update an existing schedule item. Only the attributes you include are changed.

## Attributes

| Attribute     | Type   | Description |
| ------------- | ------ | ----------- |
| `title`       | string |             |
| `eventId`     | number |             |
| `start`       | string |             |
| `location`    | string |             |
| `description` | string |             |
| `duration`    | string |             |
| `settings`    | string |             |

> Fields marked with **\*** are required.

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
curl -X PATCH "https://api.confetti.events/schedule-items/173" \
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
