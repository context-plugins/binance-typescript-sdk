<!-- Generated file — do not edit; regenerated with the SDK. -->

# IsolatedMarginStream — operations

Accessor: `client.isolatedMarginStream` · Source: `src/resources/isolated-margin-stream.ts` · 3 operations · Request and error types: namespace `IsolatedMarginStream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closeAListenKeyUserStream3

- **Signature**: `closeAListenKeyUserStream3(request: IsolatedMarginStream.CloseAListenKeyUserStream3Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, IsolatedMarginStream.CloseAListenKeyUserStream3Error>`
- **Wire**: `DELETE /sapi/v1/userDataStream/isolated`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `IsolatedMarginStream.CloseAListenKeyUserStream3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IsolatedMarginStream.CloseAListenKeyUserStream3Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### generateAListenKeyUserStream

- **Signature**: `generateAListenKeyUserStream(options?: RequestOptions): ApiPromise<SapiV1UserDataStreamIsolatedResponse, ApiError>`
- **Wire**: `POST /sapi/v1/userDataStream/isolated`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SapiV1UserDataStreamIsolatedResponse`
- **Error**: `BinanceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1UserDataStreamIsolatedResponse` | `sapiV1UserDataStreamIsolatedResponseSchema` | `src/models/sapi-v1-user-data-stream-isolated-response.ts` |

### pingKeepAliveAListenKeyUserStream

- **Signature**: `pingKeepAliveAListenKeyUserStream(request: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError>`
- **Wire**: `PUT /sapi/v1/userDataStream/isolated`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

