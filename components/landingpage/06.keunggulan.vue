<template lang="pug">
.flex
    .container
        .px-3
            .pt-5.pb-3
                h5.text-center(style='font-size: 1.33rem; font-weight: 700') Keunggulan Lumecolors
                h1.text-center.lume-dark(
                    style='margin-top: -5px; font-weight: 700'
                ) HD Foundation
        .flex.pb-5
            .row
                .col-lg-4.col-sm-6(v-for='c in res.data', :key='"ccc" + c.id')
                    .flex.mb-sm-4
                        .cold.m-lg-4.mb-3
                            .p-lg-3.p-sm-2
                                .flex.d-flex.justify-content-center
                                    .py-3
                                        img.cxs(:src='c.img')
                                h4.cdc.text-center(v-if='c.id === 4') Full coverage&nbsp;
                                    em Up to&nbsp;
                                    | 16 Hours
                                h4.cdc.text-center(v-else) {{ c.title }}
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            data: [
                {
                    id: 1,
                    img: '/img/icon_aman.webp',
                    title: 'Aman untuk kulit sensitif'
                },
                {
                    id: 2,
                    img: '/img/icon_ringan.webp',
                    title: '12x Lebih Ringan'
                },
                {
                    id: 3,
                    img: 'img/icon_protect.webp',
                    title: 'Melindungi & Merawat'
                },
                {
                    id: 4,
                    img: '/img/icon_longhours.webp',
                    title: 'Full Coverage up to 16 hours'
                },
                {
                    id: 5,
                    img: '/img/icon_truematch.webp',
                    title: 'True Match Colors'
                },
                {
                    id: 6,
                    img: '/img/icon_vegan.webp',
                    title: 'Formulasi Vegan'
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
.cold {
    border: solid 2px #dfb992;
    border-radius: 20px;
}
h4.cdc {
    height: 48px;
    font-size: 18px;
    font-weight: 700;
    color: #805e3b;
}
</style>
