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
import { mapState } from 'vuex'
export default {
    props: {
        pokeId: Number
    },
    computed: {
        pokeName() {
            return getPokeNames(this.pokeId)[this.lang]
        },
        text() {
            const message = {
                [ENGLISH]: `You got ${this.pokeName}!`,
                [JAPANESE]: `${this.pokeName}をつかまえた！`
            }
            return message[this.lang]
        },
        imgSrc() {
            return getPokeImgSrc(getPokeNames(this.pokeId)[ENGLISH])
        },
        ...mapState(['lang'])
    }
}
</script>
