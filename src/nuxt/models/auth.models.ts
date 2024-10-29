export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

export interface LoginRequest {
    email: string;
    password: string;

}

export interface LoginResponse {
    ok: boolean;
    data: {
        user: {
            id: number;
            email: string;
            name: string;
        },
        access_token: string;
        refresh_token: string;
    }
}

export interface GetUserResponse {
    ok: boolean;
    data: {
        user: User
    }
}
