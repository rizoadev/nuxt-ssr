<template lang="pug">
.flex.sect2.flex-grow
    .container
        .d-flex.align-content-center.flex-column(
            style='position: relative; top: 0'
        )
            .d-none.d-sm-block
                .row
                    .col-lg-6.col-md-4.col-sm-4
                        img(
                            width='100%',
                            height='auto',
                            data-src='/img/lumeblender.webp'
                            v-lazy-load
                        )
                    .col-lg-6.col-md-8.col-sm-8
                        .py-5.flex.justify-content-start
                            h1.lume-dark.text-left.text-center Tahukah Kamu?
                        .flex.pt-3(style='font-size: 16px')
                            .flex.pb-2 Bahwa banyak produk kosmetik dari luar negri yang kurang cocok di iklim tropis Indonesia yang cenderung membuat kulit mudah berkeringat dan berminyak.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Produk glowing berbahan dasar minyak dapat menyumbat pori-pori wajah dan menimbulkan komedo berlebih.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Formula yang mengandung minyak hewan berpotensi membuat wajah sensitif menjadi&nbsp;
                                    em.lume-dark(style='font-weight: 700') break out.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Wajah yang berjerawat ketika menggunakan make-up dengan kilap berlebih justru akan semakin menonjolkan tampilan jerawat setelah wajah mulai berkeringat.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Kandungan oil berlebih pada make-up membuat riasan mudah menempel pada masker kain wajah.
                            .py-4
                                h3.text-center Ingin tau lebih lanjut?
                                h5.text-center tonton video berikut ini:

            .d-flex.d-sm-none
                .row
                    .col-lg-6.col-md-4.col-sm-4
                        img(
                            width='100%',
                            height='auto',
                            data-src='/img/lumeblender.webp'
                            v-lazy-load
                        )
                    .col-lg-6.col-md-8.col-sm-8
                        .py-5.flex.d-flex.justify-content-start
                            h1.lume-dark.text-left.text-center Tahukah Kamu?
                    .col-sm-12
                        .flex.pt-3(style='font-size: 16px')
                            .flex.pb-2 Bahwa banyak produk kosmetik dari luar negri yang kurang cocok di iklim tropis Indonesia yang cenderung membuat kulit mudah berkeringat dan berminyak.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Produk glowing berbahan dasar minyak dapat menyumbat pori-pori wajah dan menimbulkan komedo berlebih.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Formula yang mengandung minyak hewan berpotensi membuat wajah sensitif menjadi&nbsp;
                                    em.lume-dark(style='font-weight: 700') break out.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Wajah yang berjerawat ketika menggunakan make-up dengan kilap berlebih justru akan semakin menonjolkan tampilan jerawat setelah wajah mulai berkeringat.
                            .flex.d-flex.py-2
                                i.mdi.mdi-24px.mdi-checkbox-marked-outline
                                .pl-3 Kandungan oil berlebih pada make-up membuat riasan mudah menempel pada masker kain wajah.
                            .py-4
                                h3.text-center Ingin tau lebih lanjut?
                                h5.text-center tonton video berikut ini:
</template>
<script>
export default {
    setup() {}
}
</script>
