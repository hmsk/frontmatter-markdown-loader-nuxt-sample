<template>
  <div>
    <small>This component mounts <code>~/articles/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small>
    <h2>{{ attributes.title }}</h2>
    <component :is="selectedArticle" />
  </div>
</template>

<script>
  export default {
    validate ({ query }) {
      return ['akg', 'quruli'].includes(query.name)
    },
    data () {
      return {
        attributes: {},
        selectedArticle: null
      }
    },
    created () {
      const markdown = require(`~/articles/${this.$route.query.name}.md`)
      this.attributes = markdown.attributes
      this.selectedArticle = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      // this.selectedArticle = () => import(`~/articles/${this.$route.query.name}.md`).then(({ vue }) => vue.component)
    }
  }
</script>
