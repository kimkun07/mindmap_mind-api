## About

`mind-api` is an API for `MindElixir` Project.\
It can be used for an endpoint of server providing tree for a mindmap.

Related Page

- [NPM package](https://www.npmjs.com/package/@kimkun07/mindmap_mind-api)
- [mind-elixir-core-revised](https://github.com/kimkun07/mindmap_mind-elixir-core-revised)
- [Server - Notion Subpage Tree](https://github.com/kimkun07/mindmap_notion-page-tree)
- [Client - Mindmap Drawer](https://github.com/kimkun07/mindmap_mind-elixir-client)

<details>
<summary>Table of Contents</summary>

- [How to use](#how-to-use)
  - [Install `mind-api`](#install--mind-api-)
  - [Provide `MindResponse`](#provide--mindresponse-)
  - [Fetch `MindResponse`](#fetch--mindresponse-)
  - [Use `MindElixir` (근데 얘는 mind-elixir-core에 들어가야겠다)](#use--mindelixir---------mind-elixir-core---------)
- [How to develop](#how-to-develop)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

</details>

## How to use

- Install `mind-api`
- Server
  - Provide `MindResponse`
- Client
  - Fetch `MindResponse`
  - Use `MindElixir`

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

### Use `MindElixir` (근데 얘는 mind-elixir-core에 들어가야겠다)

```ts
// @ts-ignore
import MindElixir from "@kimkun07/mindmap_mind-elixir-core-revised";

// Initialize MindElixir
mindelixir: any = new MindElixir(sample_mindmap_options);
mindelixir.init(MindElixir.new("new topic"));

// Update MindElixir
mindelixir.nodeData = nodeData;
mindelixir.linkData = {};
mindelixir.refresh();
```

## How to develop

1. Change `index.ts`
2. Publish to npm
   ```bash
   npm run build
   npm version patch
   npm publish --access public
   ```
3. Update from usage (실제 테스트 필요)
   ```bash
   npm outdated
   npm update
   ```
