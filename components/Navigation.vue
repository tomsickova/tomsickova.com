<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="localePath('/')">{{ $t('page.home') }}</nuxt-link>
      </li>
      <span class="sep">/</span>
      <li>
        <nuxt-link :to="localePath('/gallery')">{{ $t('page.gallery') }}</nuxt-link>
      </li>
      <span class="sep">/</span>
      <li>
        <nuxt-link :to="localePath('/about')">{{ $t('page.about') }}</nuxt-link>
      </li>
      <span id="sep" class="sep">/</span>
      <br id="br" />
      <li>
        <nuxt-link :to="localePath('/pricing')">{{ $t('page.pricing') }}</nuxt-link>
      </li>
      <span class="sep">/</span>
      <li>
        <nuxt-link :to="localePath('/contact')">{{ $t('page.contact') }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
