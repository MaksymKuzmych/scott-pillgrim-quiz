import { Errors, Options, ISources, INews, Callback } from '../../types/index';

class Loader {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Options },
        callback: Callback<ISources | INews> = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (res.status !== Errors.OK) {
            if (res.status === Errors.Unauthorized || res.status === Errors.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: Callback<ISources | INews>, options: Options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: ISources | INews) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
