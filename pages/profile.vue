<template>
  <v-row>
    <v-col
      cols="12"
      xl="2"
      lg="2"
      md="2"
      sm="12"
      xs="12"
    >
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item
            v-for="(type, i) in types" :key="i"
            link
          >
            <v-list-item-content
              @click="filterTimeline(type.type)"
            >
              <v-list-item-title>{{ type.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item color="grey lighten-4">
            <v-list-item-content>
              <v-switch
                v-model="denseTrigger"
                label="dense"
                :disabled=$vuetify.breakpoint.xs
              >
              </v-switch>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-timeline
        light
        :align-top=denseTrigger
        :dense=denseTrigger
      >
        <v-timeline-item
          v-for="(item, i) in Timeline"
          :key="i"
          :color="item.color"
          :small=$vuetify.breakpoint.smAndDown
        >
          <v-row
            v-if="denseTrigger"
            class="pt-1 text-center"
          >
            <v-col cols="3">
              <span
                :class="`font-weight-bold
                  ${item.color}--text
                  ${$vuetify.breakpoint.xs ? 'text-caption': ''}
                `"
                v-text="item.year"
              ></span>
            </v-col>
            <v-col>
              <v-card
                :color="item.color"
                dark
              >
                <v-card-title
                  :class="`
                    headline
                    font-weight-light
                    ${$vuetify.breakpoint.xs ? 'text-subtitle-1': ''}
                  `"
                >
                  {{ item.title }}
                </v-card-title>
                <v-card-text
                  v-if="item.body"
                  :class="`
                    white
                    black--text
                    text-left
                    ${$vuetify.breakpoint.xs ? 'text-body-2': ''}
                  `"
                >
                  {{ item.body }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <template
            v-if="!denseTrigger"
            #opposite
          >
            <span
              :class="`
                font-weight-bold
                ${item.color}--text text-center
                ${$vuetify.breakpoint.xs ? 'text-caption': ''}
              `"
              v-text="item.year"
            >
            </span>
          </template>
          <v-card
            v-if="!denseTrigger"
            :color="item.color"
            dark
          >
            <v-card-title
              :class="`
                headline
                font-weight-light
                ${$vuetify.breakpoint.xs ? 'text-subtitle-1': ''}
              `"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text
              v-if="item.body"
              :class="`
                white
                black--text
                text-left
                ${$vuetify.breakpoint.xs ? 'text-body-1': ''}
              `"
            >
              {{ item.body }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-col
      v-if=!$vuetify.breakpoint.smAndDown
      cols="2"
    />
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

import {
  TIMELINE,
  TIMELINE_KEY,
} from '@/plugins/constants'
import { LocalHeader } from '~/types/LocalHeader'
@Component
export default class ProfilePage extends Vue {
  head(): LocalHeader {
    return {
      title: 'Profile',
    }
  }

  private denseTrigger = this.$vuetify.breakpoint.smAndDown

  private timeline = TIMELINE

  get Timeline() {
    return this.timeline
  }

  set Timeline(timeline) {
    this.timeline = timeline
  }

  private filterTimeline(type :string) :void {
    this.Timeline = type === TIMELINE_KEY.ALL ? TIMELINE : TIMELINE.filter(x => x.key === type)
  }

  types = [
    {
      type: TIMELINE_KEY.ALL,
      title: '全て',
    },
    {
      type: TIMELINE_KEY.SCHOOL,
      title: '学校',
    },
    {
      type: TIMELINE_KEY.PARTTIME,
      title: 'アルバイト'
    },
    {
      type: TIMELINE_KEY.INTERNSHIP,
      title: 'インターン',
    }
  ]
}
</script>
