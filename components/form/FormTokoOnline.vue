<template lang="pug">
.flex
    b-form-checkbox(switch, v-model='res.visible') 
        span(style='position: relative') {{ title }}
    .flex
        b-collapse(:id='"collapse_" + name', :visible='res.visible')
            .flex.pb-2.pt-1(v-if='name !== "lainnya"')
                b-form-input.flex(
                    placeholder='',
                    v-model='res.value',
                    @input='res.change'
                )
            .flex.pb-2.pt-1(v-else)
                b-form-textarea#textareaccx(
                    placeholder='',
                    rows='3',
                    max-rows='3',
                    v-model='res.value',
                    @input='res.change'
                )

    // b-form-invalid-feedback(:state='res.valid') Nomor whatsapp utama
    // b-form-valid-feedback(:state='res.valid') Looks Good.
</template>
<script>
import { reactive, useContext } from '@nuxtjs/composition-api'
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { store } = useContext()
        const res = reactive({
            valid: null,
            visible: false,
            value: '',
            change: () => {
                store.commit('landing/landing1/SETTOKO', {
                    k: props.name,
                    v: res.value
                })
                store.dispatch('landing/landing1/updateForm')
            }
        })
        return { res }
    }
}
</script>
