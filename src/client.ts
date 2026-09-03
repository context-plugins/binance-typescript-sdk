import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { AutoInvest } from "./resources/auto-invest.js";
import { Blvt } from "./resources/blvt.js";
import { C2C } from "./resources/c2-c.js";
import { Convert } from "./resources/convert.js";
import { CopyTrading } from "./resources/copy-trading.js";
import { CryptoLoans } from "./resources/crypto-loans.js";
import { DualInvestment } from "./resources/dual-investment.js";
import { Fiat } from "./resources/fiat.js";
import { FuturesAlgo } from "./resources/futures-algo.js";
import { Futures } from "./resources/futures.js";
import { GiftCard } from "./resources/gift-card.js";
import { IsolatedMarginStream } from "./resources/isolated-margin-stream.js";
import { MarginStream } from "./resources/margin-stream.js";
import { Margin } from "./resources/margin.js";
import { Market } from "./resources/market.js";
import { Mining } from "./resources/mining.js";
import { Nft } from "./resources/nft.js";
import { Pay } from "./resources/pay.js";
import { PortfolioMargin } from "./resources/portfolio-margin.js";
import { Rebate } from "./resources/rebate.js";
import { Savings } from "./resources/savings.js";
import { SimpleEarn } from "./resources/simple-earn.js";
import { SpotAlgo } from "./resources/spot-algo.js";
import { Staking } from "./resources/staking.js";
import { Stream } from "./resources/stream.js";
import { SubAccountApi } from "./resources/sub-account-api.js";
import { TradeApi } from "./resources/trade-api.js";
import { VipLoans } from "./resources/vip-loans.js";
import { Wallet } from "./resources/wallet.js";
import { buildServers, type Servers } from "./servers.js";

export class BinancePublicSpotApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #market?: Market;
  #tradeApi?: TradeApi;
  #margin?: Margin;
  #wallet?: Wallet;
  #subAccountApi?: SubAccountApi;
  #stream?: Stream;
  #marginStream?: MarginStream;
  #isolatedMarginStream?: IsolatedMarginStream;
  #savings?: Savings;
  #mining?: Mining;
  #futures?: Futures;
  #futuresAlgo?: FuturesAlgo;
  #spotAlgo?: SpotAlgo;
  #portfolioMargin?: PortfolioMargin;
  #blvt?: Blvt;
  #fiat?: Fiat;
  #c2C?: C2C;
  #vipLoans?: VipLoans;
  #cryptoLoans?: CryptoLoans;
  #pay?: Pay;
  #convert?: Convert;
  #rebate?: Rebate;
  #nft?: Nft;
  #giftCard?: GiftCard;
  #autoInvest?: AutoInvest;
  #copyTrading?: CopyTrading;
  #simpleEarn?: SimpleEarn;
  #staking?: Staking;
  #dualInvestment?: DualInvestment;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get market(): Market {
    return (this.#market ??= new Market(this.#rawClient, this.#servers));
  }

  get tradeApi(): TradeApi {
    return (this.#tradeApi ??= new TradeApi(this.#rawClient, this.#servers, this.#auth));
  }

  get margin(): Margin {
    return (this.#margin ??= new Margin(this.#rawClient, this.#servers, this.#auth));
  }

  get wallet(): Wallet {
    return (this.#wallet ??= new Wallet(this.#rawClient, this.#servers, this.#auth));
  }

  get subAccountApi(): SubAccountApi {
    return (this.#subAccountApi ??= new SubAccountApi(this.#rawClient, this.#servers, this.#auth));
  }

  get stream(): Stream {
    return (this.#stream ??= new Stream(this.#rawClient, this.#servers, this.#auth));
  }

  get marginStream(): MarginStream {
    return (this.#marginStream ??= new MarginStream(this.#rawClient, this.#servers, this.#auth));
  }

  get isolatedMarginStream(): IsolatedMarginStream {
    return (this.#isolatedMarginStream ??= new IsolatedMarginStream(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get savings(): Savings {
    return (this.#savings ??= new Savings(this.#rawClient, this.#servers, this.#auth));
  }

  get mining(): Mining {
    return (this.#mining ??= new Mining(this.#rawClient, this.#servers, this.#auth));
  }

  get futures(): Futures {
    return (this.#futures ??= new Futures(this.#rawClient, this.#servers, this.#auth));
  }

  get futuresAlgo(): FuturesAlgo {
    return (this.#futuresAlgo ??= new FuturesAlgo(this.#rawClient, this.#servers, this.#auth));
  }

  get spotAlgo(): SpotAlgo {
    return (this.#spotAlgo ??= new SpotAlgo(this.#rawClient, this.#servers, this.#auth));
  }

  get portfolioMargin(): PortfolioMargin {
    return (this.#portfolioMargin ??= new PortfolioMargin(this.#rawClient, this.#servers, this.#auth));
  }

  get blvt(): Blvt {
    return (this.#blvt ??= new Blvt(this.#rawClient, this.#servers, this.#auth));
  }

  get fiat(): Fiat {
    return (this.#fiat ??= new Fiat(this.#rawClient, this.#servers, this.#auth));
  }

  get c2C(): C2C {
    return (this.#c2C ??= new C2C(this.#rawClient, this.#servers, this.#auth));
  }

  get vipLoans(): VipLoans {
    return (this.#vipLoans ??= new VipLoans(this.#rawClient, this.#servers, this.#auth));
  }

  get cryptoLoans(): CryptoLoans {
    return (this.#cryptoLoans ??= new CryptoLoans(this.#rawClient, this.#servers, this.#auth));
  }

  get pay(): Pay {
    return (this.#pay ??= new Pay(this.#rawClient, this.#servers, this.#auth));
  }

  get convert(): Convert {
    return (this.#convert ??= new Convert(this.#rawClient, this.#servers, this.#auth));
  }

  get rebate(): Rebate {
    return (this.#rebate ??= new Rebate(this.#rawClient, this.#servers, this.#auth));
  }

  get nft(): Nft {
    return (this.#nft ??= new Nft(this.#rawClient, this.#servers, this.#auth));
  }

  get giftCard(): GiftCard {
    return (this.#giftCard ??= new GiftCard(this.#rawClient, this.#servers, this.#auth));
  }

  get autoInvest(): AutoInvest {
    return (this.#autoInvest ??= new AutoInvest(this.#rawClient, this.#servers, this.#auth));
  }

  get copyTrading(): CopyTrading {
    return (this.#copyTrading ??= new CopyTrading(this.#rawClient, this.#servers, this.#auth));
  }

  get simpleEarn(): SimpleEarn {
    return (this.#simpleEarn ??= new SimpleEarn(this.#rawClient, this.#servers, this.#auth));
  }

  get staking(): Staking {
    return (this.#staking ??= new Staking(this.#rawClient, this.#servers, this.#auth));
  }

  get dualInvestment(): DualInvestment {
    return (this.#dualInvestment ??= new DualInvestment(this.#rawClient, this.#servers, this.#auth));
  }
}
