<template>
  <div style="margin: 1.5%;">
    <v-row>
    <v-col cols="5" sm="4" md="4" lg="3">
      <!-- @blur="searchEnter()" -->
      <v-text-field  @keyup.enter="searchEnter()" v-model="search" style="background-color: white;" density="compact" variant="solo" label="Tìm kiếm"
        append-inner-icon="mdi mdi-magnify" single-line hide-details class="mr-2"></v-text-field>
    </v-col>
    <v-col cols="7" class="text-right" lg="9" sm="8" md="8" >
      <v-btn @click="addUser()"  color="primary" prepend-icon="mdi mdi-plus" class="text-capitalize">
          Tạo<span class="text-lowercase">mới</span>
        </v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-table density="compact">
          <thead>
            <tr style="height: 47px">
              <th style="width: 5px !important;padding-right: 0px;" class="text-left text-uppercase text-medium-emphasis">
                <span>Avatar</span>
              </th>
              <th class="text-left text-uppercase text-medium-emphasis">
                Tên người dùng
              </th>
              <th class="text-left text-uppercase text-medium-emphasis">
                Email
              </th>
              <th class="text-left text-uppercase text-medium-emphasis">
                Ngày sinh
              </th>
              <th class="text-left text-uppercase text-medium-emphasis">
                Số điện thoại
              </th>
              <th class="text-center text-uppercase text-medium-emphasis">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in users" :key="i" style="height: 58px;">
              <td>
                <v-img style="border-radius: 2px;"  width="36" height="36"
                  :src="i.avatar"></v-img>
              </td>
              <td><b>{{ i.name }}</b></td>
              <td>{{ i.email }}</td>
              <td class="v-text-truncate">
                {{ formatDateString(i.birthday,YYYY_MM_DD_DASH) }}
              </td>
              <td>
                {{ formatPhoneNumber(i.phone) }}
              </td>
              <td class="text-center">
                <span style="cursor: pointer;opacity: 0.7;" density="compact" variant="text"><i @click="updateUserById(i.id)" class="fa-regular fa-pen-to-square mr-4"></i></span>
                <span style="cursor: pointer;opacity: 0.7;" density="compact" variant="text"><i @click="{isDialogDelete=true;idDelete=i.id}" class="fa-solid fa-trash"></i></span>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </v-table>
        <v-row class="ma-2">
          <v-col cols="8" sm="8" md="8" lg="8">
            <v-row>
              <p class="mt-5 opacity">Showing</p>
              <v-col style="max-width: 105px" cols="5" sm="4" md="5" lg="2">
                <v-select v-model="seletedValue" density="compact" :items="['10', '20', '25', '30', '50']" variant="outlined"></v-select>
              </v-col>
              <p class="mt-5 opacity">of {{ TotalUsers }}</p>
            </v-row>
          </v-col>
          <v-col cols="4" sm="4" md="4" lg="4">
            <p class="text-center page-table1" style="font-size: 15px;display: none">
                <span @click="page=page-1" :class="{ 'text-grey-lighten-2': page === 1, 'text-black': page !== 1 }"><i class="fa-solid fa-angle-left" style="cursor: pointer;"></i></span>
                <span style="background-color: rgb(109, 148, 227);color: blue;opacity: 0.6;;border-radius: 2px;padding: 5px;" class="ml-2 mr-2">{{ page }}</span>
                <span @click="page=page+1" :class="{ 'text-grey-lighten-2': page === lengthPage, 'text-black': page !== lengthPage }"><i class="fa-solid fa-chevron-right" style="cursor: pointer;"></i></span>
              </p>
              <v-pagination class="page-table2" v-model="page" active-color="#0F60FF" variant="text" density="compact"
                :length="lengthPage"></v-pagination>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  </div>
  <DialogViewVue v-model="isShowDialog" :idEdit="idEdit" @close="close()" @loadData="loadData()" />
  <ConfirmVue v-model="isDialogDelete" @close="close()" :idDelete="idDelete" @delete="deleteUserById"/>
</template>
<script setup>
import {DATE_TIME_FORMAT} from '../../../common/contant/contants'
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/contant/contants';
import {checkSearchEnter, formatDateString,formatPhoneNumber, showWarningsNotification} from '../../../common/helper/helpers'
import { onMounted, ref, watch } from 'vue';
import DialogViewVue from '@/components/Admin/User/DialogView.vue';
import {useUser} from '../User/user'
import ConfirmVue from '@/components/confirm/IndexView.vue'
import { userServiceApi } from '@/service/user.api';
import { showErrorNotification, showSuccessNotification } from '@/common/helper/helpers';


const YYYY_MM_DD_DASH=DATE_TIME_FORMAT.YYYY_MM_DD_DASH
const isShowDialog = ref(false);
const isDialogDelete=ref(false)
const seletedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION)
const { fetchUsers, users, query,searchUsers} = useUser()
const search=ref('')
let idEdit = ref(null)
let idDelete = ref(null)
let lengthPage=ref(1)
let page=ref(1)
const TotalUsers=ref(null)
onMounted(async () => {
  query.keyword=''
  loadData()
})
const loadData = async () => {
  const res=await fetchUsers()
  users.value = res.data;
  lengthPage.value=Math.ceil(res.totalItems / seletedValue.value);
  if(res.data)
  {
    users.value = res.data;
    lengthPage.value = Math.ceil(res.totalItems / seletedValue.value);
    TotalUsers.value=res.totalItems
    return
  }
  users.value=[]
}
const addUser = () => {
  isShowDialog.value = true
  idEdit = null
}

const searchEnter=()=>{
  // alert(1)
  if(!checkSearchEnter(search.value))
  {
    query.keyword = search.value
    query.page = 1
    searchData()
  }
  else
  {
    showWarningsNotification("Không nhập ký tự đặc biệt")
  }
}
const updateUserById = id => {
  isShowDialog.value = true
  idEdit = id
}
const searchData = async () => {
  const res = await searchUsers()
  if(res.data)
  {
    users.value = res.data;
    lengthPage.value = Math.ceil(res.totalItems / seletedValue.value);
    TotalUsers.value=res.totalItems
    return
  }
  users.value=[]
}

const deleteUserById = async (id) => {
  const data = await userServiceApi._delete(id)
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
  query.limit=newval
  query.page=1
  page.value=1
  loadData()
})
watch(search,(newval)=>{
  if(newval!=="")
      return
  query.keyword=newval
  query.page=1
  searchData()
})

watch(page,(newVal)=>{
  query.page=newVal
  loadData()
})

watch(isShowDialog,(newVal)=>{
  if(newVal==false)
    idEdit=null
})
</script>
  
<style scoped>
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.opacity {
  opacity: 0.6;
}
.v-table{
  font-size: 15px;
}
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.opacity {
  opacity: 0.6;
}

@media (max-width: 500px) {
  .opacity {
    display: none;
  }

  .v-btn__content {
    font-size: 10px;
  }
  .text-medium-emphasis{
    font-size: 12px;
  }
  .page-table1{
    display: inline !important;
  }
  .page-table2{
    display: none !important;
  }
}
</style>