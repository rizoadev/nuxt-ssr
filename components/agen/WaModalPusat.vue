<template lang="pug">
b-modal#WAPusat.modal-scrollable(size='md', centered, title='BootstrapVue')
    template(#modal-title, style='background: #f1ceaa')
        img(
            height='25',
            src='https://cdn.convertri.com/beef2fa8-e111-11ea-abef-0697e5ca793e/cd73436e62e405776c372df7968e1509b52947a7/logo_lumecolors.png'
        )
    .flex(style='margin-top: -10px')
        AgenWAFormLokasi

    template(#modal-footer, style='background: #f1ceaa')
        .flex
            .flex
                b-button(block, variant='success', @click='hubCS') 
                    .flex.d-flex.justify-content-center
                        i.mdi.mdi-whatsapp.mdi-18px
                        .pt-1.pl-1 Hubungi CS
</template>
<script>
import { computed, reactive, useContext } from '@nuxtjs/composition-api'
// import ReactPixel from 'react-facebook-pixel'
import AgenWAFormLokasi from './AgenWAFormLokasi'

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
            )
        })
        const hubCS = () => {
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
            // kirim
            store.dispatch('landing/list/sendWA', res.wa_alamat)
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
        return { hubCS }
    }
}
</script>
