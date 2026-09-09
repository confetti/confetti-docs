---
outline: deep
---

# Update Event

<ApiEndpoint method="PUT" path="/events/:id" />

Update an existing event. Only the attributes you include are changed.

## Attributes

| Attribute                | Type    | Description                      |
| ------------------------ | ------- | -------------------------------- |
| `name`                   | string  |                                  |
| `startDate`              | string  |                                  |
| `endDate`                | string  |                                  |
| `status`                 | enum    | `draft`, `open`, `cancelled`     |
| `signupType`             | enum    | `rsvp`, `tickets`                |
| `signupStartAt`          | string  |                                  |
| `signupEndAt`            | string  |                                  |
| `privacyVisibility`      | enum    | `everyone`, `invite`, `password` |
| `privacyAttendability`   | enum    | `everyone`, `invite`, `password` |
| `privacyPassword`        | string  |                                  |
| `rsvpLimit`              | number  |                                  |
| `email`                  | string  |                                  |
| `timeZone`               | string  |                                  |
| `continuous`             | boolean |                                  |
| `slug`                   | string  |                                  |
| `primaryColor`           | string  |                                  |
| `contrastColor`          | string  |                                  |
| `signupColor`            | string  |                                  |
| `textColor`              | string  |                                  |
| `secondaryContrastColor` | string  |                                  |
| `hasAdvancedColors`      | boolean |                                  |
| `fontNormal`             | string  |                                  |
| `fontNormalCategory`     | string  |                                  |
| `fontNormalVariant`      | string  |                                  |
| `fontHeading`            | string  |                                  |
| `fontHeadingCategory`    | string  |                                  |
| `fontHeadingVariant`     | string  |                                  |
| `buttonBorderRadius`     | number  |                                  |
| `customCss`              | string  |                                  |
| `shareTitle`             | string  |                                  |
| `shareDescription`       | string  |                                  |
| `summary`                | string  |                                  |
| `smsSenderName`          | string  |                                  |
| `ticketsPerPurchase`     | number  |                                  |
| `locationName`           | string  |                                  |
| `locationPlace`          | object  |                                  |
| `workspaceId`            | number  |                                  |

> All attributes are optional.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const event = await confetti.events.update(16500, {
  name: 'example',
  email: 'jane@example.com',
})
```

```sh [cURL]
curl -X PUT "https://api.confetti.events/events/16500" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "event",
    "id": "16500",
    "attributes": {
      "name": "example",
      "email": "jane@example.com"
    }
  }
}'
```

:::
