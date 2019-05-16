<template>
    <div class="footer">
        <button class="btnn">登录</button><button class="btnnn">注册</button>
                <span style="float:right;padding:15px;font-size:15px"><button class="btn3">广州</button></span>
                <span style="float:right;padding:15px;font-size:15px">城市:</span>
                <div class="bottom-u" style="margin:-40px 0 0 0 ">
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

</template>
<script>
export default {
  name: 'footer'
  
  
}
</script>

<style>
    .btnn{
        background: #f0efed;
        margin:15px 0 0 10px;
        padding: 2px;
        color: #06c1ae;
        font-size: 15px;
        width: 60px;
        border: 1px #06c1ae solid;
        
        border-radius: 5px;
    }
    .btnnn{
        background: #f0efed;
        margin:-30px 0 0 10px;
        left: 80px;
        padding: 2px;
        color: #06c1ae;
        font-size: 15px;
        width: 60px;
        border: 1px #06c1ae solid;
       
        border-radius: 5px;
    }
    .bottom-u{
      
        width: 100%;
        text-align:center;
        display: block;
        
    }
    .footer{
        position: relative;
        background: #f0efed;
    }
</style>