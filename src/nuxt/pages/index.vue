<template>
    <h1>Welcome</h1>
    <LoginForm @submit="submitLogin" :errorMessage="errorMessage" :loading="submitLoginLoading" />
    <Button @click="getUser">Get User</Button>
</template>

<script setup lang="ts">
import type { LoginRequest } from '~/models';

const { api, getErrorMsg } = useApi();

const errorMessage = ref<string>();
const submitLoginLoading = ref(false);

async function submitLogin(credentials: LoginRequest) {
    submitLoginLoading.value = true;
    errorMessage.value = '';

    try {
        const loginResponse = await api.login(credentials);

        console.log(loginResponse);

        const laravelSessionCookie = useCookie('laravel_session');
        laravelSessionCookie.value = null;

    } catch (err) {
        errorMessage.value = getErrorMsg(err, [{
            status: 401,
            message: 'Your email address and password combination was not found. Please check them and try again.'
        }])
    } finally {
        submitLoginLoading.value = false;
    }
}

async function getUser() {
    try {
        const userResponse = await api.getUser();

        console.log(userResponse);
    } catch (err) {
        console.error(err);
    }
}
</script>
