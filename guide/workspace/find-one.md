---
outline: deep
---

# Find One Workspace

Retrieve a single workspace by its ID.


## Request

::: code-group

```js [JavaScript]
const Confetti = require('confetti')

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
