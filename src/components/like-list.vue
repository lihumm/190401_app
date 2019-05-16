<template>
    <div class="likes-wrapper">
        <div class="likes-title">
            猜你喜欢
        </div>
        

        <div class="like-list">
            
            <!-- 猜你喜欢 start -->
            <div class="like-item" v-for="(item, key) in likes" :key="key">
                
                <img :src="item.img">
                <router-link :to="item.path">
                    <div class="like-item-right">
                        <div>
                            <div class="like-title">
                                {{item.title}}
                            </div>
                            <p>
                                {{item.address}}
                            </p>
                        </div>

                        <div class="like-bottom">
                            <span>{{item.price}}元 </span>
                            <i>{{item.fprice}}</i>
                            <em>已售 {{item.last}} </em>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- 猜你喜欢 end -->

        </div>

    </div>
</template>

<script>
export default {
    name: "like_list",
    data: () => {
        return {
            likes: [{
                img: "http://p0.meituan.net/deal/40f9cfbd8c8a17f45850b1cfa63a520075722.jpg",
                title: "巴喜阳光BBQ自助餐厅",
                address: "[体育中心]单人自助午餐",
                price: "58",
                last: "33286",
                path:"/like"
            },
            {
                img: "http://p0.meituan.net/deal/3fd5e30a3496ac7cee7503592c42242d43773.jpg",
                title: "初见小面",
                address: "[15店通用]小小酸辣粉1份，提供免费wifi",
                price: "5.99",
                fprice: "门市价14元",
                last: "3424",
                path:"/like"
            }]
        }
    }
}
</script>
<style>
    .likes-wrapper{
        border-top:10px #eee solid;
        padding:0 10px;
        border-bottom: 1px #ddd8ce solid;
    }

    .likes-title{
        height:40px;
        line-height: 40px;
        border-bottom: 1px #eee solid;
    }

    .like-item{
        padding:10px 0;
        border-bottom:1px #eee solid;
        
    }

    .like-item img{
        float: left;
        width:90px;
        height:90px;
        display: block;
        margin-right:10px;
    }

    .like-item-right{
       
        padding: .28rem 0;
        display: flex;
        /*把方向改为上下*/
        flex-direction: column;
        /* 上下贴边对齐 */
        justify-content: space-between;
        flex:1;
    }

    .like-item-right p{
        font-size: 12px;
        color:#666;
        margin-top: 5px;
    }

    .like-bottom{
        padding-top:12px;
    }

    .like-bottom span{
        color: #06c1ae;
        font-size: 18px;
    }

    .like-bottom i{
        font-style: normal;
        font-size: 6px;
        color: #666;
    }
    .like-bottom em{
        
        font-style: normal;
        font-size: 12px;
        color:#666;
        float: right;
    }

</style>


