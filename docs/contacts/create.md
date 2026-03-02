---
outline: deep
---

# Create Contact

<ApiEndpoint method="POST" path="/contacts" />

Create a new contact.

## Attributes

| Attribute       | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| `firstName`     | string |                                                              |
| `lastName`      | string |                                                              |
| `email` *       | string |                                                              |
| `phone`         | string | Mobile phone number with country code. Example: +46701234567 |
| `comment`       | string |                                                              |
| `company`       | string |                                                              |
| `categoryIds`   | array  | Attach categories to your contact.                           |
| `workspaceId` * | number |                                                              |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const contact = await confetti.contacts.create({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  phone: '+46701234567',
  comment: 'A note',
  workspaceId: 1,
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/contacts" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "contact",
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
