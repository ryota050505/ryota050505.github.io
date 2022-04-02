export const blogsApi = async ($content: any, route: any) => {

  const {
    q,
  } = route.query

  let query = $content(
    'blog',
    { deep: true }
  )
  .sortBy('createdAt', 'desc')

  if (q) query = query.search(q)

  const blogs = await query.fetch()

  return {
    q,
    blogs,
  }
}