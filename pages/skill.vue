<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />
    <v-col>
      <v-container>
        <v-row>
          <v-col
            v-for="(skill, i) in skills"
            :key="'col-' + i"
            cols="6"
            sm="6"
            mx="6"
            md="4"
            lg="4"
            xl="3"
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
                <div
                  @click="skill.reveal = true"
                >
                  <MaterialsCardImg
                    :img-src="`programming/${skill.img}`"
                  >
                  </MaterialsCardImg>
                  <v-rating
                    :value="skill.rating"
                    color="yellow accent-4"
                    class="text-center"
                    half-increments
                    readonly
                    :small="isSm()"
                    :x-small="isXs()"
                  />
                  <v-card-actions>
                  </v-card-actions>
                </div>

                <v-expand-transition>
                  <v-card
                    v-if="skill.reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%; overflow: scroll;"
                    dark
                  >
                    <v-card-text class="pb-0">
                      <p
                        :class="($vuetify.breakpoint.mobile ? 'text-subtitle-1' : 'text-h4') + ' text--white'"
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
                          :small="isSm()"
                          :x-small="isXs()"
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
  SKILL_LIST
} from '~/constants/Skill'
import {
  LocalHeader
} from '~/types/LocalHeader'
import {
  SkillList
} from '~/types/Skill'
@Component
export default class SkillPage extends Vue {

  private skills: SkillList = SKILL_LIST

  head(): LocalHeader {
    return {
      title: 'Skill',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '開発経験がある言語を載せています。星の数は完全な主観です。',
        }
      ]
    }
  }

  private isXs() {
    return this.$vuetify.breakpoint.name === 'xs'
  }

  private isSm() {
    return this.$vuetify.breakpoint.name === 'sm'
  }

  private isMd() {
    return this.$vuetify.breakpoint.name === 'md'
  }

  private isLg() {
    return this.$vuetify.breakpoint.name === 'lg'
  }

  private isXl() {
    return this.$vuetify.breakpoint.name === 'xl'
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