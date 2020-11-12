<template>
  <section class="banner_form_warp pub" id="banner_form" style="top: 100px">
      <section class="banner_form">
          <form method="post" action="" name="myform" id="top_form">
              <h3 class="join_tit">免费领取加盟资料</h3>
              <input type="hidden" name="com" class="com">
              <section class="form_tit">
                  <span>姓名：</span>
                  <input type="text" placeholder="" name="mname" class="c-area">
              </section>
              <section class="form_tit">
                  <span>电话：</span>
                  <input type="text" placeholder="" name="tel" class="c-tel">
              </section>
              <section class="form_tit">
                  <span>地区：</span>
                  <input type="text" placeholder="" name="area" class="c-city">
              </section>
              <button class="submit btn lj_btn">立即领取</button>
              <p class="promise">我们承诺您的信息将严格保密请放心填写</p>
          </form>
      </section>
  </section>
</template>

<script>
</script>

<style scoped>
  @import url("./css/join.css");
</style>
