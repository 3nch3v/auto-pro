import { Ad } from "./Ad";

export class AllAds {
    adsCount?: number;
    pagesCount?: number;
    page?: number; 
    previousPage?: number;
    nextPage?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    ads?: Ad[];
}