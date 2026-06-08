---
outline: deep
---

# Get Sponsor

<ApiEndpoint method="GET" path="/sponsors/:id" />

Retrieve a single sponsor by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsor = await confetti.sponsors.find(5421)
```

```sh [cURL]
curl "https://api.confetti.events/sponsors/5421" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Sponsor {
  id: number
  name: string
  description: string
  website: string
  order: number
  sponsorLevelId: number
  imageId: number
  createdAt: Date
  updatedAt: Date
}
```

```json [Formatted (SDK)]
{
  "id": "5421",
  "name": "Acme Corp",
  "description": "<p>Acme Corp is proud to support this event.</p>",
  "website": "https://acme.example",
  "order": 1,
  "sponsorLevelId": 882,
  "imageId": 991234,
  "createdAt": "2024-08-01T10:00:00.000Z",
  "updatedAt": "2026-02-01T10:00:00.000Z"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "5421",
    "type": "sponsor",
    "attributes": {
      "name": "Acme Corp",
      "description": "<p>Acme Corp is proud to support this event.</p>",
      "website": "https://acme.example",
      "order": 1,
      "sponsorLevelId": 882,
      "imageId": 991234,
      "createdAt": "2024-08-01T10:00:00.000Z",
      "updatedAt": "2026-02-01T10:00:00.000Z"
    }
  }
}
```

:::
