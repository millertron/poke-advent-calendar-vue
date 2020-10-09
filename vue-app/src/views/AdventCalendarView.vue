<template>
    <div id="app">
    <nav class='nav-red p-2'>
        <h3>{{ greetingMessage }}</h3>
    </nav>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
import { mapState } from 'vuex'
import { FETCH_USER_POCKET_DATA_ACTION } from '../store/actions'

export default {
  components: {
    Calendar
  },

  computed: {
    ...mapState([ 'greetingMessage' ])
  },

  mounted() {
    this.$store.dispatch(FETCH_USER_POCKET_DATA_ACTION, this.$route.params.key)
  }

}
</script>
