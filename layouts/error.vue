<template>
  <div class="text-center black--text">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

import head from '~/mixins/head'
import {
  Error
} from '~/types/Error'
@Component({
  mixins: [
    head,
  ],
})
export default class EmptyLayout extends Vue {
  @Prop({ type: Object, default: null })
  private error!: Error

  private pageNotFound = 'お探しのページは存在しません'
  private otherError = '予期せぬエラーが起こりました'
  private title = 'エラーページ'
  private description = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
