<template lang="pug">
.flex(style='background: #efefef')
    .container
        .d-flex.align-content-center.flex-column(
            style='position: relative; top: 0; height: 100%'
        )
            .px-4.pb-4
                .flex.d-flex.justify-content-center.py-4
                    h2.text-center.lume-dark.nunito Seputar Pertanyaan
                .flex
                    .row
                        .col-lg-6.b-b(
                            style='border-bottom: solid 1px #ccc',
                            v-for='(c, index) in res.data',
                            :key='"why" + c.id'
                        )
                            .flex.py-3
                                .flex
                                    h4 {{ c.ask }}
                                .flex 
                                    p.py-2.textc(v-if='c.id === "cx4"')
                                        | NA11200300090
                                        br
                                        | HD Full Coverage Ultra Lightweight Foundation Light
                                        br
                                        br
                                        | NA11200300091
                                        br
                                        | HD Full Coverage Ultra Lightweight Foundation Neutral
                                        br
                                        br
                                        | NA11200300092
                                        br
                                        | HD Full Coverage Ultra Lightweight Foundation Sand
                                    p.py-2.textc(v-else) {{ c.answer }}
                                    b-button(
                                        href='/#agenlist',
                                        v-if='c.btn',
                                        style='background: #39a22e; border: solid 1px #39a22e; color: #fff'
                                    ) 
                                        i.mdi.mdi-whatsapp.pr-2
                                        span Pesan Sekarang
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            data: [
                {
                    id: 'cx1',
                    ask: 'Apakah aman untuk ibu hamil ?',
                    answer:
                        'Lumecolors HD Foundation telah memiliki ijin BPOM untuk semua shadenya. Semua produk yang memiliki ijin BPOM sudah pasti aman digunakan ibu hamil, karena tidak memiliki kandungannya telah diawasi.'
                },
                {
                    id: 'cx2',
                    ask: 'Apakah foundi ini mampu menghilangkan flek hitam?',
                    answer:
                        'Lumecolors HD Foundation mampu menutupi bekas jerawat dan noda hitam hanya dengan 1 layer,  sekaligus menyamarkan garis kerut pada wajah hingga 6x lebih halus, tidak cakey dengan hasil velvet smooth natural finish yang mampu bertahan hingga 16 jam.'
                },
                {
                    id: 'cx3',
                    ask:
                        'Apa saja Kandungan yang ada dalam Lumecolors HD Foundation?',
                    answer:
                        'Water, talc, titanium dioxide, Cyclopentasiloxane, Decamethylcy-clopentasiloxane, C13-C16, 1,2,3, Propanetriol, Distillates (Petroleum), Hydrotreated light, Caprylyl, Methicone, Cetyl Peg/Ppg-10/1, Dimethicone, Hexyl Laurate ,  Dimethicone/Vinyl Dimethicone, Crosspolymer, Magnesium Stearate, Polyglyceryl-3 Diisostearate, Synthetic Wax, Ethylhexylglycerin, Magnesium Sulfate, Tocopherol, Bentonite, Retinyl Palmitate, Menthicone, Octyl Triethoxy Silane, Alumunium Hydroxide, Silica, Dimethicone, Beg-800 (Ethylhexyl-glycerin), BHT, Ethanol'
                },
                {
                    id: 'cx4',
                    ask: 'Nomor BPOM untuk Lumecolors?',
                    answer: 'bpom'
                },
                {
                    id: 'cx5',
                    ask: 'Apakah ini menggunakan metode animal test?',
                    answer: 'Tidak, kami tidak menggunakan metode animal test.'
                },
                {
                    id: 'cx6',
                    ask: 'Apakah produk Anda vegan?',
                    answer:
                        'Formulasi Khusus pada Lumecolors 100% menggunakan formulasi Vegan (tidak ada unsur hewani)'
                },
                {
                    id: 'cx7',
                    ask: 'Bagaimana cara pesannya?',
                    answer: 'Silahkan klik tombol dibawah ini ya',
                    btn: '[wa]'
                },
                {
                    id: 'cx8',
                    ask: 'Apakah Anda mengirim secara internasional?',
                    answer:
                        'Untuk saat ini belum namun kami sedang dalam tahapan kearah sana. Jika memang anda memiliki informasi jastip anda bisa mengirimkan produk kami ke pihak tersebut.'
                },
                {
                    id: 'cx9',
                    ask: 'Apa kebijakan pengembalian Anda?',
                    answer:
                        'Produk yang kami kirimkan kami pastikan selalu dalam keadaan baik. Namun masih ada kemungkinan cacat karena pengiriman. Beri tahu kami dan kami akan dengan senang hati membantu Anda dengan pertukaran atau pengembalian.'
                }
            ]
        })
        return { res }
    }
}
</script>
<style lang="scss" scoped>
h1,
h2 {
    color: #000000;
    font-weight: 700;
}
h4 {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
}
.textc {
    font-size: 16px;
    color: #000000;
}
</style>
