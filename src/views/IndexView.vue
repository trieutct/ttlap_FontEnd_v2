<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :rail="rail" class="navigation_drawer" permanent>
            <v-toolbar style="background-color: white;">
                <v-row>
                    <v-col cols="8">
                        <!-- @mouseover="rail = false" -->
                        <v-toolbar-title @click.stop="rail = !rail" class="ma-3">
                            <v-img width="250"
                                src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1705460127/logo1_adshdl.png"></v-img>
                        </v-toolbar-title>
                    </v-col>
                    <v-col class="text-center" cols="4">
                        <img @click.stop="rail = !rail" style="margin-top: 18%;"
                            src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1708508357/indent_oymmcm.png" alt="">
                    </v-col>
                </v-row>
            </v-toolbar>
            <v-list density="compact" nav>
                <v-list-item v-show="this.rail == false" class="text-uppercase text-item"
                    style="color: #8B909A;font-size: 11px;">Quản lý sản phẩm</v-list-item>
                <v-list-item style="color: #8B909A;font-size: 15px;"
                    :class="{ 'font-weight-bold': title === 'Danh sách sản phẩm' }"
                    @click="setTilteStore('Danh sách sản phẩm')" prepend-icon="mdi-hexagon-slice-6" to='product'>
                    <p>Sản phẩm</p>
                </v-list-item>
                <v-list-item style="color: #8B909A; font-size: 15px;"
                    :class="{ 'font-weight-bold': title === 'Danh sách người dùng' }" prepend-icon="mdi-account-supervisor"
                    @click="setTilteStore('Danh sách người dùng')" to='user'>
                    <p>Users</p>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar class="px-4 v-app-bar" color="rgb(247, 247, 247)" :elevation="0" rounded="0">
            <h3 style="margin-left: 0.2%;font-size: 24px;  font-family: 'Public Sans', sans-serif;font-weight: 600;"
                class="reposive">
                <!-- <i @click="this.drawer = !this.drawer; this.rail = true" class="fa-solid icon-menu fa-bars mr-4" style="cursor: pointer;display: none;"></i> -->
                <v-icon size="20" @click="this.drawer = !this.drawer; this.rail = true" class="icon-menu"
                    style="cursor: pointer;display: none;">mdi mdi-menu</v-icon>
                {{ title }}
            </h3>
            <v-spacer></v-spacer>
            <v-btn>
                <v-badge content="5" color="red">
                    <v-icon style="font-size: 20px;">mdi-bell-outline</v-icon>
                </v-badge>
            </v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-badge dot color="green">
                        <v-avatar style="cursor: pointer;" v-bind="props">
                            <v-img :src="avatar" alt="John"></v-img>
                        </v-avatar>
                    </v-badge>
                </template>
                <v-list class="ma-2">
                    <v-list-item>
                        <v-list-item-title style="cursor: pointer;">Xem hồ sơ</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="this.$router.push({ name: 'login_page' })" style="cursor: pointer;">Đăng
                            xuất</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main style="background-color: rgb(247, 247, 247);min-height: 100vh;">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
import NavigrationDrawerVue from '@/components/NavigrationDrawer.vue'
import localStorageAuthService from '@/common/storages/authStorage'
import { commonStore } from '../store/common/index'
export default {
    components: { NavigrationDrawerVue },
    data() {
        return {
            drawer: true,
            rail: false,
            avatar: localStorageAuthService.getAvatarUrl(),
            title: commonStore().title
        }
    },
    methods:
    {
        setTilteStore(value) {
            commonStore().setTitle(value)
            this.title = commonStore().title
        }
    },
    created() {
        this.title = 'Danh sách sản phẩm'
    }
}
</script>

<style scoped>
.font-weight-bold {
    color: #23272E !important;
    font-weight: bold;
}

@media (max-width: 700px) {
    .reposive {
        color: #000000;
        font-size: 20px !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navigation_drawer {
        width: 55px !important;
    }

    .text-item {
        display: none;
    }

    .icon-menu {
        display: inline !important;
        margin-right: 10px;
    }
}

body {
    font-family: 'Public Sans', sans-serif;
    font-size: 15px;
}</style>