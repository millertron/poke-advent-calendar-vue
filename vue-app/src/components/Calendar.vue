<template>
    <div class='calendar'>
        <div class='d-flex justify-content-center flex-wrap'>
            <CalendarPocket v-for='pocket in calendarPockets' v-bind:key='pocket.id'
                v-bind:dayNum='pocket.dayNum' />        
        </div>
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
import CalendarPocket from './CalendarPocket'

export default {
    components: {
        CalendarPocket
    },

    data: () => {
        return {
            calendarPockets: [ {id: 1, dayNum: 1}, {id: 2, dayNum: 2}, {id: 3, dayNum: 3} ]
        }
    },
    
    computed: {
        currentYear: () => new Date().getFullYear()
    }
}
</script>
