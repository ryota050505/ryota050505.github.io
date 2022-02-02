<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
      class="toc-wrapper"
    >
      <div class="p-toc-container">
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
      </div>
    </v-col>

    <v-col
      :cols="$vuetify.breakpoint.mobile? 12 : 8"
    >
      <v-sheet
        rounded="lg"
        light
      >
        <v-container>
          <article>
            <v-img
              :src="require(`@/assets/img/${blog.imgsrc ? blog.imgsrc : 'nuxtjs_vuetify.png'}`)"
              contain
              style="opacity: 0.7;"
              :aspect-ratio="16/9"
              height="214px"
              max-height="214px"
            />
            <div class="title">
              <div class="text-right">
                <v-icon small>mdi-update</v-icon>
                <span class="font-weight-light text-caption">{{ $dateFns.format(new Date(blog.updatedAt), 'yyyy.MM.dd') }}</span>
              </div>
              <h1
                class="text-center"
              >
                {{ blog.title }}
              </h1>
            </div>
            <NuxtContent
              :class="
                'markdown-body ' +
                $vuetify.breakpoint.mobile ? 'mx-1' : 'mx-5'
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

import { LocalHeader } from '~/types/LocalHeader'

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
  },
})
export default class BlogDetail extends Vue {

  private blog?: any

  head(): LocalHeader {
    return {
      title: this.blog.title,
      description: this.blog.description,
    }
  }

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

<style lang="scss">

h2 {
  margin: 2em 0 1.2em 0;
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
  color: #494949;
  font-weight: bolder;
}

h3 {
  padding: 0.5em;
  margin: 2em 0 1.2em 0;
  color: #494949;
  border-left: solid 5px rgb(238, 213, 144);
}

p {
  @include sp {
    font-size: 0.9em;
  }
}

.v-application code {
  all: unset;
}

.v-application p code {
  padding: 0.1em 0.5em;
  background-color: #e6dedc !important;
  border-radius: 0.3em;
  color: rgb(131, 69, 40) !important;
}

.v-application div pre code {
  background-color: transparent !important;
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

blockquote {
  position: relative;
  padding: 30px 15px 8px 15px;
  margin: 0 0 30px 0;
  box-sizing: border-box;
  background: #efefef;
  color: rgb(134, 133, 133);
  border-left: 4px solid #9dd4ff;
}

blockquote:before{
  display: inline-block;
  position: absolute;
  top: 5px;
  left: 3px;
  content: "“";
  font-family: sans-serif;
  color: #cfcfcf;
  font-size: 90px;
  line-height: 1;
}

blockquote p {
  padding: 0;
  margin: 10px 0;
  line-height: 1.7;
}

.v-application blockquote p code {
  color: rgb(212, 150, 122) !important;
}

blockquote cite {
  display: block;
  text-align: right;
  color: #888888;
  font-size: 0.9em;
}

.p-toc-container {
  width: 25%;
  max-width: 100px;
  min-width: 250px;
  height: 100%;
  max-height: 100vh;
  overflow: scroll;
  font-size: .9rem;
  position: sticky;
  top: 60px;
}

.toc-wrapper {
  position: sticky;
  top: 60px;
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>