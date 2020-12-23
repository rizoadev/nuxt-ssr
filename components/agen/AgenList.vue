<template lang="pug">
#agenlist.flex.py-3.pt-5
    .container
        .flex.text-center
            .flex.px-3.py-4
                .text-center
                    div(
                        style='font-size: 22px; font-weight: 700; font-family: nunito'
                    ) Kini kamu bisa mendapatkan
                    div(
                        style='font-size: 22px; font-weight: 700; font-family: nunito'
                    ) LUMÉCOLORS di Area-mu

            .flex.px-3.pb-4
                .text-center.nunito(
                    style='font-size: 14px; line-height: 1.8rem'
                ) Lebih cepat sampai, bisa
                    | &nbsp;
                    span(style='font-weight: 900') Gosend / Grab
                    | &nbsp;
                    | hingga
                    | &nbsp;
                    span(style='font-weight: 900') COD
                    | &nbsp;
                    | dengan harga jual tetap sama dimanapun Anda berada.
        .flex.px-3.pb-4.nunito(
            style='font-size: 14px; line-height: 1.8rem; font-weight: 700; color: #4c351e'
        )
            .flex
                .text-center.nunito(style='font-size: 24px; font-weight: 700')
                    span Cara Pesan via Agen Stockist kami:
            .flex.pt-3
                .text-center 1. Pilih area terdekat dengan alamat Anda
                .text-center 2. Klik `BELI DISINI` untuk pembelian, konsultasi atau menjadi reseller
                .text-center 3. Pembelian via Shopee/Tokopedia bisa klik icon-nya yang ada di list Agen terdekat

        .flex.px-3.pt-1.pb-1.nunito(v-for='(p, i) in res.provs', :key='p._id')
            b-button(
                block,
                variant='light',
                @click='res.chOpen(p)',
                style='background: #ead7c9; border: solid 1px #ead7c9'
            )
                .flex.d-flex
                    .flex.d-flex
                        i.mdi.mdi-18px.mdi-chevron-double-right(
                            v-if='p.show === false'
                        )
                        i.mdi.mdi-18px.mdi-chevron-double-down(v-else)
                        .pt-1.pl-2(style='font-weight: 600') {{ p.name }}
                    .pt-1.text-sm(style='color: #5d3e22') {{ p.count }}
            b-collapse(:visible='p.show')
                .ml-3.mt-1(v-for='k in res.kab', :key='k._id')
                    b-button.mt-1(
                        block,
                        variant='light',
                        @click='res.chOpenKab(k)',
                        style='background: #faf0e4; border: solid 1px #f6e4d1; font-weight: 600'
                    )
                        .flex.d-flex
                            i.mdi.mdi-18px.mdi-chevron-right(
                                v-if='k.show === false'
                            )
                            i.mdi.mdi-18px.mdi-chevron-down(v-else)
                            .pt-1.pl-2 {{ k.name }}
                        .pt-1.text-sm(style='color: #5d3e22') {{ k.count }}

                    b-collapse(:visible='k.show')
                        .flex.mb-1.mt-3(
                            v-for='a in res.agen',
                            :key='a._id',
                            style='border: solid 1px #ead7c9; background: #faf8f5'
                        )
                            .flex.mt-2
                                .flex.px-3.nunito(
                                    style='color: #00000f; font-size: 18px; text-transform: uppercase'
                                ) {{ a.fullname }}
                                .flex.py-1.px-3(
                                    style='font-size: 14px; line-height: 24px'
                                )
                                    .flex {{ a.alamat_default.alamat }}
                                    .flex {{ a.alamat_default.kelurahan_name }}
                                    .flex {{ a.alamat_default.kecamatan_name }}
                                    .flex {{ a.alamat_default.kabupaten_name }}

                                .flex.d-flex.px-3
                                    i.mdi.mdi-package-variant-closed.mdi-18px
                                    .flex
                                        .pt-1.pl-2 COD / Cash on Delivery
                                            i.mdi.mdi-check-bold.text-success.ml-2
                                .flex.d-flex.px-3
                                    i.mdi.mdi-motorbike.mdi-18px
                                    .flex
                                        .pt-1.pl-2 Instant Courier
                                            i.mdi.mdi-check-bold.text-success.ml-2
                                .flex.d-flex.px-3(v-if='a.instagram')
                                    div(style='padding-top: 3px')
                                        i.mdi.mdi-instagram.mdi-18px
                                    .flex
                                        .pt-1.pl-2
                                            b-link(
                                                :href='a.instagram',
                                                target='_blank',
                                                rel='nofollow'
                                            ) {{ a.instagram.replace("https://www.instagram.com/", "").replace("https://instagram.com/", "") }}

                                .flex
                                    .flex.d-flex.px-3(
                                        v-if='a.online_store.shopee'
                                    )
                                        div(style='padding-top: 3px')
                                            img(
                                                width='16px',
                                                height='16px',
                                                src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/f1b79e113db632d7b95da654308617d0'
                                            )
                                        .flex
                                            b-link(
                                                :href='a.online_store.shopee',
                                                target='_blank',
                                                rel='nofollow'
                                            )
                                                .pt-1.pl-2 {{ a.online_store.shopee.replace("https://shopee.co.id/", "") }}
                                                    // i.mdi.mdi-check-bold.text-success.ml-2
                                    .flex.d-flex.px-3(
                                        v-if='a.online_store.tokopedia'
                                    )
                                        div(style='padding-top: 3px')
                                            img(
                                                width='16px',
                                                height='16px',
                                                src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/9a5ab0409755fce2b4bbc5efe9b1b61f'
                                            )
                                        .flex
                                            b-link(
                                                :href='a.online_store.tokopedia',
                                                target='_blank',
                                                rel='nofollow'
                                            )
                                                .pt-1.pl-2 {{ a.online_store.tokopedia.replace("https://tokopedia.com/", "").replace("https://www.tokopedia.com/", "") }}
                                                    // i.mdi.mdi-check-bold.text-success.ml-2
                                    .flex.d-flex.px-3(
                                        v-if='a.online_store.lazada'
                                    )
                                        div(style='padding-top: 3px')
                                            img(
                                                width='16px',
                                                height='16px',
                                                src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/9bfc25fd99103a5de9a24ca2ea500026'
                                            )
                                        .flex
                                            b-link(
                                                :href='a.online_store.lazada',
                                                target='_blank',
                                                rel='nofollow'
                                            )
                                                .pt-1.pl-2 {{ a.online_store.lazada.replace("https://lazada.co.id/shop/", "").replace("https://www.lazada.co.id/shop/", "") }}
                                                    //   i.mdi.mdi-check-bold.text-success.ml-2
                                    .flex.d-flex.px-3(
                                        v-if='a.online_store.bukalapak'
                                    )
                                        div(style='padding-top: 3px')
                                            img(
                                                width='16px',
                                                height='16px',
                                                src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/db0204d1feb2d8ce1e92a8c025c80fe4'
                                            )
                                        .flex
                                            b-link(
                                                :href='a.online_store.bukalapak',
                                                target='_blank',
                                                rel='nofollow'
                                            )
                                                .pt-1.pl-2 {{ a.online_store.bukalapak.replace("https://www.bukalapak.com/u/", "").replace("https://bukalapak.com/u/", "") }}
                                                    // i.mdi.mdi-check-bold.text-success.ml-2

                            .flex.py-2.px-3.nunito
                                b-button(
                                    variant='success',
                                    block,
                                    @click='res.beli(a)'
                                )
                                    .flex.d-flex.justify-content-center
                                        i.mdi.mdi-whatsapp.mdi-18px
                                        .pt-1.pl-2 BELI DISINI

                            // .flex.d-flex.mt-2
                                .flex.d-flex.justify-content-center.py-1(
                                    style='background:#faf0e4'
                                )
                                    i.mdi.mdi-whatsapp.mdi-24px(
                                        style='color:#4c351e'
                                    )

                                    b-link(
                                        :href='"https://api.whatsapp.com/send?phone=" + a.whatsapp + "&text="',
                                        target='_blank'
                                    )
                                        .pt-1.pl-2(
                                            style='color:#4c351e;font-size:16px;font-weight:400;margin-top:2px'
                                        ) HUBUNGI AGEN
        .flex.text-center.pt-4
            p(style='font-size: 18px') Jika Anda tidak menemukan kota Anda, lakukan pembelian di Lumecolors Pusat
        .flex.d-flex.justify-content-center.pb-3
            .w-md
                .flex.d-flex.justify-content-center
                    b-button.text-white(
                        v-b-modal.WAPusat,
                        size='md',
                        style='background: #ea4335; border: solid 1px #ea4335; font-weight: 700; font-size: 1.2rem'
                    )
                        .d-flex.px-4
                            i.mdi.mdi-arrow-right-bold-circle-outline.mdi-18px.pr-2
                            div(style='font-size: 1.3rem; font-weight: 600') Beli di Pusat
        .flex
            .py-5
                .row
                    .col-lg-6.col-md-6.col-sm-6.col-xs-6
                        .flex.text-center
                            .flex.d-flex.justify-content-center
                                b-link(
                                    href='https://www.tokopedia.com/search?navsource=home&ob=23&st=product&q=lumecolors',
                                    target='_blank'
                                )
                                img(
                                    src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/72b0f83b2f246f1713c3c37df0dfd1e7',
                                    width='200px',
                                    height='200px'
                                )
                            .flex.d-flex.justify-content-center
                                b-button(
                                    href='https://www.tokopedia.com/search?navsource=home&ob=23&st=product&q=lumecolors',
                                    target='_blank',
                                    style='border: solid 1px #51b556; background: #51b556; color: #fff; font-size: 1rem; font-weight: 700'
                                ) Beli di Tokopedia
                    .col-lg-6.col-md-6.col-sm-6.col-xs-6
                        .flex
                            .flex.d-flex.justify-content-center
                                b-link(
                                    href='https://shopee.co.id/search?keyword=lumecolors',
                                    target='_blank'
                                )
                                img(
                                    src='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/7ecd7aedbb4d447e6f9e94881e829917',
                                    width='200px',
                                    height='200px'
                                )
                            .flex.d-flex.justify-content-center
                                b-button(
                                    href='https://shopee.co.id/search?keyword=lumecolors',
                                    target='_blank',
                                    style='border: solid 1px #ff4c3b; background: #ff4c3b; color: #fff; font-size: 1rem; font-weight: 700'
                                ) Beli di Shopee
    WaModalAgen
</template>
<script>
import { reactive, useContext, useFetch } from '@nuxtjs/composition-api'
import ReactPixel from 'react-facebook-pixel'
import WaModalAgen from './WaModalAgen'

export default {
    components: {
        WaModalAgen
    },
    setup(props, context) {
        const { $cfg, $axios, store } = useContext()
        const res = reactive({
            provs: [],
            kab: [],
            agen: [],
            chOpenKab: (x) => {
                res.agen = []
                $axios.get('v1/future/agenaktif/' + x._id).then((r) => {
                    res.agen = r.data.results
                })
                res.kab.find((d) => {
                    if (d._id === x._id) {
                        d.show = !d.show
                    } else {
                        d.show = false
                    }
                })
            },
            chOpen: (x) => {
                $axios.get('v1/future/agenaktif/kab/' + x._id).then((r) => {
                    r.data.results.map((r) => {
                        r.show = false
                    })
                    res.kab = r.data.results
                })
                res.provs.find((d) => {
                    if (d._id === x._id) {
                        d.show = !d.show
                    } else {
                        d.show = false
                    }
                })
            },
            beli: (data) => {
                ReactPixel.init(
                    $cfg.pixel,
                    {},
                    { debug: true, autoConfig: false }
                )
                ReactPixel.track('Lead', {
                    // phone: res.wa_buyer,
                    // content_name: 'Really Fast Running Shoes',
                    // content_category: 'Apparel & Accessories > Shoes',
                    // content_ids: ['1234'],
                    // content_type: 'product',
                    // value: 0.5,
                    // currency: 'USD',
                })

                window.open(
                    'https://api.whatsapp.com/send?phone=' +
                        data.whatsapp +
                        '&text=' +
                        data.whatsapp_text,
                    '_blank'
                )
                // context.root.$bvModal.show('WaModalAgen')
                store.commit('landing/list/SET', {
                    k: 'wa_cs',
                    v: data.whatsapp
                })
                store.commit('landing/list/SET', {
                    k: 'wa_msg',
                    v: data.whatsapp_text
                })
            }
        })

        useFetch(() => {
            $axios.get('v1/future/agenaktif').then((r) => {
                r.data.results.map((r) => {
                    r.show = false
                })
                res.provs = r.data.results
            })
        })
        return { res }
    }
}
</script>
