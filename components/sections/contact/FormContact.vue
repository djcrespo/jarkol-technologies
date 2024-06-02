<template>
  <section>
    <form>
      <div class="grid lg:grid-cols-1 gap-6 mb-6 md:grid-cols-1 animate-fade-left animate-delay-500">
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {{ t('contact.form.first_name') }}
            </label>
            <input v-model="person.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="t('contact.form.first_name')" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {{ t('contact.form.last_name') }}
            </label>
            <input v-model="person.last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="t('contact.form.last_name')" required />
          </div>
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ t('contact.form.mail') }}
          </label>
          <input v-model="contact.mail" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="t('contact.form.mail')" required />
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ t('contact.form.phone') }}
          </label>
          <input v-model="contact.phone" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="t('contact.form.phone')" required />
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ t('contact.form.subject') }}
          </label>
          <input v-model="contact.subject" type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ t('contact.form.message') }}
          </label>
          <textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="t('contact.form.message')"></textarea>
        </div>
        <div class="text-center">
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="sendMessage">
            {{ t('contact.form.button') }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'formContact',
  data () {
    return {
      person: {
        first_name: '',
        last_name: ''
      },
      contact: {
        mail: '',
        phone: '',
        subject: ''
      },
      message: ''
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
    async sendMessage () {
      console.log(this.person)
      console.log(this.contact)
      console.log(this.message)
      try {
        await this.$axios.post('enviar-mensaje', {
          person: {
            "first_name": this.person.first_name,
            "last_name": this.person.last_name
          },
          contact: {
            mail: this.contact.mail,
            phone: this.contact.phone,
            subject: this.contact.subject
          },
          message: this.message
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
