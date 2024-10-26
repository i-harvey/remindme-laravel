export default defineNuxtPlugin(async () => {
    await useApi('/sanctum/csrf-cookie', { credentials: 'include' });
})
