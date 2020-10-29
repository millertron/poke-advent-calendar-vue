<template>
    <div id="app">
    <nav class='nav-red p-2'>
        <h3>{{ greetingMessage }}</h3>
    </nav>
    <Calendar v-if='isCalendarAvailable' />
    <Preview v-if='!isCalendarAvailable' />
    <Modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '../components/Calendar'
import Modal from '../components/Modal'
import Preview from '../components/Preview'
import { isCalendarAvailable } from '../helpers/utils'
import { FETCH_USER_POCKET_DATA_ACTION } from '../store/actions'

export default {
  components: {
    Calendar,
    Preview,
    Modal
  },

  computed: {
    isCalendarAvailable: isCalendarAvailable,
    ...mapState([ 'greetingMessage' ])
  },

  mounted() {
    this.$store.dispatch(FETCH_USER_POCKET_DATA_ACTION, this.$route.params.key)
  }

}
</script>
