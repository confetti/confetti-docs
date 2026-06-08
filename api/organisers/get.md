---
outline: deep
---

# Get Organiser

<ApiEndpoint method="GET" path="/organisers/:id" />

Retrieve a single organiser by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const organiser = await confetti.organisers.find(112)
```

```sh [cURL]
curl "https://api.confetti.events/organisers/112" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Organiser {
  id: number
  description: string
  email: string
  name: string
  twitter: string
  instagram: string
  url: string
  order: number
  settings: Record<string, unknown>
  eventId: number
  imageId: number
  createdAt: Date
  updatedAt: Date
}
```

```json [Formatted (SDK)]
{
  "id": "112",
  "description": null,
  "email": "john@doe.se",
  "name": "John Doe",
  "twitter": null,
  "instagram": "JohnDoe",
  "url": "https://my-website.se",
  "order": null,
  "settings": {},
  "eventId": 107,
  "imageId": 936,
  "createdAt": "2024-12-10T07:39:29.226Z",
  "updatedAt": "2026-02-10T09:15:37.736Z"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "112",
    "type": "organiser",
    "attributes": {
      "description": null,
      "email": "john@doe.se",
      "name": "John Doe",
      "twitter": null,
      "instagram": "JohnDoe",
      "url": "https://my-website.se",
      "order": null,
      "settings": {},
      "eventId": 107,
      "imageId": 936,
      "createdAt": "2024-12-10T07:39:29.226Z",
      "updatedAt": "2026-02-10T09:15:37.736Z"
    }
  }
}
```

:::
