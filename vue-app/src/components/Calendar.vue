<template>
    <div class='d-flex justify-content-center'>
        <div v-if='this.isCalendarAvailable' class='calendar d-flex justify-content-center flex-wrap'>
            <CalendarPocket v-for='(pocket, index) in pockets' v-bind:key='index'
                :id='pocket.pokeId'
                :dayNum='pocket.dayNum' />        
        </div>
        <Preview v-if='!this.isCalendarAvailable' />
    </div>
</template>

<script>
import CalendarPocket from './CalendarPocket'
import Preview from '../components/Preview'
import { isCalendarAvailable } from '../helpers/utils'
import { mapState } from 'vuex'

export default {
    components: {
        CalendarPocket,
        Preview
    },

    computed: {
        isCalendarAvailable: isCalendarAvailable,
        ...mapState(['pockets'])
    }
}
</script>
