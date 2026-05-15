# RandomUserGenerator PHP SDK Reference

Complete API reference for the RandomUserGenerator PHP SDK.


## RandomUserGeneratorSDK

### Constructor

```php
require_once __DIR__ . '/random-user-generator_sdk.php';

$client = new RandomUserGeneratorSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RandomUserGeneratorSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = RandomUserGeneratorSDK::test();
```


### Instance Methods

#### `GetRandomUser($data = null)`

Create a new `GetRandomUserEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## GetRandomUserEntity

```php
$get_random_user = $client->GetRandomUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cell` | ``$STRING`` | No |  |
| `dob` | ``$OBJECT`` | No |  |
| `email` | ``$STRING`` | No |  |
| `gender` | ``$STRING`` | No |  |
| `id` | ``$OBJECT`` | No |  |
| `location` | ``$OBJECT`` | No |  |
| `login` | ``$OBJECT`` | No |  |
| `name` | ``$OBJECT`` | No |  |
| `nat` | ``$STRING`` | No |  |
| `phone` | ``$STRING`` | No |  |
| `picture` | ``$OBJECT`` | No |  |
| `registered` | ``$OBJECT`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->GetRandomUser()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetRandomUserEntity`

Create a new `GetRandomUserEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new RandomUserGeneratorSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

