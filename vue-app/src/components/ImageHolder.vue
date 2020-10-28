<template>
    <div class='text-center'>
        <div class='w-100 h-75 pt-3'>
            <img :src='this.pokeImgSrc' 
                :alt='this.pokeName'
                :title='this.pokeName' />
        </div>
        <div>
            <span>{{ this.pokeName }}</span>
        </div>
    </div>
</template>

<script>
import { getPokeImgSrc, getPokeName } from '../helpers/utils'
export default {
    props: {
        imageDataKey: Number
    },

    computed: {
        pokeName() {
            return getPokeName(this.imageDataKey)
        },
        pokeImgSrc() {
            return getPokeImgSrc(getPokeName(this.imageDataKey))
        }
    }
}
</script>
