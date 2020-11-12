<template>
  <section class="pub pic_reason">
    <section class="system_list">
        <h3 class="tit">
            <span class="tit_icon"></span>
            贯穿全程的六大支持团队
            <span class="tit_icon"></span>
        </h3>
    </section>
    <section class="pic_reason_con">
        <section class="pic_reason_con_list">
            <dl v-for="(item, key) in pic_reason_con_list" :key="key">
                <dt>
                  <el-image :src="item.pic" lazy></el-image>
                </dt>
                <dd>
                    <h6>{{item.tit}}</h6>
                    <p>{{item.desc}}</p>
                </dd>
            </dl>
        </section>
    </section>
</section>
</template>

<script>
  export default {
    data() {
      return {
        pic_reason_con_list:[
          {
            pic:"http://img.cdn.mofashuxue.com/pic_reason1%402x.png",
            tit:"研发团队",
            desc:"提供同步美国幼教课程及相关课件"
          },
          {
            pic:"http://img.cdn.mofashuxue.com/pic_reason2@2x.png",
            tit:"营建团队",
            desc:"提供完善的空间规划设计及筹建指导"
          },
          {
            pic:"http://img.mofashuxue.com/pic_reason3.png?imageslim",
            tit:"市场团队",
            desc:"提供精准的市场分析及营销市场方案"
          },
          {
            pic:"http://img.cdn.mofashuxue.com/pic_reason4@2x.png",
            tit:"营运团队",
            desc:"提供管理运营及教学教研指导"
          },
          {
            pic:"http://img.cdn.mofashuxue.com/pic_reason5@2x.png",
            tit:"培训团队",
            desc:"提供优质的开业前和各阶段在职培训"
          },
          {
            pic:"http://img.cdn.mofashuxue.com/pic_reason6@2x.png",
            tit:"技术团队",
            desc:"提供AI人机互教与课后APP 智能软件"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import url("./css/team.css");
</style>
