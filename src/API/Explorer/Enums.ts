export enum AuctionState {
    Waiting = 0,
    Listed = 1,
    Canceled = 2,
    Sold = 3,
    Invalid = 4
}

export enum SaleState {
    Waiting = 0,
    Listed = 1,
    Canceled = 2,
    Sold = 3,
    Invalid = 4
}

export enum BuyofferState {
    Waiting = 0,
    Listed = 1,
    Canceled = 2,
    Sold = 3,
    Invalid = 4
}

export enum SortOrder {
    Asc = 'asc',
    Desc = 'desc'
}

export enum AuctionSort {
    Created = 'created',
    Updated = 'updated',
    Ending = 'ending',
    AuctionId = 'auction_id',
    Price = 'price',
    TemplateMint = 'template_mint'
}

export enum BuyofferSort {
    Created = 'created',
    Updated = 'updated',
    BuyofferId = 'buyoffer_id',
    Price = 'price',
    TemplateMint = 'template_mint'
}

export enum SaleSort {
    Created = 'created',
    Updated = 'updated',
    SaleId = 'sale_id',
    Price = 'price',
    TemplateMint = 'template_mint'
}

export enum AssetSort {
    AssetId = 'asset_id',
    Minted = 'minted',
    Updated = 'updated',
    TemplateMint = 'template_mint'
}

export enum TransferSort {
    Created = 'created'
}

export enum OfferSort {
    Created = 'created'
}
