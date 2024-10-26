<template>
    <h1>Welcome</h1>
    <button @click="login">Login</button>
</template>

<script setup lang="ts">
async function login() {
    const sessionResponse = await useApi('/api/session', {
        method: 'POST',
        body: {
            email: 'iansh3@gmail.com',
            password: 'pass'
        }
    });
    console.log(sessionResponse.data.value);
}
</script>
