---
outline: deep
---

# List Images

<ApiEndpoint method="GET" path="/images" />

Retrieve a paginated list of images.

## Parameters

| Parameter         | Default | Values / Description               |
| ----------------- | ------- | ---------------------------------- |
| `filter[blockId]` |         | number                             |
| `filter[eventId]` |         | number                             |
| `page[size]`      | `50`    | Maximum number of results per page |
| `page[number]`    | `1`     | Page number                        |

> Fields marked with **\*** are required.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const images = await confetti.images.findAll({
  filter: { blockId: 1 },
  page: { size: 10, number: 1 },
})
```

```sh [cURL]
curl "https://api.confetti.events/images?filter[blockId]=1" \
  -H "Authorization: apikey your-key"
```

:::

## Response

::: code-group

```ts [TypeScript]
interface Image {
  id: number
  type: string
  order: number
  original: string
  url30: string
  url50: string
  url75: string
  url100: string
  url300: string
  url500: string
  url500x500: string
  url1000: string
  url2000: string
  urlMax2000: string
  title: string
  description: string
  link: string
}
```

```json [Formatted (SDK)]
[
  {
    "type": "cover",
    "order": "1",
    "original": "https://cdn.example.com/orig.jpg",
    "url30": "https://cdn.example.com/30.jpg",
    "url50": "https://cdn.example.com/50.jpg",
    "url75": "https://cdn.example.com/75.jpg",
    "url100": "https://cdn.example.com/100.jpg",
    "url300": "https://cdn.example.com/300.jpg",
    "url500": "https://cdn.example.com/500.jpg",
    "url500x500": "https://cdn.example.com/500x500.jpg",
    "url1000": "https://cdn.example.com/1000.jpg",
    "url2000": "https://cdn.example.com/2000.jpg",
    "urlMax2000": "https://cdn.example.com/max2000.jpg",
    "title": "A cover image",
    "description": "Hero photo",
    "link": null,
    "id": "4242"
  },
  {
    "type": "cover",
    "order": "1",
    "original": "https://cdn.example.com/orig.jpg",
    "url30": "https://cdn.example.com/30.jpg",
    "url50": "https://cdn.example.com/50.jpg",
    "url75": "https://cdn.example.com/75.jpg",
    "url100": "https://cdn.example.com/100.jpg",
    "url300": "https://cdn.example.com/300.jpg",
    "url500": "https://cdn.example.com/500.jpg",
    "url500x500": "https://cdn.example.com/500x500.jpg",
    "url1000": "https://cdn.example.com/1000.jpg",
    "url2000": "https://cdn.example.com/2000.jpg",
    "urlMax2000": "https://cdn.example.com/max2000.jpg",
    "title": "A cover image",
    "description": "Hero photo",
    "link": null,
    "id": "4242"
  }
]
```

```json [Raw (JSON:API)]
{
  "data": [
    {
      "id": "4242",
      "type": "image",
      "attributes": {
        "type": "cover",
        "order": "1",
        "original": "https://cdn.example.com/orig.jpg",
        "url30": "https://cdn.example.com/30.jpg",
        "url50": "https://cdn.example.com/50.jpg",
        "url75": "https://cdn.example.com/75.jpg",
        "url100": "https://cdn.example.com/100.jpg",
        "url300": "https://cdn.example.com/300.jpg",
        "url500": "https://cdn.example.com/500.jpg",
        "url500x500": "https://cdn.example.com/500x500.jpg",
        "url1000": "https://cdn.example.com/1000.jpg",
        "url2000": "https://cdn.example.com/2000.jpg",
        "urlMax2000": "https://cdn.example.com/max2000.jpg",
        "title": "A cover image",
        "description": "Hero photo",
        "link": null
      }
    },
    {
      "id": "4242",
      "type": "image",
      "attributes": {
        "type": "cover",
        "order": "1",
        "original": "https://cdn.example.com/orig.jpg",
        "url30": "https://cdn.example.com/30.jpg",
        "url50": "https://cdn.example.com/50.jpg",
        "url75": "https://cdn.example.com/75.jpg",
        "url100": "https://cdn.example.com/100.jpg",
        "url300": "https://cdn.example.com/300.jpg",
        "url500": "https://cdn.example.com/500.jpg",
        "url500x500": "https://cdn.example.com/500x500.jpg",
        "url1000": "https://cdn.example.com/1000.jpg",
        "url2000": "https://cdn.example.com/2000.jpg",
        "urlMax2000": "https://cdn.example.com/max2000.jpg",
        "title": "A cover image",
        "description": "Hero photo",
        "link": null
      }
    }
  ]
}
```

:::
