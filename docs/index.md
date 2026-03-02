---
outline: deep
---

# Introduction

The Confetti API lets you integrate with [Confetti](https://confetti.events) — the all-in-one event management platform for event pages, ticket sales, guest lists, communications, and more.

Use the API to build custom integrations, automate workflows, or sync event data with external systems.

::: tip Node.js SDK with TypeScript support
The fastest way to get started is with the [official Node.js SDK](https://github.com/confetti/confetti-node). It ships with built-in TypeScript declarations — you get full autocompletion and type safety out of the box, with zero extra configuration.
:::

## Base URL

All requests use the following base URL:

```
https://api.confetti.events
```

## Authentication

Authenticate by passing your API key in the `Authorization` header. Generate a key from **Workspace → Settings → API & Webhooks** in the Confetti dashboard.

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })
```

```sh [cURL]
curl "https://api.confetti.events/events" \
  -H "Authorization: apikey your-key"
```

:::

::: warning
Replace `your-key` with your actual API key. Keep it secret — never expose it in client-side code.
:::

## Response Format

The API follows the [JSON:API](https://jsonapi.org/) specification. The Node.js SDK automatically formats responses into plain objects for convenience.

Both the raw JSON:API payload and the formatted SDK response are shown in the code examples throughout this documentation.

## Pagination

List endpoints return paginated results:

| Parameter | Default | Description |
| --- | --- | --- |
| `page[size]` | `50` | Results per page (max 50) |
| `page[number]` | `1` | Page to retrieve |

## Need Help?

- [Help Center](https://support.confetti.events)
- [support@confetti.events](mailto:support@confetti.events)
- [Zapier Integration](https://zapier.com/apps/confetti/integrations) — no-code alternative
