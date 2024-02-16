<template>
  <router-view/>
  <LoadingViewVue/>
</template>

<script>
import LoadingViewVue from '@/components/Loading/LoadingView.vue'
export default{
  components:{
    LoadingViewVue
  }
}
</script>

<!-- <template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script> -->
