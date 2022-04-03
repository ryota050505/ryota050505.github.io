<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Takoyaki
        </h1>
        <h4 class="subheading">
          
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {

}
</script>
