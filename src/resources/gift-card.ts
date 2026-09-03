import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sapiV1GiftcardBuyCodeResponseSchema,
  type SapiV1GiftcardBuyCodeResponse,
} from "../models/sapi-v1-giftcard-buy-code-response.js";
import {
  sapiV1GiftcardBuyCodeTokenLimitResponseSchema,
  type SapiV1GiftcardBuyCodeTokenLimitResponse,
} from "../models/sapi-v1-giftcard-buy-code-token-limit-response.js";
import {
  sapiV1GiftcardCreateCodeResponseSchema,
  type SapiV1GiftcardCreateCodeResponse,
} from "../models/sapi-v1-giftcard-create-code-response.js";
import {
  sapiV1GiftcardCryptographyRsaPublicKeyResponseSchema,
  type SapiV1GiftcardCryptographyRsaPublicKeyResponse,
} from "../models/sapi-v1-giftcard-cryptography-rsa-public-key-response.js";
import {
  sapiV1GiftcardRedeemCodeResponseSchema,
  type SapiV1GiftcardRedeemCodeResponse,
} from "../models/sapi-v1-giftcard-redeem-code-response.js";
import {
  sapiV1GiftcardVerifyResponseSchema,
  type SapiV1GiftcardVerifyResponse,
} from "../models/sapi-v1-giftcard-verify-response.js";
import type { Servers } from "../servers.js";

export class GiftCard {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  buyABinanceCodeTrade(
    request: GiftCard.BuyABinanceCodeTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardBuyCodeResponse, GiftCard.BuyABinanceCodeTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/giftcard/buyCode"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "baseToken", value: request.baseToken, schema: s.string() },
          { name: "faceToken", value: request.faceToken, schema: s.string() },
          { name: "baseTokenAmount", value: request.baseTokenAmount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardBuyCodeResponseSchema },
        errorFactory: GiftCard.BuyABinanceCodeTradeError,
      },
      options,
    );
  }

  createABinanceCodeUserData(
    request: GiftCard.CreateABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardCreateCodeResponse, GiftCard.CreateABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/giftcard/createCode"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.number() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardCreateCodeResponseSchema },
        errorFactory: GiftCard.CreateABinanceCodeUserDataError,
      },
      options,
    );
  }

  fetchRsaPublicKeyUserData(
    request: GiftCard.FetchRsaPublicKeyUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardCryptographyRsaPublicKeyResponse, GiftCard.FetchRsaPublicKeyUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/giftcard/cryptography/rsa-public-key"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardCryptographyRsaPublicKeyResponseSchema },
        errorFactory: GiftCard.FetchRsaPublicKeyUserDataError,
      },
      options,
    );
  }

  fetchTokenLimitUserData(
    request: GiftCard.FetchTokenLimitUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardBuyCodeTokenLimitResponse, GiftCard.FetchTokenLimitUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/giftcard/buyCode/token-limit"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "baseToken", value: request.baseToken, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardBuyCodeTokenLimitResponseSchema },
        errorFactory: GiftCard.FetchTokenLimitUserDataError,
      },
      options,
    );
  }

  redeemABinanceCodeUserData(
    request: GiftCard.RedeemABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardRedeemCodeResponse, GiftCard.RedeemABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sapi/v1/giftcard/redeemCode"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "code", value: request.code, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "externalUid", value: request.externalUid, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardRedeemCodeResponseSchema },
        errorFactory: GiftCard.RedeemABinanceCodeUserDataError,
      },
      options,
    );
  }

  verifyABinanceCodeUserData(
    request: GiftCard.VerifyABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardVerifyResponse, GiftCard.VerifyABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/sapi/v1/giftcard/verify"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "referenceNo", value: request.referenceNo, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardVerifyResponseSchema },
        errorFactory: GiftCard.VerifyABinanceCodeUserDataError,
      },
      options,
    );
  }
}

export namespace GiftCard {
  export type BuyABinanceCodeTradeRequest = {
    baseToken: string;
    faceToken: string;
    baseTokenAmount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class BuyABinanceCodeTradeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<BuyABinanceCodeTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateABinanceCodeUserDataRequest = {
    token: string;
    amount: number;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class CreateABinanceCodeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchRsaPublicKeyUserDataRequest = {
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FetchRsaPublicKeyUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FetchRsaPublicKeyUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchTokenLimitUserDataRequest = {
    baseToken: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class FetchTokenLimitUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<FetchTokenLimitUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemABinanceCodeUserDataRequest = {
    code: string;
    timestamp: number;
    signature: string;
    externalUid?: string;
    recvWindow?: number;
  };

  export class RedeemABinanceCodeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<RedeemABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VerifyABinanceCodeUserDataRequest = {
    referenceNo: string;
    timestamp: number;
    signature: string;
    recvWindow?: number;
  };

  export class VerifyABinanceCodeUserDataError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<VerifyABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
