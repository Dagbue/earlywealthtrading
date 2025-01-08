<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <div class="text-1">Unlock Your Financial Future  with Early Wealth.
          Secure, Stable, and Diverse Trading in Stocks, Option , CFD, Forex , Crypto ,Bonds and Real Estate
<!--          <span class="items-switch">-->
<!--            <span class="forex">Forex</span>-->
<!--            <span class="crypto">Crypto</span>-->
<!--            <span class="stocks">Stocks</span>-->
<!--            <span class="bond">Bond</span>-->
<!--          </span>-->
<!--          <span class="items-switch">-->
<!--            <span v-for="(item, index) in items" :key="item.name" :class="{active: currentIndex === index}" :style="{ color: item.color }">-->
<!--              {{ item.name }}-->
<!--            </span>-->
<!--          </span>-->
        </div>

        <p class="text-2"><span style="padding-right: 8px;">
          <img src="@/assets/gift.svg" alt="" class="store-image" />
        </span>Register,deposit and trade to receive new <br> user rewards</p>


        <div class="button-group">
          <div class="btn-1" @click="onPostClick">
            Get Started
<!--            <img src="@/assets/arrow-right-line.svg" alt="" class="" />-->
          </div>
          <div class="btn-1" @click="onPostClick2">
            LogIn
<!--            <img src="@/assets/arrow-right-line.svg" alt="" class="" />-->
          </div>
        </div>
      </div>

      <div class="section-2">
        <img src="@/assets/banner_third_logo.png" alt="" class="image" />
<!--        <video autoplay="" muted="" loop="">-->
<!--          <source src="https://margex.com/videos/header_mobile_video.mp4" type="video/mp4">-->
<!--        </video>-->
      </div>


    </div>

    <iframe  scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 100%;"></iframe>

<!--    <div class="section-3">-->

<!--      <div class="section-3-content">-->
<!--        <p class="text-3">2 Million</p>-->
<!--        <p class="text-4">Registered Users</p>-->
<!--      </div>-->

<!--      <div class="section-3-content">-->
<!--        <p class="text-3">30+</p>-->
<!--        <p class="text-4">Nations</p>-->
<!--      </div>-->

<!--      <div class="section-3-content">-->
<!--        <p class="text-3">300+</p>-->
<!--        <p class="text-4">Perpetual contracts</p>-->
<!--      </div>-->

<!--      <div class="section-3-content">-->
<!--        <p class="text-3">10ms</p>-->
<!--        <p class="text-4">Trading Interface Total Latency</p>-->
<!--      </div>-->

<!--    </div>-->


  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      currentIndex: 0,
      items: [
        { name: 'Forex', color: '#009688' },  // Red
        { name: 'RealEstate', color: '#984613' }  ,  // Yellow
        { name: 'Crypto', color: '#3071EE' }, // Green
        { name: 'Stocks', color: '#5d78ff' }, // Blue
        { name: 'CFD', color: '#fe9431' }    // Yellow
      ],
      intervalId: null
    };
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startRotation() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 2000); // Change item every 2000 milliseconds
    },
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  }
}
</script>

<style scoped>
.section-alpha{
  height: 600px;
}
.items-switch .active {
  display: inline; /* Show only active item */
}
.items-switch .active {
  display: inline; /* Show only active item */
}

.items-switch span {
  display: none; /* Hide all by default */
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  /*flex-direction: column;*/
}

.section-1{
  /*margin-top: 50px;*/
  margin-left: 5%;
  width: 40%;
}

.section-2{
  /*margin-bottom: -10px;*/
  width: 60%;
}

video{
  width: 100%;
  border-radius: 30px;
}
.text-1{
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: #FFFFFF;
  font-family: 'BR-Firma-Bold', sans-serif;

}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #8599a6;
  margin-bottom: 24px;
  display: flex;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 46px;
  padding: 8px 20px;
  border-radius: 5px;
  gap: 8px;
  background: #0bccbf;
  border: 1px solid #0bccbf;
  color: #000;
  width: 160px;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.button-group{
  display: flex;
  justify-content: left;
  gap: 10px;
}

.text-3{
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  color: #FFFFFF;
}

.text-4{
  margin-top: 2px;
  line-height: 19px;
  font-size: 16px;
  font-weight: 500;
  color: #8599a6;
}

.section-3{
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
  margin-bottom: 2%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {

  .section-alpha{
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 8px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    justify-content: center;
  }

  .btn-1{
    height: 40px;
    padding: 8px 16px;
    gap: 6px;
    width: 160px;
    font-size: 14px;
  }

  .button-group{
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: 10%;
    margin-top: 5%;
    width: 100%;
  }

  .section-1{
    width: 100%;
  }

  video{
    width: 100%;
    border-radius: 30px;
  }

  .image{
    width: 90%;
    margin-right: 15%;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 9px;
  }



  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>