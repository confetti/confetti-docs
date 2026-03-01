---
outline: deep
---

# Find One Webhook

Retrieve a single webhook by its ID.


## Request

::: code-group

```js [JavaScript]
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })

const webhook = await confetti.webhooks.find(1)
```

```sh [cURL]
curl "https://api.confetti.events/webhooks/1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
{
  "type": "ticket.attending",
  "url": "http://foo.com/bar",
  "provider": "zapier",
  "status": "active",
  "createdAt": "2020-02-29T15:12:12.435Z",
  "updatedAt": "2020-02-29T15:12:12.435Z",
  "id": "1"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "1",
    "type": "webhook",
    "attributes": {
      "type": "ticket.attending",
      "url": "http://foo.com/bar",
      "provider": "zapier",
      "status": "active",
      "createdAt": "2020-02-29T15:12:12.435Z",
      "updatedAt": "2020-02-29T15:12:12.435Z"
    }
  }
}
```

:::
