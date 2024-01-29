<template>
    <v-dialog max-width="500px">
        <v-card>
            <v-card-title style="font-weight: bold;">
                <h4>Tạo mới</h4>
            </v-card-title>
            <v-container style="background-color: rgb(247, 247, 247);">
                <v-row>
                    <v-col cols="12" style="font-size: 13px;">
                        <span>Tên người dùng</span> <span class="text-blue ml-2">*</span>
                        <v-text-field placeholder="Nhập tên người dùng" style="background-color: white;" density="compact" single-line hide-details
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <span>Email</span><span class="text-blue ml-2">*</span>
                        <v-text-field placeholder="Nhập email người dùng" style="background-color: white;" density="compact" single-line hide-details
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <span>Ngày sinh</span><span class="text-blue ml-2">*</span>
                        <v-text-field type="date" placeholder="YYYY/MM/DD" style="background-color: white;" density="compact" single-line hide-details
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <span>Số điện thoại</span><span class="text-blue ml-2">*</span>
                        <v-text-field placeholder="Nhập số điện thoại người dùng" style="background-color: white;" density="compact" single-line hide-details
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <span>Avatar</span><span class="text-blue ml-2">*</span>
                        <v-text-field placeholder="Nhập link ảnh avatar" style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <v-card-actions class="pr-4">
                <v-spacer></v-spacer>
            <v-btn class="text-capitalize" text="Hủy"></v-btn>
            <v-btn color="primary" class="text-capitalize" variant="elevated">Tạo<span class="text-lowercase">mới</span></v-btn>
        </v-card-actions>
    </v-card>
</v-dialog></template>