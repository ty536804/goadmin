<template>
  <section class="pub xxlc" :style="{backgroundImage:'url('+xxlcImg+')'}" style="background-position: top center;">
      <h3>布罗卡斯学习流程</h3>
      <section class="lc_con">
          <template  v-for="(item,key) in lcCon">
            <li class="lc_con_li">
                <h4>{{item.tit}}</h4>
                <span>{{item.con}}</span>
            </li>
            <li class="lc_con_arrow" v-if="key<3">
            </li>
          </template>
      </section>
  </section>
</template>

<script>
  export default {
    props:["xxlcImg"],
	data() {
		return {
			lcCon:[
				{
					tit:"入学测评",
					con:"了解孩子学习能力、学习基础、个人偏好及性格等"
				},
				{
					tit:"个性化辅导方案",
					con:"基于数据分析，定制适合孩子个性特点的辅导方案"
				},
				{
					tit:"定位薄弱点",
					con:"人机互动精准了解孩子的知识点掌握情况"
				},
				{
					tit:"定制学习资料库",
					con:"依据个性方案系统匹配适学材料，因材施教，高效学习"
				}
			]
		}
	},
  }
</script>

<style scoped>
  @import url("./css/xxlc.css");
</style>
