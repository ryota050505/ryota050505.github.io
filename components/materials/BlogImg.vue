<template>
  <v-img
    :src="require(`@/assets/img/${imgSrc}`)"
    class="my-5 mx-5"
    contain
    style="position: relative;"
    max-height="50vh"
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
export default class BlogImg extends Vue {
  @Prop({ type: String, required: true })
  private imgSrc!: string
}
</script>