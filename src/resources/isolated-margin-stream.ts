import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1UserDataStreamIsolatedResponseSchema,
  type SapiV1UserDataStreamIsolatedResponse,
} from "../models/sapi-v1-user-data-stream-isolated-response.js";
import type { Servers } from "../servers.js";

/**
 * Isolated User Data Stream
 */
export class IsolatedMarginStream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close a ListenKey (USER_STREAM)
   *
   * @remarks
   * Close out a user data stream.
   *
   * Weight: 1
   *
   * @returns OK
   *
   * @throws {@link IsolatedMarginStream.CloseAListenKeyUserStream3Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closeAListenKeyUserStream3(
    request: IsolatedMarginStream.CloseAListenKeyUserStream3Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, IsolatedMarginStream.CloseAListenKeyUserStream3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: IsolatedMarginStream.CloseAListenKeyUserStream3Error,
      },
      options,
    );
  }

  /**
   * Generate a Listen Key (USER_STREAM)
   *
   * @remarks
   * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is
   * sent. If the account has an active `listenKey`, that `listenKey` will be returned and its
   * validity will be extended for 60 minutes.
   *
   * Weight: 1
   *
   * @returns Isolated margin listen key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateAListenKeyUserStream(
    options?: RequestOptions,
  ): ApiPromise<SapiV1UserDataStreamIsolatedResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1UserDataStreamIsolatedResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Ping/Keep-alive a Listen Key (USER_STREAM)
   *
   * @remarks
   * Keepalive a user data stream to prevent a time out. User data streams will close after 60
   * minutes. It's recommended to send a ping about every 30 minutes.
   *
   * Weight: 1
   *
   * @returns OK
   *
   * @throws {@link IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pingKeepAliveAListenKeyUserStream(
    request: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sapi/v1/userDataStream/isolated"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "listenKey", value: request.listenKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: IsolatedMarginStream.PingKeepAliveAListenKeyUserStreamError,
      },
      options,
    );
  }
}

export namespace IsolatedMarginStream {
  export type CloseAListenKeyUserStream3Request = {
    /** User websocket listen key */
    listenKey?: string;
  };

  export class CloseAListenKeyUserStream3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<CloseAListenKeyUserStream3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PingKeepAliveAListenKeyUserStreamRequest = {
    /** User websocket listen key */
    listenKey?: string;
  };

  export class PingKeepAliveAListenKeyUserStreamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<PingKeepAliveAListenKeyUserStreamError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
