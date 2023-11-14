---
sidebar_position: 1
---

# Introduction

Welcome to the Confetti API reference. The easist way to access the API is via our [offical Node.js wrapper](http://github.com/confetti/confetti-node).

# Authentication

### JavaScript

```javascript
const Confetti = require('confetti')
const confetti = new Confetti({ apiKey: 'your-key' })
```

### curl

```shell
curl "https://api.confetti.events"
  -H "Authorization: apikey your-key"
```

> Make sure to replace `your-key` with your API key.

Confetti uses API keys to allow access to the API. You can create a new API key via your Workspace > Settings > API & Webhooks

Confetti expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: apikey your-key`
