<template>
  <v-row
    justify="center"
    align-content="center"
  >
    <v-col>
      <v-sheet
        min-height="70vh"
        rounded="lg"
      >
      <v-btn
        v-for="(link, i) in contactLinks"
        :key=i
        icon
        @click="jumpLinkTo(link.to)"
      >
        <v-icon
          large
        >
          {{ link.icon }}
        </v-icon>
      </v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LocalHeader } from '@/types/LocalHeader'
import { LinkList } from '@/types/LinkList'
@Component
export default class ContactPage extends Vue {
  contactLinks: LinkList = [
    {
      title: 'Twitter',
      to: 'https://twitter.com/05_BOC_05',
      icon: 'mdi-twitter',
    },
    {
      title: 'GitHub',
      to: 'https://github.com/ryota050505',
      icon: 'mdi-github',
    },
    // {
    //   title: 'Instgram',
    //   to: 'https://www.instagram.com/ryota_boc/',
    //   icon: 'mdi-instagram',
    // },
    {
      title: 'Instgram',
      to: 'https://www.facebook.com/profile.php?id=100072536162312',
      icon: 'mdi-facebook',
    },
    {
      title: 'YouTube',
      to: 'https://www.youtube.com/channel/UCxrILSJ-mZGTc2f20ONxxZw',
      icon: 'mdi-youtube',
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