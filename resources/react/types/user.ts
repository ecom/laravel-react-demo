import { Image } from "./image";
import { Model } from "./model";
import { Tag } from "./tag";

export interface User extends Model {
    name: string;
    avatar_id: number | null;
    avatar: Image | null;
    portrait_id: number | null;
    portrait: Image | null;
    location: string | null;
    email_verified_at: string | null;
    tags: Tag[];
}
