<template>
  <q-page padding>
    <div class="q-mb-xl">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          autoplay
          arrows
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="~assets/20200509_203859_0000.png" />
          <q-carousel-slide :name="2" img-src="~assets/20200509_203940_0000.png"/>
          <q-carousel-slide :name="3" img-src="~assets/20200509_210453_0000.png"/>
        </q-carousel>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-md-3 col-xs-12">
        <q-card class="my-card">
          <q-img class="my-cards" src="~assets/damri2.jpeg" />

          <q-card-section>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Royal Class
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Fasilitas
            </div>
            <div class="text-caption text-grey ellipsis-3-lines">
              Full AC,Kursi Nyaman,dan jumlah Kursi 26
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn to="RoyalClass" unelevated  class="full-width q-mt-lg" color="orange-6">
              Pesan
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-12">
        <q-card class="my-card">
          <q-img class="my-cards" src="~assets/damri4.jpeg" />

          <q-card-section>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Executive Class
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Fasilitas
            </div>
            <div class="text-caption text-grey ellipsis-3-lines">
              AC,Kursi Biasa,dan jumlah Kursi 28
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn to="ExecutiveClass" unelevated  class="full-width q-mt-md" color="orange-6">
              Pesan
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-3 col-xs-12">
        <q-card class="my-card">
          <q-img class="my-cards" src="~assets/damri3.jpeg" />

          <q-card-section>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Business Class
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Fasilitas
            </div>
            <div class="text-caption text-grey ellipsis-3-lines">
              AC,Kursi Biasa,dan Jumlah Kursi 30
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn unelevated to="BusinessClass" class="full-width q-mt-md" color="orange-6">
              Pesan
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  height: 100%
  max-height: 400px
.my-cards
  width: 100%
  max-width: 300px
</style>
