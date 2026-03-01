---
outline: deep
---

# List Payments

<ApiEndpoint method="GET" path="/payments" />

Retrieve a paginated list of payments.

## Parameters

| Parameter | Default | Values / Description |
| --- | --- | --- |
| `filter[eventId]` * |  | number |
| `filter[status]` |  | `paid`, `refunded`, `pending-invoice`, `sent-invoice`, `paid-invoice`, `cancelled-invoice` |
| `page[size]` | `50` | Maximum number of results per page |
| `page[number]` | `1` | Page number |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const payments = await confetti.payments.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/payments?filter[eventId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
[
  {
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "company": "The Company",
    "amount": 13,
    "vat": 3,
    "vatPercentage": 30,
    "token": "2447b4acef764836169b53c4",
    "currency": "SEK",
    "status": "paid",
    "paidAt": "2020-03-09T20:05:10.000Z",
    "commission": "5.65",
    "commissionVat": "1.13",
    "customer": {
      "other": "Extra information"
    },
    "id": "288298",
    "type": "payment"
  },
  {
    "name": "Foo Bar",
    "email": "foo@bar.com",
    "company": "The Company",
    "amount": 13,
    "vat": 3,
    "vatPercentage": 30,
    "token": "2447b4acef764836169b53c4",
    "currency": "SEK",
    "status": "paid",
    "paidAt": "2020-03-09T20:05:10.000Z",
    "commission": "5.65",
    "commissionVat": "1.13",
    "customer": {
      "other": "Extra information"
    },
    "id": "288298",
    "type": "payment"
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
      "id": "288298",
      "type": "payment",
      "attributes": {
        "name": "Foo Bar",
        "email": "foo@bar.com",
        "company": "The Company",
        "amount": 13,
        "vat": 3,
        "vatPercentage": 30,
        "token": "2447b4acef764836169b53c4",
        "currency": "SEK",
        "status": "paid",
        "paidAt": "2020-03-09T20:05:10.000Z",
        "commission": "5.65",
        "commissionVat": "1.13",
        "customer": {
          "other": "Extra information"
        }
      }
    },
    {
      "id": "288298",
      "type": "payment",
      "attributes": {
        "name": "Foo Bar",
        "email": "foo@bar.com",
        "company": "The Company",
        "amount": 13,
        "vat": 3,
        "vatPercentage": 30,
        "token": "2447b4acef764836169b53c4",
        "currency": "SEK",
        "status": "paid",
        "paidAt": "2020-03-09T20:05:10.000Z",
        "commission": "5.65",
        "commissionVat": "1.13",
        "customer": {
          "other": "Extra information"
        }
      }
    }
  ]
}
```

:::
