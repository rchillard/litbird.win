# API

This template demonstrates using the  package to add routing to your Cloudflare Workers.

[`index.js`](https://github.com/cloudflare/worker-template-router/blob/master/index.js) is the content of the Workers script.

## Routes

| Type   | Path       | Method | Action            |
| ------ | ---------- | ------ | ----------------- |
| Test   | /test      | GET    | Test route        |
| Index  | /books     | GET    | List all books    |
| Create | /books     | POST   | Create a new book |
| Show   | /books/:id | GET    | Return a book     |
| Update | /books/:id | PUT    | Update a book     |
| Delete | /books/:id | Delete | Delete a book     |


### Setup

This API was setup with Cloudflare's CLI, [wrangler](https://github.com/cloudflare/wrangler). Before publishing your code you need to edit `wrangler.toml` file and add your Cloudflare `account_id` - more information about configuring and publishing your code can be found [in the documentation](https://developers.cloudflare.com/workers/learning/getting-started#7-configure-your-project-for-deployment).

You can develop locally with it using:

```
wrangler dev
```

You can publish using:
```
wrangler publish
```

This API leverages two small packages right now:
- [`itty-router`](https://github.com/kwhitley/itty-router) to achieve an Express like syntax
- [`nanoid`](https://github.com/ai/nanoid) to generate UUIDs for book keys

A future upgrade should consider using book titles as the unique key.
