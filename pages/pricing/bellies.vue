<template>
  <div class="prose max-w-none">
    <template v-if="$i18n.locale === 'en'">
      <h1>Bellies</h1>
      <hr />

      <h2>Packages:</h2>
      <img class="pricelist-img" src="~/assets/img/pricing/bellies.jpg" alt="Bellies" />

      <div class="package">
        <h3>MINI package</h3>
        – 1.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 10 retouched photos on DVD
          <i>(+ Black&White versions)</i>
        </p>

        <p><i>Any additional photos over this package – 150,- Kč.</i></p>

        <p>Photography session of this type takes 1 hour.</p>
      </div>

      <div class="package">
        <h3>STANDARD package</h3>
        – 2.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 20 retouched photos on DVD
          <i>(+ Black&White versions)</i>
        </p>

        <p><i>Any additional photos over this package – 125,- Kč.</i></p>

        <p>Photography session of this type takes 1-1.5 hours.</p>
      </div>

      <div class="package">
        <h3>LARGE package</h3>
        – 3.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 30 retouched photos on DVD
          <i>(+ Black&White versions)</i>
        </p>

        <p><i>Any additional photos over this package – 120,- Kč.</i></p>

        <p>Photography session of this type takes 2 hours.</p>
      </div>

      <h2>Info:</h2>

      <p>
        Exterior photographs are possible wherever you specify, or I can offer a few good locations
        for photography. For exterior picture you need to choose at least the STANDARD package. In
        case that pictures are taken at your home or nearby, additional gas allowance 500,- Kč are
        to be paid.
      </p>

      <p>
        Photos are professionally prepared, retouched. On the DVD you get photos in the highest
        quality. On the DVD are only the number of the selected photographs according to the choosen
        package. You will be given the opportunity to choose the pictures you like the most from all
        the pictures taken during the photosession. The rest of the pictures taken during the
        photosession are not included.
      </p>

      <p>The price is always payable on the spot after the photosession.</p>

      <p>
        Few days after the photosession I will give you a link to your gallery of pictures, lightly
        retouched, where you can choose the pictures you like.
      </p>

      <p>
        You will receive your photos in 21 calendar days. I reserve the right to extend the period,
        if necessary.
      </p>

      <br />
      <p><i>Prices from 1.1.2016</i></p>
    </template>

    <template v-else>
      <h1>Těhulky</h1>
      <hr />

      <h2>Balíčky:</h2>
      <img class="pricelist-img" src="~/assets/img/pricing/bellies.jpg" alt="Těhulky" />

      <div class="package">
        <h3>Balíček MINI</h3>
        – 1.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 10 ks fotografií na DVD
          <i>(obsahuje též 10 ks kopií v černobílém provedení)</i>
        </p>

        <p><i>Každá další fotografie nad rámec tohoto balíčku 150,- Kč.</i></p>

        <p>Fotografování tohoto typu trvá 1 hodinu.</p>
      </div>

      <div class="package">
        <h3>Balíček STANDARD</h3>
        – 2.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 20 ks fotografií na DVD
          <i>(obsahuje též 20 ks kopií v černobílém provedení)</i>
        </p>

        <p><i>Každá další fotografie nad rámec tohoto balíčku 125,- Kč.</i></p>

        <p>Fotografování tohoto typu trvá 1-1,5 hodiny.</p>
      </div>

      <div class="package">
        <h3>Balíček LARGE</h3>
        – 3.600,- Kč

        <p>
          <i class="fa fa-check" aria-hidden="true"></i> 30 ks fotografií na DVD
          <i>(obsahuje též 30 ks kopií v černobílém provedení)</i>
        </p>

        <p><i>Každá další fotografie nad rámec tohoto balíčku 120,- Kč.</i></p>

        <p>Fotografování tohoto typu trvá 2 hodiny.</p>
      </div>

      <h2>Info:</h2>

      <p>
        Fotografování v exteriéru je možné kdekoli si sami určíte {příplatek za dopravu pokud budeme
        fotit u vás doma nebo okoli 500 Kč (Praha)} nebo Vám mohu několik pěkných lokalit nabídnout.
        Zde je podmínkou odebrání minimálně balíčku STANDARD.
      </p>

      <p>
        Fotografie jsou profesionálně upravené, retušované. Na DVD dostanete fotografie v maximálním
        rozlišení, kde jsou pouze fotografie v počtu zvoleného balíčku. Ostatní nafocené fotografie
        během Vaši návštěvy fotoateliéru neposkytuji.
      </p>

      <p>Cena je splatná vždy na místě po focení.</p>

      <p>
        Pár dní po focení, dám Vám odkaz do galerie obrázků, kde si můžete vybrat fotky, které se
        Vám nejvíce líbí v počtu zvoleného balíčku.
      </p>

      <p>
        Doba vyhotovení a předání fotografií je 21 kalendářních dní. Vyhrazuji si právo tuto lhůtu v
        případě potřeby prodloužit.
      </p>

      <br />
      <p><i>Ceny jsou platné od 1.1.2016</i></p>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class PricingBelliesPage extends Vue {}
</script>
