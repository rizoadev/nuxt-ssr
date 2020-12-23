<template lang="pug">
.flex
    label Alamat Lengkap
    b-form-textarea#textareaccx(
        placeholder='Jl Mawar NO.2, RT.04 RW.45 Karangasem',
        rows='3',
        max-rows='3',
        v-model='$store.state.landing.landing1.data.alamat_default.alamat',
        :class='{ "is-valid": res.valid }',
        @input='res.change'
    )

    b-form-invalid-feedback(:state='res.valid') Periksa kembali alamat kamu
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
                if (
                    store.state.landing.landing1.data.alamat_default.alamat
                        .length > 10
                ) {
                    res.valid = true
                } else {
                    res.valid = false
                }
                store.dispatch('landing/landing1/updateForm')
            }
        })
        return { res }
    }
}
</script>
