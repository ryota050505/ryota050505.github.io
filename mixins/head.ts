import { Component, Vue } from 'nuxt-property-decorator'

import { LocalHeader } from "~/types/LocalHeader"

@Component
export default class extends Vue{
  private title!: string
  private description!: string

  head(): LocalHeader {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ]
    }
  }
}