<script setup lang="ts">
import {ref} from 'vue'
import ChatRoomItem from './ChatRoomItem.vue'


const userList = ref([
  {
    id:1,
    name:"zhansan"
  },
  {
    id:2,
    name:"zhansan1"
  }
  ,{
    id:3,
    name:"zhansan2"
  },{
    id:4,
    name:"zhansan3"
  },{
    id:5,
    name:"zhansan4"
  }
])

</script>

<template>
  
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple">123</div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple">456</div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
         
    
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: rgb(81, 255, 0);
}
</style>
