<template>
    <div v-if='this.modalData.displayed'>
        <div class="modal ib fade-in">
            <div class="modal-dialog">
                <div class="modal-content text-center">
                    <div class="modal-header bg-dark-green">
                        <h4 class="modal-title">{{ this.modalData.title }}</h4>
                        <button type="button" class="close"
                            v-on:click='closeModal'>&times;</button>
                    </div>

                    <div class="modal-body bg-med-red">
                        <PocketModalContent v-if='this.pokeId'
                            :pokeId='this.pokeId' />
                        <CompletionModalContent 
                            v-if='"complete" === this.modalData.message'/>
                    </div>

                    <div class="modal-footer bg-dark-green">
                        <button type="button" class="btn btn-danger"
                            v-on:click='closeModal'>OK</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="modalMask" class="mask ib" v-on:click='closeModal'/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { CLOSE_MODAL_ACTION, CLOSE_POCKET_MODAL_ACTION } from '../store/actions'
import PocketModalContent from './PocketModalContent'
import CompletionModalContent from './CompletionModalContent'
import { ENGLISH, JAPANESE } from '../helpers/lang'
export const OPEN_POCKET_MODAL_TITLE = {
    [ENGLISH]: 'You caught a Pokémon!',
    [JAPANESE]: 'ポケモンをゲットした！'
}
export const errorModalTitle = "Oops...Error!"
export const errorModalMessage = "An error occurred during pocket opening. Please try again later or contact site admin."

export default {
    components: {
        PocketModalContent,
        CompletionModalContent
    },
    computed: {
        ...mapState(['modalData']),
        pokeId() {
            return this.modalData.pokeId
        }
    },
    methods: {
        closeModal() {
            if (this.pokeId) {
                this.$store.dispatch(CLOSE_POCKET_MODAL_ACTION)
            } else {
                this.$store.dispatch(CLOSE_MODAL_ACTION)
            }
        }
    }
}
</script>
