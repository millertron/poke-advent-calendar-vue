<template>
    <div className="modalImageContent transparent slide-from-right">
        <h3>{{ this.text }}</h3>
        <div>
            <img :src='this.imgSrc' :alt='this.pokeName' :title='this.pokeName'/>
        </div>
    </div>
</template>

<script>
import { getPokeName, getPokeImgSrc } from '../helpers/utils'
export default {
    props: {
        pokeId: Number
    },
    computed: {
        pokeName() {
            return getPokeName(this.pokeId)
        },
        text() {
            return `You got ${this.pokeName}!`
        },
        imgSrc() {
            return getPokeImgSrc(this.pokeName)
        }
    }
}
</script>
