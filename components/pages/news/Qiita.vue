<template>
  <v-data-table
    light
    :headers="headers"
    :items="items"
    :loading="!items.length"
    loading-text="Loading..."
    :sort-by="'likes_count'"
    sort-desc
  >
    <template
      v-slot:item="{ item }"
    >
      <tr @click="jumpLinkTo(item.url)">
        <td>
          {{ item.title }}
        </td>
        <td>
          <v-chip
            v-for="(tag, j) in item.tags"
            :key="j"
            class="ma-1"
            small
          >
            {{ tag.name }}
          </v-chip>
        </td>
        <td class="text-center">
          {{ item.likes_count }}
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

import { jumpLinkTo } from "~/lib/link"

@Component
export default class Qiita extends Vue{
  @Prop({ type: Array, required: true })
  private items!: Array<object>

  private headers = [
    {
      text: 'Title',
      sortable: false,
      value: 'title',
      align: 'center',
    },
    {
      text: 'Tags',
      value: 'tags',
      sortable: false,
      align: 'center',
    },
    {
      text: 'Likes',
      value: 'likes_count',
      align: 'center',
      width: 100,
    }
  ]

  private jumpLinkTo = jumpLinkTo
}
</script>
