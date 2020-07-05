<template>
  <q-page padding>
    <div class="q-mb-xl">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          autoplay
          arrows
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="~assets/20200509_203859_0000.png" />
          <q-carousel-slide :name="2" img-src="~assets/20200509_203940_0000.png" />
          <q-carousel-slide :name="3" img-src="~assets/20200705_103636_0000.png" />
        </q-carousel>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-md-3 col-xs-12" v-for="(damri, i) in data" :key="i">
        <q-card>
          <q-img
            :src="`${$baseImageURL}/${damri.image}`"
            :ratio="16/9"
          />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ damri.namaDamri }}
              </div>
            </div>
            <div class="text-subtitle1">
             Rp. {{ damri.harga }},-
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
              <div class="col text-h6 ellipsis">
                {{ damri.tipe }}
              </div>
            <div class="text-blue-grey">
             {{ damri.rute }}
            </div>
            <div class="text-blue-grey">
             {{ damri.jadwal }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div @click="damri.expanded = !damri.expanded" class="text-caption text-grey cursor-pointer">
              Tampilkan Deskripsi
            </div>
            <q-slide-transition>
              <div v-show="damri.expanded">
                <div class="text-grey text-caption">
                  {{ damri.deskripsi }}
                </div>
              </div>
            </q-slide-transition>
          </q-card-section>

          <q-card-actions>
            <q-btn unelevated @click="openDetail(damri)" class="full-width" color="black">
              Pesan
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="dialog" v-if="dialog" position="bottom">
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Detail Pemesanan</div>
        </q-card-section>
        <q-card-section style="max-height: 50vh;" class="scroll">
          {{ activeData.namaDamri }} - {{ activeData.harga }}
          <q-form class="q-mt-md">
            <q-input filled type="number" class="q-mb-md" v-model="jumlah" label="Masukan Jumlah Pemesanan Tiket"/>
             Rp. {{ total }},-
            <q-file color="teal" class="q-mt-md" filled v-model="image" label="Input Bukti Transfer">
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </q-form>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Batal" v-close-popup />
          <q-btn color="black" @click="prosesTransaksi()" label="Proses" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      stars: 4,
      dialog: false,
      image: null,
      data: [],
      activeData: null,
      jumlah: 1
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('damri/getall')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data.map(damri => {
              return Object.assign(damri, {
                expanded: false
              })
            })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    },
    openDetail (data) {
      this.activeData = data
      this.dialog = true
    },
    prosesTransaksi () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify({
        idUser: this.$q.localStorage.getItem('dataUser')._id,
        idDamri: this.activeData._id,
        harga: this.activeData.harga,
        jumlah: this.jumlah,
        total: this.total
      }))
      this.$axios.post('order/insert', formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.dialog = false
            this.image = null
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  },
  computed: {
    total () {
      return this.activeData.harga * this.jumlah
    }
  }
}
</script>
