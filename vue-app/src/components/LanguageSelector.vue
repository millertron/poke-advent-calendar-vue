<template>
    <div>
        <select v-model="lang" v-on:change='onChange($event)'>
            <option v-for='option in options' 
                :key='option.value' 
                :value='option.value'>
                {{ option.key }}
            </option>
        </select>
    </div>    
</template>

<script>
import { mapState } from 'vuex'
import { ENGLISH, JAPANESE } from '../helpers/lang'
import { SWITCH_LANG_ACTION } from '../store/actions'
export default {
    data: function() {
        return {
            options: [
                { key: 'English', value: ENGLISH },
                { key: '日本語', value: JAPANESE }
            ],
        }
    },
    computed: {
        ...mapState(['lang'])
    },
    methods: {
        onChange(event) {
            this.$store.dispatch(SWITCH_LANG_ACTION, event.target.value)
        }
    }
}
</script>
