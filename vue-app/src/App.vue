<template>
  <div>
    <router-view />
    <Snow color='#FFFFFF' :swing='5'/>
    <footer class='page-footer'>
      <div class='mt-5'>
          <span class='pt-5 small'>
              Powered by Millertronic Systems™. <br/>
              Pokémon images &amp; names © Nintendo/Game Freak 1995-{{currentYear}}. <br/>
              Pokémon sprite links © Pokémon Database, 2008-{{currentYear}}.
          </span>
          <br />
          <img class='scaled-logo' src='./assets/vue-logo.png' alt='Vue.js' title='Vue.js'/>
          <img class='scaled-logo' src='./assets/node-logo.png' alt='Node.js' title='Node.js'/>
          <img class='scaled-logo' src='./assets/mongo-logo.png' alt='MongoDB' title='MongoDB'/>
      </div>
    </footer>
  </div>
</template>

<script>
import Snow from 'vue-niege'
  
export default {
  components: {
    Snow
  },
  name: 'App',
  computed: {
      currentYear: () => new Date().getFullYear()
  }
}
</script>

