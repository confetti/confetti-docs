---
outline: deep
---

# Create Webhook

<ApiEndpoint method="POST" path="/webhooks" />

Create a new webhook.

## Attributes

| Attribute     | Type   | Description          |
| ------------- | ------ | -------------------- |
| `type` *      | string |                      |
| `url` *       | string |                      |
| `provider`    | string |                      |
| `status`      | enum   | `active`, `inactive` |
| `workspaceId` | number |                      |
| `eventId`     | string |                      |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const webhook = await confetti.webhooks.create({
  type: 'ticket.attending',
  url: 'https://example.com/webhook',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/webhooks" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "webhook",
    "attributes": {
      "type": "ticket.attending",
      "url": "https://example.com/webhook"
    }
  }
}'
```

:::
