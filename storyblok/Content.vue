<template>
    <div v-editable="blok" class="px-4">
        <div v-html="content"></div>
    </div>
</template>

<script setup>
  const props = defineProps({ blok: Object })
  const content = computed(() => renderRichText(props.blok.Content));
</script>