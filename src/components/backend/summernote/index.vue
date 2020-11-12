<template>
  <div id="summernote">
  </div>
</template>

<script>
import $ from 'jquery'
$(function() {
  $('#summernote').summernote({
    height: 200,
    tabsize: 2,
    lang: 'zh-CN',
    callbacks:{
        onImageUpload: function(files, editor, $editable) {
            console.log(files[0])
            uploadSummerPic(files[0]);
        },
        insertImage:function ($editable,file) {
            console.log(file)
        }
    }
  })
  function uploadSummerPic(file, editor, $editable) {
      let fd = new FormData();
      let fileName = file['name'];
      console.log(file['name'])
      fd.append("file", file);
      $.ajax({
          type:"POST",
          url:"/api/v1/upload",
          data: fd,
          cache: false,
          contentType: false,
          processData: false,
          success: function (data) {
              let _url = "/static/upload/"+data.data;
              $('#summernote').summernote('insertImage', _url, fileName);
          }
      });
  }
})

export default {
  props:["content"],
  created() {
    console.log(this.content,222)
    $('#summernote').summernote('code', this.content)
  }
}
</script>

<style>
</style>
