import { Observable } from "rxjs/internal/Observable";
import { AdResponse } from "../../dtos/ad/AdResponse";
import { CreateAdRequest } from "../../dtos/ad/CreateAdRequest";
import { MessageResponse } from "../../dtos/user/MesssageResponse";

export interface IAdService {
    getRandomAds$() : Observable<AdResponse[]>;
    create$(request: CreateAdRequest): Observable<MessageResponse>;
}