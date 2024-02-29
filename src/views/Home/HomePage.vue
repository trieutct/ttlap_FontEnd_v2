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
        <v-app-bar class="mt-10 px-4 v-app-bar" color="white" :elevation="0" rounded="0">
            <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                    <v-row>
                        <h3 style="font-size: 32px;  font-family: Integral CF, sans-serif;font-weight: 700;color: #000000;">
                            SHOP.CO
                        </h3>
                        <!-- <v-spacer></v-spacer>
                        <v-btn>
                            <v-badge content="5" color="red">
                                <v-icon style="font-size: 20px;">mdi-bell-outline</v-icon>
                            </v-badge>
                        </v-btn> -->
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
        </v-app-bar>
    </v-app>
</template>
