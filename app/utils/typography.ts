const NBSP = ' '
const WORD_JOINER = '⁠'

type MinimarkNode = string | [string, Record<string, unknown>, ...MinimarkNode[]]

export function bindShortWords(text: string, locale: string) {
  let result = text
    .replace(/(\d),- (?=\p{L})/gu, `$1,-${WORD_JOINER}${NBSP}`)
    .replace(/(\d) (?=[\d\p{L}%])/gu, `$1${NBSP}`)
    .replace(/(CZK|Kč|IČO:|Praha) (?=\d)/g, `$1${NBSP}`)
  if (locale === 'cs') {
    for (let pass = 0; pass < 2; pass++) {
      result = result.replace(/(^|[\s(„])([vkszouai]) /giu, `$1$2${NBSP}`)
    }
  }
  return result
}

function bindNode(node: MinimarkNode, locale: string): MinimarkNode {
  if (typeof node === 'string') return bindShortWords(node, locale)
  const [tag, props, ...children] = node
  if (tag === 'code' || tag === 'pre') return node
  return [tag, props, ...children.map((child) => bindNode(child, locale))]
}

export function bindShortWordsInPage<T extends { path: string; body: { value: unknown[] } }>(
  page: T
): T {
  const locale = page.path.startsWith('/en') ? 'en' : 'cs'
  const value = (page.body.value as MinimarkNode[]).map((node) => bindNode(node, locale))
  return { ...page, body: { ...page.body, value } }
}
