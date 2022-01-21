<template>
  <v-container
    class="d-flex justify-space-between mb-6"
  >
      <MaterialsBottomTrasitionToolTip
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        :is-icon="true"
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
          <div class="text-center">前の記事を見る</div>
          <v-divider
            color="white"
          />
          <div class="text-center">{{ prev.title }}</div>
        </template>
      </MaterialsBottomTrasitionToolTip>
      <span v-else>&nbsp;</span>
      <MaterialsBottomTrasitionToolTip
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        :is-icon="true"
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
          <div class="text-center">次の記事を見る</div>
          <v-divider
            color="white"
          />
          <div class="text-center">{{ next.title }}</div>
        </template>
      </MaterialsBottomTrasitionToolTip>
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