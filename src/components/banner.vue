<template>
    <Carousel autoplay v-model="value3" arrow="never" :radius-dot="true" autoplay-speed=5000>
        <CarouselItem v-for="item in bannerImg">
            <div class="demo-carousel">
                <img :src="item.image"/>
            </div>
        </CarouselItem>
    </Carousel>
    
</template>


<script>
export default {
  name: "banner",
  data() {
    return {
      bannerImg: [
        { image: require("../assets/banner/banner1.png") },
        { image: require("../assets/banner/banner2.png") },
        { image: require("../assets/banner/banner3.png") },
        { image: require("../assets/banner/banner4.png") }
      ],
      value3: 0,
    };
  }
};
</script>
<style>
.demo-carousel {
  width: 100vw;
  height: auto;
}

.demo-carousel img {
  width: 100vw;
}

.ivu-carousel-dots-inside{
  bottom: 20px;
}

.ivu-carousel-dots li{
  margin: 0 3px;
}

.ivu-carousel-dots li button.radius{
  width: 10px;
  height: 10px;
  background: #ffffff
}

.ivu-carousel-dots li button{
  opacity: 1;
}

.ivu-carousel-dots li.ivu-carousel-active>button.radius{
  width: 10px;
  background: #9F9D95
}
</style>


