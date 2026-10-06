import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Gift Card Endpoints
 */
export class GiftCard {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Buy a Binance Code (TRADE)
   *
   * @remarks
   * This API is for buying a fixed-value Binance Code, which means your Binance Code will be
   * redeemable to a token that is different to the token that you are paying in. If the token
   * you’re paying and the redeemable token are the same, please use the Create Binance Code
   * endpoint. You can use supported crypto currency or fiat token as baseToken to buy Binance Code
   * that is redeemable to your chosen faceToken. Once successfully purchased, the amount of
   * baseToken would be deducted from your funding wallet.
   *
   * To get started with, please make sure:
   * - You have a Binance account
   * - You have passed kyc
   * - You have a sufficient balance in your Binance funding wallet
   * - You need Enable Withdrawals for the API Key which requests this endpoint.
   *
   * Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H
   *
   * Weight(IP): 1
   *
   * @returns Code creation
   *
   * @throws {@link GiftCard.BuyABinanceCodeTradeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  buyABinanceCodeTrade(
    request: GiftCard.BuyABinanceCodeTradeRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardBuyCodeResponse, GiftCard.BuyABinanceCodeTradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/buyCode"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "baseToken", value: request.baseToken, schema: s.string() },
          { name: "faceToken", value: request.faceToken, schema: s.string() },
          { name: "baseTokenAmount", value: request.baseTokenAmount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardBuyCodeResponseSchema },
        errorFactory: GiftCard.BuyABinanceCodeTradeError,
      },
      options,
    );
  }

  /**
   * Create a Binance Code (USER_DATA)
   *
   * @remarks
   * This API is for creating a Binance Code. To get started with, please make sure:
   *
   * - You have a Binance account
   * - You have passed kyc
   * - You have a sufficient balance in your Binance funding wallet
   * - You need Enable Withdrawals for the API Key which requests this endpoint.
   *
   * Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H
   *
   * Weight(IP): 1
   *
   * @returns Code creation
   *
   * @throws {@link GiftCard.CreateABinanceCodeUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createABinanceCodeUserData(
    request: GiftCard.CreateABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardCreateCodeResponse, GiftCard.CreateABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/createCode"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardCreateCodeResponseSchema },
        errorFactory: GiftCard.CreateABinanceCodeUserDataError,
      },
      options,
    );
  }

  /**
   * Fetch RSA Public Key (USER_DATA)
   *
   * @remarks
   * This API is for fetching the RSA Public Key. This RSA Public key will be used to encrypt the
   * card code. Please note that the RSA Public key fetched is valid only for the current day.
   *
   * Weight(IP): 1
   *
   * @returns RSA Public Key.
   *
   * @throws {@link GiftCard.FetchRsaPublicKeyUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRsaPublicKeyUserData(
    request: GiftCard.FetchRsaPublicKeyUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardCryptographyRsaPublicKeyResponse, GiftCard.FetchRsaPublicKeyUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/cryptography/rsa-public-key"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardCryptographyRsaPublicKeyResponseSchema },
        errorFactory: GiftCard.FetchRsaPublicKeyUserDataError,
      },
      options,
    );
  }

  /**
   * Fetch Token Limit (USER_DATA)
   *
   * @remarks
   * This API is to help you verify which tokens are available for you to purchase fixed-value gift
   * cards as mentioned in section 2 and it's limitation.
   *
   * Weight(IP): 1
   *
   * @returns Token limit
   *
   * @throws {@link GiftCard.FetchTokenLimitUserDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTokenLimitUserData(
    request: GiftCard.FetchTokenLimitUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardBuyCodeTokenLimitResponse, GiftCard.FetchTokenLimitUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/buyCode/token-limit"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "baseToken", value: request.baseToken, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardBuyCodeTokenLimitResponseSchema },
        errorFactory: GiftCard.FetchTokenLimitUserDataError,
      },
      options,
    );
  }

  /**
   * Redeem a Binance Code (USER_DATA)
   *
   * @remarks
   * This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your
   * funding wallet.
   *
   * Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be
   * able to redeem any Binance Code that day.
   *
   * Weight(IP): 1
   *
   * @returns Redeemed Information
   *
   * @throws {@link GiftCard.RedeemABinanceCodeUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemABinanceCodeUserData(
    request: GiftCard.RedeemABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardRedeemCodeResponse, GiftCard.RedeemABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/redeemCode"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "code", value: request.code, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "externalUid", value: request.externalUid, schema: s.optional(s.string()) },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sapiV1GiftcardRedeemCodeResponseSchema },
        errorFactory: GiftCard.RedeemABinanceCodeUserDataError,
      },
      options,
    );
  }

  /**
   * Verify a Binance Code (USER_DATA)
   *
   * @remarks
   * This API is for verifying whether the Binance Code is valid or not by entering Binance Code or
   * reference number.
   *
   * Please note that if you enter the wrong binance code 5 times within an hour, you will no longer
   * be able to verify any binance code for that hour.
   *
   * Weight(IP): 1
   *
   * @returns Code Verification
   *
   * @throws {@link GiftCard.VerifyABinanceCodeUserDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BinanceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyABinanceCodeUserData(
    request: GiftCard.VerifyABinanceCodeUserDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SapiV1GiftcardVerifyResponse, GiftCard.VerifyABinanceCodeUserDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sapi/v1/giftcard/verify"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "referenceNo", value: request.referenceNo, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.int() },
          { name: "signature", value: request.signature, schema: s.string() },
          { name: "recvWindow", value: request.recvWindow, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /** The token you want to pay, example BUSD */
    baseToken: string;
    /**
     * The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode
     * endpoint.
     */
    faceToken: string;
    /** The base token asset quantity, example 1.002 */
    baseTokenAmount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class BuyABinanceCodeTradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<BuyABinanceCodeTradeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateABinanceCodeUserDataRequest = {
    /** The coin type contained in the Binance Code */
    token: string;
    /** The amount of the coin */
    amount: number;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class CreateABinanceCodeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchRsaPublicKeyUserDataRequest = {
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FetchRsaPublicKeyUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FetchRsaPublicKeyUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchTokenLimitUserDataRequest = {
    /** The token you want to pay, example BUSD */
    baseToken: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class FetchTokenLimitUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<FetchTokenLimitUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RedeemABinanceCodeUserDataRequest = {
    /** Binance Code */
    code: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /**
     * Each external unique ID represents a unique user on the partner platform. The function helps
     * you to identify the redemption behavior of different users, such as redemption frequency and
     * amount. It also helps risk and limit control of a single account, such as daily limit on
     * redemption volume, frequency, and incorrect number of entries. This will also prevent a
     * single user account reach the partner's daily redemption limits. We strongly recommend you to
     * use this feature and transfer us the User ID of your users if you have different users
     * redeeming Binance codes on your platform. To protect user data privacy, you may choose to
     * transfer the user id in any desired format (max. 400 characters).
     */
    externalUid?: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class RedeemABinanceCodeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<RedeemABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VerifyABinanceCodeUserDataRequest = {
    /** reference number */
    referenceNo: string;
    /** UTC timestamp in ms */
    timestamp: number;
    /** Signature */
    signature: string;
    /** The value cannot be greater than 60000 */
    recvWindow?: number;
  };

  export class VerifyABinanceCodeUserDataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<VerifyABinanceCodeUserDataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
