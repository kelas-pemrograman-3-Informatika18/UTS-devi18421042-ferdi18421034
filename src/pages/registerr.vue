<template>
  <q-page class="bg-black">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-orange" flat>
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="nama"
        label="Username *"
        label-color="orange"
        bg-color="white"
        lazy-rules :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      />

      <q-input
        filled
        type="int"
        v-model="pw"
        label="password *"
        label-color="orange"
        bg-color="white"
        lazy-rules :rules="[val => val && val.length > 0 || 'wajib di isi']"
      />

      <q-input
        filled
        type="int"
        v-model="gmail"
        label="Gmail *"
        label-color="orange"
        bg-color="white"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'wajib di isi']"
      />

      <div>
        <q-btn to="/" label="Submit" type="submit" color="indigo-8"/>
        <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
      </div>
    </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      nama: null,
      pw: null,
      gmail: null

    }
  },
  methods: {
    onSubmit () {
      console.log('fungsi submit')
    },
    onReset () {
      this.nama = null
      this.pw = null
      this.gmail = null
    }
  }
}
</script>
