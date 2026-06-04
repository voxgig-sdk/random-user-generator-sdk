# RandomUserGenerator SDK

Generate randomized fake user profiles for testing, prototyping, and demos

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Random User Generator

[Random User Generator](https://randomuser.me/) is a free service that returns realistic-looking but entirely fake user profiles. It is designed by Arron Hunt and developed by Keith Armstrong, with contributions from the open-source community.

What you get from the API:
- Personal info: name, gender, date of birth, age
- Contact: email, phone, cell
- Location: street, city, state, country, postcode, coordinates, timezone
- Login credentials: username, password (plus salt, MD5/SHA1/SHA256 hashes), UUID
- ID number, nationality, registration date
- Profile pictures in thumbnail, medium, and large sizes

Requests can be tuned via query parameters such as `results` (up to 5,000 per call), `gender`, `nat` (nationality filter, e.g. `us,dk,fr,gb`), `seed` (reproducible output), `inc`/`exc` (field selection), `page`, and `format` (JSON, XML, CSV, YAML, PrettyJSON). No authentication is required and CORS is enabled, so the API can be called directly from the browser. The base endpoint is `https://randomuser.me/api/`, with a pinned version available at `https://randomuser.me/api/1.4/`.

## Try it

**TypeScript**
```bash
npm install random-user-generator
```

**Python**
```bash
pip install random-user-generator-sdk
```

**PHP**
```bash
composer require voxgig/random-user-generator-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/random-user-generator-sdk/go
```

**Ruby**
```bash
gem install random-user-generator-sdk
```

**Lua**
```bash
luarocks install random-user-generator-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RandomUserGeneratorSDK } from 'random-user-generator'

const client = new RandomUserGeneratorSDK({})

// List all getrandomusers
const getrandomusers = await client.GetRandomUser().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o random-user-generator-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "random-user-generator": {
      "command": "/abs/path/to/random-user-generator-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetRandomUser** | Fetches one or more randomly generated user profiles from `https://randomuser.me/api/`, with optional `results`, `gender`, `nat`, `seed`, `inc`, `exc`, `page`, and `format` query parameters. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from randomusergenerator_sdk import RandomUserGeneratorSDK

client = RandomUserGeneratorSDK({})

# List all getrandomusers
getrandomusers, err = client.GetRandomUser(None).list(None, None)
```

### PHP

```php
<?php
require_once 'randomusergenerator_sdk.php';

$client = new RandomUserGeneratorSDK([]);

// List all getrandomusers
[$getrandomusers, $err] = $client->GetRandomUser(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/random-user-generator-sdk/go"

client := sdk.NewRandomUserGeneratorSDK(map[string]any{})

// List all getrandomusers
getrandomusers, err := client.GetRandomUser(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RandomUserGenerator_sdk"

client = RandomUserGeneratorSDK.new({})

# List all getrandomusers
getrandomusers, err = client.GetRandomUser(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("random-user-generator_sdk")

local client = sdk.new({})

-- List all getrandomusers
local getrandomusers, err = client:GetRandomUser(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RandomUserGeneratorSDK.test()
const result = await client.GetRandomUser().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RandomUserGeneratorSDK.test(None, None)
result, err = client.GetRandomUser(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RandomUserGeneratorSDK::test(null, null);
[$result, $err] = $client->GetRandomUser(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetRandomUser(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RandomUserGeneratorSDK.test(nil, nil)
result, err = client.GetRandomUser(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetRandomUser(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Random User Generator

- Upstream: [https://randomuser.me/](https://randomuser.me/)
- API docs: [https://randomuser.me/documentation](https://randomuser.me/documentation)

- Free to use for testing, prototyping, and development.
- Profile photos are hand-picked from the authorized section of [UI Faces](https://uifaces.co/) — review their FAQ for photo usage terms.
- No API key or authentication is required.
- The service is community-maintained; check the project repository for the latest licence notes.

---

Generated from the Random User Generator OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
