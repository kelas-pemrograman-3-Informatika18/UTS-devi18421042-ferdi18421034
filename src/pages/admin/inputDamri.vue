<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div  class="left blue"></div>
          </div>
          <div  class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Input Damri</div>
              <div>Input Data Damri</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
     <q-card flat>
      <q-card-section class="row">
          <q-form
            @submit="onSubmit()"
            class="q-col-gutter-md q-col-lg-6 col-md-6 col-xs-12"
          >
            <q-select
              filled
              v-model="form.namaDamri"
              :options="optiondamri"
              label="Pilih Damri"
            />

            <q-select
              filled
              v-model="form.tipe"
              :options="optiontipe"
              label="Pilih Tipe Damri"
            />

            <q-select
              filled
              v-model="form.rute"
              :options="optionrute"
              label="Mohon isi Rute Damri"
            />

            <q-input
              filled
              v-model="form.harga"
              type="number"
              label="Harga"
              lazy-rules
              :rules="[ val => val > 0 || 'Mohon isi Harga']"
            />

            <q-select
              filled
              v-model="form.jadwal"
              :options="optionjadwal"
              label="Mohon isi Jadwal Keberangkatan"
            />

            <q-input
              v-model="form.deskripsi"
              filled
              type="textarea"
              label="Deskripsi"
            />
            <q-file accept=".jpg, image/*" color="teal" filled v-model="image" label="Upload Gambar">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
            </q-file>
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
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
      form: {
        namaDamri: null,
        tipe: null,
        rute: null,
        harga: 0,
        jadwal: null,
        deskripsi: null
      },
      optiondamri: [
        'Damri Antar Kota',
        'Damri Bandara',
        'Damri Travel/Pariwisata'
      ],
      optiontipe: [
        'Royal Class',
        'Business Class',
        'Executive Class'
      ],
      optionrute: [
        'Bandar Lampung - Jakarta',
        'Bandar Lampung - Bandung',
        'Bandar Lampung - Bogor',
        'Branti - Jakarta',
        'Branti - Bandar Lampung',
        'Branti - Palembang'
      ],
      optionjadwal: [
        'Senin 09.00',
        'Senin 10.00',
        'Selasa 11.00',
        'Rabu 10.30',
        'Rabu 14.00',
        'Kamis 13.30'
      ],
      image: null
    }
  },
  methods: {
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.post('damri/insert', formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'dataDamri' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
<style scoped>
.left {
  width: 3px;
  height: 100%;
  background-color: blue;
}
</style>
