import { Observable } from "rxjs/internal/Observable";
import { Loginrequest } from "../../dtos/user/LoginRequest";
import { LoginResponse } from "../../dtos/user/LoginResponse";
import { MessageResponse } from "../../dtos/user/MesssageResponse";
import { ProfileResponse } from "../../dtos/user/ProfileResponse";
import { RegisterRequest } from "../../dtos/user/RegisterRequest";

export interface IAuthenticationService {
    login$(request: Loginrequest): Observable<LoginResponse>;
    register$(request: RegisterRequest): Observable<MessageResponse>;
    profile$(): Observable<ProfileResponse>;
    isAuthenticated(): boolean;
    logout(): void;
}