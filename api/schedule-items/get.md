---
outline: deep
---

# Get Schedule Item

<ApiEndpoint method="GET" path="/schedule-items/:id" />

Retrieve a single schedule item by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const scheduleItem = await confetti.scheduleItems.find(173)
```

```sh [cURL]
curl "https://api.confetti.events/schedule-items/173" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface ScheduleItem {
  id: number
  title: string
  location: string
  start: Date
  description: string
  duration: number
  settings: Record<string, unknown>
  eventId: number
  createdAt: Date
  updatedAt: Date
}
```

```json [Formatted (SDK)]
{
  "id": "173",
  "title": "Boosting Web Performance in 2026",
  "location": "Stage B3",
  "start": "2026-03-26T13:30:00.000Z",
  "description": "<h1><br></h1>\n<p>Northern - Opening remarks by Gustav Engård, CEO at Company A<br></p>\n<ul></ul>",
  "duration": 40,
  "settings": {
    "speakersSettings": [
      {
        "id": 57,
        "hideOnSpeaker": false
      },
      {
        "id": 59,
        "hideOnSpeaker": false
      },
      {
        "id": 58,
        "hideOnSpeaker": false
      }
    ],
    "order": 1
  },
  "eventId": 14,
  "createdAt": "2023-03-02T15:54:00.458Z",
  "updatedAt": "2026-02-04T09:09:34.465Z"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "173",
    "type": "scheduleItem",
    "attributes": {
      "title": "Boosting Web Performance in 2026",
      "location": "Stage B3",
      "start": "2026-03-26T13:30:00.000Z",
      "description": "<h1><br></h1>\n<p>Northern - Opening remarks by Gustav Engård, CEO at Company A<br></p>\n<ul></ul>",
      "duration": 40,
      "settings": {
        "speakersSettings": [
          {
            "id": 57,
            "hideOnSpeaker": false
          },
          {
            "id": 59,
            "hideOnSpeaker": false
          },
          {
            "id": 58,
            "hideOnSpeaker": false
          }
        ],
        "order": 1
      },
      "eventId": 14,
      "createdAt": "2023-03-02T15:54:00.458Z",
      "updatedAt": "2026-02-04T09:09:34.465Z"
    }
  }
}
```

:::
