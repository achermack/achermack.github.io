<template>
  <v-list-item :href="contact.link">
    <v-list-item-icon class="pa-0 mr-2">
      <v-btn icon target="_blank">
        <v-icon>{{ contact.icon }}</v-icon>
      </v-btn>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ contact.value }}</v-list-item-title>
      <v-list-item-subtitle>{{ contact.name }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script src="./Contact.ts" lang="ts" /> 
