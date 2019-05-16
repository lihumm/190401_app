<template>
    <div>

        <div class="like-header">
            <div class="like-header-left">
                <span @click="handleBack"></span>
            </div>
            
            <div class="like-header-center">
                <p>团购详情</p>
            </div>

            <div class="like-header-right">
                <span class="iconfont icon-shoucang"></span>
                <p>收藏</p>
                <span class="iconfont icon-daohang"></span>
                <i>导航</i>
            </div>
        </div><!--header -->


        <div class="content-wrapper">
            <div><img src="//s0.meituan.net/bs/file?f=meishi.mobile:img/app_download_banner.png@a870276">
            </div>
            
           
            <div class="list">
                <div class="list-topimg">
                    <img src="//p0.meituan.net/deal/40f9cfbd8c8a17f45850b1cfa63a520075722.jpg">
                    <div class="list-topimg-btm">
                        <h2>巴喜阳光BBQ自助餐厅</h2>
                        <span>单人自助午餐</span>
                    </div>
                </div>

                <div class="list-price">
                    <span >58</span>
                    <i style="color:#06c1ae">元 </i><i>门市价：78元</i>
                    <button>立即抢购</button>
                </div>

                <div class="list-jian">
                    <span>减</span>
                    <i>商家新客首购立减8元，没人限购1张</i>
                </div>

                <div class="list-group">
                    <ul>
                        <li class="iconfont icon-tuikuan" ><span style="font-weight:normal">支持随时退款</span></li>
                        <li class="iconfont icon-chenggong" style="font-weight:bold"><span style="font-weight:normal">支持过期自动退</span></li>
                        <li class="iconfont icon-wode" style="color:#666 ;padding:10px 0 0 0"><span style="font-weight:normal">已售33469</span></li>
                    </ul>
                </div>

                <div class="list-xing">
                    <span class="iconfont icon-xing"></span><span class="iconfont icon-xing"></span><span class="iconfont icon-xing"></span><span class="iconfont icon-xing"></span><span class="iconfont icon-xing"></span><span class="iconfont icon-shoucang"></span>
                    <span>3.8</span>
                    <span class="ping" >1802人评价</span>
                </div>

                <div class="list-item">
                    <span>味道赞171</span>
                    <span>回头客129</span>
                    <span>肉类好125</span>
                    <span>菜品丰富102</span>
                    <span>点心好71</span>
                    <span style="color:#999;border:1px #999 solid">分量少48</span>
                    <span>干净卫生14</span>
                    <span>味道上菜快8赞171</span>
                    <span style="color:#999;border:1px #999 solid">朋友聚餐5</span>
                    <span>高大上3</span>
                </div>

                <div style="padding:5px 10px 10px;font-size:18px;color:#666;border-bottom:1px #ddd8ce solid">商家信息</div>
                <div class="list-address">
                    <h4>巴喜阳光BBQ自助餐厅（中石化大厦店）</h4>
                    <p>天河区体育西路191号中石化大厦佳兆业广场B1楼B05C-B06号（地铁林和西站B出口对面，近体育西）</p>
                    <span class="iconfont icon-dizhi" style="font-size:14px;color:#666"><i style="color:#eb8706;font-style:normal;padding-left:10px">离我最近</i></span>
                </div>
                <div class="list-address-right">
                    <span class="iconfont icon-0086"></span>
                </div>

                <div class="list-pingjia" >
                    <span style="float:left;font-size:18px;color:#333;padding-top:3px">评价</span>
                    <span>3.8</span>
                    <span class="iconfont icon-xing" style="color:#f0f0f9"></span>
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-xing"></span>
                    <span class="iconfont icon-xing"></span>
                </div>

                <div class="list-arguement">
                    <span class="iconfont icon-wode" style="font-size:35px"></span>
                    <p class="id">UxV2353345</p>
                    <p class="xing"><span class="iconfont icon-xing" style="font-size:10px;color:#f90"></span><span class="iconfont icon-xing" style="font-size:10px;color:#f90"></span><span class="iconfont icon-xing" style="font-size:10px;color:#f90"></span><span class="iconfont icon-xing" style="font-size:10px;color:#f90"></span><span class="iconfont icon-xing" style="font-size:10px;color:#f0f0f6"></span><span style="padding-left:13px;color:#666">2018.10.29</span></p>
                    <div class="detail">
                        <span>不错的团购，中午去的，人不是太多，店内装修很有特色。菜品还算可以，有海鲜、甜品、寿司、熟菜和水果等，还有鲜榨果汁！特别喜欢这里的蛋糕，很好吃！海鲜种类不是太多，</span>
                    </div>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/1b0c54f1c123cd7a055fe57c7cbd8854288007.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p0.meituan.net/shaitu/3a497030d5b4e1eae4ba6793491ccc32221889.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p0.meituan.net/shaitu/d7d0957e61ebc854942adcebacddec77233655.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/c1826ce561d082cacc9ea41b6c8e5513282664.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/8d0b21c5ba18df86ad7ec13f2800e993334964.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/1b0c54f1c123cd7a055fe57c7cbd8854288007.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/5e9c6472c2c824c9a43e87ba5900f169286640.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <span>
                        <div class="imgbox">
                        <img style="height: 50px; width: 50px; " src="//p1.meituan.net/shaitu/1b0c54f1c123cd7a055fe57c7cbd8854288007.jpg@55w_55h_1e_1c" >
                        </div>
                    </span>
                    <p style="color:#666;font-size:14px;padding:15px 0 0;">巴喜阳光BBQ自助餐厅（中石化大厦店）</p>
                    
                </div>

            </div>  <!--list-->

            <div class="bottom" style="border-top:1px #ddd8ce solid;padding:10px;position:relative">
                <span style="color:#06c1ae;font-size:10px">当前位置：广州团购 > 巴喜阳光BBQ自助餐厅团购</span>
                <br>
                <button class="btn">登录</button><button class="btn2">注册</button>
                <span style="float:right;padding:15px;font-size:15px"><button class="btn3">广州</button></span>
                <span style="float:right;padding:15px;font-size:15px">城市:</span>
                <div class="bottom-u">
                    <ul>
                        <li>首页</li>
                        <li>订单</li>
                        <li>客户端</li>
                        <li>电脑版</li>
                        <li>帮助</li>
                    </ul>
                </div>
                <p style="font-size:10px;text-align:center;">友情链接：<a href="https://m.maoyan.com/?channel=touch_group" style="color:#06c1ae;font-size:10px">猫眼电影</a></p>
                <p style="text-align:center;color:#999;font-size:10px;padding:15px 0;">———————   ©2016 美团网 京ICP证070791号 ——————</p>
            </div>

        </div>  <!--wpapper-->

     </div>  
</template>

<script>
export default {
    name:"like",
    methods: {
        handleBack: function(){
            window.history.back();
        },
        handleDateChange:function(index){
            this.currentDate = index;
        }
    },
}
</script>

<style>


    .content-wrapper{
        
    }
    .content-wrapper img{
        width: 100%;
        display: block;
    }
    .bottom{
        background: #f0efed;
    }
    .bottom-u{
        width: 100%;
        text-align:center;
        display: block;
        
    }
    .bottom-u ul{
        color: #06c1ae;
        padding: 65px 10px 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -moz-box;
        
        margin: 0;
        font-size: .24rem;
        white-space: nowrap;
        list-style: none;

    }
    .bottom-u ul li{
        border-right: 1px #999 solid;
        width: 70px;
    }
    .bottom-u ul li:last-child{
        border:none;
    }
    .btn{
        position: absolute;
        top: 45px;
        padding: 2px;
        color: #06c1ae;
        font-size: 15px;
        width: 60px;
        border: 1px #06c1ae solid;
        background: #f0efed;
        border-radius: 5px;
    }
    .btn2{
        position: absolute;
        top: 45px;
        left: 80px;
        padding: 2px;
        color: #06c1ae;
        font-size: 15px;
        width: 60px;
        border: 1px #06c1ae solid;
        background: #f0efed;
        border-radius: 5px;
    }
    .btn3{
        padding: 2px;
        color: #06c1ae;
        font-size: 15px;
        width: 70px;
        border: 1px #06c1ae solid;
        background: #f0efed;
        border-radius: 5px;
    }
    

    .list{
        display: block;
        
    }

    .list-arguement{
        font-size: 10px;
        padding: 15px 0 15px 0;
        position: relative;
        margin-left: 10px;
        border-top: 1px #ddd8ce solid;
        
    }
    .list-arguement .imgbox{
        padding-right: 10px;
        display: inline-block;
    }
    .list-arguement .detail{
        padding-top: 8px;
        font-size: 15px;
        color: rgb(51, 51, 51);
    }
    .list-arguement p.id{
        color: #666;
        position: absolute;
        left: 40px;
        top:15px;
    }
    .list-arguement p.xing{
        
        position: absolute;
        left: 40px;
        top: 33px;
        
    }

    .list-pingjia{
        border-top: 10px #f0f0f0 solid;
        padding:10px 10px;
        height: 25px;
    }
    .list-pingjia span{
        float: right;
        color: #f90;
        font-size: 15px;
        padding: 8px 2px 2px 0;
    }

    .list-address{
        padding: 10px;
        width:300px; 
        
    }
    .list-address p{
        padding: 5px 0;
        color: #666;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .list-address-right{
        
        float: right;
        width: 70px;
        height: 33px;
        margin-top:-70px;
        border-left: 1px #ddd8ce solid;
        padding-top: 16px;
    }
    .list-address-right span{
        
        
        padding-left: 20px;
        line-height: 1.2rem;
        color: #06c1ae;
    }

    .list-item{
        padding: 10px;
        display: block;
        border-bottom: 1px #ddd8ce solid;
        margin-bottom: 5px;
    }
    .list-item span{
        display: inline-block;
        padding:5px 10px;
        font-size: 13px;
        border:1px #f90e solid; 
        color: #f90;
        margin-right: 5px;
        margin-bottom: 5px;
        border-radius: 2px;
    }
    

    .list-xing{
        border-top:1px #ddd8ce solid;
        border-bottom:1px #ddd8ce solid;
        padding: 10px;
    }
    .list-xing .ping{
        color: #666;
        float: right;
        padding-right: 20px;

    }
    .list-xing .ping::after{
        display: block;
        content: "";
        width:7px;
        height:7px;
        border-top:1px #666 solid;
        border-right:1px #666 solid;
        transform: rotate(45deg);

        position: absolute;
        right:15px;
        top:595px;
        margin-top:-5px;
    }
    .list-xing span{
        padding-left: 2px;
        color:orange;
        font-size: 14px;
    }
    
    .list-group{
        padding: 20px 10px;
        display: block;  
        color: #6bbd00;
        font-size: 14px;
        border-bottom:10px #f0f0f0 solid;
    }
    .list-group li span{
        font-size: 15px;
    }
    .list-group li{
        font-size: 18px;
        display: inline-block;
        width: 50%;
    }
    .list-group span{
        font-size: 20px;
    }

    .list-jian{
        padding: 10px;
        border-bottom: 1px #ddd8ce solid;
    }
    .list-jian span{ 
        font-size: 5px;
        border-radius: 3px;
        padding:2px 3px;
        color: #fff;
        background: orange;
    }
    .list-jian i{
        font-size: 15px;
        font-style: normal;
        padding-left: 5px;
        color: #333;
    }
    .list-price{
        height: 40px;
        border-bottom: 1px #ddd8ce solid;
        padding: 10px;
    }
    .list-price button{
        border:0;
        color: #fff;
        background: rgb(243, 156, 43);
        font-size: 20px;
        height:40px; 
        border-radius:5px 5px 5px 5px;
        padding: 0 20px;
        float: right;
    }
    .list-price span{
        margin-right: 5px;
        font-size: 30px;
        font-weight: bold;
        color: #06c1ae;
    }
    .list-price i{
        font-style: normal;
        font-size: 15px;
        color: #666;
    }
    
    .list-topimg{
        /* box-shadow: 0 0 50px 0px rgba(0,0,0, 0.5) inset; 图片内阴影*/
        position: relative;
    }
    .list-topimg-btm{
            background: -webkit-linear-gradient(bottom,rgba(0,0,0,.58),rgba(0,0,0,.3) 64%,transparent);
            position: absolute;
                text-shadow: 1px 1px 1px #000;
            width: 100%;height: 75px;
            bottom: 0px;
    }
    .list-topimg-btm h2{
        font-style: normal;
        
        padding: 8px 16px;
        bottom:40px;
        font-size: 20px;
        color: #fff;
    }
    .list-topimg-btm span{
        
        padding-left: 16px;
        bottom:16px;
        font-size: 15px;
        color: #fff;
    }
    .list img{
        display: block;
        width:100%;
        height: 200px;position: relative;z-index: -1;
    }

    .like-header{
        height: 50px;
        line-height: 50px;
        color:#fff;
        text-align: center;
        background: #06c1ae;
        font-size: 18px;
        border-bottom: 1px #666 solid;

        position: relative;
    }
    .like-header-left{
        margin-right: 10px;
    }
    .like-header-left span{
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

    .like-header-center{
        flex:1;
        height: 32px;
        text-align:center;
        font-size: 18px;
        color:#fff;
        padding:0 10px;
    }


    .like-header-right{
       display: flex;
        justify-content: space-around;
        width: 78px;
        position: absolute;
        top: -5px;
        right: 3px;
       
    }

    .like-header-right span{
        width: 24px;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        
    }

    .like-header-right p{
        margin-left: -20px;
        width: 24px;
        font-size: .2rem;
        position: absolute;
        top: 18px;
    }
    .like-header-right i{
        font-style: normal;
        margin-left: 20px;
        width: 24px;
        font-size: .2rem;
        position: absolute;
        top: 18px;
    }

 
</style>
