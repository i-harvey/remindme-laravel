import { API_ENDPOINTS } from "~/consts";
import type { FetchErrorOverride, LoginRequest, LoginResponse, GetUserResponse } from "~/models";
import type { FetchError } from 'ofetch';

export function useApi() {
    const config = useRuntimeConfig();
    const xsrfToken = useCookie('XSRF-TOKEN');

    function fetch<T>(request: any, opts: any) {
        return $fetch<T>(request, {
            baseURL: config.public.baseURL,
            credentials: 'include',
            headers: [
                ['X-XSRF-TOKEN', xsrfToken.value ?? '']
            ],
            ...opts
        });
    }

    function getErrorMsg(err: unknown, overrides?: FetchErrorOverride[]) {
        const fetchError = err as FetchError;

        const errorOverride = overrides?.find(override => override.status === fetchError.status);
        if (errorOverride) {
            return errorOverride.message;
        }

        if (fetchError.data?.msg) {
            return fetchError.data?.msg;
        }

        if (fetchError.message) {
            return fetchError.message;
        }
    }

    async function login(credentials: LoginRequest) {
        return fetch<LoginResponse>(API_ENDPOINTS.LOGIN, {
            method: 'POST',
            body: credentials
        })
    }

    async function getUser() {
        return fetch<GetUserResponse>(API_ENDPOINTS.GET_USER, {
            method: 'GET'
        })
    }

    const api = {
        login,
        getUser
    }

    return {
        fetch,
        getErrorMsg,
        api
    }
}
