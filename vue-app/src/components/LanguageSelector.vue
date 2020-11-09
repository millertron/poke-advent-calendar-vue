<template>
    <div>
        <select v-on:change='onChange($event)'>
            <option v-for='option in options' 
                :key='option.value' 
                :value='option.value'>
                {{ option.key }}
            </option>
        </select>
    </div>    
</template>

<script>
import { ENGLISH, JAPANESE } from '../helpers/lang'
import { SWITCH_LANG_ACTION } from '../store/actions'
export default {
    data: function() {
        return {
            options: [
                { key: 'English', value: ENGLISH },
                { key: '日本語', value: JAPANESE }
            ]
        }
    },
    methods: {
        onChange(event) {
            console.log('Changing!')
            this.$store.dispatch(SWITCH_LANG_ACTION, event.target.value)
        }
    }
}
</script>
