<template>
    <div class="hot-list">
        
        <FilmItem  
        v-for="(item, key) in hotFilms" 
        :key="key"
        :data="item"
        ></FilmItem>

    </div>
</template>

<script>

import FilmItem from "./film-item.vue"
import axios from 'axios'

export default {
    data: () => {
        return {
            hotFilms: []
        }
    },
    components: {
        FilmItem
    },
    mounted: function(){
        
        axios.get("/ajax/movieOnInfoList?token=")
        .then((res) => {
            let {movieList} = res.data;

            // 修改图片的地址
            movieList = movieList.map((v) => {

                v.img = v.img.replace("w.h", "128.180");

                return v;
            })

            this.hotFilms = movieList;
        })
  
    }
}
</script>

<style>

.hot-list{
    padding:0 10px;
}

</style>
