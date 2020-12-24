<template lang="pug">
section#header
    b-navbar(toggleable='lg', type='dark', variant='info')
        .container
            b-navbar-brand(href='/') navbar
            b-navbar-toggle(target='nav-collapse')

            b-collapse#nav-collapse(is-nav)
                b-navbar-nav
                    b-nav-item(href='#') Link
                    b-nav-item(href='#') Link
                    b-nav-item(href='#') Link
                b-navbar-nav.ml-auto
                    b-nav-item-dropdown(text='Lang', right)
                        b-dropdown-item(href='#') Title
                        b-dropdown-item(href='#') Title
                        b-dropdown-item(href='#') Title
                        b-dropdown-item(href='#') Title
    .container
        .py-4
            .row
                .col-lg-12
                    p BootstrapVue
                    p This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.

                    youtube(video-id="YdNqJT9Yz58")
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({
            crot: () => {
                require('consola').info('crooot')
            }
        })
        return { res }
    }
}
</script>
