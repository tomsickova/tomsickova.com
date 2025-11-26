<template>
  <form
    id="fs-frm"
    name="message-form"
    accept-charset="utf-8"
    action="https://formspree.io/f/xwpjgdrj"
    method="post"
    class="max-w-md mx-auto"
  >
    <ContentRenderer v-if="page" :value="page" class="font-bold text-2xl text-center mb-8" />
    <fieldset id="fs-frm-inputs" class="grid grid-cols-1 gap-6 mb-8">
      <label for="full-name" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.name') }}</span>
        <input
          id="full-name"
          type="text"
          name="name"
          :placeholder="$t('contact.namePlaceholder')"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label for="email-address" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.email') }}</span>
        <input
          id="email-address"
          type="email"
          name="_replyto"
          :placeholder="$t('contact.emailPlaceholder')"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label for="telephone" class="block">
        <span class="text-gray-700 font-medium">{{ $t('contact.phone') }}</span>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          placeholder="+420 123456789"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label for="message" class="block">
        <span class="text-gray-700 font-medium">
          {{ $t('contact.message') }}
        </span>
        <textarea
          id="message"
          rows="6"
          name="message"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
        <input
          id="email-subject"
          type="hidden"
          name="_subject"
          value="Message from tomsickova.com!"
        />
      </label>
    </fieldset>
    <input
      type="submit"
      :value="$t('contact.send')"
      class="flex items-center justify-center w-full cursor-pointer transition-colors px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap border border-gray-300 rounded-md shadow-sm bg-gray-600 text-gray-50 hover:bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </form>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
