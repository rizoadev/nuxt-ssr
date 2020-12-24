<template lang="pug">
.flex.sect2(style='background: #efefef')
    .container
        .flex.pt-3
            .flex.text-center.pt-3
                h2(style='color: #634424') Kenapa para wanita ini menyukai
                    span(style='font-weight: 700') &nbsp;Lumécolors? &nbsp;
                    | Simak kisahnya..

        .d-flex.align-content-center.flex-column.mt-3
            .row.no-gutters
                .col-lg-3.col-md-3.col-sm-6(
                    v-for='c in res.testi',
                    :key='c.id',
                    v-b-modal.modalvideo,
                    @click='res.video = c.video'
                )
                    .flex
                        .p-2
                            img(:data-src="c.img" alt="" title="" v-lazy-load width="100%" style='border-radius: 15px; border: solid 2px #fff')
                            //
                              img(
                                  width='100%',
                                  :src='c.img',
                                  style='border-radius: 15px; border: solid 2px #fff'
                              )

        b-modal#modalvideo.modal-scrollable(
            centered,
            title='BootstrapVue',
            hide-header,
            hide-footer
        )
            template(#modal-title, style='background: #f1ceaa')
            .flex
                youtube(:video-id="res.video")
                //
                  iframe(
                      width='100%',
                      height='300',
                      :src='"https://www.youtube.com/embed/" + res.video',
                      frameborder='0',
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                      allowfullscreen
                  )
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
import VueMasonryWall from 'vue-masonry-wall'

export default {
    components: { VueMasonryWall },
    setup() {
        const res = reactive({
            video: '',
            testi: [
                {
                    id: 't1',
                    img: '/img/thmb_firosa.webp',
                    name: 'Firosa',
                    video: 'YdNqJT9Yz58'
                },
                {
                    id: 't2',
                    img: '/img/thmb_farida.webp',
                    name: 'Farida',
                    video: 'cLJWsZBd4UQ'
                },
                {
                    id: 't3',
                    img: '/img/thmb_angel.webp',
                    name: 'Angel',
                    video: 'EJI8G6M52UY'
                },
                {
                    id: 't4',
                    img: '/img/thmb_yen.webp',
                    name: 'Yen',
                    video: '8Je-BVeicoE'
                },
                {
                    id: 't5',
                    img: '/img/thmb_revi.webp',
                    name: 'Revi',
                    video: 'oMf9WVgUYOc'
                },
                {
                    id: 't6',
                    img: '/img/thmb_flo.webp',
                    name: 'Flo',
                    video: 'kPQG2NxhqmA'
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
