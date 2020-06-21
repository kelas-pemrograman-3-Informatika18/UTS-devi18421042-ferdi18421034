<template>
  <q-page padding>
    <q-card flat>
      <q-card-section class="q-gutter-model">
        <div class="text-h5">Edit Data Damri</div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-mt-lg"
       >
          <div class="q-gutter-md">
            <q-input label="Rute" v-model="Rute" filled :rules="[ val => val && val.length > 0 || 'wajib diisi']"></q-input>
            <q-input label="Jadwal Berangkat" v-model="jadwal_berangkat" filled :rules="[ val => val && val.length > 0 || 'wajib diisi']"></q-input>
            <q-input label="Harga Tiket" v-model="harga_tiket" filled :rules="[ val => val && val.length > 0 || 'wajib isi diisi']"></q-input>
            <q-btn type="submit" label="Update" color="blue" unelevated></q-btn>
            <q-btn type="reset" label="Reset" color="blue" flat unelevated></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      Rute: null,
      jadwal_berangkat: null,
      harga_tiket: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('executive/tampilsingle/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.Rute = data.Rute
          this.jadwal_berangkat = data.jadwal_berangkat
          this.harga_tiket = data.harga_tiket
        })
    },
    onReset () {
      this.Rute = null
      this.jadwal_berangkat = null
      this.harga_tiket = null
    },
    onSubmit () {
      this.$axios.put('executive/edit/' + this.$route.params.id, {
        Rute: this.Rute,
        jadwal_berangkat: this.jadwal_berangkat,
        harga_tiket: this.harga_tiket
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'tableexecutive' })
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
