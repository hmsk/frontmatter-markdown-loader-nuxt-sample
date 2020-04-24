<template>
  <div>
    <small>This component mounts <code>~/articles/quruli.md</code> as Vue component which includes a custom element for <code>LinkToWikipedia</code></small>
    <h2>{{ title }}</h2>
    <quruli-article />
  </div>
</template>

<script>
  import fm from '~/articles/quruli.md'
  import LinkToWikipedia from '~/components/LinkToWikipedia.vue'

  export default {
    components: {
      QuruliArticle: {
        extends: fm.vue.component,
        components: { LinkToWikipedia }
      }
    },
    data () {
      return {
        title: fm.attributes.title
      }
    }
  }
</script>
