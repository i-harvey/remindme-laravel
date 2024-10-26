
export const useApi: typeof useFetch = (request, opts) => {
    const config = useRuntimeConfig();
    const xsrfToken = useCookie('XSRF-TOKEN');

    return useFetch(request, {
        baseURL: config.public.baseURL,
        credentials: 'include',
        headers: [
            ['X-XSRF-TOKEN', xsrfToken.value ?? '']
        ],
        ...opts
    })
}
