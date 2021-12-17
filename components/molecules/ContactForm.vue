<template>
  <v-form ref="form" v-model="valid">
    <v-text-field v-model="from" type="email" label="Your Email" outlined />
    <v-text-field v-model="name" type="text" outlined label="Name" />
    <v-textarea v-model="text" type="text" outlined label="Message" />
    <v-btn @click="sendEmail">
      Send
    </v-btn>
  </v-form>
</template>
<script lang="ts">
import emailjs from 'emailjs-com'

export default {
  data () {
    return {
      valid: true,
      name: '',
      text: '',
      from: ''
    }
  },
  methods: {
    sendEmail () {
      this.$toast.show('Sending message...')
      const templateParams = {
        from_name: this.from,
        to_name: 'Austin',
        reply_to: this.from,
        message: this.text
      }
      emailjs
        .send(
          'service_eoj55fj',
          'template_3lyd0go',
          templateParams,
          'user_cbWeUwNRWaV6vY4lbF7g9'
        )
        .then(
          (result) => {
            console.log(result)
            this.$toast.show('Message sent!')
            this.name = this.text = this.from = ''
          },
          (error) => {
            console.log(error)
            this.$toast.show('Error sending message!')
          }
        )
    }
  }
}
</script>
