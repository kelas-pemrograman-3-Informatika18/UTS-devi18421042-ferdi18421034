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
              <div class="text-h6">Data Damri</div>
              <div>Data Damri</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
     <q-card class="bg-grey">
        <q-table
          :data="data"
          flat
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="namaDamri" :props="props">
                {{ props.row.namaDamri }}
              </q-td>
              <q-td key="tipe" :props="props">
                {{ props.row.tipe }}
              </q-td>
              <q-td key="rute" :props="props">
                {{ props.row.rute }}
              </q-td>
              <q-td key="harga" :props="props">
                Rp. {{ props.row.harga }},-
              </q-td>
              <q-td key="jadwal" :props="props">
                {{ props.row.jadwal }}
              </q-td>
              <q-td key="deskripsi" :props="props">
                <div class="ellipsis" style="max-width: 200px;">
                  {{ props.row.deskripsi }}
                </div>
              </q-td>
              <q-td key="gambar" :props="props">
                 <q-img
                  :src="`${$baseImageURL}/${props.row.image}`"
                  spinner-color="white"
                />
              </q-td>
              <q-td key="aksi" :props="props">
                <div class="row q-gutter-md">
                  <q-btn :to="{ name: 'formEditDamri', params: { id: props.row._id }}" label="Edit" icon="edit" color="warning" unelevated/>
                  <q-btn @click="deleteDamri(props.row._id)" label="Hapus" icon="delete" color="negative" unelevated/>
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'namaDamri', align: 'left', label: 'namaDamri', field: 'namaDamri', sortable: true },
        { name: 'tipe', align: 'left', label: 'Tipe Damri', field: 'tipe', sortable: true },
        { name: 'rute', align: 'left', label: 'Rute', field: 'rute', sortable: true },
        { name: 'harga', align: 'left', label: 'Harga', field: 'harga', sortable: true },
        { name: 'jadwal', align: 'left', label: 'Jadwal Berangkat', field: 'jadwal', sortable: true },
        { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi', sortable: true },
        { name: 'gambar', align: 'left', label: 'Gambar', field: 'gambar' },
        { name: 'aksi', align: 'left', label: 'aksi', field: 'aksi' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('damri/getall')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    },
    deleteDamri (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Ingin Menghapus Data ini ?',
        cancel: true,
        parsistent: true
      }).onOk(() => {
        this.$axios.delete(`damri/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
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
