<template>
  <v-row class="ml-3 mt-3">
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="SelectedCategory" density="compact" label="SORT BY"
        :items="['All','Quần','Áo']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="selectedSort" density="compact" :items="['Từ cao -> thấp','Từ thấp -> cao']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="selectedThree" density="compact" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
      <v-btn style="background-color: rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Show
        <span class="text-lowercase ml-1"> all</span>
      </v-btn>
      <v-btn style="font-weight: 400;color: rgb(34, 100, 209);" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated" elevation="3">
        Auction
      </v-btn>
      <v-btn style="background-color:rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Buy
        <span class="text-lowercase ml-1"> now</span>
      </v-btn>
      <v-btn  style="background-color: rgb(212, 227, 255)" class="ml-5" ariant="tonal" elevation="0">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn class="mr-5"  variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mr-3 ml-1">
    <v-col cols="12">
      <v-chip variant="text"><span class="mt-2" style="font-weight: 550;">Related</span></v-chip>
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
      <v-col class="d-flex flex-column justify-center align-center" v-for="item in products" :key="item" cols="12" sm="6" md="4" lg="3">
        <v-card hover variant="flat" style="min-height: 472px;width: 250px;" class="mb-3 my-card">
          <v-img class="mx-auto mt-2" width="220px" height="224px"
            :src="item.url"
            alt="Product Image"></v-img>
          <v-card-text class="my-card-text" style="max-width: 227px;font-size: 16px;line-height: 24px; height: 90px;font-family: 'Inter', sans-serif;color: #19191D;">{{ item.name }}</v-card-text>
          <v-card-text class="mt-2 mx-auto" style="font-family: 'Inter', sans-serif;color:#000000;max-width: 250px;font-size: 24px;font-weight: 700;padding: auto;height: 36px;">
            {{ item.price }}
            <span v-if="item.sale>0" style="border-radius: 4px;margin-right: 0.7%;font-size: 12px;float: right;min-width: 70px;min-height: 24px;padding: 2px;background-color: #ECF7ED;text-align: center;color: #37833B;font-weight: 300;font-family: Roboto;">
              {{item.sale}}% OFF
            </span>
            <span v-if="item.cool==true" style="border-radius: 4px;margin-right: 0.7%;font-size: 12px;float: right;min-width: 70px;min-height: 24px;padding: 2px;background-color: #FDEDF2;text-align: center;color: #C23564;font-weight: 300;font-family: Roboto;">
              Cool deal!
            </span>
          </v-card-text>
          <p class="ml-4" style="margin-top: 8px;;height: 41px;font-size: 14px;font-family: 'Inter', sans-serif;color: #787885;">{{ item.description }}</p>
          <v-row style="margin-top: 5px;margin-left: -6px;">
            <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon v-if="item.feedback<5 && item.feedback>4" color="amber" size="x-small">mdi mdi-star-half</v-icon>
              <v-icon v-else color="amber" size="x-small">mdi mdi-star</v-icon>
              <span style="font-size: 12px;">4.05</span>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn class="text-capitalize" style="margin-right: 6px;font-family: 'Inter', sans-serif;font-size: 14px;" color="primary" size="small" prepend-icon="mdi-heart-outline"
                variant="outlined">
                Watch
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <div class="d-flex justify-space-between " style="margin-top: 40px;margin-bottom: 10px;">
    <v-card  class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer1">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Clear & Usable user flows</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Let’s boost your marketplace</v-card-subtitle>
    </v-card>
    <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer2">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Fine & Styled components</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Speed up with Setproduct templates</v-card-subtitle>
    </v-card>
    <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer3">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Customizable & Reusable</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Take our UX patterns and rebuild</v-card-subtitle>
    </v-card>
  </div>
</template>

<script setup>
import {ref,reactive, computed} from "vue"
import footer1 from "@/assets/footer1.png"
import footer2 from "@/assets/footer2.png"
import footer3 from "@/assets/footer3.png"
import product1 from "@/assets/01.png"
import product2 from "@/assets/02.png"
import product3 from "@/assets/03.png"
import product4 from "@/assets/04.png"
import product5 from "@/assets/05.png"
import product6 from "@/assets/06.png"
import product7 from "@/assets/07.png"
import product8 from "@/assets/08.png"
import product9 from "@/assets/09.png"
import product10 from "@/assets/010.png"
import product11 from "@/assets/011.png"
import product12 from "@/assets/012.png"
const products=reactive([
  {
    url:product1,name:"Vintage Typewriter to post awesome stories about UI design and webdev.",price:"$49.50",sale:0,cool:false,description:"Eligible for Shipping To Mars or somewhere else",feedback:4.05
  },
  {
    url:product2,name:"Lee Pucker design. Leather botinki for handsome designers. Free shipping.",price:"$13.95",sale:0,cool:false,description:"1258 bids, 359 watchers $5.95 for shipping",feedback:4.56
  },
  {
    url:product3,name:"Timesaving kitten to save months on development. Playful, cute, cheap!",price:"$128.99",sale:0,cool:false,description:"Eligible for nothing :(",feedback:4.87
  },
  {
    url:product4,name:"Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",price:"$12.48",sale:50,cool:false,description:"Wordwide shitting available Buyers protection possible!",feedback:4.99
  },
  {
    url:product5,name:"Creativity stimulating lotion. Drink every morning to generate better ideas!",price:"$12.48",sale:0,cool:false,description:"Wordwide shifting available Buyers protection possible!",feedback:4.99
  },
  {
    url:product6,name:"Prototyping items to create a lot if useless things...",price:"$128.99",sale:0,cool:false,description:"Showcasing onHovered state",feedback:4.87
  },
  {
    url:product7,name:"John Von Ebalkin SPRING ",price:"$13.95",sale:0,cool:false,description:"1258 bids, 359 watchers $5.95 for shipping",feedback:4.56
  },
  {
    url:product8,name:"Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",price:"$9.50",sale:0,cool:false,description:"Eligible for Shipping To Mars or somewhere else",feedback:4.77
  },
  {
    url:product9,name:"Professional teadrinking set for every designer and developer",price:"$128.99",sale:0,cool:false,description:"Eligible for nothing :(",feedback:4.87
  },
  {
    url:product10,name:"One string Bonsai description",price:"$11.68",sale:0,cool:false,description:"Wordwide shifting available Buyers protection possible!",feedback:4.99
  },
  {
    url:product11,name:"Simply best item in town to shine bright with your Nine Inch Nails",price:"$1.25",sale:0,cool:true,description:"Eligible for Shipping To Mars or somewhere else",feedback:4.77
  },
  {
    url:product12,name:"KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",price:"$23.25",sale:0,cool:false,description:"1258 bids, 359 watchers $5.95 for shipping",feedback:4.56
  }
])
const SelectedCategory=ref('Useless first')
const selectedSort=ref('Condition')
const selectedThree=ref('Delivery options')

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
  border-radius:4px ;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
}
.my-card {
  max-height: 200px; /* Đặt chiều cao tối đa của thẻ */
  overflow: hidden;  /* Ẩn phần nội dung vượt quá chiều cao */
}

.my-card-text {
  overflow-y:hidden;
}
</style>