<template lang="pug">
.flex.sect6
    .prlx.d-none.d-sm-block(
        style='height: 100%; background-image: url(/img/bgtemp.webp)'
    )
        .container
            .d-flex.align-content-center.flex-column(
                style='position: relative; top: 0; height: 100%'
            )
                .px-4.pb-4
                    .flex.d-flex.align-items-center
                        .flex.py-4
                            h2 Kandungan dalam
                            h1 lumecolors HD Foundation
                    .flex
                        .row(
                            v-for='(c, index) in res.data',
                            :key='"why" + c.id'
                        )
                            .col-lg-7.pt-3(:class='{ "order-2": index % 2 }')
                                .flex
                                    h4 {{ c.title }}
                                .flex 
                                    p.py-2.textc {{ c.text }}
                                .flex
                                    img(src='/img/divider.webp')
    .prlx.d-sm-none(
        style='height: 100%; background-image: url(/img/lumecolorsbg2.webp)'
    )
        .container
            .d-flex.align-content-center.flex-column(
                style='position: relative; top: 0; height: 100%'
            )
                .px-4.pb-4
                    .flex.d-flex.align-items-center
                        .flex.py-4
                            h2 Kandungan dalam
                            h1 lumecolors HD Foundation
                    .flex
                        .row(
                            v-for='(c, index) in res.data',
                            :key='"why" + c.id'
                        )
                            .col-lg-7.pt-3(:class='{ "order-2": index % 2 }')
                                .flex
                                    h4 {{ c.title }}
                                .flex 
                                    p.py-2.textc {{ c.text }}
                                .flex
                                    img(src='/img/divider.webp')
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            data: [
                {
                    id: 'cx1',
                    title: 'Vitamin E',
                    text:
                        'bermanfaat untuk antioksidan yang baik, ini membantu menetralisir radikal bebas.'
                },
                {
                    id: 'cx2',
                    title: 'Anti Aging',
                    text:
                        'mencegah proses penuaan dini dan dapat menyamarkan garis halus dan kantung mata.'
                },
                {
                    id: 'cx3',
                    title: 'Moisturizing + Brightening',
                    text:
                        'yang menjaga kulit tetap nyaman dan lembab, sehingga foundation tidak mudah patchy dan cakey.'
                },
                {
                    id: 'cx4',
                    title: 'Oil Control',
                    text:
                        'menjaga foundation tidak mudah creasing, patchy atau separating di area T-zone yang rentan minyak, sehingga riasan bisa bertahan hingga 16 jam tanpa kilap berlebih.'
                },
                {
                    id: 'cx5',
                    title: 'SPF 15',
                    text: 'melindungi dirimu dari sinar matahari sepanjang hari'
                }
            ]
        })
        return { res }
    }
}
</script>
<style lang="scss" scoped>
h1,
h2 {
    font-weight: 700;
}
h1 {
    color: #fff;
}
h2 {
    color: #f1ceaa;
}
h4 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
}
.textc {
    font-size: 16px;
    color: #fff;
}
</style>
