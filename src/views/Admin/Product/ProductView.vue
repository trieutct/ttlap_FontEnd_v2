
<script setup>
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';
import DialogViewVue from '@/components/Admin/Product/DialogView.vue';
import ConfirmVue from '@/components/confirm/IndexView.vue'
const isShowDialog = ref(false);
const isDialogDelete=ref(false)
const seletedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION)
let idEdit = ref(null)
let idDelete = ref(null)
const search=ref('')
import { formatNumberWithCommas, showErrorNotification, showSuccessNotification } from '../../../common/helper/helpers'
import { useProduct } from '../Product/product'
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/contant/contants';
import { productServiceApi } from '@/service/product.api';
const { fetchProducts, products, query, getAll,searchProducts } = useProduct()
onMounted(async () => {
  loadData()
})

const loadData = async () => {
  products.value = await fetchProducts();
}

const searchData = async () => {
  products.value = await searchProducts();
}
const addProduct = () => {
  isShowDialog.value = true
  idEdit = null
}
const updateProductById = id => {
  isShowDialog.value = true
  idEdit = id
}
const deleteProductById = async (id) => {
  const data = await productServiceApi._delete(id)
  // console.log(data)
  if (data.success) {
    loadData()
    isDialogDelete.value=false
    showSuccessNotification("Xóa thành công")
  }
  else {
    isDialogDelete.value=false
    showErrorNotification(data.message)
  }
}
const close = () => {
  isShowDialog.value = false
  isDialogDelete.value=false
}

watch(seletedValue,(newval)=>{
  // alert(newval)
  query.limit=newval
  loadData()
})
watch(search,(newval)=>{
  query.keyword=newval
  searchData()
})
</script>
<template>
  <div style="margin: 1.5%;">
    <v-row>
      <v-col cols="3">
        <v-text-field v-model="search" style="background-color: white;" density="compact" variant="outlined" label="Tìm kiếm"
          append-inner-icon="mdi mdi-magnify" single-line hide-details class="mr-2"></v-text-field>
      </v-col>
      <v-col cols="9" class="text-right">
        <v-btn @click="addProduct()" color="primary" prepend-icon="mdi mdi-plus" class="text-uppercase">Thêm</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left text-uppercase text-medium-emphasis">
                  Tên sản phẩm
                </th>
                <th class="text-left text-uppercase text-medium-emphasis">
                  Giá
                </th>
                <th class="text-left text-uppercase text-medium-emphasis">
                  Số lượng
                </th>
                <th class="text-left text-uppercase text-medium-emphasis">
                  Mô tả
                </th>
                <th class="text-left text-uppercase text-medium-emphasis">
                  Ảnh
                </th>
                <th class="text-center text-uppercase text-medium-emphasis">
                  Acction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ formatNumberWithCommas(item.price) }}</td>
                <td>{{ item.quantity }}</td>
                <td style="width: 250px;" class="v-text-truncate">
                  {{ item.description }}
                </td>
                <td>
                  <v-img width="36" height="36" :src="item.imageUrl"></v-img>
                </td>
                <td class="text-center">
                  <v-btn icon="mdi-pencil" @click="updateProductById(item.id)" density="compact" variant="text"></v-btn>
                  <v-btn icon="mdi-delete" @click="{isDialogDelete=true;idDelete=item.id}" density="compact" variant="text"></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row class="ma-2">
            <v-col cols="8">
              <v-row>
                <p class="mt-5 opacity">Showing</p>
                <v-col cols="2">
                  <v-select v-model="seletedValue" density="compact" :items="['10', '20', '25', '30', 'All']"
                    variant="outlined"></v-select>
                </v-col>
                <p class="mt-5 opacity">of 50</p>
              </v-row>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-pagination active-color="#0F60FF" variant="text" density="compact" :length="6"></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <DialogViewVue v-model="isShowDialog" :idEdit="idEdit" @close="close()" @loadData="loadData()" />
  <ConfirmVue v-model="isDialogDelete" :idDelete="idDelete" @delete="deleteProductById"/>
</template>
<style scoped>
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.opacity {
  opacity: 0.6;
}
</style>