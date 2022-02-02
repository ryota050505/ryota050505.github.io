<template>
  <v-container
    class="d-flex justify-space-between mb-6"
  >
      <MaterialsTrasitionToolTip
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        :is-icon="true"
        :is-bottom="true"
      >
        <template
          #top
        >
          <v-icon
            large
          >
            mdi-arrow-left-bold-circle-outline
          </v-icon>
        </template>
        <template
          #tooltip
        >
          <div class="text-center">前の記事</div>
          <v-divider
            color="white"
          />
          <div class="text-center">{{ prev.title }}</div>
        </template>
      </MaterialsTrasitionToolTip>
      <span v-else>&nbsp;</span>
      <MaterialsTrasitionToolTip
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        :is-icon="true"
        :is-bottom="true"
      >
        <template
          #top
        >
          <v-icon
            large
          >
            mdi-arrow-right-bold-circle-outline
          </v-icon>
        </template>
        <template
          #tooltip
        >
          <div class="text-center">次の記事</div>
          <v-divider
            color="white"
          />
          <div class="text-center">{{ next.title }}</div>
        </template>
      </MaterialsTrasitionToolTip>
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