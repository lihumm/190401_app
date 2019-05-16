<template>
    <div>
        <div class="film-head">
            <div class="film-header">
                猫眼电影
            </div>
            
            <div class="film-tabs">
                <div class="film-tabcell" :class="{ active: currentTab === 0 }" @click="handleTab(0)">正在热映</div>
                <div class="film-tabcell" :class="{ active: currentTab === 1 }" @click="handleTab(1)">即将上映</div>
            </div>
        </div>

        <div class="film-content">
            <div class="film-content-1" v-if="currentTab === 0">
                <FilmHot></FilmHot>
            </div>

            <div class="film-content-2" v-if="currentTab === 1">
                <FilmMust></FilmMust>
            </div>
        </div>

        <!-- 电影首页页脚 -->
        <div class="film-footer">

            <div class="film-footer-item">
                <span class="iconfont icon-dianying"></span>
                <p>电影</p>
            </div>

            <div class="film-footer-item">
                <span class="iconfont icon-dianying"></span>
                <p>影院</p>
            </div>

            <div class="film-footer-item">
                <span class="iconfont icon-wode"></span>
                <p>我的</p>
            </div>

        </div>
    </div>
</template>

<script>
import FilmHot from "./components/film-hot.vue"
import FilmMust from "./components/film-must.vue"

export default {
    data: () => {
        return {
            currentTab: 0
        }
    },
    components: {
        FilmHot,
        FilmMust
    },
    methods: {
       handleTab: function(index){
           this.currentTab = index;
       } 
    }
}
</script>

<style>
    .film-head{
        position:fixed;
        width: 100%;
        z-index: 9;
    }

    .film-content{
        padding-top: 102px;
        padding-bottom: 51px;
    }

    .film-header{
        height:50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #06c1ae; 
        border-bottom: 1px #666 solid;
        font-size: 18px;
    }
    .film-tabs{
        height: 50px;
        border-bottom: 1px #eee solid;
        display: flex;
        justify-content: center;
        background: #fff;
    }

    .film-tabcell{
        margin: 0 20px;
        line-height: 50px;
        font-weight: bold;
    }

    .film-tabs .active{
        color:red;
        border-bottom: 2px red solid;
    }

    .film-footer{
        position: fixed;
        bottom: 0;
        left:0;

        width:100%;
        height:50px;

        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        border-top:1px #eee solid;
    }

    .film-footer-item{
        text-align: center;
        color:#666;
    }

    .film-footer-item span{
        font-size: 22px;
    }

    .film-footer-item p{
        font-size: 12px;
    }

</style>
