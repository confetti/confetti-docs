---
outline: deep
---

# Get Contact

<ApiEndpoint method="GET" path="/contacts/:id" />

Retrieve a single contact by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const contact = await confetti.contacts.find(588032)
```

```sh [cURL]
curl "https://api.confetti.events/contacts/588032" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  token: string
  status: string
  comment: string
  lastSeen: Date
  deletionRequestedAt: Date
  createdAt: Date
  updatedAt: Date
  organisationId: number
  company: string
}
```

```json [Formatted (SDK)]
{
  "id": "588032",
  "firstName": "Jonny",
  "lastName": "Stromberg",
  "email": "jonny@foo.bar",
  "phone": "+46701122333",
  "token": "gsd00876ec00cdef2233b4ace769c54sdf46",
  "status": "active",
  "comment": "Hey comment",
  "lastSeen": "2022-01-05T15:33:13.171Z",
  "createdAt": "2022-01-05T15:33:13.171Z",
  "updatedAt": "2022-01-05T15:33:13.171Z",
  "organisationId": 57,
  "company": "Company AB",
  "type": "contact",
  "meta": {
    "webhookType": "contact.created"
  }
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "588032",
    "type": "contact",
    "attributes": {
      "firstName": "Jonny",
      "lastName": "Stromberg",
      "email": "jonny@foo.bar",
      "phone": "+46701122333",
      "token": "gsd00876ec00cdef2233b4ace769c54sdf46",
      "status": "active",
      "comment": "Hey comment",
      "lastSeen": "2022-01-05T15:33:13.171Z",
      "createdAt": "2022-01-05T15:33:13.171Z",
      "updatedAt": "2022-01-05T15:33:13.171Z",
      "organisationId": 57,
      "company": "Company AB"
    }
  },
  "meta": {
    "webhookType": "contact.created"
  }
}
```

:::
