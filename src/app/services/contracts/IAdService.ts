import { Observable } from "rxjs/internal/Observable";
import { Ad } from "../../dtos/ad/Ad";
import { CreateAdRequest } from "../../dtos/ad/CreateAdRequest";
import { MessageResponse } from "../../dtos/user/MesssageResponse";

export interface IAdService {
    getRandomAds$() : Observable<Ad[]>;
    create$(request: CreateAdRequest): Observable<MessageResponse>;
}