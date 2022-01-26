<template>
  <v-img
    :src="require(`@/assets/img/${imgSrc}`)"
    :aspect-ratio="16/9"
    contain
    class="my-5 mx-5"
    style="position: relative;"
  >
    <slot/>
  </v-img>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class BlogsCardImg extends Vue {
  @Prop({ type: String, required: true })
  private imgSrc!: string
}
</script>