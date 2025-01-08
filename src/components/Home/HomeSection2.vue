<template>
  <div class="alpha">
    <p class="section-title">Why <span style="color: #0bccbf">Early Wealth?</span></p>

    <div class="section-alpha">
      <div class="section-content">
        <img src="@/assets/Web 2.png" alt="icon" class="section-image-1" />
        <div class="content">
          <p class="content-title">Security</p>
          <p class="content-text">Your assets are protected through a multi-signal (multi-signature)
            cold/hot wallet system</p>
        </div>
      </div>

      <div class="section-content">
        <img src="@/assets/diamond.png" alt="icon" class="section-image" />
        <div class="content">
          <p class="content-title">Reliability</p>
          <p class="content-text">Based on real-time market data, provide high liquidity and reliable pricing</p>
        </div>
      </div>
    </div>

    <div class="section-alpha">
      <div class="section-content">
        <img src="@/assets/247.png" alt="icon" class="section-image" />
        <div class="content">
          <p class="content-title">24/7 Customer Support</p>
          <p class="content-text">Company name supports 24/7 multilingual customer services</p>
        </div>
      </div>

      <div class="section-content">
        <img src="@/assets/prize.png" alt="icon" class="section-image" />
        <div class="content">
          <p class="content-title">Stability</p>
          <p class="content-text">Even in highly volatile markets, you can trade cryptocurrencies at the best prices</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection2"
}
</script>

<style scoped>
.alpha{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 5%;
}
.section-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 5%;
}
.section-title {
  font-weight: 700;
  font-size: 38px;
  line-height: 58px;
  color: #FFFFFF;
  padding-bottom: 3%;
}
.section-content{
  display: flex;
  width: 100%;
}
.content-title{
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  transition: color .5s;
}
.content-text{
  margin-top: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  white-space: pre-line;
  color: #8599a6;
  width: 90%;
}
.content{
  padding-left: 20px;
  padding-top: 10px;
}
.section-image{
  width: 17%;
}

.section-image-1{
  width: 17%;
}

@media (max-width: 700px) {
  .section-title {
    font-size: 30px;
    line-height: 48px;
  }

  .section-alpha{
    display: block;
  }

  .section-content{
    margin-bottom: 30px;
  }

  .section-image{
    width: 100px;
    height: 100px;
  }
}


@media (max-width: 500px) {


}
</style>