<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarginStream — operations

Accessor: `client.marginStream` · Source: `src/resources/margin-stream.ts` · 3 operations · Request and error types: namespace `MarginStream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance-public-spot-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### closeAListenKeyUserStream2

- **Signature**: `closeAListenKeyUserStream2(request: MarginStream.CloseAListenKeyUserStream2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, MarginStream.CloseAListenKeyUserStream2Error>`
- **Wire**: `DELETE /sapi/v1/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `MarginStream.CloseAListenKeyUserStream2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarginStream.CloseAListenKeyUserStream2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createAListenKeyUserStream2

- **Signature**: `createAListenKeyUserStream2(options?: RequestOptions): ApiPromise<SapiV1UserDataStreamResponse, ResponseError>`
- **Wire**: `POST /sapi/v1/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1UserDataStreamResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1UserDataStreamResponse` | `sapiV1UserDataStreamResponseSchema` | `src/models/sapi-v1-user-data-stream-response.ts` |

### pingKeepAliveAListenKeyUserStream2

- **Signature**: `pingKeepAliveAListenKeyUserStream2(request: MarginStream.PingKeepAliveAListenKeyUserStream2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, MarginStream.PingKeepAliveAListenKeyUserStream2Error>`
- **Wire**: `PUT /sapi/v1/userDataStream`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `MarginStream.PingKeepAliveAListenKeyUserStream2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarginStream.PingKeepAliveAListenKeyUserStream2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `listenKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

