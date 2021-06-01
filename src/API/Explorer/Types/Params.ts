

export interface IAuctionParams extends Omit<SaleParams, 'state' | 'sort'> {
    state?: AuctionState[];
    sort?: AuctionSort;
}

export interface ISaleParams extends SearchParams {
    state?: SaleState[];
    max_assets?: number;
    show_blacklisted?: boolean;
    whitelisted_seller_only?: boolean;
    whitelisted_collections_only?: boolean;
    whitelisted_only?: boolean;
    marketplace?: string[];
    maker_marketplace?: string[];
    taker_marketplace?: string[];
    symbol?: string;
    seller?: string[];
    buyer?: string[];
    min_price?: number;
    max_price?: number;
    owner?: string;
    collection_name?: string;
    schema_name?: string;
    template_id?: number;
    match?: string;
    sort?: SaleSort;
}

export interface IAssetParams extends SearchParams {
    owner?: string;
    collection_name?: string;
    schema_name?: string;
    template_id?: number;
    authorized_account?: string;
    match?: string;
    sort?: AssetSort;
}

export interface IOfferParams extends SearchParams {
    account?: string[];
    sender?: string[];
    recipient?: string[];
    state?: OfferState[];
    is_recipient_contract?: boolean;
    asset_id?: string[];
    sort?: OfferSort;
}

export interface ITransferParams extends SearchParams {
    account?: string[];
    sender?: string[];
    recipient?: string[];
    asset_id?: string[];
    sort?: TransferSort;
}

export interface ISearchParams {
    order?: SortOrder;
}

export interface IPriceParams {
    collection_name?: string;
    template_id?: number;
    schema_name?: string;
    symbol?: string;
}
