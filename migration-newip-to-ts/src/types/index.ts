export interface New {
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

export interface News {
    status: string;
    totalResults: number;
    articles: Array<New>;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Sources {
    status: string;
    sources: Array<Source>;
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
