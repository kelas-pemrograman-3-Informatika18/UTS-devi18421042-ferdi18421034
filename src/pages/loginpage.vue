<template>
  <q-page class="bg-black">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-orange" flat>
        <div class="q-pa-md q-gutter-y-sm" align="center">
        <q-toolbar class="bg-indigo-8 text-white" >
        <q-toolbar-title>
        SILAHKAN LOGIN TERLEBIH DAHULU
        </q-toolbar-title>
        </q-toolbar>
        </div>
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Username *"
        label-color="orange"
        bg-color="white"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password *"
        label-color="orange"
        bg-color="white"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      />

      <div>
        <div class="q-pa-md q-gutter-y-sm" align="center">
        <q-btn label="login" type="login" color="indigo-8" />
        <q-btn to="registerr" label="register" type="register" color="white" flat class="q-ml-sm"/>
        <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
        </div>
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
      name: null,
      password: null

    }
  },
  methods: {
    onSubmit () {
      if (this.name === 'vidi' && this.password === '2122') {
        this.$q.notify({
          type: 'positive',
          message: 'selamat login berhasil'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'gagal login, username / password salah'
        })
      }
    },
    onReset () {
      this.name = null
      this.password = null
    },
    onRegister () {
      console.log('fungsi register')
    }
  }
}
</script>
