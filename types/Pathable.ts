import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

import {
  SEARCH_ACTIVE_PATHS
} from '~/plugins/constants'

@Component
export class Pathable extends Vue {
  protected get path(): string {
    return this.$route.path
  }

  protected equalPathTo(path: string): boolean {
    return this.path === path
  }

  protected isActive() {
    return SEARCH_ACTIVE_PATHS.includes(this.path)
  }
}