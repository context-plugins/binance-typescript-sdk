<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rebate — operations

Accessor: `client.rebate` · Source: `src/resources/rebate.ts` · 1 operation · Request and error types: namespace `Rebate`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `binance`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSpotRebateHistoryRecordsUserData

- **Signature**: `getSpotRebateHistoryRecordsUserData(request: Rebate.GetSpotRebateHistoryRecordsUserDataRequest, options?: RequestOptions): ApiPromise<SapiV1RebateTaxQueryResponse, Rebate.GetSpotRebateHistoryRecordsUserDataError>`
- **Wire**: `GET /sapi/v1/rebate/taxQuery`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SapiV1RebateTaxQueryResponse`
- **Error**: `BinanceError` with `kind: "api"`, an instance of `Rebate.GetSpotRebateHistoryRecordsUserDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rebate.GetSpotRebateHistoryRecordsUserDataRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `number` | yes |
| `signature` | `query` | `string` | yes |
| `startTime` | `query` | `number` | no |
| `endTime` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `recvWindow` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SapiV1RebateTaxQueryResponse` | `sapiV1RebateTaxQueryResponseSchema` | `src/models/sapi-v1-rebate-tax-query-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

