<template>
  <v-row class="ml-3 mt-3">
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="SelectedCategory" density="compact" label="Chọn sản phẩm"
        :items="['All','Quần','Áo']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="selectedSort" label="Giá" density="compact" :items="['Từ cao -> thấp','Từ thấp -> cao']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select density="compact" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
      <v-btn style="background-color: #bbccf6;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
        Show all
      </v-btn>
      <v-btn style="font-weight: bold;color: #2264D1;" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated">
        Action
      </v-btn>
      <v-btn style="background-color: #bbccf6;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
        Buy now
      </v-btn>
      <v-btn  style="background-color: #adc4fe" class="ml-5" ariant="tonal">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn class="mr-5"  variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mr-3 ml-3">
    <v-col cols="12">
      <v-chip variant="text">Related</v-chip>
      <v-chip class="mr-2 mt-2">
        worldwide shipping
      </v-chip>
      <v-chip class="mr-2 mt-2">
        under $50
      </v-chip>
      <v-chip class="mr-2 mt-2">
        kitten
      </v-chip>
      <v-chip class="mr-2 mt-2">
        plastic plugs
      </v-chip>
      <v-chip class="mr-2 mt-2">
        pucker shoes
      </v-chip>
      <v-chip class="mr-2 mt-2">
        vintage typewriter
      </v-chip>
    </v-col>
  </v-row>
  <v-card class="custom-shadow">
    <v-row class="mr-3 ml-3 mt-1">
      <v-col class="d-flex flex-column justify-center align-center" v-for="item in filteredProducts" :key="item" cols="12" sm="6" md="4" lg="3">
        <v-card hover variant="flat" style="min-height: 447px;" class="mb-3 my-card">
          <v-img class="mx-auto mt-2" width="227px" height="224px"
            :src="item.image"
            alt="Product Image"></v-img>
          <v-card-text class="my-card-text" style="font-size: 16px;line-height: 24px; height: 60px;"> {{ item.name }}</v-card-text>
          <v-card-text class="mt-2" style="font-size: 24px;font-weight: 700;padding: auto;height: 36px;">
            ${{ item.price }} 
            <span v-if="item.sale>0" style="margin-right: -1.5%;font-size: 12px;float: right;min-width: 70px;min-height: 24px;padding: 2px;background-color: #e2f3e8;text-align: center;color: #1cee65;font-weight: 300;">
              {{item.sale}}% OFF
            </span>
          </v-card-text>
          <p class="mt-2 ml-4" style="height: 41px;font-size: 14px;opacity: 0.6;">{{ item.description }}</p>
          <v-row style="margin-top: 5px;">
            <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" v-if="item.feedback==5" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" v-if="(item.feedback<5 && item.feedback>4)" size="x-small">mdi mdi-star-half</v-icon>
              <span style="font-size: 12px;">{{ item.feedback }}</span>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn class="text-capitalize" color="primary" size="small" prepend-icon="mdi-heart-outline"
                variant="outlined">
                Watch
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <v-row class="ma-1">
    <v-col cols="12" sm="12" md="12" lg="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" :src="footer1">
        <v-card-title class="text-center">Clear & Usable user flows</v-card-title>
        <v-card-subtitle class="text-center">Let’s boost your marketplace</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" :src="footer2">
        <v-card-title class="text-center">Fine & Styled components</v-card-title>
        <v-card-subtitle class="text-center">Speed up with Setproduct templates</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" :src="footer3">
        <v-card-title class="text-center">Customizable & Reusable</v-card-title>
        <v-card-subtitle class="text-center">Take our UX patterns and rebuild</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref,reactive, computed} from "vue"
import footer1 from "@/assets/footer1.png"
import footer2 from "@/assets/footer2.png"
import footer3 from "@/assets/footer3.png"
const products=reactive([
  {
    name:"Áo Polo Nam Cafe Phối Nẹp Thấm Hút Mồ Hôi",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-yody-apm3635-gre.jpg?v=1702633518457",description:"Eligible for Shipping To Mars or somewhere else",price:"12.8",sale:"10",feedback:"4.8"
  },
  {
    name:"Quần Kaki Nam Jogger Cơ Bản",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/quan-kaki-nam-jogger-yody-qkm6027-den-6.jpg?v=1697254421893",description:"Eligible for Shipping To Mars or somewhere else",price:"28.5",sale:60,feedback:4.7
  },
  {
    name:"Áo Polo Nam Coolmax",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-apm3519-dod-5-yodyvn.jpg?v=1690163862263",description:"Eligible for Shipping To Mars or somewhere else",price:"100.2",sale:"15",feedback:"5"
  },
  {
    name:"Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí ",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-xxm-7.jpg?v=1690163862957",description:"Eligible for Shipping To Mars or somewhere else",price:"29.4",sale:50,feedback:4
  },
  {
    name:"Quần Kaki Nam Basic Dáng Ôm Co Giãn",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qkm6007-den-04.jpg?v=1704250399223",description:"Eligible for Shipping To Mars or somewhere else",price:"20.4",sale:20,feedback:5
  },
  {
    name:"Áo Polo Nam Mắt Chim In Tràn Hình Học",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-apm5193-tra-1-yodyvn.jpg?v=1702606172430",description:"Eligible for Shipping To Mars or somewhere else",price:"100",sale:0,feedback:5
  },
  {
    name:"Áo Polo Nam Phối Bo Coolmax Thoáng Mát",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm5179-hdt-6.jpg?v=1690163841593",description:"Eligible for Shipping To Mars or somewhere else",price:"20.1",sale:100,feedback:4.3
  },
  {
    name:"Áo Polo Nam Cafe Tổ Ong Basic",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm6325-vag-21.jpg?v=1704250348337",description:"Eligible for Shipping To Mars or somewhere else",price:"30.5",sale:60,feedback:5
  },
  {
    name:"Quần Kaki Nam Jogger Túi Hộp",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qkm6029-tit-atm6109-nau-1.jpg?v=1698290227233",description:"Eligible for Shipping To Mars or somewhere else",price:"30.5",sale:60,feedback:5
  },
  {
    name:"Áo Polo Nam Cafe Phối Nẹp Thấm Hút Mồ Hôi",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-yody-apm3635-gre.jpg?v=1702633518457",description:"Eligible for Shipping To Mars or somewhere else",price:"12.8",sale:"10",feedback:"4.8"
  },
  {
    name:"Áo Polo Nam Coolmax",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-apm3519-dod-5-yodyvn.jpg?v=1690163862263",description:"Eligible for Shipping To Mars or somewhere else",price:"100.2",sale:"15",feedback:"5"
  },
  {
    name:"Quần Kaki Nam Regular Thêu Cạnh Túi",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qkm6005-den-06.jpg?v=1704250404517",description:"Eligible for Shipping To Mars or somewhere else",price:"30.5",sale:60,feedback:4.3
  },
  {
    name:"Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí ",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-xxm-7.jpg?v=1690163862957",description:"Eligible for Shipping To Mars or somewhere else",price:"29.4",sale:50,feedback:4
  },
  {
    name:"Áo Polo Nam Mắt Chim In Tràn Hình Học",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nam-apm5193-tra-1-yodyvn.jpg?v=1702606172430",description:"Eligible for Shipping To Mars or somewhere else",price:"100",sale:0,feedback:5
  },
  {
    name:"Áo Polo Nam Phối Bo Coolmax Thoáng Mát",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm5179-hdt-6.jpg?v=1690163841593",description:"Eligible for Shipping To Mars or somewhere else",price:"20.1",sale:100,feedback:4.3
  },
  {
    name:"Áo Polo Nam Cafe Tổ Ong Basic",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm6325-vag-21.jpg?v=1704250348337",description:"Eligible for Shipping To Mars or somewhere else",price:"30.5",sale:60,feedback:5
  },
  {
    name:"Quần Kaki Nam Basic Năng Động",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qkm5027-bee-26.jpg?v=1704250429600",description:"Eligible for Shipping To Mars or somewhere else",price:"48.5",sale:0,feedback:4.8
  },
  {
    name:"Áo Polo Nam Phối Bo Coolmax Thoáng Mát",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm5179-hdt-6.jpg?v=1690163841593",description:"Eligible for Shipping To Mars or somewhere else",price:"20.1",sale:100,feedback:4.3
  },
  {
    name:"Áo Polo Nam Cafe Tổ Ong Basic",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm6325-vag-21.jpg?v=1704250348337",description:"Eligible for Shipping To Mars or somewhere else",price:"30.5",sale:60,feedback:5
  },
  {
    name:"Quần Kaki Nam Basic Năng Động",image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qkm5027-bee-26.jpg?v=1704250429600",description:"Eligible for Shipping To Mars or somewhere else",price:"48.5",sale:0,feedback:4.8
  },
])
const SelectedCategory=ref('All')
const selectedSort=ref(null)
const filteredProducts = computed(() => {
  let filtered = [];

  if (SelectedCategory.value === 'All') {
    filtered = [...products];
  } else {
    filtered = products.filter(product => product.name.includes(SelectedCategory.value));
  }
  if (selectedSort.value === "Từ cao -> thấp") {
    return filtered.sort((a, b) => b.price - a.price);
  } else {
    return filtered.sort((a, b) => a.price - b.price);
  }
});
</script>

<style>
.custom-shadow {
  margin-top: 10px;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.2);
}
.my-card {
  max-height: 200px; /* Đặt chiều cao tối đa của thẻ */
  overflow: hidden;  /* Ẩn phần nội dung vượt quá chiều cao */
}

.my-card-text {
  overflow-y:hidden;
}
</style>
