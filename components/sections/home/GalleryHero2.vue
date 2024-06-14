<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- First item -->
      <div class="swiper-slide">
        <div class="relative">
          <img class="w-full bg-cover" src="/jarkol/bg_v2/buenas3/8.jpg" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_1') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Second item -->
      <div class="swiper-slide">
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/2.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_2') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Third item -->
      <div class="swiper-slide">
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/6.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_3') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Fourth item -->
      <div class="swiper-slide">
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/4.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import Swiper from 'swiper/bundle';
import { useI18n } from 'vue-i18n';

export default {
  name: 'galleryHero',
  async created() {
    const { t } = useI18n();
    this.t = t;
    console.log("Component is created");
  },
  async mounted() {
    const { t } = useI18n();
    this.t = t;
    console.log("Component is mounted");
    if (process.client) {
      this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 15000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
</script>

<style>
/* Add required swiper styles here */
.swiper-container {
  width: auto;
  height: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Other styles for the slides */
}
.swiper-pagination {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
