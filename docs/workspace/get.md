---
outline: deep
---

# Get Workspace

<ApiEndpoint method="GET" path="/workspaces/:id" />

Retrieve a single workspace by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const workspace = await confetti.workspaces.find(1)
```

```sh [cURL]
curl "https://api.confetti.events/workspaces/1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Workspace {
  id: number
  name: string
  timeZone: string
  slug: string
  featureLevel: string
  website: string
  email: string
  createdAt: Date
  updatedAt: Date
  shareTitle: string
  shareDescription: string
  summary: string
  primaryColor: string
}
```

```json [Formatted (SDK)]
{
  "id": 1,
  "name": "My workspace",
  "type": "workspace"
}
```

```json [Raw (JSON:API)]
{
  "data": {
    "id": 1,
    "type": "workspace",
    "attributes": {
      "name": "My workspace"
    }
  }
}
```

:::
