<template lang="pug">
.flex
    label.text-danger Jika member 101red, masukkan nama website di 101Red
    b-input(
        v-model='$store.state.landing.landing1.data.user101red',
        @input='res.change',
        :class='{ "is-valid": res.valid }'
    )
    // b-form-invalid-feedback(:state='res.valid') Periksa kembali nama kamu
    // b-form-valid-feedback(:state='res.valid') Looks Good.
</template>
<script>
import { reactive, useContext } from '@nuxtjs/composition-api'
export default {
    setup() {
        const { store } = useContext()
        const res = reactive({
            valid: null,
            change: () => {
                if (store.state.landing.landing1.data.user101red.length > 2) {
                    res.valid = true
                    store.commit('landing/landing1/SETVALID', {
                        k: 'user101red',
                        v: true
                    })
                    store.dispatch('landing/landing1/updateForm')
                } else {
                    res.valid = false
                }
            }
        })
        return { res }
    }
}
</script>
