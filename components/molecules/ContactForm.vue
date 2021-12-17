<template>
  <v-form ref="form" v-model="valid">
    <v-col cols="6">
      <v-text-field
        v-model="from"
        prepend-inner-icon="mdi-at"
        type="email"
        label="Your Email"
        outlined
      />
      <v-text-field
        v-model="name"
        prepend-inner-icon="mdi-form-textbox"
        type="text"
        outlined
        label="Your Name"
      />
    </v-col>
    <v-col cols="12">
      <v-textarea
        v-model="text"
        prepend-inner-icon="mdi-message-bulleted"
        type="text"
        outlined
        label="Message"
      />
      <v-btn @click="sendEmail">
        Send
      </v-btn>
    </v-col>
  </v-form>
</template>
<script lang="ts">
import { send } from 'emailjs-com'

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
      send(
        'service_eoj55fj',
        'template_3lyd0go',
        templateParams,
        'user_cbWeUwNRWaV6vY4lbF7g9'
      ).then(
        () => {
          this.$toast.show('Message sent!')
          this.name = this.text = this.from = ''
        },
        () => {
          this.$toast.show('Error sending message!')
        }
      )
    }
  }
}
</script>
