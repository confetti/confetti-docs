---
outline: deep
---

# List Contacts

<ApiEndpoint method="GET" path="/contacts" />

Retrieve a paginated list of contacts.

## Parameters

| Parameter      | Default | Values / Description               |
| -------------- | ------- | ---------------------------------- |
| `page[size]`   | `50`    | Maximum number of results per page |
| `page[number]` | `1`     | Page number                        |

> Fields marked with **\*** are required.

## Request

::: code-group

```ts [TypeScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const contacts = await confetti.contacts.findAll({
  page: { size: 10, number: 1 },
})
```

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const contacts = await confetti.contacts.findAll({
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/contacts" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
[
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
    "type": "contact"
  },
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
    "type": "contact"
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
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
    {
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
    }
  ]
}
```

:::
