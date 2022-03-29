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
      <v-list
        dense
        rounded
      >
        <v-subheader>FILTER</v-subheader>
        <v-list-item
          v-for="(type, i) in types" :key="i"
        >
          <v-list-item-action
          >
            <v-checkbox
              v-model="typesForFilter"
              :value="type.type"
            >
            </v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ type.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item color="grey lighten-4">
          <v-list-item-action>
            <v-switch
              v-model="denseTrigger"
              v-resize="onResize"
            >
            </v-switch>
            <v-list-item-action-text
            >
              dense
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>

    <v-col>
      <v-timeline
        light
        :align-top="denseTrigger"
        :dense="denseTrigger"
      >
        <v-timeline-item
          v-for="(item, i) in Timeline"
          :key="i"
          :color="item.color"
          :small="$vuetify.breakpoint.smAndDown"
        >
          <v-row
            v-if="denseTrigger"
            class="pt-1 text-center"
          >
            <v-col cols="3">
              <PagesProfileTimeStamp
                :item="item"
              />
            </v-col>
            <v-col>
              <PagesProfileCard
                :item="item"
              />
            </v-col>
          </v-row>
          <template
            v-if="!denseTrigger"
            #opposite
          >
            <PagesProfileTimeStamp
              :item="item"
            />
          </template>
          <PagesProfileCard
            v-if="!denseTrigger"
            :item="item"
          />
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-col
      v-if="!$vuetify.breakpoint.smAndDown"
      cols="2"
    />
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
} from 'nuxt-property-decorator'

import {
  TIMELINE,
  TIMELINE_KEY,
  TIMELINE_TITLE,
} from '@/constants/Profile'
import { LocalHeader } from '~/types/LocalHeader'
@Component
export default class ProfilePage extends Vue {
  head(): LocalHeader {
    return {
      title: 'Profile',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '今までの経歴の概略を載せています。ボタンを押していただくことで、経歴をフィルタリングできます。',
        }
      ]
    }
  }

  private denseTrigger = this.$vuetify.breakpoint.smAndDown

  private timeline = TIMELINE

  private typesForFilter = Object.values(TIMELINE_KEY)

  get Timeline() {
    return this.timeline
  }

  set Timeline(timeline) {
    this.timeline = timeline
  }

  private types = [
    {
      type: TIMELINE_KEY.SCHOOL,
      title: TIMELINE_TITLE.SCHOOL,
    },
    {
      type: TIMELINE_KEY.PARTTIME,
      title: TIMELINE_TITLE.PARTTIME,
    },
    {
      type: TIMELINE_KEY.INTERNSHIP,
      title: TIMELINE_TITLE.INTERNSHIP,
    }
  ]

  private onResize() {
    this.denseTrigger = this.$vuetify.breakpoint.smAndDown ? true : this.denseTrigger
  }

  @Watch('typesForFilter')
  onChangeTypesStatus() {
    this.Timeline = TIMELINE.filter(x => this.typesForFilter.includes(x.key))
  }
}
</script>
