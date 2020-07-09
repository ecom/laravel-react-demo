import axios from "axios";
import { User } from "../types/user";

export function login(email: string, password: string, remember: boolean) {
    return axios.post<User>("/login", {
        email,
        password,
        remember
    });
}

export function logout() {
    return axios.post("/logout");
}

export function register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
) {
    return axios.post<User>("/register", {
        name,
        email,
        password,
        password_confirmation
    });
}

export function resendEmail() {
    return axios.post("/email/resend");
}
