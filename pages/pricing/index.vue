<template>
  <div>
    <div class="prose max-w-none">
      <template v-if="$i18n.locale === 'en'">
        <p>
          In the pricelist you can find diffent types of packages, depending on the number of photos
          you will receive. If none of the packages satisfy you, we can arrange an individual
          package for you.
        </p>

        <p>Photos are professionally prepared, retouched.</p>

        <p>
          On the DVD you get photos in the highest quality. On the DVD are only the number of the
          selected photographs according to the choosen package. You will be given the opportunity
          to choose the pictures you like the most from all the pictures taken during the
          photosession. The rest of the pictures taken during the photosession are not included.
        </p>

        <p>The price is always payable on the spot after the photosession.</p>

        <h2>Pricelists:</h2>
      </template>
      <template v-else>
        <h4>
          Ceny jsou stanoveny na základě balíčků, které určují, kolik fotografií si budete přát
          pořídit.
        </h4>

        <p>
          V ceníku můžete nalézt několik typů balíčků. Pokud Vám žádný z balíčků nevyhovuje, můžeme
          se domluvit individuálně na Vašem přání.
        </p>

        <p>
          Fotografie jsou profesionálně upravené, retušované. Na váš požadavek lze převést některé
          fotografie do černobílé. Na DVD dostanete fotografie v maximálním rozlišení, kde jsou
          pouze fotografie v počtu zvoleného balíčku. Ostatní nafocené fotografie během Vaši
          návštěvy fotoateliéru neposkytuji.
        </p>

        <p>Cena je splatná vždy na místě po focení.</p>

        <h2>Ceník:</h2>
      </template>
    </div>

    <div class="flex justify-center space-x-2 mt-2">
      <nuxt-link v-for="pricing in pricings" :key="pricing.to" :to="pricing.to">
        <div class="aspect-ratio-1-1 w-full h-full relative">
          <img :src="pricing.img" class="h-full w-full" />
          <div
            class="
              absolute
              w-full
              h-full
              inset-0
              bg-black bg-opacity-50
              text-white text-2xl
              opacity-0
              hover:opacity-100
              flex
              items-center
              justify-center
              font-medium
              transition-opacity
            "
          >
            {{ pricing.label }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class PricingRootPage extends Vue {
  get pricings() {
    return [
      {
        to: this.localePath('/pricing/newborns'),
        img: require('~/assets/img/pricing/t_newborns.png'),
        label: this.$t('portfolio.newborns'),
      },
      {
        to: this.localePath('/pricing/bellies'),
        img: require('~/assets/img/pricing/t_bellies.png'),
        label: this.$t('portfolio.bellies'),
      },
      {
        to: this.localePath('/pricing/families'),
        img: require('~/assets/img/pricing/t_families.png'),
        label: this.$t('portfolio.kids') + ' ' + this.$t('portfolio.families'),
      },
    ]
  }
}
</script>
