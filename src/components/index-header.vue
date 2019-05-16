<template>
    <div class="header">
      <div class="header-left">
        广州<span></span>
      </div>

      <div class="search-bar">
        <span class="iconfont icon-sousuo"></span>
        输入关键字
      </div>

      <div class="header-right">
        <span class="iconfont icon-wode1"></span>
        <p>我的</p>
      </div>
    </div>
</template>
<script>

export default {
    name: "index_header"
}

</script>

<style>
.header{
  height: 50px;
  display: flex;
  align-items: center;
  background: #06c1ae; 
  padding: 0 10px;
  color:#fff;
}

.header-left{
  margin-right: 10px;
}

.header-left span{
  display: inline-block;
  margin-left: 5px;
  width: 7px;
  height: 7px;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  transform: rotate(45deg);
  position: relative;
  top:-3px;
}

.search-bar{
  flex:1;
  height: 32px;
  background: rgba(0,0,0,0.15);
  border-radius: 4px;
  line-height: 32px;
  font-size: 12px;
  color:#68dbce;
  padding:0 10px;
}

.search-bar span{
  color:#fff;
  font-size: 13px;
}

.header-right{
  text-align:center;
}

.header-right span{
  font-size: 20px;
  font-weight: bold;
}

.header-right p{
  font-size: 12px;
}

.header-right{
  margin-left: 10px;
}
</style>