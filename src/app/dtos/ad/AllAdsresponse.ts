import { AdResponse } from "./AdResponse";

export class AllAdsResponse {
    adsCount?: number;
    pagesCount?: number;
    page?: number; 
    previousPage?: number;
    nextPage?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    ads?: AdResponse[];
}