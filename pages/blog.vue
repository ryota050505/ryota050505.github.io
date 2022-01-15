<template>
  <v-row>
    <v-col cols="2">
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item
            v-for="n in 5"
            :key="n"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                List Item {{ n }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item
            link
            color="grey lighten-4"
          >
            <v-list-item-content>
              <v-list-item-title>
                Refresh
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet
        min-height="70vh"
        rounded="lg"
      >
        <!--  -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { LocalHeader } from '~/types/LocalHeader'
@Component
export default class BlogPage extends Vue {
  head(): LocalHeader {
    return {
      title: 'Blog'
    }
  }
}
</script>