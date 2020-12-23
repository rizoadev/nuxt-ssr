<template lang="pug">
.flex(style='background: #010a0e')
    .container
        .p-4.ftrx
            .flex.d-flex.justify-content-between.pb-5
                .pr-3 &copy; 2020 lumecolors. All rights reserved.
                    .pr-3
                        b-link.pr-3(to='/#') Terms of Service
                        b-link.pr-3(to='/#') Privacy Policy
                .pl-3.text-right HD Foundation is a lumecolors product. Registered address: Tangerang, Banten.
                    br
                    | All prices include VAT where applicable.

    .flex.fixed-bottom(style='bottom: 0px; position: fixed')
        .d-flex.justify-content-center
            a.flex.d-sm-none.mb-2(href='/#agenlist', v-scroll-to='"#agenlist"')
                b-button.text-white(
                    block,
                    style='background: #333; border: solid 1px #333; font-weight: 700; font-size: 1.2rem'
                )
                    .d-flex.px-4
                        i.mdi.mdi-arrow-right-bold-circle-outline.mdi-18px.pr-1
                        div(
                            style='padding-top: 2px; padding-left: 5px; font-size: 1rem; font-weight: 600'
                        ) Pesan Sekarang
</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const res = reactive({})
        return { res }
    }
}
</script>
<style lang="scss" scoped>
//
.ftrx {
    font-size: 12px;
    color: #fff;
}
</style>
