<template>
    <div class="department mt-4">
      <div>
        <v-btn
          width="304"
          height="56"
          variant="outlined"
          style="padding: 0"
          color="#9DC2FF"
          class="mt-6"
          ><v-icon color="#2264D1" size="32" class="d-flex align-center justify-center"
            >mdi mdi-menu</v-icon
          >
          <div
            style="width: 232px; height: 40px"
            class="ml-2 d-flex align-center justify-center"
          >
            <p class="text-capitalize text-btn">Department</p>
          </div></v-btn
        >
      </div>
      <div class="category mt-10" style="max-width: 288px">
        <v-list v-model:opened="open" :color="open ? '#2264D1' : '#76A9FF'">
          <!-- <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item> -->
  
          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="">
                <p class="text-allcategories">Allcategories</p>
                <p class="text-Ecommerce-patterns">Ecommerce patterns</p></v-list-item
              >
            </template>
  
            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title=""
                  ><p class="text-Electronics">Electronics</p></v-list-item
                >
              </template>
  
              <v-list-group value="Electronic">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props"
                    ><p class="text-Electronics">Cell Phones & Smartphones</p></v-list-item
                  >
                </template>
                <v-list-item v-for="([title], i) in admins" :key="i" :value="title"
                  ><p class="text-allcategories">{{ title }}</p></v-list-item
                >
                <v-list-item
                  ><v-btn
                    color="#EBF2FF"
                    width="138"
                    height="40"
                    style="border-radius: 4px"
                    flat
                    append-icon="mdi mdi-chevron-down"
                    ><p class="text-show-more">Show more</p></v-btn
                  ></v-list-item
                >
              </v-list-group>
  
              <!-- <v-list-item
                v-for="([title], i) in admins"
                :key="i"
                :title="title"
                :value="title"
              ></v-list-item> -->
            </v-list-group>
  
            <v-list-group value="Business">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props"
                  ><p class="text-Electronics">Business & Industrial</p></v-list-item
                >
              </template>
  
              <!-- <v-list-item
                v-for="([title], i) in cruds"
                :key="i"
                :value="title"
                :title="title"
              ></v-list-item> -->
            </v-list-group>
            <!--  -->
            <v-list-group value="Computers">
  <template v-slot:activator="{ props }">
                <v-list-item v-bind="props"
                  ><p class="text-allcategories">Computers</p>
  
                  <p class="text-Ecommerce-patterns">Tablets & Networking</p></v-list-item
                >
              </template>
            </v-list-group>
            <!--  -->
            <v-list-group value="Consumer">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props"
                  ><p class="text-allcategories">Consumer Electroinics</p>
                </v-list-item>
              </template>
            </v-list-group>
            <!--  -->
            <v-list-group value="Home">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props"
                  ><p class="text-allcategories">Home & Garden</p>
                </v-list-item>
              </template>
            </v-list-group>
            <!--  -->
            <v-list-group value="Collectibles">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props"
                  ><p class="text-allcategories">Collectibles</p>
                </v-list-item>
              </template>
            </v-list-group>
            <!--  -->
            <v-btn
              color="#EBF2FF"
              width="75"
              height="40"
              flat
              class="ml-7"
              style="border-radius: 4px"
              ><p class="text-show-more">Expand</p></v-btn
            >
          </v-list-group>
        </v-list>
      </div>
      <!--  -->
      <div
        class="collapsed-fillter mt-8"
        style="
          box-shadow: 0px 2px 4px 0px #5a5b6a3d;
  
          box-shadow: 0px 1px 2px 0px #3a3a443d;
          border-radius: 4px;
        "
      >
        <v-list-group value="Collapsed">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props"
              ><p class="text-allcategories">Collapsed filters</p>
            </v-list-item>
          </template>
        </v-list-group>
      </div>
      <!--  -->
      <div class="Expanded-Filters mt-6" style="max-width: 304px; max-height: 304px">
        <v-list v-model:opened="open1" style="background-color: #f7f7fa; padding: 0">
          <v-list-group value="Expanded">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props"
                ><p class="text-Expanded">Expanded Filters</p>
              </v-list-item>
            </template>
            <v-list-item style="padding-left: 12px !important; padding-bottom: 20px">
              <div>
                <div
                  style="max-width: 288px; max-height: 40px"
                  v-for="(text, i) in textExpanded"
                  :key="i"
                >
                  <v-checkbox
                    class="text-allcategories"
                    color="#4A4B57"
                    :label="text"
                    hide-details
                  ></v-checkbox>
  
                  <!-- <v-checkbox> {{}} </v-checkbox> -->
                </div>
              </div>
  </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <!--  -->
      <div class="Expanded-Filters mt-6" style="max-width: 304px; max-height: 304px">
        <v-list v-model:opened="open2" style="padding: 0; background-color: #f7f7fa">
          <v-list-group value="Expanded">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props"
                ><p class="text-Expanded">Year of manufacturing</p>
              </v-list-item>
            </template>
            <v-list-item style="padding-left: 12px !important">
              <div style="padding-bottom: 20px">
                <div
                  style="max-width: 288px; max-height: 40px"
                  v-for="(text, i) in year"
                  :key="i"
                >
                  <v-checkbox
                    class="text-allcategories"
                    color="#19191d"
                    :label="text"
                    hide-details
                  ></v-checkbox>
                </div>
              </div>
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const open = ref(['User']);
  const open1 = ref(['User1']);
  const open2 = ref(['User2']);
  const admins = ref([
    ['Cell Phone Accessories'],
    ['Cell Phone Gatgets'],
    ['Applications'],
    ['Smart Watches'],
  ]);
  const cruds = ref([['Create'], ['Read'], ['Update'], ['Delete']]);
  const textExpanded = ref([
    ['Recommended'],
    ['Recently Added'],
    ['Expiring Soon'],
    ['Most Rated'],
    ['Price: Low → High'],
    ['Price: High → Low'],
  ]);
  const year = ref([
    ['1954'],
    ['1955'],
    ['1956'],
    ['1957'],
    ['1958'],
    ['1959'],
    ['1960'],
    ['1961'],
    ['1962-2024'],
  ]);
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  .department {
    max-width: 355px;
  }
  .text-btn {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  
    color: #2264d1;
  }
  .category {
  }
  .text-allcategories {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #19191d !important;
  }
  .text-Ecommerce-patterns {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20.02px;
    color: #787885;
  }
  .text-Electronics {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #19191d;
  }
  .text-show-more {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    color: #2264d1;
  }
  /* .collapsed-fillter {
  
  } */
  .text-collsapsed {
    font-family: 'Roboto', sans-serif;
  font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #19191d;
  }
  .text-Expanded {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #19191d;
  }
  </style>