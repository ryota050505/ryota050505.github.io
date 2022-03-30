<template>
  <v-simple-table light>
    <template
      #default
    >
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Tags
          </th>
          <th class="text-left">
            Likes
          </th>
        </tr>
      </thead>
      <tbody>
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

  private jumpLinkTo = jumpLinkTo
}
</script>