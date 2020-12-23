<template lang="pug">
.flex.sect11(style='background: #faf0e4')
    .flex.py-5.container
        .flex.text-center.flex.d-none.d-sm-block
            h2.lume-dark Lumécolors foundation
            h2.lume-dark cocok untuk kamu yang menginginkan:
        .flex.text-center.flex.d-sm-none
            h3 Lumécolors HD Foundation
            h5(style='font-size: 1.1rem') cocok untuk kamu yang menginginkan:
        .flex.pt-3.px-3
            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px') Formula Foundation yang melekat sempurna dan&nbsp;
                    span(style='font-weight: 700') minim transfer ke masker wajah&nbsp;
                    | meskipun dipakai berjam-jam.

            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px')
                    em(style='font-weight: 700') Full Coverage &nbsp;
                    | yang mampu menyamarkan noda&nbsp;
                    span(style='font-weight: 700') hingga 90%.

            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px') Hasil halus, &nbsp;
                    span(style='font-weight: 700') tidak pecah, &nbsp;
                    | dan natural alami bercahaya.

            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px') Wajah tetap nyaman dengan kandungan&nbsp;
                    em anti aging, vitamin E, moisturizer, brightening&nbsp;
                    | yang menjadikan&nbsp;
                    span(style='font-weight: 700') kulit wajahmu tetap terasa lembab dan kenyal.

            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px') Foundation yang &nbsp;
                    span(style='font-weight: 700') awet hingga 16 jam, &nbsp;
                    | sekaligus mengandung &nbsp;
                    span(style='font-weight: 700') SPF 15 &nbsp;
                    | untuk melindungi kulit wajah dari paparan buruk sinar matahari.

            .flex.d-flex.mb-3
                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                .pl-3(style='font-size: 16px') Formula &nbsp;
                    em true match&nbsp;
                    | yang membuat &nbsp;
                    span(style='font-weight: 700') warna makin menyatu dengan warna kulit&nbsp;
                    | setelah 3 menit pemakaian.

    // .container.py-5
        .flex.d-none.d-sm-block
            .flex.text-center
                h1 lumécolors foundation
                h1 cocok untuk kamu yang menginginkan:
            .flex.pt-3
                .flex.row.justify-content-center
                    slot(v-for='(c, index) in res.data')
                        .col-lg-4.col-md-4(
                            :key='"ci" + c.id',
                            :class='{ "col-sm-12": index === 0, "col-sm-6": index !== 0 }'
                        )
                            .flex.flex-grow.d-flex
                                b-card.rd(
                                    :img-src='c.img',
                                    img-alt='Image',
                                    img-top
                                )
                                    .flex
                                        h5 {{ c.text }}
        .flex.px-lg-4.px-md-4.px-sm-2.d-sm-none
            .flex.text-center
                h3 lumécolors foundation
                h3 cocok untuk kamu yang menginginkan:
            .flex.pt-3
                .flex.d-flex.mb-3(v-for='(c, index) in res.data')
                    i.mdi.mdi-24px.mdi-checkbox-marked-outline
                    .pl-3(style='font-size:16px') {{ c.text }}
                // .flex.row.justify-content-center
                    slot(v-for='(c, index) in res.data')
                        .col-lg-4.col-md-4(
                            :key='"ci" + c.id',
                            :class='{ "col-sm-12": index === 0, "col-sm-6": index !== 0 }'
                        )
                            .flex.flex-grow.d-flex
                                b-card.rd(
                                    :img-src='c.img',
                                    img-alt='Image',
                                    img-top
                                )
                                    .flex
                                        h5 {{ c.text }}
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            data: [
                {
                    id: 'c1',
                    img: '/img/why01.webp',
                    text:
                        'Formula Foundation yang melekat sempurna dan minim transfer ke masker wajah meskipun dipakai berjam-jam.'
                },
                {
                    id: 'c2',
                    img: '/img/why02.webp',
                    text:
                        'Full Coverage yang mampu menyamarkan noda hingga 90%.'
                },
                {
                    id: 'c3',
                    img: '/img/why03.webp',
                    text:
                        'Hasil halus, tidak pecah, dan natural alami bercahaya.'
                },
                {
                    id: 'c4',
                    img: '/img/why04.webp',
                    text:
                        'Wajah tetap nyaman dengan kandungan anti aging, vitamin E, moisturizer, brightening yang menjadikan kulit wajahmu tetap terasa lembab dan kenyal.'
                },
                {
                    id: 'c5',
                    img: '/img/why05.webp',
                    text:
                        'Menginginkan warna yang cocok di kulit wajahmu, karena Lumecolors foundation memiliki formula true match yang membuat warna makin menyatu dengan warna kulit setelah 3 menit pemakaian.'
                }
            ]
        })
        return { res }
    }
}
</script>
<style lang="scss" scoped>
//

.row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
}
.row > [class*='col-'] {
    display: flex;
    flex-direction: column;
}
.rd {
    background: #f6e4d1;
    border-radius: 10px;
}
.rd img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.rd .bb {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
