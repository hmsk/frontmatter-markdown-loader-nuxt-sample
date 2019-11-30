<template>
  <div class="markdown-body">
    <h1>frontmatter-markdown-loader-nuxt-sample</h1>
    <ol type="A">
      <li><nuxt-link to="/akg">Import synchronously</nuxt-link></li>
      <li>
        Import dynamically
        <ul>
          <li><nuxt-link to="/article?name=akg">akg.md</nuxt-link></li>
          <li><nuxt-link to="/article?name=qurkli">quruli.md</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/quruli">Run component on markdown</nuxt-link></li>
    </ol>
  </div>
</template>
