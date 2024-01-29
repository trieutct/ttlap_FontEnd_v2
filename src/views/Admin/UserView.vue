<template>
  <div style="margin: 1.5%;">
    <v-row>
    <v-col cols="3">
      <v-text-field style="background-color: white;" density="compact" variant="outlined" label="Tìm kiếm"
        append-inner-icon="mdi mdi-magnify" single-line hide-details class="mr-2"></v-text-field>
    </v-col>
    <v-col cols="9" class="text-right">
      <v-btn @click="showDialog = true" color="primary" prepend-icon="mdi mdi-plus" class="text-uppercase">Thêm</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left text-uppercase text-medium-emphasis">
                Avatar
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
                Acction
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>
                <v-img class="ma-1" style="border-radius: 2px;"  width="36" height="36"
                  src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/405270929_3734295376897775_6745873818454262834_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Fx16hJQ0c-YAX8npNMO&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDA9BplOnOtkPOHh8ZsOK6TD3weclF8709krzGu7QAf4Q&oe=65B6015F"></v-img>
              </td>
              <td>Trịnh Công Triệu</td>
              <td>trieu@gmail.com</td>
              <td class="v-text-truncate">
                29/07/2002
              </td>
              <td>
                0941590356
              </td>
              <td class="text-center">
                <v-btn variant="text"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn variant="text"><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
        <v-row class="ma-2">
          <v-col cols="8">
            <v-row>
              <p class="mt-5 opacity">Showing</p>
              <v-col cols="2">
                <v-select v-model="seletedValue" density="compact" :items="['10', '20', '25', '30', 'All']" variant="outlined"></v-select>
              </v-col>
              <p class="mt-5 opacity">of 50</p>
            </v-row>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-pagination active-color="#0F60FF" variant="elevated" density="compact" :length="6"></v-pagination>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  </div>
  <DialogViewVue v-model="showDialog" />
</template>
<script setup>
import { ref } from 'vue';
import DialogViewVue from '@/components/Admin/User/DialogView.vue';
const showDialog = ref(false);
const seletedValue=ref(10)

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
</style>