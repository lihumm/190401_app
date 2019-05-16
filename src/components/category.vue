<template>
  <div class="category-wrapper">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="category">
          <div class="category-item" v-for="(item, key) in category" :key="key">
            <router-link :to="item.path">
              <span :class="item.icon" :style="item.bg"></span>
              <p>{{ item.text }}</p>
            </router-link>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="category">
          <div class="category-item" v-for="(item, key) in category" :key="key">
            <span :class="item.icon" :style="item.bg"></span>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div>ss</div>
    <div>
      <p>sd</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "category",
  data: () => {
    return {
      category: [
        {
          icon: "iconfont icon-meishi",
          text: "美食",
          bg: "background: #fd9d21;",
          path: "/"
        },
        {
          icon: "iconfont icon-dianzimaoyan-",
          text: "电影",
          bg: "background: #ff6767;",
          path: "/film"
        },
        {
          icon: "iconfont icon-jiudian",
          text: "酒店",
          bg: "background: #8a90fa;",
          path: "/"
        },
        {
          icon: "iconfont icon-xiuxian",
          text: "娱乐",
          bg: " background: #fed030;",
          path: "/"
        },
        {
          icon: "iconfont icon-waimai",
          text: "外卖",
          bg: "background: #fd9d21;",
          path: "/"
        },
        {
          icon: "iconfont icon-meishi",
          text: "美食",
          bg: "background: #fd9d21;",
          path: "/"
        },
        {
          icon: "iconfont icon-dianzimaoyan-",
          text: "电影",
          bg: "background: #ff6767;",
          path: "/film"
        },
        {
          icon: "iconfont icon-jiudian",
          text: "酒店",
          bg: "background: #8a90fa;",
          path: "/"
        },
        {
          icon: "iconfont icon-xiuxian",
          text: "娱乐",
          bg: " background: #fed030;",
          path: "/"
        },
        {
          icon: "iconfont icon-waimai",
          text: "外卖",
          bg: "background: #fd9d21;",
          path: "/"
        }
      ]
    };
  }
};
</script>

<style>
.category-wrapper {
  height: 200px;
}

.category {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}

.category-item {
  width: 20%;
  text-align: center;
  margin-bottom: 20px;
}

.category-item span {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: gray;
  line-height: 40px;
  color: #fff;
  border-radius: 50%;
}

.category-item p {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
</style>