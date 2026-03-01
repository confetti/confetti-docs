---
outline: deep
---

# Create Ticket

<ApiEndpoint method="POST" path="/tickets" />

Create a new ticket.

## Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| `eventId` * | number |  |
| `ticketBatchId` | number | Required for ticket events |
| `firstName` | string |  |
| `lastName` | string |  |
| `email` * | string |  |
| `status` * | string | `attending`, `invited` |
| `phone` | string | Mobile phone number with country code. Example: +46701234567 |
| `company` | string |  |
| `comment` | string |  |
| `sendEmailConfirmation` * | boolean | If set to true, an email confirmation will be sent to the attendee / invitee. |

> Fields marked with **\*** are required.

## Request

::: code-group

```ts [TypeScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ticket = await confetti.tickets.create({
  eventId: 1,
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  status: 'attending',
  phone: '+46701234567',
  comment: 'A note',
  sendEmailConfirmation: true,
})
```

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ticket = await confetti.tickets.create({
  eventId: 1,
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  status: 'attending',
  phone: '+46701234567',
  comment: 'A note',
  sendEmailConfirmation: true,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/tickets" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "ticket",
    "attributes": {
      "eventId": 1,
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane@example.com",
      "status": "attending",
      "phone": "+46701234567",
      "comment": "A note",
      "sendEmailConfirmation": true
    }
  }
}'
```

:::
