<template lang="pug">
.flex(style='background: #010a0e')
    .container
        .flex.d-none.d-sm-block
            .row
                .col-lg-6.col-md-4.col-sm-6
                    img(width='100%', height='auto', data-src='/img/cl.webp' v-lazy-load)
                .col-lg-6.col-md-8.col-sm-6
                    .py-5
                        .flex
                            h2(style='color: #f7ece1; font-weight: 700') Cerita Dibalik lumecolors
                            img(data-src='/img/divider.webp' v-lazy-load)
                        .flex.text-white.pt-3(style='font-size: 16px')
                            p.py-3 Christina Lie yang saat ini dikenal sebagai Youtuber dan juga business woman, membuat brand Lumecolors berawal dari kesulitannya mencari produk lipcream yang cocok. Sudah banyak produk / brand lipcream yang Christina coba, namun tidak banyak produk yang dapat memberikan kenyamanan dan kepuasan tersendiri. Percobaannya tidak hanya dilihat dari kualitas lipstiknya saja, tapi dari segi kecocokan warna dan juga kenyamanan Ketika digunakan.
                            p.py-3 Kesulitan ini selanjutnya dijadikan peluang oleh Christina untuk membangun sebuah brand yang mengerti jenis kulit orang Indonesia dan disesuaikan dengan iklim dan cuaca yang ada di Indonesia.
                            p.py-3 Mengusung tema `be more confident with lumecolors’, Christina memastikan betul-betul bahwa setiap produk yang keluar cocok untuk semua jenis kulit serta nyaman dan aman digunakan sehari-hari.
        .d-sm-none
            .row
                .col-lg-6.col-md-4.col-sm-6
                    img(width='100%', height='auto', src='/img/cl.webp')
                .col-lg-6.col-md-4.col-sm-6
                    .py-5
                        h2(style='color: #f7ece1; font-weight: 700') Cerita Dibalik lumecolors
                            img(data-src='/img/divider.webp' v-lazy-load)
            .row
                .col-sm-12
                    .flex.text-white.pt-2(style='font-size: 14px')
                        p.py-1 Christina Lie yang saat ini dikenal sebagai Youtuber dan juga business woman, membuat brand Lumecolors berawal dari kesulitannya mencari produk lipcream yang cocok. Sudah banyak produk / brand lipcream yang Christina coba, namun tidak banyak produk yang dapat memberikan kenyamanan dan kepuasan tersendiri. Percobaannya tidak hanya dilihat dari kualitas lipstiknya saja, tapi dari segi kecocokan warna dan juga kenyamanan Ketika digunakan.
                        b-button.mb-2(
                            v-b-toggle.collapse-1,
                            variant='primary',
                            block,
                            style='background: #010a0e; border: solid 1px #010a0e'
                        )
                            i.mdi.mdi-chevron-double-down.mdi-18px
                            i.mdi.mdi-chevron-double-down.mdi-18px
                            i.mdi.mdi-chevron-double-down.mdi-18px
                        b-collapse#collapse-1
                            p.py-3 Kesulitan ini selanjutnya dijadikan peluang oleh Christina untuk membangun sebuah brand yang mengerti jenis kulit orang Indonesia dan disesuaikan dengan iklim dan cuaca yang ada di Indonesia.
                            p.py-3 Mengusung tema `be more confident with lumecolors’, Christina memastikan betul-betul bahwa setiap produk yang keluar cocok untuk semua jenis kulit serta nyaman dan aman digunakan sehari-hari.
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="scss" scoped>
//
</style>
