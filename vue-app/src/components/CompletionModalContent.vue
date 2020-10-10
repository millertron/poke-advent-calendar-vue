<template>
    <div class="modalImageContent">
        <p>
            You have completed this advent calendar!<br/>
            The creator of this site (whom you know well)<br/>
            wishes you a very happy Christmas!
        </p>
        <div class="ib"><img :src='this.imgSrc' alt='Merry Christmas!' title='Merry Christmas!' /></div>
        <div class="ib mx-3"><img :src='this.imgSrc' alt='Merry Christmas!' title='Merry Christmas!' /></div>
        <div class="ib"><img :src='this.imgSrc' alt='Merry Christmas!' title='Merry Christmas!' /></div>
    </div>
</template>

<script>
import { getPokeImgSrc } from '../helpers/utils'
export default {
    computed: {
        imgSrc: () => getPokeImgSrc('delibird')
    }
}
</script>
