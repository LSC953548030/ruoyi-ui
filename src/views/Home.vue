<template>
    <!-- xs（最小号 ）	<768px
        sm（小号）	≥768px
        md（中号）	≥992px
        lg（大号）	≥1200px
        xl（更大号）	≥1920px -->
  <div class="my-page" style="width: 100%; height: 100%;">
    <!-- 这里的样式会覆盖element-ui的默认样式 -->
    <el-container style="width: 100%; height: 100%;">
      <!-- 头部 -->
      <el-header style="height: 5%;">Header</el-header>
      <!-- 躯干 -->
      <el-main style="height: 90%;">
        <!-- 水平布局 -->
        <el-row type="flex" style="width: 100%;height: 100%;">
          <!-- 左侧导航 -->
          <el-col :span="4" >
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <el-menu-item index="1" icon="el-icon-house">首页</el-menu-item>
              <el-menu-item index="2" icon="el-icon-s-shop">商城</el-menu-item>
              <el-menu-item index="3" icon="el-icon-s-data">数据</el-menu-item>
              <el-menu-item index="4" icon="el-icon-setting">设置</el-menu-item>
            </el-menu>
          </el-col>
          <!-- 中间主栏 -->
          <el-col :span="20">Main</el-col>
        </el-row>
      </el-main>
      <!-- 尾部 -->
      <el-footer style="height: 5%;">Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.my-page .el-col {
  border: 1px solid black;
}
</style>

<script>
  export default {
    name: 'Home'
  };
</script>

