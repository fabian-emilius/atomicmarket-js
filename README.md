# AtomicMarket JavaScript

JS Library to read data from the atomicmarket contract which is based on the atomicassets NFT standard.

Contract / General Documentation can be found on [https://github.com/pinknetworkx/atomicmarket-contract/wiki](https://github.com/pinknetworkx/atomicmarket-contract/wiki)

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install atomicmarket
```

### Initialize

Web library can be found in the [dist](https://github.com/pinknetworkx/atomicmarket-js/blob/master/dist/atomicmarket.js) folder

```javascript
// standard import
const {ExplorerApi} = require("atomicmarket");
// ES6 import
import {ExplorerApi} from "atomicmarket"
```

## Documentation

There are two methods available to fetch data from the blockchain.

* **ExplorerAPI**: uses an hosted API which proves simple and fast REST API endpoints
* **RpcAPI**: uses only native nodeos calls

### Explorer API

The explorer API uses [eosio-contract-api](https://github.com/pinknetworkx/eosio-contract-api) to query data about the NFTs. 
A documentation of each endpoint and its responses can be found [here](https://wax-test.api.atomicassets.io/atomicmarket/docs/swagger).
It is recommended to self-host the API for the best performance.


#### Example
```javascript
// init Explorer Api
// endpoint: server where atomicmarket api is deployed
// namespace: used namespace for the API
// options:
// - fetch: either node-fetch module or the browser equivalent
const api = new ExplorerApi("https://test.wax.api.atomicassets.io", "atomicmarket", {fetch});

const asset = await api.getSale("100");
```

#### Methods

Currently missing

#### Types

Each method returns the unmodified response from the API call. For more information look at the Models 
on [the documentation](https://test.wax.api.atomicassets.io/atomicmarket/docs/swagger)

### RpcApi

Coming eventually
