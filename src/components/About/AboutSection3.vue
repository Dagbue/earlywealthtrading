<template>
  <div class="alpha">
    <p class="section-title">We&nbsp;<span style="color: #0bccbf;">Offer</span></p>

    <div class="section-alpha">
      <div class="section-content">
        <img src="@/assets/contract.svg" alt="icon" class="section-image" />
        <p class="content-title">Contract Trading</p>
        <p class="content-text">We support USDT-based and coin-based contracts with ample liquidity and low fees,
          allowing for long or short positions on over 300 different tokens.</p>

      </div>

      <div class="section-content">
        <img src="@/assets/spotwallet.svg" alt="icon" class="section-image" />

        <p class="content-title">Spot Trading</p>
        <p class="content-text">A wide range of promising tokens to choose from, discover the wealth code early,
          and easily build your investment portfolio.</p>

      </div>

      <div class="section-content">
        <img src="@/assets/copy-trading.svg" alt="icon" class="section-image" />
        <p class="content-title">Copy Trading</p>
        <p class="content-text">Follow trading experts with one click, significantly increasing your chances of profit.</p>
      </div>

      <div class="section-content">
        <img src="@/assets/arena.svg" alt="icon" class="section-image" />
        <p class="content-title">Trade Arena</p>
        <p class="content-text">Super simple gameplay! With just a minimum investment of 1,000 USD, correctly predict
          market trends to earn profits.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection3"
}
</script>

<style scoped>
.alpha{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
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
  font-size: 40px;
  line-height: 58px;
  color: #FFFFFF;
  padding-bottom: 3%;
}
.section-content{
  display: block;
  width: 30%;
  margin-top: 1%;
}
.content-title{
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  transition: color .5s;
  text-align: center;
}
.content-text{
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  white-space: pre-line;
  color: #8599a6;
  text-align: center;
}
.content{
  padding-left: 20px;
  padding-top: 10px;
}
.section-image{
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }

  .section-content{
    width: 90%;
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