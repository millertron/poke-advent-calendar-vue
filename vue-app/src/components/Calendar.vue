<template>
    <div class='calendar'>
        <div class='d-flex justify-content-center flex-wrap'>
            <CalendarPocket v-for='(pocket, index) in calendarPockets' v-bind:key='index'
                :id='pocket.id'
                :dayNum='pocket.dayNum' />        
        </div>
    </div>
</template>

<script>
import CalendarPocket from './CalendarPocket'

export default {
    components: {
        CalendarPocket
    },

    data: () => {
        return {
            calendarPockets: [ 
                {id: 1, dayNum: 1}, {id: null, dayNum: 2}, {id: null, dayNum: 3},
                {id: null, dayNum: 4}, {id: null, dayNum: 5}, {id: null, dayNum: 6}
            ]
        }
    }
}
</script>
