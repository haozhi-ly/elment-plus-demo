<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance,FormRules,UploadUserFile  } from 'element-plus'

interface Good {
  
}

const goodForm=ref<Good>({
  
});



const fileList=ref<UploadUserFile[]>()

const picCardFileList=ref<UploadUserFile[]>()

const previewDialogVisable=ref(false)
const previewPicUrl=ref()

const previewFunc = (uploadFile:UploadUserFile)=>{
    previewDialogVisable.value=true
    previewPicUrl.value=uploadFile.url
}

</script>

    
<template>
    <el-form :model="goodForm" status-icon label-position="left" label-width="auto" ref="formRef">
       

        <el-form-item label="select file">
          <el-upload v-model:file-list="fileList" action="http://localhost:3000/upload">
            <template #trigger>
                <el-button type="primary">select file</el-button>
            </template>
          </el-upload>
        </el-form-item>

        <el-form-item label="picture card file">
          <el-upload v-model:file-list="picCardFileList" action="http://localhost:3000/upload" list-type="picture-card" :on-preview="previewFunc">
            <template #trigger>
                <el-button type="primary">select file</el-button>
            </template>
          </el-upload>
        </el-form-item>
        
        <el-dialog v-model="previewDialogVisable" >
            <img :src="previewPicUrl"  alt="preview image" w-full/>
        </el-dialog>

    </el-form>

      
</template>

<style scoped>
  
</style>
