export interface INew {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string;
    totalResults?: number;
    articles?: INew[];
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISources {
    status: string;
    sources?: ISource[];
}

export enum Errors {
    OK = 200,
    Unauthorized = 401,
    NotFound = 404,
}

export type Options = {
    [key: string]: string;
};

export type Callback<T> = (data: T) => void;
