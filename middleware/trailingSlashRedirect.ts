import type { Middleware } from "@nuxt/types"

const trailingSlashRedirect: Middleware = ({ route, redirect }) => {
  if (route.path.slice(-1) !== '/') {
    console.log(route.name, route.path)
    console.log(route)
    redirect(301, route.path + '/')
  }
}

export default trailingSlashRedirect