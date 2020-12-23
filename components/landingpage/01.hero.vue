<template lang="pug">
.flex.sect1
    // bg 1
    .scvd.d-none.d-md-block
        video(autoplay, muted, loop)
            source(
                src='/img/bgvid.webm',
                width='100%',
                height='100%',
                type='video/mp4'
            )
    .sctv
        .container
            .flex-column
                .sctl.flex
                    .sctd.d-flex
                        .d-flex
                            .row
                                .col-lg-5.col-md-4
                                .col-lg-7.col-md-8
                                    .mr-3
                                        h1 Get Your Second Skin
                                        h2 Temukan Rahasia Wajah Flawless & Natural dengan lumécolors HD Foundation
                                        b-button.bxs(
                                            variant='white',
                                            v-b-modal.ModalHero
                                        )
                                            .flex See The Magic!
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.bxs {
    margin-top: 20px;
    padding: 10px 15px 5px 15px;
    background-repeat: no-repeat;
    border-style: solid;
    border-color: #000;
    border-width: 0px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-image: unset;
    background-color: rgba(245, 226, 207, 0.83);
    background-size: 100% 100%;
    font-size: 24px;
    color: #4c351e;
}
.bxs:hover,
.bxs:active {
    background-color: rgba(245, 226, 207, 0.83);
    color: #4c351e;
}
</style>
