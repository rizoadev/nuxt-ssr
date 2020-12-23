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
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/6d567c69d5621b79be67461b7c571ea67dedcffb/light.jpg?auto=compress,format&fit=scale&w=300&h=300',
                    videos: [
                        {
                            id: 'a1v1',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/146b0a6fe0297429cfaf0a3763f1ff34314cddb8/Silvia.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'oMf9WVgUYOc'
                        },
                        {
                            id: 'a1v2',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/23d71817c118783a273f4230dc5995bdb386f810/Novie.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'gzKPWe4wFl8'
                        }
                    ]
                },
                {
                    id: 'a2',
                    title: 'Neutral',
                    desc:
                        'Untuk kuning langsat hingga medium dengan undertone kuning dan netral',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/5d29a7cbdadf64a8a865e3929eba3631e2317d3c/neutral.jpg?auto=compress,format&fit=scale&w=300&h=300',
                    videos: [
                        {
                            id: 'a2v1',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/896cf06a8eed996125e8305a4f82918131e775c3/Jepu.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'zH71CAy3_ng'
                        },
                        {
                            id: 'a2v2',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/fab079460fa17c011645278409fa4ad8cd8fd3ea/Megan.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'Rp8HDX9dJOE'
                        },
                        {
                            id: 'a2v3',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/73d6a68e62914c82199b4f9e3b43e0c5a25519ec/Hanin.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: '6yCQ6rMPFcQ'
                        }
                    ]
                },

                {
                    id: 'a3',
                    title: 'Sand',
                    desc:
                        'Untuk kamu yang memiliki kulit wajah sawo matang hingga gelap exotis  ',
                    img:
                        'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/ff93d7014fc7147717647354b36ab121155a56e5/sand.jpg?auto=compress,format&fit=scale&w=300&h=300',
                    videos: [
                        {
                            id: 'a3v1',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/9519ea4ce3d1c19610778523443b2af2c3fb161d/Mutiara.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'XbSqT989OaI'
                        },
                        {
                            id: 'a3v2',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/fa7d07fd8f95e79a1408c7db68de9e6b64d00bf7/Meli.jpg?auto=compress,format&fit=scale&w=300&h=300',
                            yid: 'LXvRGWTapKU'
                        },
                        {
                            id: 'a3v3',
                            img:
                                'https://convertri.imgix.net/beef2fa8-e111-11ea-abef-0697e5ca793e/e7e4db564217162fd8807842a2a25270cda242ac/Silvi.jpg?auto=compress,format&fit=scale&w=300&h=300',
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
