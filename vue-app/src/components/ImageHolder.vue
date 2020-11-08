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
import { getPokeImgSrc, getPokeNames } from '../helpers/utils'
import { ENGLISH } from '../helpers/lang'
export default {
    props: {
        imageDataKey: Number
    },

    computed: {
        pokeName() {
            return getPokeNames(this.imageDataKey)[ENGLISH]
        },
        pokeImgSrc() {
            return getPokeImgSrc(getPokeNames(this.imageDataKey)[ENGLISH])
        }
    }
}
</script>
