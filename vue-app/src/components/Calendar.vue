<template>
    <div class='calendar'>
        <div class='d-flex justify-content-center flex-wrap'>
            <CalendarPocket v-for='(pocket, index) in calendarPockets' v-bind:key='index'
                :id='pocket.id'
                :dayNum='pocket.dayNum' />        
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
            calendarPockets: [ 
                {id: 1, dayNum: 1}, {id: null, dayNum: 2}, {id: null, dayNum: 3},
                {id: null, dayNum: 4}, {id: null, dayNum: 5}, {id: null, dayNum: 6}
            ]
        }
    },
    
    computed: {
        currentYear: () => new Date().getFullYear()
    }
}
</script>
