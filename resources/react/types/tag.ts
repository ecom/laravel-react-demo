import { Model } from "./model";

export interface Tag extends Model {
    slug: string;
    name: string;
    description: string;
    translations: TagTranslation[];
}

export interface TagTranslation extends Model {
    tag_id: number;
    locale: string;
    name: string;
    description: string;
}
