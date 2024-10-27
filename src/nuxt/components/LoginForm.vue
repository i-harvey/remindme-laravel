<template>
    <form @submit="onSubmit" :disabled="props.loading">
        <Card class="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Please enter your credentials to log in.</CardDescription>
                <div v-auto-animate>
                    <p class="text-destructive text-sm mt-4" v-if="props.errorMessage">{{ props.errorMessage }}</p>
                </div>
            </CardHeader>
            <CardContent class="space-y-8">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem v-auto-animate>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="password">
                    <FormItem v-auto-animate>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </CardContent>
            <CardFooter class="flex justify-between px-6 pb-6">
                <Button type="submit" :loading="props.loading">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    </form>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import type { LoginRequest } from '~/models'

const props = defineProps<{
    errorMessage?: string
    loading?: boolean;
}>();

const emit = defineEmits<{
    (e: 'submit', value: LoginRequest): void
}>();

const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, 'Required').email(),
    password: z.string().min(1, 'Required')
}))

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    emit('submit', values)
})
</script>
