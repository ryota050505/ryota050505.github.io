export const fetchBlogList = async ($content: any) => {

  const query = $content(
    'blog',
    { deep: true }
  )
  .sortBy('position', 'desc')

  const blogList = await query.fetch()

  return {
    blogList,
  }
}

export const fetchCategoryList = async ($content: any) => {

  let categories = await $content(
    'blog',
    { deep: true }
  )
  .only(['category'])
  .fetch()
  .then((res: any) => {
    // 重複を消去
    return  [
      ...new Set(
        res.map((r: any) => r.category)
      )
    ]
  })

  categories = await Promise.all(categories.map((c: string) => $content('blog')
    .only(['slug'])
    .where({ category: c })
    .fetch()
    .then((res: any) => ({
      category: c,
      showName: c + '(' + res.length + ')',
    }))
  ))

  return categories
}

export const fetchTagList = async ($content: any) => {

  let tags = await $content(
    'blog',
    { deep: true }
  )
  .only(['tags'])
  .fetch()
  .then((res: any) => {
    // 重複を消去
    return  [
      ...new Set(
        res.flatMap((r: any) => r.tags)
      )
    ]
  })

  tags = await Promise.all(tags.map((t: string) => $content('blog')
    .only(['slug'])
    .where({ tags: { $contains: t } })
    .fetch()
    .then((res: any) => ({
      tag: t,
      showName: t + ' (' + res.length + ')',
    }))
  ))

  return tags
}