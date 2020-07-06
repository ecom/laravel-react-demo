import { Model } from "./model";
import { User } from "./user";

export interface Image extends Model {
    user_id: number;
    user?: User;
    file_path: string;
    file_path_large: string;
    file_path_medium: string;
    file_path_small: string;
    file_url: string;
    file_url_large: string;
    file_url_medium: string;
    file_url_small: string;
}
