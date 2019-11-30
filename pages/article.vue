<template>
  <div>
    <small>This component mounts <code>~/articles/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small>
    <h2>{{ title }}</h2>
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
        title: null,
        selectedArticle: null
      }
    },
    created () {
      this.selectedArticle = () => import(`~/articles/${this.$route.query.name}.md`).then((md) => {
        this.title = md.attributes.title
        return md.vue.component
      })
    }
  }
</script>
