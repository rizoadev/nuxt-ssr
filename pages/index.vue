<template lang="pug">
.flex
    .flex
        Navbar
        .flex.d-none.d-md-block
            .container(style='margin: 0 auto; padding: 0')
                .flxhbg
        Hero
        HeroText
    .flex.stbody
        .flex.ut1
            Highlight
            Complexion
            VideoFoundation
</template>
<script>
import Navbar from '~/components/landingpage/00.navbar'
import Hero from '~/components/landingpage/01.hero'
import HeroText from '~/components/landingpage/02.herotext'
import Highlight from '~/components/landingpage/03.highlight'
import Complexion from '~/components/landingpage/04.complexion'
import VideoFoundation from '~/components/landingpage/05.videofoundation'

export default {
    components: {
        Navbar,
        Hero,
        HeroText,
        Highlight,
        Complexion,
        VideoFoundation
    },
    setup() {},
    head: {
        title: 'HD Foundation Lumecolors',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Lumecolors - HD Foundation'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
}
</script>
<style lang="stylus" scoped></style>
