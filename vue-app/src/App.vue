<template>
  <div>
    <router-view />
    <div class='mt-5'>
        <span class='pt-5 small'>
            Powered by Millertronic Systems™. <br/>
            Pokémon images &amp; names © Nintendo/Game Freak 1995-{{currentYear}}. <br/>
            Pokémon sprite links © Pokémon Database, 2008-{{currentYear}}.
        </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
      currentYear: () => new Date().getFullYear()
  }
}
</script>

