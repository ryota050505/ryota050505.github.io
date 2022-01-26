<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />
    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <v-container>
          <div class="text-center text-h3 py-5">まい すきる</div>
          <v-row>
            <v-col
              v-for="(skill, i) in skills"
              :key="'col-' + i"
              cols="6"
              sm="6"
              mx="4"
              lg="3"
            >
              <v-lazy
                :options="{
                  threshold: 1.0
                }"
                transition="fade-transition"
                height="100%"
                width="100%"
              >
                <v-card
                  light
                  class="d-flex flex-column"
                  height="100%"
                  width="100%"
                >
                  <MaterialsCardImg
                    :img-src="`programming/${skill.img}`"
                  >
                  </MaterialsCardImg>
                    <v-spacer/>
                    <v-rating
                      :value="skill.rating"
                      color="yellow accent-4"
                      class="text-center"
                      half-increments
                      readonly
                      :x-small="$vuetify.breakpoint.mobile"
                    />
                    <v-spacer/>
                  <v-card-actions>
                    <v-btn
                      icon
                      @click="skill.reveal = true"
                    >
                      <v-icon
                        :x-small="$vuetify.breakpoint.mobile"
                      >
                        mdi-cursor-default-click
                      </v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="skill.reveal"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%; overflow: scroll;"
                      dark
                    >
                      <v-card-text class="pb-0">
                        <p
                          :class="$vuetify.breakpoint.mobile ? 'text-subtitle-1' :'text-h4 ' + 'text--primary'"
                        >
                          {{ skill.language }}
                        </p>
                        <p
                          :class="$vuetify.breakpoint.mobile? 'text-caption' : ''"
                        >{{ skill.description }}</p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          icon
                          color="teal accent-4"
                          @click="skill.reveal = false"
                        >
                          <v-icon
                            :x-small="$vuetify.breakpoint.mobile"
                          >
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-lazy>
            </v-col>
          </v-row>
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

import {
  LocalHeader
} from '~/types/LocalHeader'
@Component
export default class SkillPage extends Vue {

  private skills = [
    {
      language: 'Java',
      img: 'java.svg',
      description: 'アルバイトでSpringBootを使用しています。それに付随して、MyBatisやflyway等のライブラリも使用しています。',
      rating: 4.2,
      reveal: false,
    },
    {
      language: 'PHP',
      img: 'php.svg',
      description: 'アルバイトで使用していました。一番馴染みがあります。',
      rating: 4.2,
      reveal: false,
    },
    {
      language: 'Python',
      img: 'python.svg',
      description: '音声認識の研究で使用しています。scikit-learnいつもありがとう。',
      rating: 3.5,
      reveal: false,
    },
    {
      language: 'C++',
      img: 'c-plusplus.svg',
      description: '音声認識の研究で使用しています。学部の頃はDxライブラリを使ってゲームを作ったりしていました。',
      rating: 3.0,
      reveal: false,
    },
    {
      language: 'C',
      img: 'c.svg',
      description: '学部の頃、Javaの次に学びました。',
      rating: 3.0,
      reveal: false,
    },
    {
      language: 'NuxtJS(Vue.js)',
      img: 'nuxt-icon.svg',
      description: '最近のフロントのメインです。Vuetify最高です。',
      rating: 3.0,
      reveal: false,
    },
    {
      language: 'MySQL',
      img: 'mysql.svg',
      description: 'アルバイトでも趣味開発でも使用しています。SQL文はだいたい書けます。OracleDBもちょっと触ったことあります。',
      rating: 4.0,
      reveal: false,
    },
    {
      language: 'Unity',
      img: 'unity.svg',
      description: 'これで3Dゲームを作ったりしてました。最近全く触ってないです。',
      rating: 2.5,
      reveal: false,
    },
    {
      language: 'Git(GitHub,GitLab)',
      img: 'git.svg',
      description: 'アルバイトでも趣味開発でも使用しています。困った時のgit reset --hard origin/branch',
      rating: 5.0,
      reveal: false,
    },
    {
      language: 'Docker',
      img: 'docker.svg',
      description: 'アルバイトで使用しています。また、友達と開発する際、環境に差が出ないようにするためなどに使用してます。',
      rating: 3.5,
      reveal: false,
    },
    {
      language: 'AWS',
      img: 'aws.svg',
      description: '主に趣味開発で使用しています。EC2、RDS、ECS、S3、CloudFrontなど基本的なところは抑えています。',
      rating: 3.5,
      reveal: false,
    }
  ]

  head(): LocalHeader {
    return {
      title: 'Skill',
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>