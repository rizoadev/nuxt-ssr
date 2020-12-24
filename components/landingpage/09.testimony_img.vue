<template lang="pug">
.flex.sect2(style='background: #efefef')
    .container
        .flex.pt-3
            .flex.text-center.pt-3
                h2(style='color: #634424') Testimony &nbsp;Lumécolors &nbsp;
        .d-flex.align-content-center.flex-column.pb-4(
            style='position: relative; top: 0; height: 100%'
        )
            // on desktop
            .container.d-none.d-sm-block.py-4
                .flex
                    VueSlickCarousel(
                        :arrows='true',
                        :dots='true',
                        :slidesToShow='4.2'
                    )
                        .mx-2.p-2(v-for='c in res.data', :key='c._id')
                            img(
                                :data-src='c',
                                v-lazy-load,
                                height='300px',
                                width='100%',
                                style='border: solid 1px #f1ceaa'
                            )
                //.flex
                    vue-masonry-wall(
                        :items='res.data',
                        style='overflow-x: hidden'
                    )
                        template(v-slot:default='{ item }')
                            .item.mx-2.my-2
                                img(
                                    :data-src='item.replace("w=400&h=680", "w=250&h=450")',
                                    v-lazy-load
                                )
            // on small
            .flex.d-flex.justify-content-center.py-4
                .d-flex.d-sm-none
                    div(style='width: calc(100vw - 6rem)')
                        b-carousel#carousel-1.border(
                            :interval='4000',
                            controls
                        )
                            b-carousel-slide(
                                v-for='(c, index) in res.data',
                                :key='"crsl" + index',
                                :img-src='c'
                            )
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
// import VueMasonryWall from 'vue-masonry-wall'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: {
        // VueMasonryWall,
        VueSlickCarousel
    },
    setup() {
        const res = reactive({
            opt: {
                width: 300,
                padding: {
                    default: 12,
                    1: 6,
                    2: 8
                }
            },
            data: [
                '/img/testy/t1.webp',
                '/img/testy/t2.webp',
                '/img/testy/t3.webp',
                '/img/testy/t4.webp',
                '/img/testy/t5.webp',
                '/img/testy/t6.webp',
                '/img/testy/t7.webp',
                '/img/testy/t8.webp',
                '/img/testy/t9.webp'
            ],
            testi: [
                {
                    id: 't1',
                    img: '/tmp/farida.webp',
                    text:
                        'Foundationnya keren banget! gila sih ini.. foundation aku yang di rumah yang jutaan aja kalah sama foundation ini, yang ringan banget kaya cushion, tp full coverage luar biasa...',
                    name: 'Farida'
                },
                {
                    id: 't2',
                    img: '/img/testy/karisma.webp',
                    text:
                        'Foundation favorit gue saat ini karna cocok banget sama muka gue. love love banget! enteng banget dimuka kayak cushion.',
                    name: 'Karisma'
                },
                {
                    id: 't3',
                    img: '/img/testy/iko.webp',
                    text:
                        'Pengalaman aku setelah pakai foundation Lumécolors ini enak banget, long lasting jadi untuk shooting berjam-jam nggak akan crack dan yang paling utama adalah warnanya nyatu banget sama warna kulit aku yang sawo mateng.. ',
                    name: 'Iko'
                },
                {
                    id: 't4',
                    img: '/img/testy/angel.webp',
                    text:
                        'Foundationnya itu wah, gila.. enak banget di kulit, kayak gak pake makeup sama sekali Temen gue pada mikir gw skincare-an kok muka alus banget, padahal gw cuma pake foundation dari Lumécolors ',
                    name: 'Angel'
                }
            ]
        })
        return { res }
    }
}
</script>

<style lang="scss" scoped>
.brl {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}
.brr {
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}

@media only screen and (max-width: 600px) {
    img.rlx {
        width: 64px;
        height: 64px;
    }
}
.invide {
    background-repeat: no-repeat;
    border-style: solid;
    border-color: #f5e2cf;
    border-width: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-image: unset;
    background-color: #f5e2cf;
    background-size: 100% 100%;
}
</style>
