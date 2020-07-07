<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="bg-indigo-1">
        <div class="row">
          <q-card class="fixed-center col-md-4 col-xs-12">
            <q-card-section>
              <div class="text-h6">
                Halaman Register
              </div>
              <q-form
              @submit="onSubmit"
              >
                <q-input
                  v-model="username"
                  label="Username"
                  color="orange"
                  :rules="[
                    val => val && val.length > 0 || 'Ketikan Username'
                  ]" >
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>

                <q-input
                  v-model="namaLengkap"
                  label="Nama Lengkap"
                  color="orange"
                  :rules="[
                    val => val && val.length > 0 || 'Ketikan Nama Lengkap Anda'
                  ]" >
                  <template v-slot:prepend>
                      <q-icon name="person" />
                   </template>
                </q-input>

                <q-input
                  v-model="email"
                  label="Email"
                  color="orange"
                  :rules="[
                    val => val && val.length > 0 || 'Ketikan Email Anda'
                  ]" >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>

                <q-input
                 v-model="password"
                 label="Password"
                 type="password"
                 color="orange"
                 :rules="[
                    val => val && val.length > 0 || 'Ketikan Password Anda'
                  ]" >
                  <template v-slot:prepend>
                    <q-icon name="vpn_key"/>
                  </template>
                </q-input>
                 <div class="q-gutter-md">
                   <q-btn label="Register" type="submit" unelevated color="orange-7" />
                   <q-btn label="Login" :to="{ name: 'loginPage' }" unelevated color="orange-6" flat />
                 </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      namaLengkap: null,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('User/register', {
        username: this.username,
        namaLengkap: this.namaLengkap,
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$showNotif(res.data.pesan, 'positive')
          this.$router.push({ name: 'loginPage' })
        } else {
          this.$showNotif(res.data.pesan, 'negative')
        }
      })
    }
  }
}
</script>
