---
outline: deep
---

# Get Speaker

<ApiEndpoint method="GET" path="/speakers/:id" />

Retrieve a single speaker by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const speaker = await confetti.speakers.find(107634)
```

```sh [cURL]
curl "https://api.confetti.events/speakers/107634" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Speaker {
  id: number
  isAnnounced: boolean
  isHidden: boolean
  firstName: string
  lastName: string
  order: number
  occupation: string
  bio: string
  status: string
  settings: Record<string, unknown>
  eventId: number
  imageId: number
  createdAt: Date
  updatedAt: Date
}
```

```json [Formatted (SDK)]
{
  "id": "107634",
  "isAnnounced": true,
  "isHidden": false,
  "firstName": "John",
  "lastName": "Henric",
  "order": 1,
  "occupation": "CEO",
  "bio": "<p>John Henric is a technology entrepreneur focused on building scalable digital products and modern software solutions. With experience in innovation, product development, and business strategy, he works at the intersection of technology and growth, helping companies turn complex ideas into practical, user-driven platforms.</p>",
  "status": "announced",
  "settings": {
    "id": "87aed740-4956-4693-b73c-2e6d8f72d066",
    "socialMediaButtons": [
      {
        "url": "https://instagram.com/john-ceo",
        "type": "instagram",
        "order": 1,
        "title": "Instagram"
      }
    ]
  },
  "eventId": 44709,
  "imageId": 2212065,
  "createdAt": "2024-01-12T10:40:21.490Z",
  "updatedAt": "2026-02-06T08:11:06.136Z",
  "image": 2212065
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "107634",
    "type": "speaker",
    "attributes": {
      "isAnnounced": true,
      "isHidden": false,
      "firstName": "John",
      "lastName": "Henric",
      "order": 1,
      "occupation": "CEO",
      "bio": "<p>John Henric is a technology entrepreneur focused on building scalable digital products and modern software solutions. With experience in innovation, product development, and business strategy, he works at the intersection of technology and growth, helping companies turn complex ideas into practical, user-driven platforms.</p>",
      "status": "announced",
      "settings": {
        "id": "87aed740-4956-4693-b73c-2e6d8f72d066",
        "socialMediaButtons": [
          {
            "url": "https://instagram.com/john-ceo",
            "type": "instagram",
            "order": 1,
            "title": "Instagram"
          }
        ]
      },
      "eventId": 44709,
      "imageId": 2212065,
      "createdAt": "2024-01-12T10:40:21.490Z",
      "updatedAt": "2026-02-06T08:11:06.136Z",
      "image": 2212065
    }
  }
}
```

:::
