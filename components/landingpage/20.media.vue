<template lang="pug">
.container
    .flex.justify-content-center.px-3
        h2.text-center.lume-dark.nunito Lumécolors Telah Diliput Berbagai Media!
        .flex.pt-3
            .row
                .col-lg-6.col-md-6.col-sm-6
                    .card
                        .p-3
                            img(width='100%', data-src='/img/news1.png' v-lazy-load)
                .col-lg-6.col-md-6.col-sm-6
                    .card
                        .p-3
                            img(width='100%', data-src='/img/news2.png' v-lazy-load)
</template>
<script>
export default {
    setup() {}
}
</script>
