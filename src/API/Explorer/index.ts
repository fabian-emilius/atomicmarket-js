import ApiError from '../../Errors/ApiError';

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



    async fetchEndpoint(path: string, args: any): Promise<any> {
        let response;

        const f = this.fetchBuiltin;
        const queryString = Object.keys(args).map((key) => {
            return key + '=' + encodeURIComponent(args[key]);
        }).join('&');

        try {
            response = await f(this.endpoint + '/' + this.namespace + path + (queryString.length > 0 ? '?' + queryString : ''));
        } catch (e) {
            throw new ApiError(e.message, 500);
        }

        const json = await response.json();

        if (response.status !== 200) {
            throw new ApiError(json.message, response.status);
        }

        if (!json.success) {
            throw new ApiError(json.message, response.status);
        }

        return json.data;
    }
}
