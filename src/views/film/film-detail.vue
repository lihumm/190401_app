<template>
    <div>
        <div class="detai-header">
            <span @click="handleBack"></span>
            {{this.detail.nm}}
        </div>

        <!-- 电影详情 -->
        <div class="detail-info">
            
            <img :src="this.detail.img" class="deail-info-bg">

            <!-- 详情内容 -->
            <div class="detail-content">
                <img :src="this.detail.img">

                <!-- 详情内容文字 -->
                <div class="detail-content-right">
                    <h4>{{ this.detail.nm }}</h4>
                    <div class="detail-en-name">
                        {{ this.detail.enm }}
                    </div>
                    <p><span> {{this.detail.sc
}} </span>(1.4万人评)</p>
                    <p>{{ this.detail.cat }}</p>
                    <p>{{ this.detail.src }}/{{ this.detail.dur }}分钟</p>
                    <p>{{ this.detail.pubDesc }}</p>
                </div>
            </div>
        </div>

        <!-- 日期选择 -->   
        <div class="detail-date-wrapper">
            <div class="detail-date-list">

                <div class="detail-date-item" 
                v-for="(item,key) in dates" :key="key"
                :class="{active:currentDate === key}"
                @click="handleDateChange(key)">
                    {{item.date}}
                </div>
            </div>
        </div>

        <!-- 条件选择 -->
        <div class="detail-condition">

            <div class="detail-condition-item">
                全城
            </div>
            <div class="detail-condition-item">
                品牌
            </div>
            <div class="detail-condition-item">
                特色
            </div>

        </div>

        <!-- 电影院列表 -->
        <div class="film-address-list">

            <div class="film-address-item" 
            v-for="(item,key) in address" :key="key">
                <h4>
                    {{ item.nm }}<span>{{ item.sellPrice }} <i>元起</i></span>
                </h4>

                <div class="address-bar">
                    <div class="adddress-bar-left">
                    {{item.addr}}
                    </div>
                    <p>{{item.distance}}</p>
                </div>

                <div class="address-tags">
                    
                    <!-- 嵌套循环标签 -->
                    <span class="yellow" v-for="(tag,key) in item.tag.hallType" :key="key">{{ tag }}</span>    
                </div> 

                <p class="address-action">
                    {{item.promotion.cardPromotionTag}}
                </p>

                <p class="address-action">
                    近期场次: {{ item.showTimes }}
                </p>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    methods: {
        handleBack: function(){
            window.history.back();
        },
        handleDateChange:function(index){
            this.currentDate = index;
        }
    },
    data: () => {
        return {
            dates: [],
            address: [],
            detail: {},
            currentDate :0,
        }
    },
    mounted: function(){
        //每次进入页面都滚动到最顶部
        window.scrollTo(0,0)

        const id = this.$route.params.id;
        const url = "/ajax/detailmovie?movieId=" + id;
       
       // 请求详情数据
       axios.get(url).then((res) => {
           
           const {detailMovie} = res.data;

           detailMovie.img = detailMovie.img.replace("w.h", "148.208");

            this.detail = detailMovie;
       })

       // 请求电影院列表
        axios.post("/ajax/movie?forceUpdate=1540177253900", {
            movieId: id,
            day: "moment().format(YYYY-MM-DD)",//获取当天的时间
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            updateShowDay: true,
            reqId: 1540177250401,
            cityId: 20,
        }).then(res => {
            
            const {showDays, cinemas} = res.data;

            // 初始化dates
            this.dates = showDays.dates;


            // 初始化电影院列表
            this.address = cinemas;
        })

    }
}
</script>

<style>
    /* 电影院列表 */
    .film-address-list{
        padding-left:10px;
    }

    .film-address-item{
        padding:10px 0;
        border-bottom:1px #eee solid;
        padding-right:20px;
    }

    .film-address-item h4{
        font-size: 18px;
        font-weight: normal;
    }

    .film-address-item h4 span{
        color:red;
        font-size: 20px;
    }

    .film-address-item h4 i{
        font-style: normal;
        font-size: 12px;
    }

    .address-bar{
        display: flex;
        font-size: 13px;
        margin-top: 5px;
        color:#666;
    }

    .adddress-bar-left{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-right: 10px;
    }

    .address-tags{
        margin-top:5px;
        margin-bottom: 5px;
    }

    .address-tags span{
        display: inline-block;
        padding:0 5px;
        font-size: 12px;
        border:1px #666 solid; 
        margin-right: 5px;
        border-radius: 2px;
    }

    .address-tags .yellow{
        color:orange;
        border-color: orange;
    }

    .address-tags .cyan{
        color:blue;
        border-color:blue;
    }

    .address-action{
        line-height: 1.5;
        font-size: 12px;
        color:#999;
    }

    /* 条件列表 */
    .detail-condition{
        display: flex;
        justify-content: space-around;
        height:43px;
        line-height: 23px;
        border-bottom:1px #eee solid;
        font-size: 13px;
        color:#666;

        padding:10px 0;
        box-sizing: border-box;
    }

    .detail-condition-item{
        flex:1;
        text-align: center;
        border-right:1px #eee solid;
    }

    .detail-condition-item:last-child{
        border-right: none;
    }

    .detail-condition-item::after{
        display: inline-block;
        content: "";
        width:0;
        height:0;
        /* 倒三角符号样式 */
        border-left:5px transparent solid;
        border-right:5px transparent solid;
        border-top:5px #999 solid;

        position: relative;
        top:-2px;
    }

    /* 日期列表 */
    .detail-date-wrapper{
        overflow-x: auto;
        border-bottom: 1px #eee solid;
    }

    .detail-date-wrapper::-webkit-scrollbar{
        width:0;
        height:0;
    }

    .detail-date-list{
        display: flex;
        height: 43px;
        line-height: 43px;
        font-size: 13px;
        color:#666;
    }

    .detail-date-item{
        width:115px;
        flex-shrink: 0;
        text-align: center
    }
    .detail-date-item.active{
        color:red;
        border-bottom:2px red solid;
    }

    /* 详情内容 */
    .detail-content{
        position: absolute;
        left:0; 
        top:0;
        width:100%;
        height: 100%;
        box-sizing: border-box;

        padding:16px 10px;
        display: flex;
        background: rgba(0,0,0,0.2)
    }

    .detail-content img{
        display: block;
        height:150px;
    }

    .detail-content-right{
        margin-left: 10px;
        color:#fff;
    }

    .detail-content-right h4{
        font-size: 18px;
    }

    .detail-en-name{
        font-size: 12px;
        margin-top: 5px;
    }

    .detail-content-right p {
        line-height: 1.8;
        font-size: 13px;
    }

    .detail-content-right p span{
        font-weight: bold;
        color:orange;
        font-size: 18px;
    }

    .detail-content-right::after{
        display: block;
        content: "";
        width:10px;
        height:10px;
       border-top:1px #fff solid;
       border-right:1px #fff solid;
       transform: rotate(45deg);

        position: absolute;
        right:20px;
        top:50%;
        margin-top:-5px;
    }

    /* 头部样式 */
    .detai-header{
        height: 50px;
        line-height: 50px;
        color:#fff;
        text-align: center;
        background: #06c1ae;
        font-size: 18px;
        border-bottom: 1px #666 solid;

        position: relative;
    }

    .detai-header span{
        display: block;
        content: "";
        width:15px;
        height: 15px;
        border-bottom: 2px #fff solid;
        border-left:2px #fff solid;
        transform: rotate(45deg);

        position: absolute;
        left:15px;
        top:50%;
        margin-top: -8px;
    }

    /* 电影详情 */
    .detail-info{
        position: relative;
        height:188px;
        overflow: hidden;
        box-shadow: 0 0 20px 20px rgba(0,0,0, 0.5) inset;
    }

    .deail-info-bg{
        display: block;
        width:100%;
        filter:blur(15px); box-shadow: 0 0 20px 20px rgba(0,0,0, 0.5) inset;
    }


</style>
