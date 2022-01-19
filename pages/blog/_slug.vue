<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> 目次 </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"/>

          <v-list-item
            v-for="link in blog.toc"
            :key="link.id"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
            link
          >
            <NuxtLink
              :to="`#${link.id}`"
            >
              <v-list-item-content>
                <v-list-item-title> {{ link.text }} </v-list-item-title>
              </v-list-item-content>
            </NuxtLink>
          </v-list-item>

          <v-divider class="my-2"/>

          <v-list-item
            link
          >
            <v-list-item-content>
              <v-list-item-title> Clear </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet
        rounded="lg"
        light
      >
        <article>
          <v-container>
            <h1 class="text-center">{{ blog.title }}</h1>
            <nuxt-content :document="blog" />
          </v-container>
          <MaterialsPrevNext
            :prev="prev"
            :next="next"
          />
        </article>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class BlogDetail extends Vue {
  async asyncData({ $content, params}: {$content: any, params: any }) {
    const blog = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      blog,
      prev,
      next,
    }
  }
}
</script>

<style>

.icon.icon-link {
  background-image: url('~/assets/img/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

</style>