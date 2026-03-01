---
outline: deep
---

# List Webhooks

<ApiEndpoint method="GET" path="/webhooks" />

Retrieve a paginated list of webhooks.

## Parameters

| Parameter | Default | Values / Description |
| --- | --- | --- |
| `filter[eventId]` |  | number |
| `page[size]` | `50` | Maximum number of results per page |
| `page[number]` | `1` | Page number |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const webhooks = await confetti.webhooks.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/webhooks?filter[eventId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
[
  {
    "type": "ticket.attending",
    "url": "http://foo.com/bar",
    "provider": "zapier",
    "status": "active",
    "createdAt": "2020-02-29T15:12:12.435Z",
    "updatedAt": "2020-02-29T15:12:12.435Z",
    "id": "1"
  },
  {
    "type": "ticket.attending",
    "url": "http://foo.com/bar",
    "provider": "zapier",
    "status": "active",
    "createdAt": "2020-02-29T15:12:12.435Z",
    "updatedAt": "2020-02-29T15:12:12.435Z",
    "id": "1"
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
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
    },
    {
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
  ]
}
```

:::
