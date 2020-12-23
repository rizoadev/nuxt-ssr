<template lang="pug">
.flex.sect2.flex-grow(style='background: #ead7c9')
    .container
        .d-flex.align-content-center.flex-column
            .flex
                .p-lg-4.p-md-4
                    h2.lume-dark.text-center Bagaimana Cara Pemesanannya?
                    h5.text-center(style='color: #4a4845') Klik Tombol dibawah ini
                .flex.mb-5.pb-3
                    .flex.py-3.text-center
                        a(href='/#agenlist', v-scroll-to='"#agenlist"')
                            b-button(size='md', variant='danger')
                                div(
                                    style='font-size: 0.95rem; font-weight: 600'
                                )
                                    .d-flex
                                        i.mdi.mdi-arrow-right-bold-circle-outline.mdi-18px.pr-2
                                        div(style='margin-top: 2px') PESAN SEKARANG
                .p-lg-4.p-md-4
                    .card(style='background: #fdf6ed; border-radius: 15px')
                        .p-3.flex
                            .flex.d-flex.justify-content-center
                                h3 Beli
                                    span(
                                        style='color: #765a39; font-size: 1.45rem; font-weight: 700'
                                    ) &nbsp;Lumécolors&nbsp;
                                    | di kotamu :)
                            .py-4
                                img(
                                    width='100%',
                                    height='auto',
                                    src='/img/map.webp'
                                )
                            .flex.d-flex.justify-content-center.xsd
                                .flex
                                    p.text-center.pt-4 Dapatkan Lumécolors via Agen terdekat di kotamu dengan
                                        span(
                                            style='font-weight: bold; padding: 0 5px'
                                        ) HARGA SAMA
                                        | tapi dengan
                                        span(
                                            style='font-weight: bold; padding: 0 5px'
                                        ) ONGKIR MURAH

                                        | bahkan GRATIS!
                                    p.text-center
                                        | Sebagian besar para Agen menerima COD dan pengiriman via driver online
                                        br 
                                        | (Gojek, Grab)
                            .flex.d-flex.justify-content-center.py-2.mt-3 
                                a.abtn(
                                    href='/#agenlist',
                                    v-scroll-to='"#agenlist"'
                                )
                                    b-button(
                                        block,
                                        size='md',
                                        variant='danger'
                                    )
                                        .d-flex
                                            i.mdi.mdi-arrow-right-bold-circle-outline.mdi-18px.pr-2
                                            div(
                                                style='margin-top: 2px; font-size: 1rem; font-weight: 600'
                                            ) LIST AGEN LUMÉCOLORS
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="scss" scoped>
.xsd {
    font-size: 16px;
}
</style>
