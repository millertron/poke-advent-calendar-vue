<template>
    <div>
        <select v-model="lang">
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
            ],
        }
    },
    computed: {
        lang: {
            get() {
                return this.$store.state.lang
            },
            set() {
                this.$store.dispatch(SWITCH_LANG_ACTION, event.target.value)
            }
        }
    },
}
</script>
