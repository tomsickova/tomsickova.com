import { Plugin } from '@nuxt/types'

const previewPlugin: Plugin = ({ query, enablePreview }) => {
  if ('preview' in query) {
    enablePreview && enablePreview()
  }
}

export default previewPlugin
