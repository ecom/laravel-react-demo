import { Image } from "./image";
import { Model } from "./model";

export interface User extends Model {
    name: string;
    avatar_id?: number;
    avatar?: Image;
    portrait_id?: number;
    portrait?: Image;
    location?: string;
}
