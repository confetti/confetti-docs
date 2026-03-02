---
outline: deep
---

# Get Event

<ApiEndpoint method="GET" path="/events/:id" />

Retrieve a single event by its ID.

## Parameters

| Parameter | Default | Values / Description                                                                                                                           |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `include` |         | `categories`, `pages`, `pages.blocks`, `pages.blocks.images`, `schedule-items`, `speakers`, `speakers.image`, `organisers`, `organisers.image` |

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const event = await confetti.events.find(16500)
```

```sh [cURL]
curl "https://api.confetti.events/events/16500" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Event {
  id: number
  name: string
  startDate: Date
  endDate: Date
  timeZone: string
  slug: string
  status: string
  featureLevel: string
  signupType: string
  signupStartAt: Date
  signupEndAt: Date
  website: string
  email: string
  rsvpLimit: number
  rsvpLeft: number
  waitlisted: number
  hasPassed: boolean
  createdAt: Date
  updatedAt: Date
  workspaceId: number
  shareTitle: string
  shareDescription: string
  summary: string
  timeFormat: string
  locale: string
  primaryColor: string
  contrastColor: string
  waitlist: string
  enableExtraGuests: boolean
  maxExtraGuests: number
  location: string
}
```

```json [Formatted (SDK)]
{
  "name": "My first event",
  "startDate": "2020-09-19T16:00:00.000Z",
  "endDate": "2020-09-19T19:00:00.000Z",
  "timeZone": "Europe/Berlin",
  "slug": "green-summer-18717b",
  "status": "open",
  "featureLevel": "business",
  "signupType": "rsvp",
  "website": "http://jonny-action.confetti.test/my-first-event",
  "email": "jonny.stromberg@gmail.com",
  "rsvpLimit": 100,
  "rsvpLeft": 85,
  "waitlisted": 0,
  "hasPassed": false,
  "createdAt": "2018-10-11T13:06:16.432Z",
  "updatedAt": "2020-03-09T20:19:40.956Z",
  "summary": "Write a three sentence pitch for your event here.",
  "timeFormat": "24",
  "locale": "en",
  "primaryColor": "#00DB7D",
  "contrastColor": "#ffaa99",
  "waitlist": true,
  "location": {
    "url": "http://www.google.com/maps?q=undefined"
  },
  "id": "16500",
  "type": "event",
  "images": null,
  "meta": {
    "webhookType": "event.updated"
  }
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": "16500",
    "type": "event",
    "attributes": {
      "name": "My first event",
      "startDate": "2020-09-19T16:00:00.000Z",
      "endDate": "2020-09-19T19:00:00.000Z",
      "timeZone": "Europe/Berlin",
      "slug": "green-summer-18717b",
      "status": "open",
      "featureLevel": "business",
      "signupType": "rsvp",
      "website": "http://jonny-action.confetti.test/my-first-event",
      "email": "jonny.stromberg@gmail.com",
      "rsvpLimit": 100,
      "rsvpLeft": 85,
      "waitlisted": 0,
      "hasPassed": false,
      "createdAt": "2018-10-11T13:06:16.432Z",
      "updatedAt": "2020-03-09T20:19:40.956Z",
      "summary": "Write a three sentence pitch for your event here.",
      "timeFormat": "24",
      "locale": "en",
      "primaryColor": "#00DB7D",
      "contrastColor": "#ffaa99",
      "waitlist": true,
      "location": {
        "url": "http://www.google.com/maps?q=undefined"
      }
    },
    "relationships": {
      "images": {
        "data": null
      }
    }
  },
  "meta": {
    "webhookType": "event.updated"
  }
}
```

:::
