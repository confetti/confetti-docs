---
outline: deep
---

# List Tickets

<ApiEndpoint method="GET" path="/tickets" />

Retrieve a paginated list of tickets.

## Parameters

| Parameter             | Default | Values / Description                                                             |
| --------------------- | ------- | -------------------------------------------------------------------------------- |
| `filter[eventId]` *   |         | number                                                                           |
| `filter[search]`      |         | string                                                                           |
| `filter[description]` |         | string                                                                           |
| `filter[checkedIn]`   |         | boolean                                                                          |
| `filter[status]`      |         | `attending`, `waitlist`, `declined`, `invited`, `consumed`, `deletion-requested` |
| `page[size]`          | `50`    | Maximum number of results per page                                               |
| `page[number]`        | `1`     | Page number                                                                      |
| `include`             |         | `addons`                                                                         |

> Fields marked with **\*** are required.

## Request

::: code-group

```ts [TypeScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const tickets = await confetti.tickets.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const tickets = await confetti.tickets.findAll({
  filter: { eventId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/tickets?filter[eventId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
[
  {
    "persons": 1,
    "hashid": "g265xg",
    "description": "My cool batch",
    "price": 10,
    "currency": "SEK",
    "name": "Foo Bar",
    "firstName": "Foo",
    "lastName": "Bar",
    "email": "foo@bar.com",
    "phone": "+46701111111",
    "token": "d92614282978451b7942fffda421df47740c",
    "status": "attending",
    "emailStatus": "subscribed",
    "checkinAt": null,
    "waitlistAt": null,
    "startDate": "2021-06-18T16:00:00.000Z",
    "endDate": null,
    "values": {
      "field-one-field": "Veg",
      "field-what-do-you-think": [
        "Yes"
      ]
    },
    "comment": null,
    "company": "Company AB",
    "guests": 0,
    "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
    "deletionRequestedAt": null,
    "createdAt": "2020-03-09T19:51:32.274Z",
    "updatedAt": "2020-03-09T19:53:30.354Z",
    "ticketBatchId": 16090,
    "paymentId": 288297,
    "eventId": 16969,
    "contactId": 112395,
    "id": "3344691",
    "type": "ticket"
  },
  {
    "persons": 1,
    "hashid": "g265xg",
    "description": "My cool batch",
    "price": 10,
    "currency": "SEK",
    "name": "Foo Bar",
    "firstName": "Foo",
    "lastName": "Bar",
    "email": "foo@bar.com",
    "phone": "+46701111111",
    "token": "d92614282978451b7942fffda421df47740c",
    "status": "attending",
    "emailStatus": "subscribed",
    "checkinAt": null,
    "waitlistAt": null,
    "startDate": "2021-06-18T16:00:00.000Z",
    "endDate": null,
    "values": {
      "field-one-field": "Veg",
      "field-what-do-you-think": [
        "Yes"
      ]
    },
    "comment": null,
    "company": "Company AB",
    "guests": 0,
    "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
    "deletionRequestedAt": null,
    "createdAt": "2020-03-09T19:51:32.274Z",
    "updatedAt": "2020-03-09T19:53:30.354Z",
    "ticketBatchId": 16090,
    "paymentId": 288297,
    "eventId": 16969,
    "contactId": 112395,
    "id": "3344691",
    "type": "ticket"
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
      "id": "3344691",
      "type": "ticket",
      "attributes": {
        "persons": 1,
        "hashid": "g265xg",
        "description": "My cool batch",
        "price": 10,
        "currency": "SEK",
        "name": "Foo Bar",
        "firstName": "Foo",
        "lastName": "Bar",
        "email": "foo@bar.com",
        "phone": "+46701111111",
        "token": "d92614282978451b7942fffda421df47740c",
        "status": "attending",
        "emailStatus": "subscribed",
        "checkinAt": null,
        "waitlistAt": null,
        "startDate": "2021-06-18T16:00:00.000Z",
        "endDate": null,
        "values": {
          "field-one-field": "Veg",
          "field-what-do-you-think": [
            "Yes"
          ]
        },
        "comment": null,
        "company": "Company AB",
        "guests": 0,
        "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
        "deletionRequestedAt": null,
        "createdAt": "2020-03-09T19:51:32.274Z",
        "updatedAt": "2020-03-09T19:53:30.354Z",
        "ticketBatchId": 16090,
        "paymentId": 288297,
        "eventId": 16969,
        "contactId": 112395
      }
    },
    {
      "id": "3344691",
      "type": "ticket",
      "attributes": {
        "persons": 1,
        "hashid": "g265xg",
        "description": "My cool batch",
        "price": 10,
        "currency": "SEK",
        "name": "Foo Bar",
        "firstName": "Foo",
        "lastName": "Bar",
        "email": "foo@bar.com",
        "phone": "+46701111111",
        "token": "d92614282978451b7942fffda421df47740c",
        "status": "attending",
        "emailStatus": "subscribed",
        "checkinAt": null,
        "waitlistAt": null,
        "startDate": "2021-06-18T16:00:00.000Z",
        "endDate": null,
        "values": {
          "field-one-field": "Veg",
          "field-what-do-you-think": [
            "Yes"
          ]
        },
        "comment": null,
        "company": "Company AB",
        "guests": 0,
        "termsAcceptedAt": "2020-03-09T19:53:30.304Z",
        "deletionRequestedAt": null,
        "createdAt": "2020-03-09T19:51:32.274Z",
        "updatedAt": "2020-03-09T19:53:30.354Z",
        "ticketBatchId": 16090,
        "paymentId": 288297,
        "eventId": 16969,
        "contactId": 112395
      }
    }
  ]
}
```

:::
