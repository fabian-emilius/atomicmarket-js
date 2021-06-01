import { AuctionState, BuyofferState, OfferState, SaleState } from './Enums';

export interface Pair {
    listing_symbol: string;
    settlement_symbol: string;
    delphi_pair_name: string;
    invert_delphi_pair: boolean;
}


export interface IToken {
    token_precision: number;
    token_contract: string;
    token_symbol: string;
}

export interface IMarketplace {
    marketplace_name: string;
    creator: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IConfig {
    atomicassets_contract: string;
    atomicmarket_contract: string;
    delphioracle_contract: string;
    version: string;
    maker_market_fee: number;
    taker_market_fee: number;
    maximum_auction_duration: number;
    minimum_bid_increase: number;
    supported_tokens: Token[];
    supported_pairs: Pair[];
}

export interface ISale {
    market_contract: string;
    assets_contract: string;
    sale_id: string;
    seller: string;
    buyer: string;
    offer_id: string;
    price: Price;
    listing_symbol: string;
    listing_price: string;
    assets: Asset[];
    maker_marketplace: string;
    taker_marketplace: string;
    collection: LightCollection;
    sale_state: SaleState;
    offer_state: OfferState;
    is_seller_contract: string;
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IAuction {
    market_contract: string;
    assets_contract: string;
    auction_id: string;
    seller: string;
    buyer: string | null;
    price: Price;
    assets: Asset[];
    bids: Bid[];
    maker_marketplace: string;
    taker_marketplace: string;
    claimed_by_buyer: boolean;
    claimed_by_seller: boolean;
    collection: LightCollection;
    state: AuctionState;
    is_seller_contract: string;
    end_time: string;
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IBuyoffer {
    market_contract: string;
    assets_contract: string;
    auction_id: string;
    seller: string;
    buyer: string;
    price: IListingPrice;
    assets: Asset[];
    maker_marketplace: string;
    taker_marketplace: string;
    collection: LightCollection;
    state: BuyofferState;
    is_seller_contract: string;
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IListingPrice extends Token {
    amount: number;
}

export interface ListingAsset extends Asset {
    sales: Pick<Sale, 'market_contract' | 'sale_id'>[];
    auction: Pick<Auction, 'market_contract' | 'auction_id'>;
    prices: Array<{
        market_contract: string,
        token: Token,
        median: string,
        average: string,
        suggested_median: string,
        suggested_average: string,
        min: string,
        max: string,
        sales: string
    }>;
}

export interface IAssetLog {
    log_id: number;
    name: string;
    data: {[key: string]: any};
    txid: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IListingTransfer {
    contract: string;
    sender_name: string;
    recipient_name: string;
    memo: string;
    assets: ListingAsset[];
    created_at_block: string;
    created_at_time: string;
}

export interface IListingOffer {
    contract: string;
    offer_id: string;
    sender_name: string;
    recipient_name: string;
    memo: string;
    state: OfferState;
    is_sender_contract: boolean;
    is_recipient_contract: boolean;
    sender_assets: ListingAsset[];
    recipient_assets: ListingAsset[];
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
}

export interface IAsset {
    contract: string;
    asset_id: string;
    owner: string;
    name: string;
    is_transferable: boolean;
    is_burnable: boolean;
    template_mint: string;
    collection: LightCollection;
    schema: LightSchema;
    template: null | LightTemplate;
    backed_tokens: Array<{
        token_contract: string,
        token_symbol: string,
        token_precision: number,
        amount: string
    }>;
    immutable_data: {[key: string]: any};
    mutable_data: {[key: string]: any};
    data: {[key: string]: any};
    burned_by_account: string | null;
    burned_at_time: string | null;
    burned_at_block: string | null;
    transferred_at_time: string;
    transferred_at_block: string;
    updated_at_time: string;
    updated_at_block: string;
    minted_at_time: string;
    minted_at_block: string;
}

export interface ILightCollection {
    collection_name: string;
    name: string;
    author: string;
    allow_notify: boolean;
    authorized_accounts: string[];
    notify_accounts: string[];
    market_fee: number;
    created_at_block: string;
    created_at_time: string;
}

export interface ILightSchema {
    schema_name: string;
    format: SchemaFormat[];
    created_at_block: string;
    created_at_time: string;
}

export interface ISchemaFormat {
    name: string;
    type: string;
}

export interface ILightTemplate {
    template_id: string;
    max_supply: string;
    issued_supply: string;
    is_transferable: boolean;
    is_burnable: boolean;
    immutable_data: {[key: string]: any};
    created_at_block: string;
    created_at_time: string;
}

export interface IBid {
    number: number;
    account: string;
    amount: string;
    txid: string;
    created_at_block: string;
    created_at_time: string;
}
