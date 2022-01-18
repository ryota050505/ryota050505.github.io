<template>
  <v-container
    class="d-flex justify-space-between mb-6"
  >
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
  </v-container>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class PrevNext extends Vue {
  @Prop({ type: Object })
  private prev!: object

  @Prop({ type: Object })
  private next!: object
}
</script>

<style lang="scss" scpoed>

article {
  & a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>