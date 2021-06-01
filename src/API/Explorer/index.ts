import ApiError from '../../Errors/ApiError';
import {
    AssetLog,
    AssetParams,
    Auction,
    AuctionParams,
    Config, ListingAsset, ListingOffer, ListingTransfer,
    Marketplace, OfferParams,
    Price,
    PriceParams,
    Sale,
    SaleParams, TransferParams
} from './Types';

type Fetch = (input?: Request | string, init?: RequestInit) => Promise<Response>;
type ApiArgs = { fetch?: Fetch, rateLimit?: number };

export default class ExplorerApi {
    private readonly endpoint: string;
    private readonly namespace: string;

    private readonly fetchBuiltin: Fetch;

    constructor(endpoint: string, namespace: string, args: ApiArgs) {
        this.endpoint = endpoint;
        this.namespace = namespace;

        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        } else {
            this.fetchBuiltin = (<any>global).fetch;
        }
    }

    async getSales(options: SaleParams & {[key: string]: any} = {}, page: number = 1, limit: number = 100, data: {[key: string]: any} = {}): Promise<Sale[]> {
        const dataKeys = Object.keys(data);

        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }

        return await this.fetchEndpoint('/v1/sales', {page, limit, ...options});
    }

    async getSale(id: string): Promise<Sale> {
        return await this.fetchEndpoint('/v1/sales/' + id, {});
    }

    async getAuctions(
        options: AuctionParams & {[key: string]: any} = {}, page: number = 1, limit: number = 100, data: {[key: string]: any} = {}
    ): Promise<Auction[]> {
        const dataKeys = Object.keys(data);

        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }

        return await this.fetchEndpoint('/v1/auctions', {page, limit, ...options});
    }

    async getAuction(id: string): Promise<Auction> {
        return await this.fetchEndpoint('/v1/auctions/' + id, {});
    }

    async getMarketplaces(): Promise<Marketplace[]> {
        return await this.fetchEndpoint('/v1/marketplaces', {});
    }

    async getMarketplace(name: string): Promise<Marketplace> {
        return await this.fetchEndpoint('/v1/marketplaces/' + name, {});
    }

    async getPrices(options: PriceParams = {}): Promise<Price[]> {
        return await this.fetchEndpoint('/v1/prices', options);
    }

    async getConfig(): Promise<Config> {
        return await this.fetchEndpoint('/v1/config', {});
    }

    async getAssets(
        options: AssetParams & {[key: string]: any} = {}, page: number = 1, limit: number = 100, data: { [key: string]: any} = {}
    ): Promise<ListingAsset[]> {
        const dataKeys = Object.keys(data);

        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }

        return await this.fetchEndpoint('/v1/assets', {page, limit, ...options});
    }

    async getAsset(id: string): Promise<ListingAsset> {
        return await this.fetchEndpoint('/v1/assets/' + id, {});
    }

    async getAssetLogs(id: string, page: number = 1, limit: number = 100, order: string = 'desc'): Promise<AssetLog[]> {
        return await this.fetchEndpoint('/v1/assets/' + id + '/logs', {page, limit, order});
    }

    async getTransfers(options: TransferParams = {}, page: number = 1, limit: number = 100): Promise<ListingTransfer[]> {
        return await this.fetchEndpoint('/v1/transfers', {page, limit, ...options});
    }

    async getOffers(options: OfferParams = {}, page: number = 1, limit: number = 100): Promise<ListingOffer[]> {
        return await this.fetchEndpoint('/v1/offers', {page, limit, ...options});
    }

    async getOffer(id: string): Promise<ListingOffer> {
        return await this.fetchEndpoint('/v1/offers/' + id, {});
    }

    async fetchEndpoint(path: string, args: any): Promise<any> {
        let response, json;

        const f = this.fetchBuiltin;
        const queryString = Object.keys(args).map((key) => {
            return key + '=' + encodeURIComponent(args[key]);
        }).join('&');

        try {
            response = await f(this.endpoint + '/' + this.namespace + path + (queryString.length > 0 ? '?' + queryString : ''));

            json = await response.json()
        } catch (e) {
            throw new ApiError(e.message, 500);
        }

        if (response.status !== 200) {
            throw new ApiError(json.message, response.status);
        }

        if (!json.success) {
            throw new ApiError(json.message, response.status);
        }

        return json.data;
    }
}
