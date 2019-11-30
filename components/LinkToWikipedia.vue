<template>
  <a
    :href="wikipediaUrl"
    target='_blank'>
    Link to Wikipedia article of {{title}}
  </a>
</template>

<script>
export default {
  props: ['path', 'title'],
  computed: {
    wikipediaUrl () {
      return `https://en.wikipedia.org/wiki/${this.path}`
    }
  }
}
</script>
