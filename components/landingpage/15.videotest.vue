<template lang="pug">
.flex(style='background: #fff')
    .container.align-content-center.flex-column
        .flex
            .flex.pb-4
                .flex.text-center.d-flex.justify-content-center
                    div(
                        style='line-height: 2.4rem; font-weight: 700; font-size: 1.8rem'
                    ) Uji Coba&nbsp;
                        span(
                            style='line-height: 2rem; font-weight: 500; font-size: 1.8rem'
                        ) Foundation
                            br
                            | & Beauty Blender
                .invide.my-3.mt-3
                    .px-3
                        .row
                            .col-lg-6
                                .my-3
                                    b-embed(
                                        type='iframe',
                                        aspect='4by3',
                                        src='https://youtube.com/embed/X6GZy4CnLIY?rel=0',
                                        allowfullscreen,
                                        poster='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/cbd7e0b8fdabb471c858ff442df995c6'
                                    )
                            .col-lg-6
                                .my-3
                                    b-embed(
                                        type='iframe',
                                        aspect='4by3',
                                        src='https://youtube.com/embed/NkU4Jxs3j1c?rel=0',
                                        allowfullscreen,
                                        poster='https://vercelcdn.s3.us-west-001.backblazeb2.com/files/cbd7e0b8fdabb471c858ff442df995c6'
                                    )
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="scss" scoped>
.invide {
    background-repeat: no-repeat;
    border-style: solid;
    border-color: #000;
    border-width: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-image: unset;
    background-color: rgba(109, 90, 72, 0.4);
    background-size: 100% 100%;
}
</style>
