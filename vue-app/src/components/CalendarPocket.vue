<template>
    <div>
        <div class='card pocket-card'>
            <ImageHolder v-if="this.isOpen" :imageDataKey='1' />
            <button v-if="!this.isOpen"
                class='btn btn-light h-100'
                :class='this.orderClass'
                :disabled='this.isDisabled' >
                Pocket {{this.dayNum}}
            </button>
        </div>
    </div>
</template>

<script>
import ImageHolder from './ImageHolder'
import { isPastNthDayOfMonth } from '../helpers/utils'

/* Arrange in fixed order: 
2, 8, 24, 11, 13, 
20, 3, 17, 5, 1, 
21, 18, 25, 9, 16,
12, 6, 14, 22, 4,
15, 7, 19, 23, 10
*/
const order = [
    10, 1, 7, 20, 9,
    17, 21, 2, 14, 25,
    4, 16, 5, 18, 20,
    15, 8, 12, 23, 6,
    11, 19, 24, 3, 13
]

export default {
    components: {
        ImageHolder
    },

    props: {
        id: Number,
        dayNum: Number
    },

    computed: {
        isDisabled() {
            return isPastNthDayOfMonth(this.dayNum)
        },
        orderClass() {
            return `order-${order[this.dayNum -1]}`
        },
        isOpen() {
            return this.id !== null
        }
    }
}
</script>
