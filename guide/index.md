---
outline: deep
---

# Introduction

The Confetti API gives you programmatic access to [Confetti](https://confetti.events) — the all-in-one event management platform for creating event pages, selling tickets, managing guest lists, sending communications, and much more.

Use the API to build custom integrations, automate workflows, or sync event data with your own systems. Everything available through the Confetti dashboard can be accessed through the API.

::: tip Official Node.js SDK
The fastest way to get started is with our [official Node.js wrapper](https://github.com/confetti/confetti-node). It handles authentication, pagination, and response formatting for you.
:::

## Base URL

All API requests are made to:

```
https://api.confetti.events
```

## Authentication

Confetti uses API keys for authentication. You can generate a key from your **Workspace → Settings → API & Webhooks** page.

Include your key in the `Authorization` header of every request:

::: code-group

```js [JavaScript]
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })
```

```sh [cURL]
curl "https://api.confetti.events/events" \
  -H "Authorization: apikey your-key"
```

:::

> Replace `your-key` with your actual API key.

## Response Format

The API follows the [JSON:API](https://jsonapi.org/) specification. When using the Node.js SDK, responses are automatically formatted into plain objects for convenience.

You can see both the raw JSON:API response and the formatted SDK response in the code examples throughout this documentation.

## Pagination

List endpoints support pagination via `page[size]` and `page[number]` query parameters:

| Parameter | Default | Description |
| --- | --- | --- |
| `page[size]` | `50` | Number of results per page (max 50) |
| `page[number]` | `1` | Page number to retrieve |

## Need Help?

- **Help Center** — [support.confetti.events](https://support.confetti.events)
- **Email** — [support@confetti.events](mailto:support@confetti.events)
- **Zapier** — Prefer a no-code approach? Check out the [Confetti Zapier integration](https://zapier.com/apps/confetti/integrations)
