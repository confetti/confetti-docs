---
outline: deep
---

# Create Event

<ApiEndpoint method="POST" path="/events" />

Create a new event.

## Attributes

| Attribute                | Type    | Description                                                                                                                                                                                                                                                                           |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` *                 | string  |                                                                                                                                                                                                                                                                                       |
| `startDate` *            | string  |                                                                                                                                                                                                                                                                                       |
| `endDate`                | string  |                                                                                                                                                                                                                                                                                       |
| `status`                 | string  |                                                                                                                                                                                                                                                                                       |
| `signupType`             | enum    | `rsvp`, `tickets`                                                                                                                                                                                                                                                                     |
| `signupStartAt`          | string  |                                                                                                                                                                                                                                                                                       |
| `signupEndAt`            | string  |                                                                                                                                                                                                                                                                                       |
| `privacyVisibility`      | enum    | `everyone`, `invite`, `password`. Who can view the event page. 'everyone' = public, 'invite' = only invited guests with a valid invite, 'password' = requires the event password.                                                                                                     |
| `privacyAttendability`   | enum    | `everyone`, `invite`, `password`. Who can register / RSVP for the event. 'everyone' = anyone, 'invite' = requires a valid invite, 'password' = requires the event password.                                                                                                           |
| `privacyPassword`        | string  | Password required to view/attend when privacyVisibility or privacyAttendability is 'password'.                                                                                                                                                                                        |
| `rsvpLimit`              | number  |                                                                                                                                                                                                                                                                                       |
| `email`                  | string  |                                                                                                                                                                                                                                                                                       |
| `website`                | string  |                                                                                                                                                                                                                                                                                       |
| `timeZone`               | string  |                                                                                                                                                                                                                                                                                       |
| `continuous`             | boolean |                                                                                                                                                                                                                                                                                       |
| `slug`                   | string  |                                                                                                                                                                                                                                                                                       |
| `primaryColor`           | string  | Main brand color (hex). Used for buttons, links, and accent elements. Must contrast against contrastColor (background).                                                                                                                                                               |
| `contrastColor`          | string  | Background color (hex). Used for page backgrounds and button text. Must contrast against primaryColor.                                                                                                                                                                                |
| `signupColor`            | string  | CTA/button color used on signup and payment forms (hex). Must contrast against white (#FFFFFF). Defaults to primaryColor.                                                                                                                                                             |
| `textColor`              | string  | Default body text color (hex). Must contrast against contrastColor (background).                                                                                                                                                                                                      |
| `secondaryContrastColor` | string  | Secondary background color (hex). Used for alternate sections. Must contrast against primaryColor.                                                                                                                                                                                    |
| `hasAdvancedColors`      | boolean | When false, only primaryColor is used and other colors are auto-derived. When true, all colors are set independently.                                                                                                                                                                 |
| `fontNormal`             | string  | Google Fonts font family for body text (e.g. "Inter").                                                                                                                                                                                                                                |
| `fontNormalCategory`     | string  | CSS font category: sans-serif, serif, or monospace.                                                                                                                                                                                                                                   |
| `fontNormalVariant`      | string  | Font variant/weight (e.g. "400", "600").                                                                                                                                                                                                                                              |
| `fontHeading`            | string  | Google Fonts font family for headings (e.g. "Playfair Display").                                                                                                                                                                                                                      |
| `fontHeadingCategory`    | string  | CSS font category: sans-serif, serif, or monospace.                                                                                                                                                                                                                                   |
| `fontHeadingVariant`     | string  | Font weight and style (e.g. "700", "600italic").                                                                                                                                                                                                                                      |
| `buttonBorderRadius`     | number  | Button corner radius in pixels (e.g. 4 for square, 35 for rounded).                                                                                                                                                                                                                   |
| `customCss`              | string  | Global CSS stylesheet applied to every page of the event. Use this to override default styles, customize layouts, hide elements, or add any custom styling. The CSS is injected into a &lt;style&gt; tag on all event pages. Combine with custom HTML blocks for full visual control. |
| `shareTitle`             | string  |                                                                                                                                                                                                                                                                                       |
| `shareDescription`       | string  |                                                                                                                                                                                                                                                                                       |
| `summary`                | string  |                                                                                                                                                                                                                                                                                       |
| `smsSenderName`          | string  |                                                                                                                                                                                                                                                                                       |
| `ticketsPerPurchase`     | number  |                                                                                                                                                                                                                                                                                       |
| `locationName`           | string  |                                                                                                                                                                                                                                                                                       |
| `locationPlace`          | object  | Location/venue details. Both formatted_address and geometry.location (lat/lng) are needed for the map to render. Without coordinates the map image will be broken.                                                                                                                    |
| `workspaceId`            | number  |                                                                                                                                                                                                                                                                                       |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const event = await confetti.events.create({
  name: 'example',
  startDate: 'example',
  email: 'jane@example.com',
})
```

```sh [cURL]
curl -X POST "https://api.confetti.events/events" \
  -H "Content-Type: application/json" \
  -H "Authorization: apikey your-key" \
  -d '{
  "data": {
    "type": "event",
    "attributes": {
      "name": "example",
      "startDate": "example",
      "email": "jane@example.com"
    }
  }
}'
```

:::
