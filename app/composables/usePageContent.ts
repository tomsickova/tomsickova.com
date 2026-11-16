export function usePageContent(path: string) {
  return useAsyncData(`content:${path}`, async () => {
    const page = await queryCollection('content').path(path).first()
    return page && bindShortWordsInPage(page)
  })
}
