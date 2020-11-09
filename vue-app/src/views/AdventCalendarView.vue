<template>
    <div id="app">
    <nav class='navbar nav-red p-2'>
      <div class='container-fluid'>
        <div class='navbar-header'>
          <span class='navbar-brand'>{{ greetingMessage }}</span>
        </div>
        <ul class='nav navbar-nav navbar-right'>
          <li><LanguageSelector /></li>
        </ul>
      </div>
    </nav>
    <Calendar />
    <Modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LanguageSelector from '../components/LanguageSelector'
import Calendar from '../components/Calendar'
import Modal from '../components/Modal'
import { FETCH_USER_POCKET_DATA_ACTION } from '../store/actions'

export default {
  components: {
    LanguageSelector,
    Calendar,
    Modal
  },

  computed: {
    ...mapState([ 'greetingMessage' ])
  },

  mounted() {
    this.$store.dispatch(FETCH_USER_POCKET_DATA_ACTION, this.$route.params.key)
  }

}
</script>
