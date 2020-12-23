<template lang="pug">
.flex
    BoxLocation(
        v-if='res.data',
        type='provinsi',
        text='Provinsi',
        :data='res.data.provinsi',
        :xvalue='res.prov_id',
        @changeLoc='res.chLoc'
    )
    BoxLocation(
        type='kabupaten',
        text='Kabupaten',
        :data='res.data.kabupaten',
        :xvalue='res.kab_id',
        @changeLoc='res.chLoc'
    )
    BoxLocation(
        type='kecamatan',
        text='Kecamatan',
        :data='res.data.kecamatan',
        :xvalue='res.kec_id',
        @changeLoc='res.chLoc'
    )
    BoxLocation(
        type='kelurahan',
        text='Kelurahan',
        :data='res.data.kelurahan',
        :xvalue='res.kel_id',
        @changeLoc='res.chLoc'
    )
    .flex(v-if='res.kabupaten')
        .flex.py-1.flex-column
            label.theme3 Kodepos
            .flex
                b-form-input(
                    placeholder='',
                    v-model='$store.state.landing.landing1.data.alamat_default.kodepos'
                )
</template>
<script>
import {
    computed,
    reactive,
    useAsync,
    useContext
} from '@nuxtjs/composition-api'
import BoxLocation from './BoxLocation'

export default {
    components: {
        BoxLocation
    },
    setup() {
        const { store } = useContext()
        useAsync(() => store.dispatch('landing/landing1/getProv'))
        const res = reactive({
            provinsi: true,
            kabupaten: false,
            kecamatan: false,
            kelurahan: false,
            data: {
                provinsi: computed(
                    () => store.state.landing.landing1.addr.provinsi
                ),
                kabupaten: computed(
                    () => store.state.landing.landing1.addr.kabupaten
                ),
                kecamatan: computed(
                    () => store.state.landing.landing1.addr.kecamatan
                ),
                kelurahan: computed(
                    () => store.state.landing.landing1.addr.kelurahan
                )
            },
            chLoc: (x) => {
                store.commit('landing/landing1/SETALM', {
                    k: x.type,
                    id: x.raw.value,
                    value: x.raw.text
                })
                // set local
                if (x.type === 'provinsi') {
                    res.provinsi = true
                    res.kabupaten = true
                    res.kecamatan = false
                    res.kelurahan = false
                    store.dispatch(
                        'landing/landing1/getKab',
                        store.state.landing.landing1.data.alamat_default
                            .provinsi
                    )
                } else if (x.type === 'kabupaten') {
                    res.provinsi = true
                    res.kabupaten = true
                    res.kecamatan = true
                    res.kelurahan = false
                    store.dispatch(
                        'landing/landing1/getKec',
                        store.state.landing.landing1.data.alamat_default
                            .kabupaten
                    )
                } else if (x.type === 'kecamatan') {
                    res.provinsi = true
                    res.kabupaten = true
                    res.kecamatan = true
                    res.kelurahan = true
                    store.dispatch(
                        'landing/landing1/getKel',
                        store.state.landing.landing1.data.alamat_default
                            .kecamatan
                    )
                } else if (x.type === 'kelurahan') {
                    res.provinsi = true
                    res.kabupaten = true
                    res.kecamatan = true
                    res.kelurahan = true
                }
                if (x.type === 'provinsi') {
                    store.commit('landing/landing1/SETALAMAT_FREE')
                }
                store.commit('landing/landing1/SETALAMAT', {
                    k: x.type,
                    v: x.value
                })
                store.commit('landing/landing1/SETALAMAT', {
                    k: x.type + '_name',
                    v: x.raw.text
                })
                store.dispatch('landing/landing1/updateForm')
            },
            prov_id: computed(
                () => store.state.landing.landing1.data.alamat_default.provinsi
            ),
            kab_id: computed(
                () => store.state.landing.landing1.data.alamat_default.kabupaten
            ),
            kec_id: computed(
                () => store.state.landing.landing1.data.alamat_default.kecamatan
            ),
            kel_id: computed(
                () => store.state.landing.landing1.data.alamat_default.kelurahan
            )
        })
        return { res }
    }
}
</script>
<style lang="scss" scoped>
.home-enter-active,
.home-leave-active {
    transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
    opacity: 0;
}
</style>
