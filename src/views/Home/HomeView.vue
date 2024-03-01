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
                    style="background-color: #F0F0F0;border-radius: 20px !important;" prepend-inner-icon="mdi-magnify"
                    append-inner-icon="mdi mdi-close" single-line flat hide-details rounded></v-text-field>
            </div>
            <div style="width: 33%;" class="d-flex align-center justify-space-between">
                <p style="margin-left: 80px;;color: #2264D1;font-size: 14px;">Consumer Electronics</p>
                <v-btn class="text-capitalize ml-6" variant="outlined"
                    style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700;">Sign <span
                        class="text-lowercase ml-1">in</span></v-btn>
                <v-badge content="2" color="red">
                    <v-btn class="text-capitalize ml-2" elevation="1" style="color: #2264D1;font-weight: 700;">My <span
                            class="text-lowercase ml-1">cart</span></v-btn>
                </v-badge>
                <v-avatar class="ml-4">
                    <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                </v-avatar>
            </div>
        </v-app-bar>
        <div class="d-flex mx-auto justify-center justify-space-between" style="margin-top: 90px;height: 64px;width: 99%;">
            <div class="d-flex flex-column align-center px-2 py-1" style="border-radius: 5px;background-color: #EBF2FF;">
                <v-img width="20px" height="20px" :src="hanger_png"></v-img>
                <p style="color: #2979FF;font-size: 14px;">Clothing & Shoes</p>
            </div>
            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="cinema_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Entertainment</p>
            </div>
            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="concert_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Music</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="fitness_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Sport & Lifestyle</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="pets_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Pets</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="restaraunt_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Kitchen Accessories</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="observation_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Travel Equipment</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="barley_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Growing & Garden</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="powerstation_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Electrical Tools</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="babysitter_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Mother Care</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="nuclear_station_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Toys & Entertainment</p>
            </div>

            <div class="d-flex flex-column align-center px-2 py-1">
                <v-img width="20px" height="20px" :src="ship_wheel_png"></v-img>
                <p style="color: #787885;font-size: 14px;">Vintage</p>
            </div>
        </div>

        <div class="d-flex justify-center" style="width: 100%;">
            <div style="width: 25%;">
                <!-- <SlideBar/> -->
                <div class="mt-5 mx-auto" style="width: 90%;">
                    <v-btn class="d-flex justify-space-between" prepend-inner-icon="mdi-magnify"
                        style="border-color: #9DC2FF;width: 304px !important;" height="56px" variant="outlined">
                        <v-icon color="#2264D1" icon="mdi-menu" start />
                        <p style="margin-left: 40px;color: #2264D1;font-size: 20px;font-weight: 700;">Departments</p>
                    </v-btn>
                    <div class="d-flex align-center" style="display: block;margin-top: 40px;">
                        <div class="ml-2 mr-3">
                            <v-icon color="#76A9FF">mdi-chevron-right</v-icon>
                        </div>
                        <div>
                            <p style="color: #19191D;font-size: 16px;">All Categories</p>
                            <p style="color: #787885;font-size: 14px;">Ecommerce patterns</p>
                        </div>
                    </div>
                    <div style="display: block;">
                        <v-list>
                            <v-list-group value="Electronics">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" prepend-icon="mdi-chevron-right"
                                        title="Electronics"></v-list-item>
                                </template>

                                <v-list-group value="Admin">
                                    <template v-slot:activator="{ props }">
                                        <v-list-item v-bind="props" title="Admin"></v-list-item>
                                    </template>

                                    <v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon"
                                        :title="title" :value="title"></v-list-item>
                                </v-list-group>

                                <v-list-group value="Actions">
                                    <template v-slot:activator="{ props }">
                                        <v-list-item v-bind="props" title="Actions"></v-list-item>
                                    </template>

                                    <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon"
                                        :title="title" :value="title"></v-list-item>
                                </v-list-group>
                            </v-list-group>
                        </v-list>
                    </div>
                </div>
            </div>
            <div style="width: 75%;">
                <ProductView />
            </div>
        </div>
    </v-app>
</template>
<script setup>
import W_png from "@/assets/W.png"
import hanger_png from "@/assets/hanger.png"
import cinema_png from "@/assets/cinema.png"
import concert_png from "@/assets/concert.png"
import fitness_png from "@/assets/fitness.png"
import pets_png from "@/assets/pets.png"
import restaraunt_png from "@/assets/restaraunt.png"
import observation_png from "@/assets/observation.png"
import barley_png from "@/assets/barley.png"
import powerstation_png from "@/assets/powerstation.png"
import babysitter_png from "@/assets/babysitter.png"
import nuclear_station_png from "@/assets/nuclear-station.png"
import ship_wheel_png from "@/assets/ship-wheel.png"


import ProductView from "@/views/Home/ProductView.vue"
import SlideBar from "@/views/Home/SildeBar.vue"


import { reactive, ref } from 'vue'
const admins = reactive([
    ['Management', 'mdi-account-multiple-outline'],
    ['Settings', 'mdi-cog-outline'],
],)
const crud = reactive([
    ['Create', 'mdi-plus-outline'],
    ['Read', 'mdi-file-outline'],
    ['Update', 'mdi-update'],
    ['Delete', 'mdi-delete'],
],)
</script>