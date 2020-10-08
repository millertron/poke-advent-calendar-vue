<template>
    <div class='calendar'>
        <div class='d-flex justify-content-center flex-wrap'>
            <CalendarPocket v-for='(pocket, index) in pockets' v-bind:key='index'
                :id='pocket.pokeId'
                :dayNum='pocket.dayNum' />        
        </div>
    </div>
</template>

<script>
import CalendarPocket from './CalendarPocket'
import { mapState } from 'vuex'

export default {
    components: {
        CalendarPocket
    },

    computed: {
        ...mapState(['pockets'])
    }
}
</script>
