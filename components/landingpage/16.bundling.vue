<template lang="pug">
.flex(style='background: #ead7c9')
    .container
        .flex.pt-3
            .flex
                .flex.d-flex.justify-content-center
                    h1.lume-dark(style='font-size: 1.8rem') Special Price Bundling
            .flex
                .row
                    .col-lg-6.col-md-6.col-sm-12
                        .my-3.text-center.sxdt
                            img.sxdd(height='200', src='/img/bundling1.webp')
                            h2.lume-dark Special Bundling 1
                            .pt-1 1 pcs Foundation lumecolors
                            .pt-1 1 pcs Beauty Blender lume
                            .pt-1 Shade (pilih salah satu)
                            .flex.pt-3
                                b-button-group
                                    b-button.btpo(
                                        href='/#agenlist',
                                        v-scroll-to='"#agenlist"',
                                        style='background: #ead7c9'
                                    )
                                        .btnprc.d-flex
                                            .text-sm.pt-2 Rp
                                            .pl-1
                                                s 318rb
                                    b-button.btp(
                                        href='/#agenlist',
                                        v-scroll-to='"#agenlist"',
                                        variant='white'
                                    )
                                        .btnprc.d-flex
                                            .text-sm.pt-2 Rp
                                            .pl-1 298rb
                            .flex.pt-3
                                b-button.btp(
                                    href='/#agenlist',
                                    v-scroll-to='"#agenlist"',
                                    variant='white',
                                    size='sm',
                                    style='font-size: 18px; background: #bfa793; border: solid 1px #bfa793'
                                )
                                    .btnprc.d-flex.px-3 hemat 20rb!

                    .col-lg-6.col-md-6.col-sm-12
                        .my-3.text-center.sxdt
                            img.sxdd(height='200', src='/img/bundling2.webp')
                            h2.lume-dark Special Bundling 2
                            .pt-1 2 pcs Foundation lumecolors
                            .pt-1 2 pcs Beauty Blender lume
                            .pt-1 Shade Light & Shade Sand
                            .flex.pt-3
                                b-button-group
                                    b-button.btpo(
                                        href='/#agenlist',
                                        v-scroll-to='"#agenlist"',
                                        style='background: #ead7c9'
                                    )
                                        .btnprc.d-flex
                                            .text-sm.pt-2 Rp
                                            .pl-1
                                                s 639rb
                                    b-button.btp(
                                        href='/#agenlist',
                                        v-scroll-to='"#agenlist"',
                                        variant='white'
                                    )
                                        .btnprc.d-flex
                                            .text-sm.pt-2 Rp
                                            .pl-1 578rb
                            .flex.pt-3
                                b-button.btp(
                                    href='/#agenlist',
                                    v-scroll-to='"#agenlist"',
                                    variant='white',
                                    size='sm',
                                    style='font-size: 18px; background: #bfa793; border: solid 1px #bfa793'
                                )
                                    .btnprc.d-flex.px-3 hemat 58rb!
                    .pt-5
                        .flex(style='border: solid 1px #bfa793')
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="scss" scoped>
.f16 {
    font-size: 18px;
    color: #4c351e;
}
</style>
