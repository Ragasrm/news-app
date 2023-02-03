export type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}

type Pagination = {
    count: Number;
    limit: Number;
    offset: Number;
    total: Number
};

export type NewsResponse = {
    pagination: Pagination;
    data: Article[];
};

export type Category =
    | "Genaral"
    | "Business" 
    | "Entertainment" 
    | "health" 
    | "science" 
    | "sports" 
    | "technology"