<template>
  <div>
    <div class="contact-form">
      <form method="POST" action="https://formspree.io/t.tomsickova@seznam.cz">
        <input
          type="email"
          name="_replyto"
          :placeholder="$t('contact.form.emailPlaceholder')"
          required
          :oninvalid="`this.setCustomValidity(${$t('contact.form.emailError')})`"
          oninput="setCustomValidity('')"
        />
        <br />
        <textarea
          name="message"
          rows="5"
          :placeholder="$t('contact.form.messagePlaceholder')"
          required
          :oninvalid="`this.setCustomValidity(${$t('contact.form.messageError')})`"
          oninput="setCustomValidity('')"
        ></textarea
        ><br />
        <input type="hidden" name="_subject" value="Message from tomsickova.com!" />
        <input type="text" name="_gotcha" style="display: none" />
        <input type="hidden" name="_next" :value="localePath('/contact/thanks')" />
        <button type="submit">{{ $t('contact.send') }}</button>
      </form>
    </div>

    <div class="contact-socials">
      <p>
        <i class="fa fa-phone" aria-hidden="true"></i> <b>{{ $t('contact.phone') }}:</b> +420 774
        002 703
      </p>
      <p>
        <i class="fa fa-envelope-o" aria-hidden="true"></i> <b>E-mail:</b> t.tomsickova@seznam.cz
      </p>
      <p>
        <a href="https://www.facebook.com/tatyanatomsickovaphotography" target="_blank"
          ><i class="fa fa-facebook-official" aria-hidden="true"></i> <b>Facebook</b></a
        >
      </p>
      <p>
        <a href="https://500px.com/tracy-t" target="_blank"
          ><i class="fa fa-500px" aria-hidden="true"></i> <b>500px</b></a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
