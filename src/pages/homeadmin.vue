<template>
  <q-page padding>
     <q-table
      title="Table Royal Class"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Rute" :props="props">
            {{ props.row.Rute }}
          </q-td>
          <q-td key="jadwal_berangkat" :props="props">
            {{ props.row.jadwal_berangkat }}
          </q-td>
          <q-td key="harga_tiket" :props="props">
            {{ props.row.harga_tiket }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                  <q-btn label="Edit" :to="{ name: 'editRoyalClass', params: { id: props.row._id}}" color="orange" icon="create" unelevated></q-btn>
            </div>
            <div class="row">
              <div class="col">
                  <q-btn label="Hapus" @click="confirm(props.row._id)" color="negative" icon="delete"  unelevated></q-btn>
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
        {
          name: 'Rute',
          required: true,
          label: 'Rute',
          align: 'center',
          field: 'Rute',
          sortable: true
        },
        { name: 'jadwal_berangkat', label: 'Jadwal Berangkat', align: 'center', field: 'jadwal_berangkat', sortable: true },
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
      this.$axios.get('damri/tampil')
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
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Menghapus Data?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('damri/delete/' + id)
          .then((res) => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan
              })
              this.getData()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan
              })
            }
          })
      })
    }
  }
}
</script>
