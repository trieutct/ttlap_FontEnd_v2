<template>
    <v-app>
        <div class="d-flex align-center justify-center"
            style="height: 38px;display: block;background-color: #000000;color: #FFFFFF;">
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="7">
                    <v-row class="d-flex align-center justify-space-between">
                        <p class="font-weight-thin">Sign up and get 20% off to your first order. <span
                                class="ml-1 text-decoration-underline">Sign Up Now</span></p>
                        <v-spacer></v-spacer>
                        <span>
                            <v-icon size="x-small">mdi-close</v-icon>
                        </span>
                    </v-row>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </div>
        <v-toolbar class="pa-3 v-app-bar" color="white" :elevation="0" rounded="0">
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
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center justify-center">
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
                        <p style="color: #000000;font-size:64px;font-weight:bold;line-height: 64px;">FIND CLOTHES THAT
                            MATCHES YOUR STYLE</p>
                        <p class="text-left" style="color: #000000;opacity: 0.6;margin-top: 32px">Browse through our diverse
                            range of meticulously crafted garments, designed to bring out your individuality and cater to
                            your sense of style.</p>
                        <v-btn class="text-capitalize"
                            style="color: white;background-color: #000000; width: 210px;height: 52px;font-size: 16px;margin-top: 32px;"
                            rounded>Shop Now</v-btn>
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
                            <v-img style="top: -372%;left: 85%;" height="56px" width="56px" :src="vector"></v-img>
                            <v-img style="top: -630%;left: 126%;" height="104px" width="104px" :src="vector"></v-img>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-img>
        <div class="d-flex align-center justify-center" style="height: 122px;background-color: #000000;clear: both;">
            <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                    <v-row class="d-flex align-center justify-space-between">
                        <div>
                            <v-img width="166.48px" height="33.16px" :src="vector1"></v-img>
                        </div>
                        <div>
                            <v-img width="166.48px" height="33.16px" :src="vector2"></v-img>
                        </div>
                        <div>
                            <v-img width="166.48px" height="33.16px" :src="vector3"></v-img>
                        </div>
                        <div>
                            <v-img width="166.48px" height="33.16px" :src="gucci"></v-img>
                        </div>
                        <div>
                            <v-img width="166.48px" height="33.16px" :src="prada"></v-img>
                        </div>
                    </v-row>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </div>
        <div>
            <v-row style="margin-top: 82px;">
                <v-col cols="1"></v-col>
                <v-col cols="10">
                    
                    <h1 style="font-size: 48px;font-weight: 700;display: block;text-align: center;">NEW ARRIVALS</h1>
                    <v-row style="margin-top: 55px;" class="d-flex align-center justify-space-between" >
                       <div class="ma-1" v-for="i in 4" :key="i">
                        <img width="250" height="250" src="https://tse2.explicit.bing.net/th?id=OIP.2PRv-ZGIdqXcHqspBRx7HwHaHa&pid=Api&P=0&h=220">
                        <p style="font-size: 18px;font-weight: 700;">T-SHIRT WITH TAPE DETAILS</p>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star-half</v-icon>
                        <span style="font-size: 14px;">4.5/<span style="opacity: 0.6;">5</span></span>
                        <p style="font-size: 20px;font-weight: 700;">$120</p>
                       </div>
                    </v-row>
                    <v-row class="d-flex justify-center " style="margin-top: 36px;">
                        <v-btn class="text-capitalize" variant="text" border rounded style="width: 218px;">View All</v-btn>
                    </v-row>
                    <v-row style="margin-top: 64px;margin-bottom: 10px;">
                        <v-divider class="border-opacity-100"></v-divider>
                    </v-row>
                    






                    <h1 style="font-size: 48px;font-weight: 700;display: block;text-align: center;">TOP SELLING</h1>
                    <v-row style="margin-top: 55px;" class="d-flex align-center justify-space-between" >
                       <div class="ma-1" v-for="i in 4" :key="i">
                        <img width="250" height="250" src="https://tse2.explicit.bing.net/th?id=OIP.2PRv-ZGIdqXcHqspBRx7HwHaHa&pid=Api&P=0&h=220">
                        <p style="font-size: 18px;font-weight: 700;">T-SHIRT WITH TAPE DETAILS</p>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
                        <v-icon color="amber" size="x-small">mdi mdi-star-half</v-icon>
                        <span style="font-size: 14px;">4.5/<span style="opacity: 0.6;">5</span></span>
                        <p style="font-size: 20px;font-weight: 700;">$120</p>
                       </div>
                    </v-row>
                    <v-row class="d-flex justify-center " style="margin-top: 36px;">
                        <v-btn class="text-capitalize" variant="text" border rounded style="width: 218px;">View All</v-btn>
                    </v-row>
                    <v-row style="margin-top: 64px;margin-bottom: 10px;">
                        <v-divider class="border-opacity-100"></v-divider>
                    </v-row>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </div>
    </v-app>
    </template>
<script setup>
import image from "@/assets/slideer.png"
import vector1 from "@/assets/Vector1.png"
import vector from "@/assets/Vector.png"
import vector2 from "@/assets/Vector2.png"
import vector3 from "@/assets/Vector3.png"
import gucci from "@/assets/gucci-logo-1.png"
import prada from "@/assets/prada-logo-1.png"
</script>


<style scoped>
body{
    font-family: 'Satoshi',sans-serif;
}
</style>
