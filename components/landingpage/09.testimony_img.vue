<template lang="pug">
.flex.sect2(style='background: #efefef')
    .container
        .d-flex.align-content-center.flex-column.pb-4(
            style='position: relative; top: 0; height: 100%'
        )
            // on desktop
            .container.d-none.d-sm-block
                .flex
                    vue-masonry-wall(
                        :items='res.data',
                        style='overflow-x: hidden'
                    )
                        template(v-slot:default='{ item }')
                            .item.mx-2.my-2
                                img(
                                    :src='item.replace("w=400&h=680", "w=250&h=450")'
                                )
            // on small
            .flex.d-flex.justify-content-center
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
import VueMasonryWall from 'vue-masonry-wall'
export default {
    components: {
        VueMasonryWall
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
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/2ae753868bbc6e085c2438aad0e2acfce5e9928d/photo_2020-10-15_15-31-09.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/3d5a57ddd7d150b7614dbcb05a2300902d5ca6fa/photo_2020-09-11_16-03-09.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/3d5a57ddd7d150b7614dbcb05a2300902d5ca6fa/photo_2020-09-11_16-03-09.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/1c307a66cdfedc4b9a1817e2bcd441fc3215d3a5/photo_2020-08-30_21-11-08.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/95e7c9f50e2d2ab8e0f2f2b800cbc131421ffbd0/photo_2020-10-15_15-28-14.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/a49eb664a8643fb50b15b7688dd6a0c39b0ed834/photo_2020-09-18_15-45-56.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/33f07b468db6780ed2b5e59f9f3378c941d8d135/photo_2020-08-29_16-49-06.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/4c54e82b45e45a70d616000c41d62217ee82070e/photo_2020-08-31_04-53-08.jpg?auto=compress,format&fit=scale&w=400&h=680',
                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/c470daf39234578dec956d8c85e681d6ef1cef15/photo_2020-09-07_01-24-46.jpg?auto=compress,format&fit=scale&w=400&h=680'
            ],
            testi: [
                {
                    id: 't1',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/9c0dc75aae40e413e2b5f0217419e88464297893/farida.png?auto=compress,format&fit=scale&w=149&h=149',
                    text:
                        'Foundationnya keren banget! gila sih ini.. foundation aku yang di rumah yang jutaan aja kalah sama foundation ini, yang ringan banget kaya cushion, tp full coverage luar biasa...',
                    name: 'Farida'
                },
                {
                    id: 't2',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/6f89d63d52bc3c10254d075a9cbdfe24e9ab5935/karisma.png?auto=compress,format&fit=scale&w=149&h=149',
                    text:
                        'Foundation favorit gue saat ini karna cocok banget sama muka gue. love love banget! enteng banget dimuka kayak cushion.',
                    name: 'Karisma'
                },
                {
                    id: 't3',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/3edd039f048038741a932db223724b471ac283c1/iko.png?auto=compress,format&fit=scale&w=149&h=149',
                    text:
                        'Pengalaman aku setelah pakai foundation Lumécolors ini enak banget, long lasting jadi untuk shooting berjam-jam nggak akan crack dan yang paling utama adalah warnanya nyatu banget sama warna kulit aku yang sawo mateng.. ',
                    name: 'Iko'
                },
                {
                    id: 't4',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/612c3fed2f120240dc1868b59d3fc684c89001c0/angel.png?auto=compress,format&fit=scale&w=149&h=149',
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
