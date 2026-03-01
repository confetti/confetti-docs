---
outline: deep
---

# List Events

<ApiEndpoint method="GET" path="/events" />

Retrieve a paginated list of events.

## Parameters

| Parameter            | Default | Values / Description                                                                                                                           |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter[signupType]` |         | `rsvp`, `tickets`                                                                                                                              |
| `filter[type]`       |         | `future`, `past`                                                                                                                               |
| `page[size]`         | `50`    | Maximum number of results per page                                                                                                             |
| `page[number]`       | `1`     | Page number                                                                                                                                    |
| `include`            |         | `categories`, `pages`, `pages.blocks`, `pages.blocks.images`, `schedule-items`, `speakers`, `speakers.image`, `organisers`, `organisers.image` |

> Fields marked with **\*** are required.

## Request

::: code-group

```ts [TypeScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const events = await confetti.events.findAll({
  filter: { signupType: 'rsvp' },
  page: { size: 10, number: 1 },
})
```

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const events = await confetti.events.findAll({
  filter: { signupType: 'rsvp' },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/events?filter[signupType]=rsvp" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```json [Formatted (SDK)]
[
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
    "images": null
  },
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
    "images": null
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
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
    {
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
    }
  ]
}
```

:::
