import FMMode from 'frontmatter-markdown-loader/mode'
import path from 'path'

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  loading: { color: '#fff' },
  css: ['github-markdown-css'],
  build: {
    extend (config, _ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'articles'),
          options: {
            mode: [FMMode.VUE_COMPONENT],
            vue: {
              root: 'markdown-body'
            }
          }
        }
      )
    }
  }
}
