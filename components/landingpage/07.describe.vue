<template lang="pug">
.flex.sect6
    .prlx(style='background-image: url(/img/lp_lume_bg_temp_03.webp)')
        .container
            .d-flex.align-content-center.flex-column(
                style='position: relative; top: 0; height: 100%'
            )
                .flex.px-4.pt-4
                    .row(v-for='(c, index) in res.data', :key='"why" + c.id')
                        .col-lg-7.py-lg-5.py-sm-2(
                            :class='{ "order-2": index % 2 }'
                        )
                            .flex
                                h1.onsml {{ c.title }}
                            .flex
                                img(src='/img/divider.webp')
                            .flex 
                                p.pt-3.pb-lg-5.pb-sm-2.dscx {{ c.desc }}
                        .col-lg-5.py-3(:class='{ "order-1": index % 2 }')
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            data: [
                {
                    id: 1,
                    title: 'Aman',
                    desc:
                        'Semua shade dan formula yang terdapat pada produk Lumecolors sudah lulus dan memiliki ijin BPOM. Aman bagi Ibu Hamil, Wudhu & Kulit Sensitif.'
                },
                {
                    id: 2,
                    title: '12x Lebih Ringan',
                    desc:
                        'Formula Lumecolors HD Foundation 12x lebih ringan daripada Foundation full Coverage di pasaran. Memiliki tekstur lightweight seperti Cushion, formulanya begitu mudah di-blend dan buildable di kulit wajahmu dengan hasil akhir tetap terlihat seperti kulit Anda sendiri. Your skin, but better.'
                },
                {
                    id: 3,
                    title: 'Melindungi & Merawat',
                    desc:
                        'Lumecolors HD Foundation melindungi dan merawat kulitmu. Kandungan moisturizer, brightening, anti aging, vitamin E dan SPF 15-nya membuat kulit tetap terjaga kelembabannya dan terlindungi sepanjang hari.'
                },
                {
                    id: 4,
                    title: 'Full Coverage & Long Wear up to 16 hours',
                    desc:
                        'Selain menghasilkan daya tutup yang sempurna, Lumecolors HD Foundation mampu menutupi bekas jerawat dan noda hitam hanya dengan 1 layer,  sekaligus menyamarkan garis kerut pada wajah hingga 6x lebih halus, tidak cakey dengan hasil velvet smooth natural finish yang mampu bertahan hingga 16 jam.'
                },
                {
                    id: 5,
                    title: 'True Match Colors',
                    desc:
                        'Dibuat secara khusus menyesuaikan warna kulit Asia, Lumecolors HD Foundation memiliki 3 shades untuk jenis warna kulit terang, kulit langsat, dan exotis dimana masing-masing shade memiliki fitur formula true match yang membuat warna makin menyatu dengan kulit setelah 3 menit pemakaian.'
                },
                {
                    id: 6,
                    title: 'Formulasi Vegan',
                    desc:
                        'Menggunakan formulasi Vegan (tidak ada unsur hewani), breathable dan menyerap air, sehingga tidak menyumbat pori-pori dan aman untuk kulit sensitif dan berminyak. '
                }
            ]
        })
        return { res }
    }
}
</script>
<style lang="stylus">
.onsml
    color #fbf0e5
.dscx
    color #fbf0e5
    font-size 18px
    line-height 28px
</style>
