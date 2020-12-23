<template lang="pug">
.flex.py-1.flex-column(v-if='type')
    label.theme3 {{ text }}
    .flex
        b-form-select(
            v-if='data',
            :options='data',
            @change='Rchange',
            :value='xvalue'
        )
            template(v-slot:first)
                b-form-select-option(:value='null', disabled) Pilih {{ text }}
</template>
<script>
import { computed, useContext } from '@nuxtjs/composition-api'
export default {
    components: {},
    props: {
        type: {
            type: String,
            default: 'provinsi'
        },
        text: {
            type: String,
            default: 'Provinsi'
        },
        data: {
            type: Array,
            default: () => []
        },
        xvalue: {
            type: Number,
            default: 0
        }
    },
    setup(props, { emit }) {
        const { store } = useContext()
        const Rchange = (a) => {
            const raw = props.data.find((r) => {
                if (r.value === a) {
                    return r
                }
            })
            emit('changeLoc', {
                type: props.type,
                value: a,
                raw
            })
        }
        const value = computed(
            () => store.state.landing.landing1.data.alamat_default[props.xvalue]
        )
        return { Rchange, value }
    }
}
</script>
