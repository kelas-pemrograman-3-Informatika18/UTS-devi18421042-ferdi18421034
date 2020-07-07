<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" />
        <q-toolbar-title>
          VIDI WEBSITE
        </q-toolbar-title>
        <q-btn @click="logout()" flat round label="Logout">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="500"
      content-class="text-white bg-black"
    >
    <q-scroll-area class="fit">
      <q-list>
        <q-item class="justify-center text-center q-mb-md q-mt-md">
          <div>
            <q-avatar size="150px">
              <img src="~assets/20200707_114237_0000.png">
            </q-avatar>
            <div class="text-weight-bold q-mt-md">Devi dan Ferdi</div>
            <div>Web Penjualan Tiket Damri</div>
          </div>
        </q-item>

        <q-item clickable active-class="active" v-ripple exact :to="{ name: 'dashboardAdmin' }">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" v-ripple exact :to="{ name: 'dataDamri' }">
          <q-item-section avatar>
            <q-icon name="directions_bus"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Damri</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'inputDamri' }" exact>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Damri</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'dataUser' }" exact>
          <q-item-section avatar>
            <q-icon name="supervisor_account"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Data User</q-item-label>
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
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
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
