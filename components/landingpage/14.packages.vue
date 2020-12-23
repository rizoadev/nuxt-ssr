<template lang="pug">
.flex.sect2.flex-grow(style='background: #fff')
    .container.py-4
        .d-flex.align-content-center.flex-column
            .flex
                .row(v-for='c in res.data', :key='c.id')
                    .col-lg-5.col-md-5.col-sm-12
                        .flex.d-flex
                            .pr-3
                                img.sxd(width='100%', :src='c.img')
                            .flex
                                h2.lume-dark(style='font-size: 32px') {{ c.title }}
                                p.pt-2(style='font-size: 16px') {{ c.desc }}
                    .col-lg-7.col-md-5.col-sm-12
                        .flex.d-flex.flex-row.mb-4.mb-sm-4.mt-sm-3
                            .px-2.pointer(
                                v-for='v in c.videos',
                                :key='v.id',
                                @click='res.OpenVideo(v.yid)'
                            )
                                img.bcx(:src='v.img')
                    //.d-md-none.d-sm-block
                        .row.no-gutters
                            .col-sm-4(
                                style='width: 33%',
                                v-for='v in c.videos',
                                :key='v.id',
                                @click='res.OpenVideo(v.yid)'
                            )
                                .p-2
                                    img.bcx(:src='v.img', width='128px')
                        .py-5
                            .mx-4.b-b(style='border: solid 1px #ececec')

    b-modal#ModalVideX(
        size='lg',
        hide-footer,
        hide-header,
        centered,
        body-class='vidx'
    )
        b-embed(
            type='iframe',
            aspect='16by9',
            :src='"https://youtube.com/embed/" + res.vd + "?rel=0"',
            allowfullscreen
        )
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup(props, context) {
        const res = reactive({
            vd: '',
            OpenVideo: (x) => {
                context.root.$bvModal.show('ModalVideX')
                res.vd = x
            },
            data: [
                {
                    id: 'a1',
                    title: 'Light',
                    desc:
                        'Untuk warna kulit wajah putih oriental hingga kuning muda hangat',
                    img: '/img/light.webp',
                    videos: [
                        {
                            id: 'a1v1',
                            img: '/img/Silvia.webp',
                            yid: 'oMf9WVgUYOc'
                        },
                        {
                            id: 'a1v2',
                            img: '/img/Novie.webp',
                            yid: 'gzKPWe4wFl8'
                        }
                    ]
                },
                {
                    id: 'a2',
                    title: 'Neutral',
                    desc:
                        'Untuk kuning langsat hingga medium dengan undertone kuning dan netral',
                    img: '/img/neutral.webp',
                    videos: [
                        {
                            id: 'a2v1',
                            img: '/img/Jepu.webp',
                            yid: 'zH71CAy3_ng'
                        },
                        {
                            id: 'a2v2',
                            img: '/img/Megan.webp',
                            yid: 'Rp8HDX9dJOE'
                        },
                        {
                            id: 'a2v3',
                            img: '/img/Hanin.webp',
                            yid: '6yCQ6rMPFcQ'
                        }
                    ]
                },

                {
                    id: 'a3',
                    title: 'Sand',
                    desc:
                        'Untuk kamu yang memiliki kulit wajah sawo matang hingga gelap exotis  ',
                    img: '/img/sand.webp',
                    videos: [
                        {
                            id: 'a3v1',
                            img: '/img/Mutiara.webp',
                            yid: 'XbSqT989OaI'
                        },
                        {
                            id: 'a3v2',
                            img: '/img/Meli.webp',
                            yid: 'LXvRGWTapKU'
                        },
                        {
                            id: 'a3v3',
                            img: '/img/Silvi.webp',
                            yid: 'K9pu-y0ri2Q'
                        }
                    ]
                }
            ]
        })
        return { res }
    }
}
</script>
<style lang="scss" scoped>
.xsd {
    font-size: 16px;
}
</style>
