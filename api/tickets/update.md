---
outline: deep
---

# Update Ticket

<ApiEndpoint method="PUT" path="/tickets/:id" />

Update an existing ticket. Only the attributes you include are changed.

## Attributes

| Attribute               | Type    | Description                                                                                                            |
| ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `firstName`             | string  |                                                                                                                        |
| `lastName`              | string  |                                                                                                                        |
| `email`                 | string  |                                                                                                                        |
| `status`                | string  | `attending`, `invited`, `declined`. Only free tickets can be declined. Declining a paid ticket is rejected by the API. |
| `phone`                 | string  |                                                                                                                        |
| `company`               | string  |                                                                                                                        |
| `comment`               | string  | Internal note visible only to workspace teammates. Not shown to attendees.                                             |
| `guests`                | number  |                                                                                                                        |
| `values`                | object  | Passing null clears every stored form answer.                                                                          |
| `checkinAt`             | string  |                                                                                                                        |
| `ticketBatchId`         | number  | Moves the ticket to another batch. Passing null leaves the current batch unchanged.                                    |
| `sendEmailConfirmation` | boolean | If set to true, an email confirmation will be sent to the attendee.                                                    |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ticket = await confetti.tickets.update(3344691, {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  phone: '+46701234567',
  comment: 'A note',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/tickets/3344691" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "ticket",
    "id": "3344691",
    "attributes": {
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane@example.com",
      "phone": "+46701234567",
      "comment": "A note"
    }
  }
}'
```

:::
