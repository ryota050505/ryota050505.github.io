import type { Middleware } from "@nuxt/types"

const trailingSlashRedirect: Middleware = ({ route, redirect }) => {
  if (route.path.slice(-1) === '/') {
    // redirect(301, route.path.substring(0, route.path.length - 1))
  }
}

export default trailingSlashRedirect