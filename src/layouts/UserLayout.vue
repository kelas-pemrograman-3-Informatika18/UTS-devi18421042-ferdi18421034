<template>
  <q-layout view="lHh Lpr lFf">
     <q-toolbar unelevated style="height : 70px;" class="bg-black text-white">
      <div class="text-h6 q-ml-lg">VIDI WEBSITE</div>

      <q-space />
      <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
        <q-btn size="medium" :to="{ name: 'homeuser' }" flat>Home</q-btn>
        <q-btn size="medium" :to="{ name: 'pemesanan' }" flat>Pesanan Saya</q-btn>
        <q-btn size="medium" :to="{ name: 'about' }" flat>Tentang</q-btn>
        <q-btn size="medium" @click="logout()" flat>Logout</q-btn>
      </div>
      <q-btn flat @click="drawer = !drawer" round v-if="$q.screen.xs" icon="menu"/>
    </q-toolbar>
      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        side="right"
        content-class="text-white bg-black"
        bordered overlay
      >
        <q-scroll-area class="fit">
      <q-list>
        <q-item class="justify-center text-center q-mb-md q-mt-md">
          <div>
            <q-avatar size="150px">
              <img src="~assets/20200705_104139_0000.png">
            </q-avatar>
            <div class="text-weight-bold q-mt-md">Devi dan Ferdi</div>
            <div>Web Penjualan Tiket Damri</div>
          </div>
        </q-item>

        <q-item clickable active-class="active" v-ripple exact :to="{ name: 'homeuser' }">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'pemesanan' }" exact>
          <q-item-section avatar>
            <q-icon name="add_shopping_cart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pesanan Saya</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'profile' }" exact>
          <q-item-section avatar>
            <q-icon name="account_circle"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'about' }" exact>
          <q-item-section avatar>
            <q-icon name="info"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active"  @click="logout()" flat exact>
          <q-item-section avatar>
            <q-icon name="rotate_left"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
    </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
