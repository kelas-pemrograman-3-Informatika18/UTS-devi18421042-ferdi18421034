<template>
  <q-layout class="bg-indigo-10" view="lHh Lpr Lff">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-card flat class="text-indigo">
              <div class="row items-center">
                <div class="col-md-6 col-sm-12-col-xs-12">
                  <div class="row q-pt-md q-pb-md">
                    <div class="col-md-8 offset-2">
                      <q-img src="statics/profile.png"></q-img>
                        </div>
                  </div>
                </div>
                <div class="col-md-6">
                    <q-card-section>
                    <div class="text-h5">User Account</div>
                    <div>Data Anda</div>
                  </q-card-section>
                    <q-item>
                     <q-item-section avatar>
                      <q-icon name="people"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ $q.localStorage.getItem('dataUser').namaLengkap }}</q-item-label>
                    </q-item-section>
                    </q-item>
                    <q-item>
                     <q-item-section avatar>
                      <q-icon name="mail"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ $q.localStorage.getItem('dataUser').email }}</q-item-label>
                    </q-item-section>
                    </q-item>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
