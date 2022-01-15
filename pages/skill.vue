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
import { Component, Vue } from 'nuxt-property-decorator';
import { LocalHeader } from '~/types/LocalHeader'
@Component
export default class SkillPage extends Vue{
  head(): LocalHeader {
    return {
      title: 'Skill'
    }
  }
}
</script>