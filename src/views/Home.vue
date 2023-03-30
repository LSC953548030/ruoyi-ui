<template>
    <!-- xs（最小号 ）	<768px
        sm（小号）	≥768px
        md（中号）	≥992px
        lg（大号）	≥1200px
        xl（更大号）	≥1920px 
      <el-container>：外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。
      <el-header>：顶栏容器。
      <el-aside>：侧边栏容器。
      <el-main>：主要区域容器。
      <el-footer>：底栏容器。-->
  <div class="my-page" style="width: 100%; height: 100%;">
    <!-- 这里的样式会覆盖element-ui的默认样式 -->
    <el-container style="width: 100%; height: 100%;">
      <!-- 这里是左侧部分 -->
      <el-aside :width = "isCollapse ? '200px' : '400px'">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-icon><Message /></el-icon>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-icon><Message /></el-icon>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-icon><Message /></el-icon>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <el-icon><Message /></el-icon>
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <el-icon><Message /></el-icon>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 这里是右侧部分 -->
      <el-container style="width: 100%; height: 100%;">
        <el-row   style="width: 100%; height: 100%;">
          <el-col style="width: 100%; height: 5%;">
            <div class="grid-content bg-purple">右边上层布局</div>
          </el-col>
          <el-col style="width: 100%; height: 95%;">
            <div class="grid-content bg-purple-light">
              <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.my-page .el-col,.el-aside,.el-main {
  border: 1px solid black;
}
.my-page {
  background-image: url('../assets/login2.jpg');
  background-size: cover;
  background-position: center;
}
</style>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
    }
  };
</script>

