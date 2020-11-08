<template>
    <div className="modalImageContent transparent slide-from-right">
        <h3>{{ this.text }}</h3>
        <div>
            <img :src='this.imgSrc' :alt='this.pokeName' :title='this.pokeName'/>
        </div>
    </div>
</template>

<script>
import { getPokeNames, getPokeImgSrc } from '../helpers/utils'
import { ENGLISH, JAPANESE } from '../helpers/lang'
export default {
    props: {
        pokeId: Number
    },
    computed: {
        pokeName() {
            return getPokeNames(this.pokeId)[ENGLISH]
        },
        text() {
            const message = {
                [ENGLISH]: `You got ${this.pokeName}!`,
                [JAPANESE]: `${this.pokeName}をつかまえた！`
            }
            return message[ENGLISH]
        },
        imgSrc() {
            return getPokeImgSrc(getPokeNames(this.pokeId)[ENGLISH])
        }
    }
}
</script>
