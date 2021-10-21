<template>
  <div class="flex flex-wrap items-start">
    <img class="w-full lg:w-1/3 p-4" src="~/assets/img/tatyana.jpg" alt="Tatyana portrait" />

    <div class="prose w-full lg:w-1/2 p-4">
      <template v-if="$i18n.locale === 'en'">
        <h2>Hello,</h2>
        <p>
          My name is Tatyana Tomšíčkova and I am from Bulgaria. I got married in the Czech Republic
          and I currently live and work in Prague.
        </p>

        <p>
          I am a mother of two boys. I have always had a passion for photography and since 2009 I am
          a proud owner of my first DSLR camera. In my free time I love taking pictures. I am mostly
          photographing newborns, children and families. You can have a look at the gallery to see
          some of my work. Also you can follow my newest work on
          <a href="https://www.facebook.com/tatyanatomsickovaphotography" target="_blank"
            ><b><u>Facebook</u></b></a
          >.
        </p>

        <p>
          If you would like to have pictures taken by me, you can send me an email and we can
          arrange a photosession. You can reach me through the
          <nuxt-link :to="localePath('/contact')"
            ><b><u>contact form</u></b></nuxt-link
          >.
        </p>

        <p>
          Everyone deserves to have perfect pictures. So don't hesitate and call in order to capture
          some happy moments of your life or the life of your precious kids and to have beautiful
          memories for life!
        </p>
      </template>
      <template v-else>
        <h2>Vítejte,</h2>
        <p>
          Jmenuji se Taťána Tomšíčková a jsem z Bulharska. Vdala jsem se v České republice. V
          současné době žiji a pracuji v Praze. Absolvovala jsem univerzitu národní a světové
          ekonomiky v Bulharsku s bakalářským titulem v informačních technologií.
        </p>

        <p>
          Jsem matka dvou dětí. Měla jsem vždy vášeň pro fotografii, od roku 2009 jsem hrdým
          majitelem DSLR. Ve volném čase ráda fotím. Převážně fotografování novorozenců, dětí a
          rodin. Můžete si prohlednout moji galerii a uvidíte některé z mých prácí. Taktéž můžete
          sledovat moji nejnovější práci na
          <a href="https://www.facebook.com/tatyanatomsickovaphotography" target="_blank"
            ><b><u>Facebooku</u></b></a
          >.
        </p>

        <p>
          Pokud se vám moje práce líbí a měli byste zajem o nafocení svých dětí, sebe, celé rodiny
          nebo přátel, můžete mi poslat e-mail a domluvíme se na focení. Můžete mě kontaktovat
          prostřednictvím
          <nuxt-link :to="localePath('/contact')"
            ><b><u>kontaktního formuláře</u></b></nuxt-link
          >.
        </p>

        <p>
          Využijte fotografie jako jedinečný dárek - uvidíte, že opravdu vydařené fotky Vašich dětí
          potěší celou rodinu víc než jakýkoliv jiný dárek.
        </p>

        <p>Každý si zaslouží krasné fotografie.</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class AboutPage extends Vue {}
</script>
