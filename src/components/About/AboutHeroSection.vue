<template>
  <div class="alpha">
    <p class="text-1">About Us</p>
    <p class="text-2">Early Wealth brand has been providing traders all over the world with cutting-edge
      financial technology, helping them make the most out of the markets.</p>

    <div class="partners">
      <img src="https://primexbt.com/_next/static/media/forbes.0ad17cc4.svg" alt="" class="img-fluid" />
      <img src="https://primexbt.com/_next/static/media/yahoo.a05b17ff.svg" alt="" class="img-fluid" />
      <img src="https://primexbt.com/_next/static/media/fxempire.f05d3507.svg" alt="" class="img-fluid" />
      <img src="https://primexbt.com/_next/static/media/investing.910c513b.svg" alt="" class="img-fluid" />
    </div>

    <p class="text-3">*Trademarks belong to their respective owners</p>

  </div>
</template>


<script>
export default {
  name: "AboutHeroSection"
}
</script>

<style scoped>
.alpha{
  background-image: url("@/assets/hero.png");
  /*background-color: #000;*/
  height: 90vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.text-1{
  color: #FFFFFF;
  text-align: center;
  font-size: 45px;
  padding-bottom: 10px;
  font-weight: bold;
  padding-top: 2%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  color: #8599a6;
  text-align: center;
  font-size: 18px;
  width: 60%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  line-height: 22px;
}

.text-3{
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  padding-top: 25px;
}

.partners{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1%;
}

.img-fluid{
  width: 10%;
}

.img-fluid-2{
  width: 100%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {

  .text-1{
    font-size: 40px;
    padding-top: 5%;
  }

  .text-2{
    width: 90%;
  }

  .img-fluid{
    width: 15%;
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