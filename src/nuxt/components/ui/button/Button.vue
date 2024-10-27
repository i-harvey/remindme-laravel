<script setup lang="ts">
import { cn } from '@/lib/utils'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    class?: HTMLAttributes['class']
    loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)"
        v-auto-animate="{ duration: 75 }">
        <Icon v-if="props.loading" name="lucide:loader-circle" class="w-4 h-4 mr-2 animate-spin" />
        <slot />
    </Primitive>
</template>
