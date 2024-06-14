<template>
  <transition name="fade">
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg p-8 shadow-lg w-1/3 text-center">
        <h2 class="text-xl font-bold mb-4">{{ t('popup') }}</h2>
      </div>
    </div>
  </transition>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'popUp',
  props: {
    showPopup: {
      type: Boolean,
      required: true
    }
  },
  created() {
    const { t } = useI18n();
    this.t = t;
  },
  mounted() {
    const { t } = useI18n();
    this.t = t;
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
