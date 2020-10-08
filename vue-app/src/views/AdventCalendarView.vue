<template>
    <div id="app">
    <nav class='nav-red p-2'>
        <h3>{{ greetings }}</h3>
    </nav>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
import axios from 'axios'
import { serverUrl } from '../helpers/utils'

export default {
  components: {
    Calendar
  },

  data() {
    return {
      greetings: ''
    }
  },

  mounted() {
    axios
      .get(`${serverUrl}/pockets/${ this.$route.params.key }`)
      .then((response) => {
        this.greetings = `Season's greetings, ${response.data.user}`
      }).catch((error) => {
          if (error.response){
              console.log(error.response.status)
              console.log(error.response.message)
              this.greetings = "Please access this site using a valid URL key"
          } else {
              this.greetings = "Network Connection Unavailable"
          }
      })
  }

}
</script>
