<template>
    <v-dialog max-width="350">
      <v-card>
        <v-card-title class="headline">Xác nhận xóa</v-card-title>
        <v-card-text>
          Bạn có chắc chắn muốn xóa không?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text >Hủy</v-btn>
          <v-btn color="error" text >Xóa</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>