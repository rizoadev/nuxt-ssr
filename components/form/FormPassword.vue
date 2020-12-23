<template lang="pug">
.flex
    label(for='nama') Password
    b-input#password(
        type='password',
        v-model='$store.state.landing.landing1.data.password',
        @input='res.change',
        :class='{ "is-valid": res.valid }'
    )
    b-form-invalid-feedback(:state='res.valid') Password minimal 6 karakter
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
                if (store.state.landing.landing1.data.password.length >= 6) {
                    res.valid = true
                    store.commit('landing/landing1/SETVALID', {
                        k: 'password',
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
