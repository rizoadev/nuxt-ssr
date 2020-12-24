<template lang="pug">
.flex.sect2.flex-grow(style='background: #c3b8ab')
    .container
        .row
            .col-lg-6.col-md-4.col-sm-12
                .d-flex.align-content-center.flex-column
                    .flex.d-flex.align-items-end
                        img(
                            width='100%',
                            height='auto',
                            data-src='/img/shades.webp'
                            v-lazy-load
                        )
            .col-lg-6.col-md-4.col-sm-12
                .d-flex(style='height: 100%')
                    .flex.d-flex.align-items-center
                        .flex
                            h1(style='color: #faf0e4') Foundation Shades
                            img(data-src='/img/divider.webp' v-lazy-load)
                            .flex.pt-3(style='font-size: 28px; color: #fffaed')
                                p.py-3(style='line-height: 32px') Temukan Shade Foundation yang Pas Untuk Kulit Wajahmu!
</template>
<script>
export default {
    setup() {}
}
</script>
