export default defineNuxtPlugin(async () => {
    const { fetch } = useApi();
    await fetch('/sanctum/csrf-cookie', { credentials: 'include' });
})
