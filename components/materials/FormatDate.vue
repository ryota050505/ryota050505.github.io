<template>
  <div>
    {{ $dateFns.format(new Date(tatgetDate), 'YYYY.MM.dd') }}
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator'

import Base from '~/types/Base'
export default class FormatDate extends Base {
  @Prop({ type: String, required: true })
  private tatgetDate!: string
}
</script>