import axios from "axios";
import { Image } from "../types/image";

export function upload(
    image: File,
    x?: number,
    y?: number,
    width?: number,
    height?: number
) {
    const data = new FormData();
    data.append("image", image);
    if (
        typeof x === "number" &&
        x >= 0 &&
        typeof y === "number" &&
        y >= 0 &&
        typeof width === "number" &&
        width >= 0 &&
        typeof height === "number" &&
        height >= 0
    ) {
        data.append("x", x.toString());
        data.append("y", y.toString());
        data.append("width", width.toString());
        data.append("height", height.toString());
    }
    return axios.post<Image>("/api/images", data);
}
