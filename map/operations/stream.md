<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stream — operations

Accessor: `client.stream` · Source: `src/resources/stream.ts` · 3 operations · Request and error types: namespace `Stream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closeAListenKeyUserStream

- **Signature**: `closeAListenKeyUserStream(request: Stream.CloseAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Stream.CloseAListenKeyUserStreamError>`
- **Wire**: `DELETE /api/v3/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Stream.CloseAListenKeyUserStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stream.CloseAListenKeyUserStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createAListenKeyUserStream

- **Signature**: `createAListenKeyUserStream(options?: RequestOptions): ApiPromise<ApiV3UserDataStreamResponse, ApiError>`
- **Wire**: `POST /api/v3/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV3UserDataStreamResponse`
- **Error**: `BinanceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV3UserDataStreamResponse` | `apiV3UserDataStreamResponseSchema` | `src/models/api-v3-user-data-stream-response.ts` |

### pingKeepAliveAListenKeyUserStream

- **Signature**: `pingKeepAliveAListenKeyUserStream(request: Stream.PingKeepAliveAListenKeyUserStreamRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Stream.PingKeepAliveAListenKeyUserStreamError>`
- **Wire**: `PUT /api/v3/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Stream.PingKeepAliveAListenKeyUserStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stream.PingKeepAliveAListenKeyUserStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

