<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img
      src="statics/icons/Untitl2.jpeg"
      style="height: 500px; max-width:1000x"
      >
      <q-card-section>
        <div class="text-h7"> CEO BY : FERDI & DEVI </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="indigo-8" text-color="white" label="BELI TIKET" size="15px"
          clickable
          to="rute_hargatiket"/>
        <q-btn color="indigo-8" text-color="white" label="LOGOUT" size="15px"
          clickable
          to="/"/>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Selamat Datang di VIDI Website disini kami menyediakan TIKET DAMRI untuk anda yang ingin berpergian'
    }
  }
}
</script>
