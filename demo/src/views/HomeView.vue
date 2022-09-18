<template>
  <div>
    <el-container>
      <el-aside :width="flag ? '200px' : '50px'">
        <!-- 侧边栏 -->
        <el-menu
          :default-active="defaultactive"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100vh"
          router
        >
          <el-submenu
            :index="item.path"
            v-for="item in menusList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group v-for="ele in item.children" :key="ele.id">
              <i :class="ele.icon"></i>
              <el-menu-item :index="ele.path">{{ ele.title }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <i
          :class="flag ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="flag = !flag"
        ></i>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { getmenus } from "../utils/api";
export default {
  data() {
    return {
      menusList: [],
      flag: true, //展开收起状态
      defaultactive: "", //当前路径
      // breadList: [], //面包屑数据
    };
  },
  created() {
    getmenus().then((res) => {
      // console.log(res);
      this.menusList = res.data.data.permissionList;
      console.log(this.menusList);
    });
  },
  // watch: {
  //   $route: {
  //     handler(newVal) {
  //       let list = [];
  //       console.log(newVal, "newVal");
  //       this.defaultactive = newVal.fullPath;
  //       newVal.matched.slice(1).forEach((item) => {
  //         list.push({
  //           name: item.meta.title,
  //           path: item.meta.path,
  //         });
  //       });
  //       this.breadList = list;
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>
<style lang="scss" scoped>
</style>