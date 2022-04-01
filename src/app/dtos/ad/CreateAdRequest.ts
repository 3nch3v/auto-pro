export class CreateAdRequest {
    title?:string;
    description?:string;
    contact?:string;
    make?: string;
    model?: string;
    price?: number;
    kilometers?: number;
    horsePower?: number;
    year?: number;
    pictureUrl?: string;
}