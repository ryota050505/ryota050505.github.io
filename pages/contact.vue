<template>
  <v-row justify="center">
    <v-col align="center">
      <v-sheet min-height="70vh" rounded="lg">
        <v-btn
          v-for="(link, i) in contactLinks"
          :key="i"
          icon
          link
          :class="$vuetify.breakpoint.mobile ? 'mx-3 my-5' :'mx-16 my-10'"
          @click="jumpLinkTo(link.to)"
        >
        <v-hover v-slot="{ hover }">
          <v-icon
            :x-large="!$vuetify.breakpoint.mobile"
            :color="hover ? link.color : ''"
          >
            {{ link.icon }}
          </v-icon>
        </v-hover>
        </v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// import { LinkList } from '@/types/LinkList'
import { LocalHeader } from '@/types/LocalHeader'
@Component
export default class ContactPage extends Vue {
  contactLinks = [
    {
      title: 'Twitter',
      to: 'https://twitter.com/05_BOC_05',
      icon: 'mdi-twitter',
      color: 'blue',
    },
    {
      title: 'GitHub',
      to: 'https://github.com/ryota050505',
      icon: 'mdi-github',
      color: 'grey lighten-1',
    },
    // {
    //   title: 'Instgram',
    //   to: 'https://www.instagram.com/ryota_boc/',
    //   icon: 'mdi-instagram',
    // },
    {
      title: 'FaceBook',
      to: 'https://www.facebook.com/profile.php?id=100072536162312',
      icon: 'mdi-facebook',
      color: 'indigo lighten-1',
    },
    {
      title: 'YouTube',
      to: 'https://www.youtube.com/channel/UCxrILSJ-mZGTc2f20ONxxZw',
      icon: 'mdi-youtube',
      color: 'red lighten-1',
    },
    // {
    //   title: 'Spoon',
    //   to: 'https://www.spooncast.net/jp/profile/311023577/board/dj?t=all',
    //   icon: 'mdi-silverware-spoon',
    // }
  ]

  head(): LocalHeader {
    return {
      title: 'Contact',
    }
  }

  jumpLinkTo(url: string): void {
    window.open(url, '_blank')
  }
}
</script>
