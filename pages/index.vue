<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
    <div class="w-max-6xl mx-auto px-8">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>