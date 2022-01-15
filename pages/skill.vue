<template>
  <v-row>
    <v-col>
      <v-sheet
        min-height="70vh"
        rounded="lg"
      >
      
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { LocalHeader } from '~/types/LocalHeader'
export default Vue.extend({
  name: 'SkillPage',
  head(): LocalHeader {
    return {
      title: 'Skill'
    }
  }
})
</script>