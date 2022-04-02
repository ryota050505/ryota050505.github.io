import type { Middleware } from "@nuxt/types"

const trailingSlashRedirect: Middleware = ({ route, redirect }) => {
  if (route.path.slice(-1) !== '/') {
    redirect(301, route.path + '/')
  }
}

export default trailingSlashRedirect