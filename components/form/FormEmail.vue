<template lang="pug">
.flex
    label Email
    b-input(
        type='email',
        placeholder='nama@email.com',
        v-model='$store.state.landing.landing1.data.email',
        @input='res.change',
        :class='{ "is-valid": res.valid }'
    )
    b-form-invalid-feedback(:state='res.valid') Periksa kembali email kamu
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
                if (store.state.landing.landing1.data.email.length > 2) {
                    res.valid = true
                    store.commit('landing/landing1/SETVALID', {
                        k: 'email',
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
