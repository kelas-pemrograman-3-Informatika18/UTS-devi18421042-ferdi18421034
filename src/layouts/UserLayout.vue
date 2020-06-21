<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          VIDI WEBSITE
        </q-toolbar-title>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-btn flat label="Logout" to="/" />
          </q-list>
        </q-menu>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" :breakpoint="500"
      content-class="text-white bg-black" side="left" bordered overlay>
      <q-scroll-area class="fit">
      <q-list>
        <q-item class="justify-center text-center q-mb-md q-mt-md">
          <div>
            <q-avatar size="150px">
              <img src="https://awsimages.detik.net.id/community/media/visual/2018/06/24/0ee8d90a-bb72-497b-aae3-c1f319ecc940_169.jpeg?w=780&q=90">
            </q-avatar>
            <div class="text-weight-bold q-mt-md">Devi dan Ferdi</div>
            <div>Web Penjualan Tiket Damri</div>
          </div>
        </q-item>

        <q-item clickable active-class="active" v-ripple exact :to="{ name: 'homeusr' }">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'RoyalClass' }" exact>
          <q-item-section avatar>
            <q-icon name="directions_bus"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>RoyalClass</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'ExecutiveClass' }" exact>
          <q-item-section avatar>
            <q-icon name="directions_bus"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>ExecutiveClass</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'BusinessClass' }" exact>
          <q-item-section avatar>
            <q-icon name="directions_bus"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>BusinessClass</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'pemesanan' }" exact>
          <q-item-section avatar>
            <q-icon name="add_shopping_cart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pemesanan</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
    </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      left: false
    }
  }
}
</script>
<style scoped>
.active {
  color: #000000;
  background: #fafafa;
  padding-right: 10px;
}
</style>
