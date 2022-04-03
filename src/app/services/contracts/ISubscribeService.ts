import { Observable } from "rxjs";
import { MessageResponse } from "src/app/dtos/user/MesssageResponse";
import { SubscribeRequest } from "src/app/dtos/user/SubscribeRequest";

export interface ISubscribeService {
    subscribe$(request: SubscribeRequest) : Observable<MessageResponse>
}