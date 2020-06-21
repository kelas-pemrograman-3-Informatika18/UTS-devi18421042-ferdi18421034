<template>
  <q-page padding>
    <q-card flat>
      <q-card-section class="q-gutter-model">
        <div class="text-h5">Pemesanan Tiket</div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-mt-lg"
       >
          <div class="q-gutter-md">
            <q-input label="Rute" v-model="rute" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Keberangkatan" v-model="keberangkatan" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Harga Tiket" v-model="harga_tiket" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Masukan Nomor ATM" v-model="pembayaran" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
          </div>
    <q-btn type="submit" label="Bayar" color="indigo-8" unelevated></q-btn>
    <q-btn to="/homeusr" type="kembali" label="Kembali" color="indigo-8" flat unelevated></q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      rute: null,
      keberangkatan: null,
      harga_tiket: null,
      pembayaran: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pemesanan2/tampilsingle/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.rute = data.rute
          this.keberangkatan = data.keberangkatan
          this.harga_tiket = data.harga_tiket
        })
    },
    onSubmit () {
      this.$axios.put('pemesanan2/edit/' + this.$route.params.id, {
        rute: this.rute,
        keberangkatan: this.keberangkatan,
        harga_tiket: this.harga_tiket,
        pembayaran: this.pembayaran
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'homeusr' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
