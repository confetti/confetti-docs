---
outline: deep
---

# Get Sponsor Level

<ApiEndpoint method="GET" path="/sponsor-levels/:id" />

Retrieve a single sponsor level by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const sponsorLevel = await confetti.sponsorLevels.find(882)
```

```sh [cURL]
curl "https://api.confetti.events/sponsor-levels/882" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface SponsorLevel {
  id: number
  name: string
  style: string
  order: number
  eventId: number
  createdAt: Date
  updatedAt: Date
}
```

```json [Formatted (SDK)]
{
  "id": "882",
  "name": "Gold",
  "style": "large",
  "order": 1,
  "eventId": 44709,
  "createdAt": "2024-08-01T09:00:00.000Z",
  "updatedAt": "2026-02-01T09:00:00.000Z"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "882",
    "type": "sponsorLevel",
    "attributes": {
      "name": "Gold",
      "style": "large",
      "order": 1,
      "eventId": 44709,
      "createdAt": "2024-08-01T09:00:00.000Z",
      "updatedAt": "2026-02-01T09:00:00.000Z"
    }
  }
}
```

:::
