<template>
    <v-app>
        <div class="d-flex align-center justify-center" style="height: 38px;display: block;background-color: #000000;color: #FFFFFF;">
            <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="7">
                <div class="d-flex align-center justify-space-between">
                <p class="font-weight-thin">Sign up and get 20% off to your first order. <span class="ml-1 text-decoration-underline">Sign Up Now</span></p>
                <span class="mr-3">
                    <v-icon  size="x-small">mdi-close</v-icon>
                </span>
            </div>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
        </div>
        <v-toolbar class="px-4 v-app-bar" color="white" :elevation="0" rounded="0">
            <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                    <v-row>
                        <h3 style="font-size: 32px;  font-family: Integral CF, sans-serif;font-weight: 700;color: #000000;">
                            SHOP.CO
                        </h3>
                        <div style="margin-left: 40px;" class="d-flex align-center justify-center">
                            <p class="ma-2">Shop</p>
                            <p class="ma-2">On Sale</p>
                            <p class="ma-2">New Arrivals</p>
                            <p class="ma-2">Brands</p>
                        </div>
                        <div class="d-flex align-center justify-center" style="width: 40%;margin-left: 40px;">
                            <v-text-field clearable density="compact" variant="solo-filled" label="Tìm kiếm"
                            style="max-width: 668px; background-color: #F0F0F0;border-radius: 20px !important;"
                            prepend-inner-icon="mdi-magnify" append-inner-icon="mdi mdi-close" single-line flat
                            hide-details rounded></v-text-field>
                        </div>
                        <div style="margin-left: 40px;" class="d-flex align-center justify-center">
                            <p>
                                <v-icon size="large">
                                mdi-cart-outline
                            </v-icon>
                            <v-icon class="ml-2" size="large">
                                mdi-account-circle-outline
                            </v-icon>
                            </p>
                        </div>
                    </v-row>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </v-toolbar>
        <v-img style="ma" :src="image" contain>
            <div class="fill-height absolute-fill" align="left" justify="center">
               <v-row style="margin-top: 5%;">
                <v-col cols="1"></v-col>
                 <v-col cols="5">
                    <p style="color: #000000;font-size:64px;font-weight:bold;line-height: 64px;">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    <p class="text-left" style="color: #000000;opacity: 0.6;margin-top: 32px">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <v-btn class="text-capitalize" style="color: white;background-color: #000000; width: 210px;height: 52px;font-size: 16px;margin-top: 32px;" rounded>Shop Now</v-btn>
                    <v-row style="margin-top: 48px;height: 74px;">
                        <div>
                            <b style="font-size: 40px;">200 +</b>
                            <p style="opacity: 0.6;font-size: 16px;">International Brands</p>
                        </div>
                        <v-divider vertical class="mx-5 border-opacity-100"></v-divider>
                        <div>
                            <b style="font-size: 40px;">2,000 +</b>
                            <p style="opacity: 0.6;font-size: 16px;">High-Quality Products</p>
                        </div>
                        <v-divider vertical class="mx-5 border-opacity-100"></v-divider>
                        <div>
                            <b style="font-size: 40px;">30,000 +</b>
                            <p style="opacity: 0.6;font-size: 16px;">Happy Customers</p>
                        </div>
                    </v-row>
                 </v-col>
               </v-row>
            </div>
        </v-img>
    </v-app>
</template>
<script setup>
import image from "@/assets/slideer.png"
</script>
