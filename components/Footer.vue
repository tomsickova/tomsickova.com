<template>
  <footer class="pt-8 pb-4">
    <div class="flex justify-between flex-wrap px-4 py-8">
      <div>
        <ul>
          <li>Tatyana Tomsickova</li>
          <li>Wiesenthalova 1034/6, Praha 5</li>
          <li>+420774002703</li>
          <li>t.tomsickova@seznam.cz</li>
        </ul>
      </div>
      <div class="text-5xl">
        <a href="https://www.facebook.com/tatyanatomsickovaphotography" target="_blank">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/tatyanatomsickovaphotography" target="_blank">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="text-right">
      &copy; {{ new Date().getFullYear() }} Tatyana Tomsickova &middot;
      <nuxt-link to="/policy" class="underline">
        {{ $t('page.policy') }}
      </nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>
