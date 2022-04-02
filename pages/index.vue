<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-img
          :src="require(`@/assets/img/takoyaki.png`)"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { LocalHeader } from '@/types/LocalHeader'
@Component
export default class IndexPage extends Vue {
  head(): LocalHeader {
    return {
      title: 'Home',
    }
  }
}
</script>
