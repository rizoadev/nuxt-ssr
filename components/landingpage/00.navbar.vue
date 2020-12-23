<template lang="pug">
section.nvb
    b-navbar.nvb(fixed='top', toggleable='sm', type='light')
        .container
            .w-100.flex-column
                .d-flex.justify-content-between
                    b-navbar-brand(href='/')
                        img(src='/img/logo.png', height='30px')

                    .d-flex.flex-sm-row
                        b-link.lnk(
                            href='/#agenlist',
                            v-scroll-to='"#agenlist"'
                        ) Pesan Sekarang
                        b-link.lnk(
                            href='https://agen.lumecolors.com',
                            target='_blank'
                        ) Join jadi Stockist
                        // b-nav.ml-auto.d-flex
                            b-nav-item.border.border-primary
                                a(href='/#agenlist', v-scroll-to='"#agenlist"') Pesan Sekarang
                            b-nav-item.border.border-primary
                                a(
                                    href='https://agen.lumecolors.com',
                                    target='_blank'
                                ) Join jadi Stockist
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="stylus" scoped></style>
