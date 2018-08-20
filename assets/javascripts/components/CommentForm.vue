<template>
  <div>
    <div v-if="error" class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Whoops !</strong>
      <span class="block sm:inline">Quelque chose s'est mal passé, merci de réessayer plus tard.</span>
    </div>

    <div v-if="isPosted" class="bg-green-lightest border border-green-light text-green-dark px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Félicitation !</strong>
      <span class="block sm:inline">Votre commentaire a été envoyé avec succès.</span>
    </div>

    <form v-else @submit.prevent="submit">
      <p class="text-sm">
        Votre adresse de messagerie ne sera pas publiée.<br />
        Les champs obligatoires sont indiqués avec <span class="text-red">*</span>.
      </p>

      <div class="my-4">
        <label for="name">Nom <span class="text-red">*</span></label>
        <input v-model="form.name" :disabled="isPosted" v-validate="'required'" data-vv-as="Le nom" :class="{'border-red' : errors.has('name') }" class="text-input no-outline" name="name" id="name" type="text" required />

        <div v-if="errors.has('name')" class="text-red text-xs italic mt-2">{{ errors.first('name') }}</div>
      </div>

      <div class="my-4">
        <label for="email">Email <span class="text-red">*</span></label>
        <input v-model="form.email" v-validate="'required|email'" data-vv-as="L'email" :class="{'border-red' : errors.has('email') }" class="text-input no-outline" name="email" id="email" type="email" required />

        <div v-if="errors.has('email')" class="text-red text-xs italic mt-2">{{ errors.first('email') }}</div>
      </div>

      <div class="my-4">
        <label for="website">Site web</label>
        <input v-model="form.website" v-validate="'url'" data-vv-as="Le site web" :class="{'border-red' : errors.has('website') }" class="text-input no-outline" name="website" id="website" type="text" />

        <div v-if="errors.has('website')" class="text-red text-xs italic mt-2">{{ errors.first('website') }}</div>
      </div>

      <div class="my-4">
        <label for="content">Commentaire <span class="text-red">*</span></label>
        <textarea v-model="form.content" v-validate="'required'" data-vv-as="Le commentaire" :class="{'border-red' : errors.has('content') }" class="text-input no-outline" name="content" id="content" rows="8" required></textarea>

        <div v-if="errors.has('content')" class="text-red text-xs italic mt-2">{{ errors.first('content') }}</div>

        <em>Les commentaires sont formatés en <a href="https://daringfireball.net/projects/markdown/syntax/">markdown</a>.</em>
      </div>

      <div v-if="!isPosted" class="flex justify-end">
        <button :class="{ 'opacity-50 cursor-not-allowed': isDisabled }" class="bg-white border border-indigo hover:bg-indigo hover:text-white cursor-pointer text-indigo shadow py-2 px-4 rounded w-full sm:w-auto" type="submit">
          <i v-if="isLoading" class="fa fa-spinner fa-spin fa-fw"></i>
          Laisser un commentaire
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Form from '../utils/Form'

export default {
  props: ['post_id'],

  data () {
    return {
      isLoading: false,
      isPosted: false,
      error: '',
      form: new Form({
        post_id: this.post_id,
        name: '',
        email: '',
        website: '',
        content: ''
      })
    }
  },

  computed: {
    isDisabled () {
      return this.isLoading || this.errors.any() || this.form.name === '' || this.form.email === '' || this.form.content === ''
    }
  },

  methods: {
    submit () {
      if (this.isDisabled) {
        return false
      }

      this.isLoading = true

      this.form.post('/')
        .then(response => {
          this.isLoading = false
          this.isPosted = true

          this.form.reset()
          this.$validator.reset()
        })
        .catch((error) => {
          this.isLoading = false
          this.error = error

          this.form.reset()
          this.$validator.reset()
        })
    }
  }
}
</script>
