<template lang="pug">
.flex
    .container
        .py-5
            #konverzi_cmt(data-id='c8ecd8-c24689-0001')
</template>
<script>
export default {
    head() {
        return {
            script: [
                {
                    hid: 'stripe',
                    src: 'https://fbc.lumecolors.email/js/v2.js',
                    defer: true,
                    // Changed after script load
                    callback: () => {
                        require('consola').info('komen loaded')
                    }
                }
            ]
        }
    }
}
</script>
