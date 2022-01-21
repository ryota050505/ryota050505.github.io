<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >

        <v-list color="transparent">

          <v-list-item
            v-for="link in blog.toc"
            :key="link.id"
            v-scroll-to="`#${link.id}`"
            link
            light
          >
            <v-list-item-content>
              <v-list-item-title> {{ link.text }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-col>

    <v-col>
      <v-sheet
        rounded="lg"
        light
      >
        <v-container>
          <article>
            <div class="text-right">
              <v-icon small>mdi-update</v-icon>
              <span class="font-weight-light text-caption">{{ $dateFns.format(new Date(blog.updatedAt), 'yyyy.MM.dd') }}</span>
            </div>
            <h1
              class="text-center my-3"
            >
              {{ blog.title }}
            </h1>
            <v-divider
              class="mb-8"
            />
            <NuxtContent
              :class="
                'markdown-body ' +
                $vuetify.breakpoint.mobile ? 'mx-2' : 'mx-5'
              "
              :document="blog"
            />
          </article>
          <MaterialsPrevNext
            :prev="prev"
            :next="next"
          />
        </v-container>
      </v-sheet>
    </v-col>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

@Component({
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
})
export default class BlogDetail extends Vue {

  mounted() {

    if (!process.browser) return
    this.$nextTick(() => {
      setTimeout(this.moveToHash, 200)
    })
  }

  private moveToHash() {
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(decodeURI(hash))
    }
  }
}
</script>

<style>

h2 {
  margin: 0 0 0.5em 0;
  border-bottom: solid 3px black;
  color: #494949;
  font-weight: bolder;
}

h3 {
  padding: 0.5em;
  color: #494949;
  background: rgb(245, 250, 245);
  border-left: solid 5px lightgreen;
}

.v-application code {
  all: unset
}

.remark-code-title {
    background: #d9d7e0;
    border-radius: 0px 0px 4px 4px;
    color: #3a3a3a;
    font-size: 0.75rem;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.25rem 0.5rem;
    position: absolute;
    margin:0 0 0 auto;
}

</style>