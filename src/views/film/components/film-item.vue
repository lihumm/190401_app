<template>

    <router-link :to="/film-detail/ + this.data.id">
        <div class="hot-item">
            <img :src="this.data.img" >

            <div class="hot-item-right">

                <div class="hot-item-info">
                    <h4>{{ this.data.nm }}</h4>
                    <p>观众评 <span> {{this.data.sc}} </span></p>
                    <p>主演: {{ this.data.star }}</p>
                    <p>{{ this.data.showInfo }}</p>
                </div>
                
                <button v-if="this.data.showst === 4" class="bg-blue">预售</button>
                <button v-if="this.data.showst === 3">购票</button>
                <button v-if="this.data.showst === 1" class="bg-yellow">想看</button>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["data"]
}
</script>

<style>
.hot-item{
    padding: 10px 0;
    display: flex;
}

.hot-item img{
    display: block;
    width:64px;
    height:90px;
    margin-right: 10px;
}

.hot-item-right{
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #eee solid;
    padding-bottom: 10px;
    overflow: hidden;
}

.hot-item-info{
    flex:1;
    overflow: hidden;
}

.hot-item-info p{
    font-size: 13px;
    line-height: 1.8;
    color:#666;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 5px;
}

.hot-item-info p span{
    color:orange;
    font-size: 16px;
    font-weight: bold;
}

.hot-item-right button{
    height: 27px;
    padding:0 10px;
    background: #f03d37;
    border:none;
    color:#fff;
    border-radius: 4px;
    margin-right: 20px;
}

.hot-item-right .bg-blue{
    background: #3c9fe6;
}

.hot-item-right .bg-yellow{
    background: orange;
}
</style>
