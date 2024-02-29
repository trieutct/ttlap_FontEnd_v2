<template>
    <v-app>
        <v-app-bar height="75" elevation="1" class="d-flex align-center">
            <img class="ml-5" width="" height="40px" :src="W_png" alt="">
            <p style="margin-left: 12px;">Sell on Shopka</p>
            <p style="margin-left: 17px;">Register</p>
            <v-text-field clearable density="compact" variant="solo-filled" label="Tìm kiếm"
                        style="max-width: 35%;margin-left: 91px; background-color: #F0F0F0;border-radius: 20px !important;"
                        prepend-inner-icon="mdi-magnify" append-inner-icon="mdi mdi-close" single-line flat
                        hide-details rounded></v-text-field>
            <p style="margin-left: 30px;">Consumer Electronics</p>
            <v-spacer></v-spacer>
            <v-btn>Sign in</v-btn>
            <v-btn>My cart</v-btn>
        </v-app-bar>
    </v-app>
</template>
<script setup>
import W_png from "@/assets/W.png"
</script>