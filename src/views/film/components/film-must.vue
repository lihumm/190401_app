<template>
    <div class="film-must">
        
        <div class="film-must-title">
            近期最受期待
        </div>

        <div class="film-top-wrapper">
            <div class="film-top-list">

                <div class="film-top-content">

                    <div class="film-top-item" v-for="(item, key) in topItems" :key="key">
                        <img :src="item.img">

                        <div class="top-item-star">
                            ❤
                        </div>

                        <div class="top-item-imgText">
                            {{item.wish}}想看
                        </div>

                        <div class="top-item-title">{{item.nm}}</div>
                        <p class="top-item-date">{{ item.comingTitle }}</p>
                    </div>

                </div>

            </div>
        </div>

        <!-- 即将上映大的下部份列表 -->
        <div class="must-btm-list">
            <div class="film-must-title">
                10月26号 周五
            </div>

            <div class="must-list-wrapper">
                <FilmItem v-for="(item, key) in bottomItems" :key="key"
                :data="item"></FilmItem>
            </div>
        </div>

    </div>
</template>

<script>
import FilmItem from "./film-item.vue"
import axios from 'axios'

export default {
    components: {
        FilmItem
    },
    data: () => {
        return {
            topItems: [],
            bottomItems: []
        }
    },
    mounted: function(){

        // 头部滚动的列表
        axios.get("/ajax/comingList?ci=20&token=&limit=10").then((res) => {
            let {coming} = res.data;

            // 修改图片的地址
            coming = coming.map((v) => {

                v.img = v.img.replace("w.h", "128.180");

                return v;
            })

            this.topItems = coming;
        })

        // 下面的列表
        axios.get("/ajax/comingList?ci=20&token=&limit=10").then((res) => {

            let {coming} = res.data;

            // 修改图片的地址
            coming = coming.map((v) => {

                v.img = v.img.replace("w.h", "128.180");

                return v;
            })
            
            this.bottomItems  = coming;
        })

    }
}
</script>

<style>
    .film-must-title{
        padding: 10px;
        font-size: 13px;
        color: #666;
    }

    .film-top-item{
        position: relative;
        width:85px;
        margin: 0 5px 10px 5px;
    }

    .film-top-item:first-child{
        margin-left:0;
    }

    .film-top-item img{
        display: block;
        width: 85px;
        height:115px;
    }

    .top-item-star{
        position: absolute;
        left:0; 
        top:0;
        width:28px;
        height:28px;
        background: rgba(0,0,0, 0.5);
        color:#999;
        text-align: center;
        line-height: 28px;
        border-radius: 0 0 10px 0;
    }

    .top-item-imgText{
       background:  linear-gradient( rgba(0,0,0,0), rgba(0,0,0,1) );
       line-height: 1.5; 
       font-size: 12px;
       color: orange;

       position: absolute;
       left: 0;
       top:101px;
       width:100%;
       text-align: center;
       font-weight: bold;
    }

    .top-item-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-weight: bold;
        line-height: 1.5;
        font-size: 13px;
        margin-top: 5px;
    }

    .top-item-date{
        font-size: 13px;
        color:#666;
        line-height: 1.5;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .film-top-list{
        width:100%;
        overflow: auto;
        /* padding:0 10px;
        box-sizing: border-box; */
    }

    .film-top-content{
        display: flex;
    }

    .film-top-wrapper{
        padding:0 10px;
    }

    .must-btm-list{
        border-top:10px #eee solid;
    }

    .must-list-wrapper{
        padding:0 10px;
    }
</style>
