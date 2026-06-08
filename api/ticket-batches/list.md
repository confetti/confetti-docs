---
outline: deep
---

# List Ticket Batches

<ApiEndpoint method="GET" path="/ticket-batches" />

Retrieve a paginated list of ticket batches.

## Parameters

| Parameter           | Default | Values / Description               |
| ------------------- | ------- | ---------------------------------- |
| `filter[eventId]` * |         | number                             |
| `page[size]`        | `50`    | Maximum number of results per page |
| `page[number]`      | `1`     | Page number                        |
| `include`           |         | `form`                             |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ticketBatches = await confetti.ticketBatches.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/ticket-batches?filter[eventId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface TicketBatch {
  id: number
  left: number
  status: string
  name: string
  order: number
  description: string
  promoCode: string
  releasedAt: Date
  closedAt: Date
  price: string
  useCustomVat: boolean
  vatPercentage: number
  limit: number
  sold: number
  reserved: number
  settings: Record<string, unknown>
  startDate: Date
  endDate: Date
  createdAt: Date
  updatedAt: Date
  eventId: number
  linkedTicketBatchId: number
  formId: number
  payoutId: number
}
```

```json [Formatted (SDK)]
[
  {
    "left": 20,
    "status": "available",
    "id": 1,
    "name": "My ticket batch",
    "order": 1,
    "description": null,
    "promoCode": null,
    "releasedAt": null,
    "closedAt": null,
    "price": "0",
    "useCustomVat": false,
    "vatPercentage": null,
    "limit": 20,
    "sold": 0,
    "reserved": 0,
    "settings": {},
    "startDate": null,
    "endDate": null,
    "createdAt": "2023-04-27T03:18:25.468Z",
    "updatedAt": "2023-04-27T03:18:25.468Z",
    "eventId": 5,
    "linkedTicketBatchId": null,
    "formId": null,
    "payoutId": null
  },
  {
    "left": 20,
    "status": "available",
    "id": 1,
    "name": "My ticket batch",
    "order": 1,
    "description": null,
    "promoCode": null,
    "releasedAt": null,
    "closedAt": null,
    "price": "0",
    "useCustomVat": false,
    "vatPercentage": null,
    "limit": 20,
    "sold": 0,
    "reserved": 0,
    "settings": {},
    "startDate": null,
    "endDate": null,
    "createdAt": "2023-04-27T03:18:25.468Z",
    "updatedAt": "2023-04-27T03:18:25.468Z",
    "eventId": 5,
    "linkedTicketBatchId": null,
    "formId": null,
    "payoutId": null
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
      "id": 1,
      "type": "ticketBatch",
      "attributes": {
        "left": 20,
        "status": "available",
        "name": "My ticket batch",
        "order": 1,
        "description": null,
        "promoCode": null,
        "releasedAt": null,
        "closedAt": null,
        "price": "0",
        "useCustomVat": false,
        "vatPercentage": null,
        "limit": 20,
        "sold": 0,
        "reserved": 0,
        "settings": {},
        "startDate": null,
        "endDate": null,
        "createdAt": "2023-04-27T03:18:25.468Z",
        "updatedAt": "2023-04-27T03:18:25.468Z",
        "eventId": 5,
        "linkedTicketBatchId": null,
        "formId": null,
        "payoutId": null
      }
    },
    {
      "id": 1,
      "type": "ticketBatch",
      "attributes": {
        "left": 20,
        "status": "available",
        "name": "My ticket batch",
        "order": 1,
        "description": null,
        "promoCode": null,
        "releasedAt": null,
        "closedAt": null,
        "price": "0",
        "useCustomVat": false,
        "vatPercentage": null,
        "limit": 20,
        "sold": 0,
        "reserved": 0,
        "settings": {},
        "startDate": null,
        "endDate": null,
        "createdAt": "2023-04-27T03:18:25.468Z",
        "updatedAt": "2023-04-27T03:18:25.468Z",
        "eventId": 5,
        "linkedTicketBatchId": null,
        "formId": null,
        "payoutId": null
      }
    }
  ]
}
```

:::
