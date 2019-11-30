<template>
  <div>
    <small>This component mounts <code>~/articles/akg.md</code> as Vue component</small>
    <h2>{{ title }}</h2>
    <article-akg />
  </div>
</template>

<script>
  import fm from '~/articles/akg.md'

  export default {
    components: {
      'article-akg': fm.vue.component
    },
    data () {
      return {
        title: fm.attributes.title
      }
    }
  }
</script>
