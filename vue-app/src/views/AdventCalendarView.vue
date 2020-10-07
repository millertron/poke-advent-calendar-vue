<template>
    <div id="app">
    <nav class='nav-red p-2'>
        <h3>Greeting</h3>
    </nav>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
export default {
  components: {
    Calendar
  }
}
</script>
