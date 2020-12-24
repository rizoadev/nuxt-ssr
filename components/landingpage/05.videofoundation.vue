<template lang="pug">
.flex.sect2
    .flex
        .prlx.fndsn(style='background-image: url(/img/foundationbg.webp)')
            .container
                .invide(style='max-width: 650px; margin: 0 auto')
                    youtube(video-id="X6GZy4CnLIY")
                    // b-embed(
                          type='iframe',
                          aspect='4by3',
                          src='https://youtube.com/embed/X6GZy4CnLIY?rel=0',
                          allowfullscreen
                      )
</template>
<script>
export default {
    setup() {}
}
</script>
<style lang="scss" scoped>
.fndsn {
    padding: 1rem 0;
}
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
    padding: 20px;
    text-align: center;
}
</style>
