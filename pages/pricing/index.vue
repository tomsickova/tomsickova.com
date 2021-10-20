<template>
  <div>
    <div class="pricing-text">
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

    <div class="prices-container">
      <nuxt-link :to="localePath('/pricing/newborns')" class="pricelist outline-in">
        <div>
          <img src="~/assets/img/pricing/t_newborns.png" alt="Newborns photosession pricelist" />
          <div v-if="$i18n.locale === 'en'" class="desc">Newborns</div>
          <div v-else class="desc">Novorozenci</div>
        </div>
      </nuxt-link>
      <nuxt-link :to="localePath('/pricing/bellies')" class="pricelist outline-in">
        <div>
          <img src="~/assets/img/pricing/t_bellies.png" alt="Bellies photosession pricelist" />
          <div v-if="$i18n.locale === 'en'" class="desc">Bellies</div>
          <div v-else class="desc">Těhulky</div>
        </div>
      </nuxt-link>
      <nuxt-link :to="localePath('/pricing/families')" class="pricelist outline-in">
        <div>
          <img
            src="~/assets/img/pricing/t_families.png"
            alt="Children, families, couples photosession pricelist"
          />
          <div v-if="$i18n.locale === 'en'" class="desc">Children, Families</div>
          <div v-else class="desc">Děti, Rodinné</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
