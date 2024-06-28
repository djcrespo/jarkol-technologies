<template>
  <div class="bg-[url('public/jarkol/images/sondas.png')] bg-cover bg-center">
    <div class="bg-[#3B408C] bg-opacity-70">
      <section class="py-20 md:py-16">
        <AtomsContainer>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <h3 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              {{ t('products.text_3') }}
            </h3>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="downloadPdf" :disabled="isLoading">
              <span v-if="!isLoading">{{ t('products.download_catalogue') }}</span>
              <span v-else>{{ t('products.loading') }}</span>
              <!--<span v-else-if="!isLoading && isSuccess">{{ t('products.success') }}</span>-->
            </button>
          </div>
        </AtomsContainer>
      </section>

      <pop-up-download :showPopup="isSuccess" @close="isSuccess = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import popUp from "~/components/popups/popUp.vue";
import PopUpDownload from "~/components/popups/popUpDownload.vue";

const { t } = useI18n();

const pdfUrl = ref('/jarkol/documents/sondas.pdf');
const isLoading = ref(false);
const isSuccess = ref(false);

const downloadPdf = () => {
  isLoading.value = true;

  const link = document.createElement('a');
  link.href = pdfUrl.value;
  link.download = 'PPS Catalogue-V08.pdf'; // Name of the downloaded file

  link.addEventListener('click', () => {

    setTimeout(() => {
      isLoading.value = false;
    }, 3000);

  });

  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false;
  }, 1500);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>

