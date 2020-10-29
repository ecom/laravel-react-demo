export interface Tag {
    id: number;
    slug: string;
    name: string;
    description: string;
    translations: TagTranslation[];
    created_at: string;
    updated_at: string;
}

export interface TagTranslation {
    id: number;
    tag_id: number;
    locale: string;
    name: string;
    description: string;
}
