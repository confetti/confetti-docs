---
outline: deep
---

# Get Image

<ApiEndpoint method="GET" path="/images/:id" />

Retrieve a single image by its ID.

## Request

::: code-group

```js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const image = await confetti.images.find(4242)
```

```sh [cURL]
curl "https://api.confetti.events/images/4242" \
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
```

```json [Raw (JSON:API)]
{
  "data": {
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
}
```

:::
