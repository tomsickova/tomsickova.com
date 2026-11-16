<template>
  <form
    :action="site.contactFormAction"
    method="post"
    accept-charset="utf-8"
    class="flex flex-col gap-7"
  >
    <div class="flex flex-col gap-2">
      <label for="contact-name" class="eyebrow">{{ t('contact.name') }}</label>
      <input
        id="contact-name"
        type="text"
        name="name"
        autocomplete="name"
        :placeholder="t('contact.namePlaceholder')"
        required
        class="field"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="contact-email" class="eyebrow">{{ t('contact.email') }}</label>
      <input
        id="contact-email"
        type="email"
        name="_replyto"
        autocomplete="email"
        :placeholder="t('contact.emailPlaceholder')"
        required
        class="field"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="contact-phone" class="eyebrow">{{ t('contact.phone') }}</label>
      <input
        id="contact-phone"
        type="tel"
        name="telephone"
        autocomplete="tel"
        placeholder="+420 123456789"
        class="field"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="contact-message" class="eyebrow">{{ t('contact.message') }}</label>
      <textarea
        id="contact-message"
        name="message"
        rows="4"
        required
        class="field field-area"
      ></textarea>
    </div>
    <input type="hidden" name="_subject" value="Message from tomsickova.com!" />
    <button type="submit" class="button min-h-14 self-start px-10 text-sm">
      {{ t('contact.send') }}
    </button>
  </form>
</template>

<script setup lang="ts">
import site from '~~/data/site.json'

const { t } = useI18n()
</script>

<style scoped>
.field {
  width: 100%;
  height: 52px;
  padding: 0;
  background: transparent;
  border: 0;
  border-bottom: 2px solid var(--color-ink);
  border-radius: 0;
  box-shadow: none;
  color: inherit;
  font: inherit;
  font-size: 18px;
}

.field:focus {
  border-color: var(--color-accent);
  box-shadow: 0 2px 0 0 var(--color-accent);
  outline: none;
}

.field-area {
  height: 140px;
  padding-block: 14px;
  resize: vertical;
}
</style>
