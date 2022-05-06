
<template>
  <div class="header_wrap">
    <Header />
  </div>
  <router-view />
</template>
<script setup lang="ts">
import Header from './Header.vue'
</script>
<style lang="scss" scoped>
.page-container_wrap {
  width: 100%;
  height: calc(100% - 80px);
  position: relative;
  flex: 1;
}

.page-container {
  padding: 0 0px;

  .el-main {
    height: 100%;
    padding-bottom: 100px;
    padding-top: 50px;
    box-sizing: border-box;
  }
}




.header_wrap {
  position: fixed;
  top: 0;
  // left: 0;
  width: 100%;
  height: 60px;
  z-index: 990;
  right: 8px;
}
@media screen and (min-width:960px) and(max-width:1340px) {
    .headers{
      width: auto ;
    }

}
@media screen and (min-width: 960px) {

  :deep(.headers) {
    .right {
      //隐藏原来头部切换框
      .right_inner {
        display: flex;
      }

      .phoneTab {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1140px) {
  :deep(.headers) {
    width: 100%;
  }
  
}

@media screen and (max-width: 960px) {
  
 
  .header_wrap {
    height: 44px;
    .headers{
      padding: 0 8px;
    }
  }
  :deep(.headers) {
    .logo {
      img {
        height: 28px;
      }
      p {
        font-size: 18px;
        margin: 4px 0px 0 6px;
      }
    }
    .right {
      .item {
        font-size: 12px;
      }
      //展现原来头部切换框
      .right_inner {
        display: none;
      }

      .phoneTab {
        display: block;
      }
    }
  }


}
</style>
