<script setup lang="ts">
    type Props = {        day: string    }
    const props = defineProps<Props>()
</script>
<template>
    <article>{{props.day}}</article>
</template>