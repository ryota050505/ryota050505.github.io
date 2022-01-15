<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        うえるかむ！
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { LocalHeader } from '@/types/LocalHeader';

export default Vue.extend({
  name: 'IndexPage',
  head(): LocalHeader {
    return {
      title: 'Home',
    }
  }
})
</script>
