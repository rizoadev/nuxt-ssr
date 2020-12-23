<template lang="pug">
b-modal#WaModalAgen.modal-scrollable(size='md', centered, title='BootstrapVue')
    template(#modal-title, style='background: #f1ceaa')
        img(
            height='25',
            src='https://cdn.convertri.com/beef2fa8-e111-11ea-abef-0697e5ca793e/cd73436e62e405776c372df7968e1509b52947a7/logo_lumecolors.png'
        )
    .flex(style='margin-top: -10px')
        .flex
            label No Whatsapp
            b-input(
                type='tel',
                @input='res.change',
                :value='$store.state.landing.list.wa_buyer'
            )

    template(#modal-footer, style='background: #f1ceaa')
        .flex
            .flex
                b-button(block, variant='success', @click='hubCS') 
                    .flex.d-flex.justify-content-center
                        i.mdi.mdi-whatsapp.mdi-18px
                        .pt-1.pl-1 Hubungi Agen
</template>
<script>
import { computed, reactive, useContext } from '@nuxtjs/composition-api'
// import ReactPixel from 'react-facebook-pixel'
import AgenWAFormLokasi from './AgenWAFormLokasi'

/*
const advancedMatching = {} // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: true, // enable logs
}
ReactPixel.init('369591444123381', advancedMatching, options)
*/

export default {
    components: {
        AgenWAFormLokasi
    },
    setup(props, context) {
        const { store } = useContext()

        const res = reactive({
            wa_cs: computed(() => store.state.landing.list.wa_cs),
            wa_buyer: computed(() => store.state.landing.list.wa_buyer),
            wa_msg: computed(() => store.state.landing.list.wa_msg),
            wa_alamat: computed(
                () => store.state.landing.landing1.data.alamat_default
            ),
            change: (x) => {
                store.commit('landing/list/SET', { k: 'wa_buyer', v: x })
            }
        })
        const hubCS = () => {
            // kirim
            store.dispatch('landing/list/sendWA', res.wa_alamat)
            /*
            ReactPixel.init($cfg.pixel, {}, { debug: true, autoConfig: false })
            ReactPixel.track('Lead', {
                phone: res.wa_buyer
                // content_name: 'Really Fast Running Shoes',
                // content_category: 'Apparel & Accessories > Shoes',
                // content_ids: ['1234'],
                // content_type: 'product',
                // value: 0.5,
                // currency: 'USD',
            })
            */
            /*
            window.open(
                'https://api.whatsapp.com/send?phone=' +
                    res.wa_cs +
                    '&text=' +
                    res.wa_msg,
                '_blank'
            )
            */
        }
        return { hubCS, res }
    }
}
</script>
