export interface GetRandomUser {
    cell?: string;
    dob?: Record<string, any>;
    email?: string;
    gender?: string;
    id?: Record<string, any>;
    location?: Record<string, any>;
    login?: Record<string, any>;
    name?: Record<string, any>;
    nat?: string;
    phone?: string;
    picture?: Record<string, any>;
    registered?: Record<string, any>;
}
export interface GetRandomUserListMatch {
    exc?: string;
    format?: string;
    gender?: string;
    inc?: string;
    nat?: string;
    page?: number;
    result?: number;
    seed?: string;
}
