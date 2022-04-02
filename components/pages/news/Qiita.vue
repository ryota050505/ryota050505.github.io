<template>
  <v-simple-table light>
    <template
      #default
    >
      <thead>
        <tr>
          <th
            v-for="(header, i) in headers"
            :key="i"
            class="text-left"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="!items.length"
          class="text-center"
        >
          <td
            :colspan="headers.length"
          >
            <MaterialsCircleLoader
            />
          </td>
        </tr>
        <tr
          v-for="(item, i) in items"
          :key="i"
          @click="jumpLinkTo(item.url)"
        >
          <td>
            {{ item.title }}
          </td>
          <td>
            <span
              v-for="(tag, j) in item.tags"
              :key="j"
            >
              {{ tag.name }}
            </span>
          </td>
          <td>
            {{ item.likes_count }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
    'Title',
    'Tags',
    'Likes',
  ]

  private jumpLinkTo = jumpLinkTo
}
</script>