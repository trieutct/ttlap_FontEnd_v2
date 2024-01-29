<template>
    <v-dialog max-width="500px">
        <v-form @submit.prevent="login">
            <v-card>
                <v-card-title style="font-weight: bold;">
                    <h4>Tạo mới</h4>
                </v-card-title>
                <v-container style="background-color: rgb(247, 247, 247);">
                    <v-row>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Tên sản phẩm </span> <span class="text-blue ml-2">*</span>
                            <v-text-field v-model="name" placeholder="Nhập tên sản phẩm" :error-messages="nameError"
                                style="background-color: white;" density="compact" single-line hide-details
                                variant="outlined"></v-text-field>
                            <span style="color:red">{{ nameError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Giá</span><span class="text-blue ml-2">*</span>
                            <v-text-field v-model="price" placeholder="Nhập giá sản phẩm" :error-messages="priceError"
                                required style="background-color: white;" density="compact" single-line hide-details
                                variant="outlined"></v-text-field>
                            <span style="color:red">{{ priceError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Số lượng</span><span class="text-blue ml-2">*</span>
                            <v-text-field v-model="quantity" placeholder="Nhập số lượng sản phẩm"
                                :error-messages="quantityError" required style="background-color: white;" density="compact"
                                single-line hide-details variant="outlined"></v-text-field>
                            <span style="color:red">{{ quantityError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Mô tả</span><span class="text-blue ml-2">*</span>
                            <v-textarea v-model="description" placeholder="Nhập mô tả" :error-messages="descriptionError"
                                required style="background-color: white;" density="compact" single-line hide-details
                                variant="outlined"></v-textarea>
                            <span style="color:red">{{ descriptionError }}</span>
                        </v-col>
                        <v-col cols="12" style="font-size: 13px;">
                            <span>Ảnh sản phẩm</span><span class="text-blue ml-2">*</span>
                            <v-text-field placeholder="Nhập link ảnh" style="background-color: white;" density="compact"
                                single-line hide-details variant="outlined"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions class="pr-4">
                    <v-spacer></v-spacer>
                    <v-btn @click="close" class="text-capitalize" text="Hủy"></v-btn>
                    <v-btn type="submit" color="primary" class="text-capitalize" variant="elevated">Tạo<span
                            class="text-lowercase">mới</span></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';


const { handleSubmit,resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField(
    'name',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(/^[a-zA-Z0-9\s]+$/, 'Tên sản phẩm chỉ được chứa ký tự chữ cái, số và khoảng trắng')
);


const { value: price, errorMessage: priceError } = useField(
    'price',
    yup
        .number()
        .required('Không được bỏ trống')
        .min(0, 'Giá không được nhỏ hơn 0')
        .typeError('Giá phải là một số')
);

const { value: quantity, errorMessage: quantityError } = useField(
    'quantity',
    yup
        .number()
        .required('Không được bỏ trống')
        .integer('Số lượng phải là một số nguyên')
        .min(0, 'Số lượng không được nhỏ hơn 0')
        .typeError('Số lượng phải là một số')
);
const { value: description, errorMessage: descriptionError } = useField(
    'description',
    yup
        .string()
        .required('Không được bỏ trống')
        .min(10, 'Mô tả phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả không được quá 500 ký tự')
);
const login = handleSubmit(async () => {
    alert(name.value + "   " + price.value)
});
const close=()=>{
    resetForm()
}
</script>
<style></style>