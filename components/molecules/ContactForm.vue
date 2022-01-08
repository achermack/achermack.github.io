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
      <v-btn class="transparent" :disabled="sending" @click="sendEmail">
        <v-icon class="mr-2">
          mdi-send
        </v-icon>
        Send
      </v-btn>
      <v-progress-linear v-if="sending" class="mt-2" indeterminate />
    </v-col>
  </v-form>
</template>
<script lang="ts">
import { send } from "emailjs-com";

export default {
  data() {
    return {
      valid: true,
      name: "",
      text: "",
      from: "",
      sending: false
    };
  },
  methods: {
    sendEmail() {
      this.sending = true;
      if (process.env.NODE_ENV === "development") {
        // wait for 5 seconds
        this.$toast.show("Sending email");
        setTimeout(() => {
          this.sending = false;
          this.$toast.show("sent");
        }, 1000);
        return;
      }
      this.$toast.show("Sending message...");
      const templateParams = {
        from_name: this.from,
        to_name: "Austin",
        reply_to: this.from,
        message: this.text
      };
      send(
        "service_eoj55fj",
        "template_3lyd0go",
        templateParams,
        "user_cbWeUwNRWaV6vY4lbF7g9"
      ).then(
        () => {
          this.$toast.show("Message sent!");
          this.sending = false;
          this.name = this.text = this.from = "";
        },
        () => {
          this.$toast.show("Error sending message!");
          this.sending = false;
        }
      );
    }
  }
};
</script>
