<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Boost Your Trading <br/> Capital with a Deposit</p>

        <p class="text-2">No collateral, low interest, instant account credit!
          No need to complete KYC, systematic approval, funds credited in one second, below industry rates!
          Our top-up and capital increase service offers you more trading possibilities.</p>


<!--        <div class="button-group">-->
<!--          <div class="btn-1" @click="onPostClick">-->
<!--            Get Started-->
<!--            &lt;!&ndash;            <img src="@/assets/arrow-right-line.svg" alt="" class="" />&ndash;&gt;-->
<!--          </div>-->
<!--          &lt;!&ndash;          <div class="btn-1" @click="onPostClick2">&ndash;&gt;-->
<!--          &lt;!&ndash;            LogIn&ndash;&gt;-->
<!--          &lt;!&ndash;            &lt;!&ndash;            <img src="@/assets/arrow-right-line.svg" alt="" class="" />&ndash;&gt;&ndash;&gt;-->
<!--          &lt;!&ndash;          </div>&ndash;&gt;-->
<!--        </div>-->
      </div>

      <div class="section-2">
        <img src="@/assets/Web 3.png" alt="" class="image" />
        <!--        <video autoplay="" muted="" loop="">-->
        <!--          <source src="https://margex.com/videos/header_mobile_video.mp4" type="video/mp4">-->
        <!--        </video>-->
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: "AboutSection4"
}
</script>


<style scoped>
.section-alpha{
  padding-bottom: 5%;
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
  width: 45%;
  margin-left: 6%;
}

.section-2{
  width: 55%;
  margin-right: 3%;
}

video{
  width: 100%;
  border-radius: 30px;
}
.text-1{
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #8599a6;
  margin-bottom: 24px;
  width: 90%;
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
  width: 80%;
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

    width: 90%;

  }

  .text-1{
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 8px;
    /*width: 90%;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    text-align: center;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }



  .section-2{
    width: 100%;
    margin-right: 3%;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }

  .image{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  video{
    width: 100%;
    border-radius: 30px;
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