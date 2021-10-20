import { join } from 'path'
import { getAccessorType, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
  home: [] as string[],
  galleries: {} as Record<string, string[]>,
})

export const actions = actionTree(
  { state },
  {
    nuxtServerInit({ state }, _nuxtContext: Context) {
      // homepage carousel
      state.home = require
        .context('~/static/home', false, /^.*\.(jpg|png)$/)
        .keys()
        .map((k) => join('/home', k))

      // galleries
      const galleries: Record<string, any> = {}
      require
        .context('~/static/gallery', true)
        .keys()
        .forEach((key) => {
          const gallery = key.split('/')[1]

          galleries[gallery] = galleries[gallery] || []
          if (key.includes('/images/')) {
            galleries[gallery].push(join('/gallery', key))
          }
        })

      state.galleries = galleries
    },
  }
)

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
})
