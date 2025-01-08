<template>
  <div class="alpha">
    <p class="section-title">our&nbsp;<span style="color: #0bccbf;">values</span></p>

    <div class="section-alpha">
      <div class="section-content">
        <img src="@/assets/user2.svg" alt="icon" class="section-image" />
        <p class="content-title">User first</p>
        <p class="content-text">We always focus on the needs and voices of each user.</p>

      </div>

      <div class="section-content">
        <img src="@/assets/securitykey.svg" alt="icon" class="section-image" />

        <p class="content-title">Security and Reliability</p>
        <p class="content-text">We create a secure trading environment with top-tier security systems to safeguard
          user assets.</p>

      </div>

      <div class="section-content">
        <img src="@/assets/diverse.svg" alt="icon" class="section-image" />
        <p class="content-title">Diverse Growth</p>
        <p class="content-text">We offer a comprehensive range of products and services to meet the varied needs of
          our users, whether you are a novice or a professional.</p>
      </div>

      <div class="section-content">
        <img src="@/assets/innovative.svg" alt="icon" class="section-image" />
        <p class="content-title">Innovative Excellence</p>
        <p class="content-text">We focus on the rapidly changing Stocks, Option , CFD, Forex , Crypto Bonds and
          Real Estate market, leading development trends with a spirit of innovation.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection2"
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
  width: 50%;
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