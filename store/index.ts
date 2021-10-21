import { getAccessorType, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
  home: [] as string[],
  portfolio: {} as Record<string, string[]>,
})

export const actions = actionTree(
  { state },
  {
    nuxtServerInit({ state }, _nuxtContext: Context) {
      // homepage carousel
      state.home = require
        .context('~/static/home', false, /^.*\.(jpg|png)$/)
        .keys()
        .map((k) => k.replace(/^\./, '/home'))

      // portfolio
      const portfolio: Record<string, any> = {}
      require
        .context('~/static/portfolio', true)
        .keys()
        .forEach((key) => {
          const album = key.split('/')[1]

          portfolio[album] = portfolio[album] || []
          if (key.includes('/images/')) {
            portfolio[album].push(key.replace(/^\./, '/portfolio'))
          }
        })

      state.portfolio = portfolio
    },
  }
)

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
})
