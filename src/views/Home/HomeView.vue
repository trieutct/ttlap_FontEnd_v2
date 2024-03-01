<template>
    <v-app>
        <v-app-bar height="75" elevation="1" class="d-flex">
            <div class="d-flex align-center" style="width: 30%;">
                <img class="ml-3 mr-2" width="" height="40px" :src="W_png" alt="">
                <p style="margin-left: 12px;">Sell on Shopka</p>
                <p style="margin-left: 17px;">Register</p>
            </div>
            <div style="width: 30%;margin-left: 80px;">
                <v-text-field clearable density="compact" variant="solo-filled" label="Tìm kiếm"
                        style="background-color: #F0F0F0;border-radius: 20px !important;"
                        prepend-inner-icon="mdi-magnify" append-inner-icon="mdi mdi-close" single-line flat
                        hide-details rounded></v-text-field>
            </div>
            <div style="width: 33%;" class="d-flex align-center justify-space-between">
                <p style="margin-left: 80px;;color: #2264D1;font-size: 14px;">Consumer Electronics</p>
                <v-btn class="text-capitalize ml-6" variant="outlined" style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700;">Sign <span class="text-lowercase ml-1">in</span></v-btn>
                <v-badge content="2" color="red">
                    <v-btn class="text-capitalize ml-2" elevation="1" style="color: #2264D1;font-weight: 700;">My <span class="text-lowercase ml-1">cart</span></v-btn>
                </v-badge>
                <v-avatar class="ml-4">
                    <v-img
                        alt="John"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                    ></v-img>
                </v-avatar>
            </div>
        </v-app-bar>
    </v-app>
</template>
<script setup>
import W_png from "@/assets/W.png"
</script>