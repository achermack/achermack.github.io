<template>
  <v-footer app padless absolute>
    <v-col class="py-4 text-center white--text" cols="12">
      <strong>Austin Chermack </strong> — {{ new Date().getFullYear() }}
      <v-icon size="15px">
        mdi-copyright
      </v-icon>
    </v-col>
    <v-container class="d-flex justify-center" id="contact">
      <v-col cols="4">
        <ContactLinkHover :contact-links="contactLinks" />
        <ContactExpansionPanels :contact-links="contactLinks" />
      </v-col>
    </v-container>
  </v-footer>
</template>
<script lang="ts">
export default {
  data() {
    return {
      contactLinks: []
    };
  },
  async fetch() {
    const content = await this.$content("index").fetch();
    this.contactLinks = content.contactLinks;
  }
};
</script>
