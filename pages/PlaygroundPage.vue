<template>
  <v-content>
    <v-container fill-height fluid class="container">
      <v-btn
        @mouseover="enabled = true"
        @mouseleave="enabled = false"
        @click="enabled = !enabled"
      >
        enable
      </v-btn>
      <kinesis-container v-if="enabled" fill-height class="container">
        <kinesis-element
          type="translate"
          axis="x"
          :strength="10"
          origin-x="500"
          max-x="100"
        >
          <v-btn> btn 1</v-btn>
        </kinesis-element>
        <kinesis-element
          type="translate"
          axis="x"
          :strength="10"
          origin-x="-500"
          max-x="100"
        >
          <v-btn> btn 1</v-btn>
        </kinesis-element>
      </kinesis-container>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data () {
    return {
      enabled: false
    }
  }
}
</script>

<style scoped></style>
