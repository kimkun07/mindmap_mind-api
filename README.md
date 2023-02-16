## About

`mind-api` is an API for `MindElixir` Project.\
It is used for an endpoint of server providing data for a mindmap.

Related Link

- [NPM package](https://www.npmjs.com/package/@kimkun07/mindmap_mind-api)
- [mind-elixir-core-revised](https://github.com/kimkun07/mindmap_mind-elixir-core-revised)
- [Server - Notion Subpage Tree](https://github.com/kimkun07/mindmap_notion-page-tree)
- [Client - Mindmap Drawer](https://github.com/kimkun07/mindmap_mind-elixir-client)

<details>
<summary>Table of Contents</summary>

- [How to use](#how-to-use)
  - [Install `mind-api`](#install-mind-api)
  - [Provide `MindResponse`](#provide-mindresponse)
  - [Fetch `MindResponse`](#fetch-mindresponse)
- [How to develop](#how-to-develop)

</details>

## How to use

- Install `mind-api`
- Server
  - Provide `MindResponse`
- Client
  - Fetch `MindResponse`

### Install `mind-api`

```bash
npm i @kimkun07/mindmap_mind-api -D
```

### Provide `MindResponse`

```ts
import { MindResponse } from "@kimkun07/mindmap_mind-api";

server.get("/", async function (req: Request, res: Response) {
  let result: MindResponse = {
    status: "Page Retrieve Success",
    rawNodeData: await get_node(process.env.NOTION_PAGE_ID_ROOT!), // NodeObj
  };
  res.json(result); // json of MindResponse
});
```

### Fetch `MindResponse`

```ts
import { MindResponse } from "@kimkun07/mindmap_mind-api";

let httpResponse = await fetch(url);
let mindResponse: MindResponse = await httpResponse.json();
```

## How to develop

1. Publish to npm
   ```bash
   npm run build
   npm version patch
   npm publish --access public
   ```
2. Update from usage
   ```bash
   npm outdated
   npm update @kimkun07/mindmap_mind-api
   ```
