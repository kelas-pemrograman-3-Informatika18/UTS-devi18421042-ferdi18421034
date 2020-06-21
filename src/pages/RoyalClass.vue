<template>
  <q-page padding>
    <q-table
      title="ROYAL CLASS"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="rute" :props="props">
            {{ props.row.rute }}
          </q-td>
          <q-td key="keberangkatan" :props="props">
            {{ props.row.keberangkatan }}
          </q-td>
          <q-td key="harga_tiket" :props="props">
            {{ props.row.harga_tiket }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Pilih" :to="{ name: 'pemesanan', params: { id: props.row._id}}" color="orange" unelevated></q-btn>
              </div>
            <div class="row">
              <div class="col">
                <q-btn to="/homeusr" label="kembali" color="indigo-8" unelevated=""></q-btn>
            </div>
            </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'rute', align: 'center', label: 'Rute', field: 'rute', sortable: true },
        { name: 'keberangkatan', label: 'Jadwal Keberangkatan', align: 'center', field: 'keberangkatan', sortable: true },
        { name: 'harga_tiket', align: 'center', label: 'Harga Tiket', field: 'harga_tiket', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('pemesanan/tampil')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.data
            })
          }
        })
    }
  }
}
</script>
