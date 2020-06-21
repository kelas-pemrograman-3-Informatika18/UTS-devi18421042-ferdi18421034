<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" />
        <q-space></q-space>
        <q-toolbar-title>
          VIDI WEBSITE
        </q-toolbar-title>
        <q-btn flat round>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item to="/loginadmin" clickable v-close-popup>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="500"
      content-class="text-white bg-indigo-8"
    >
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

        <q-item clickable active-class="active" v-ripple exact :to="{ name: 'homeadmin' }">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'tableexecutive' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Table Executive Class</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable active-class="active" :to="{ name: 'tablebusiness' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Table Business Class</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'inputRoyalClass' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Royal Class</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'inputExecutiveClass' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Executive Class</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'inputBusinessClass' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Business Class</q-item-label>
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
      leftDrawerOpen: false
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
