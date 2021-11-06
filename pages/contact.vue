<template>
  <form
    id="fs-frm"
    name="message-form"
    accept-charset="utf-8"
    action="https://formspree.io/f/t.tomsickova@seznam.cz"
    method="post"
    class="max-w-md mx-auto"
  >
    <fieldset id="fs-frm-inputs" class="grid grid-cols-1 gap-6 mb-8">
      <label for="full-name" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.name') }}</span>
        <input
          id="full-name"
          type="text"
          name="name"
          :placeholder="$t('contact.namePlaceholder')"
          required=""
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
      /></label>
      <label for="email-address" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.email') }}</span>
        <input
          id="email-address"
          type="email"
          name="_replyto"
          :placeholder="$t('contact.emailPlaceholder')"
          required=""
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
      /></label>
      <label for="telephone" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.phone') }}</span>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          placeholder="+420 123456789"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
      /></label>
      <label for="message" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.message') }}</span>
        <textarea
          id="message"
          rows="6"
          name="message"
          required=""
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
        ></textarea>
        <input
          id="email-subject"
          type="hidden"
          name="_subject"
          value="Message from tomsickova.com!"
      /></label>
    </fieldset>
    <input
      type="submit"
      :value="$t('contact.send')"
      class="
        flex
        items-center
        justify-center
        w-full
        cursor-pointer
        transition-colors
        px-4
        py-2
        text-base
        font-medium
        leading-6
        whitespace-no-wrap
        border border-gray-300
        rounded-md
        shadow-sm
        bg-gray-600
        text-gray-50
        hover:bg-gray-700
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      "
    />
  </form>
</template>

<i18n>
{
  "cs": {
    "contact": {
      "name": "Jméno",
      "namePlaceholder": "Jméno a příjmení",
      "email": "Váš e-mail",
      "emailPlaceholder": "email@seznam.cz",
      "emailError": "Vyplňte prosím email",
      "phone": "Mobil",
      "message": "Vaše poptávka",
      "messageError": "Vyplnte prosim zpravu",
      "send": "Odeslat"
    }
  },
  "en": {
    "contact": {
      "name": "Name",
      "namePlaceholder": "First and Last",
      "email": "Your e-mail",
      "emailPlaceholder": "email@seznam.cz",
      "emailError": "Please enter your e-mail",
      "phone": "Telephone number",
      "message": "Your message",
      "messageError": "Please enter your message",
      "send": "Send"
    }
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ContactPage extends Vue {}
</script>

<style lang="postcss" scoped>
/* #fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
  padding-top: 0.2rem;
  display: flex;
  align-items: baseline;
} */

/* border, padding, margin, width */
/* #fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75em 1rem;
  margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
#fs-frm [type='text'],
#fs-frm [type='email'] {
  width: 100%;
}
#fs-frm [type='button'],
#fs-frm [type='submit'],
#fs-frm [type='reset'] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
#fs-frm [type='button']:focus,
#fs-frm [type='submit']:focus,
#fs-frm [type='reset']:focus {
  outline: none;
}
#fs-frm [type='submit'],
#fs-frm [type='reset'] {
  margin-bottom: 0;
}
#fs-frm select {
  text-transform: none;
}

#fs-frm [type='checkbox'] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  display: inline-block;
  width: auto;
  margin: 0 0.5em 0 0 !important;
}

#fs-frm [type='radio'] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  appearance: radio;
} */

/* address, locale */
/* #fs-frm fieldset.locale input[name='city'],
#fs-frm fieldset.locale select[name='state'],
#fs-frm fieldset.locale input[name='postal-code'] {
  display: inline;
}
#fs-frm fieldset.locale input[name='city'] {
  width: 52%;
}
#fs-frm fieldset.locale select[name='state'],
#fs-frm fieldset.locale input[name='postal-code'] {
  width: 20%;
}
#fs-frm fieldset.locale input[name='city'],
#fs-frm fieldset.locale select[name='state'] {
  margin-right: 3%;
} */
</style>
