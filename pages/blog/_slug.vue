<template>
  <article>
    <h1>{{ blog.title }}</h1>
    <NuxtContent :document="blog" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class BlogDetail extends Vue {
  async asyncData({ $content, params}: {$content: any, params: any }): Promise<Object> {
    const blog: Promise<Object> = await $content('blog', params.slug).fetch()
    return { blog }
  }
}
</script>