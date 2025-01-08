<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Vision</p>

        <p class="text-2">Early Wealth firmly believes that blockchain technology can illuminate public life and continually
          increase the value of assets. We are dedicated to creating a Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate online
          trading platform for global customers, actively fostering a harmonious, stable, and secure investment
          environment.</p>

      </div>

    </div>

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Mission</p>

        <p class="text-2">At Early Wealth, we are user-centric and are progressively developing to become leaders in the
          Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate sector. Our foundation is built on security, user trust, and
          innovative spirit. We focus on the rapidly evolving Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate market,
          providing high-quality online trading services and safeguarding our users' assets.</p>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>


<style scoped>
.alpha{
  display: flex;
  margin-top: 6%;
  margin-bottom: 6%;
}

.section-alpha{
  background-color: transparent;
  border: 1px solid #141e26;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  width: 42.5%;
  padding: 25px 20px 25px 40px;
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
}



.section-2{
  /*margin-bottom: -10px;*/
  margin-right: 4%;
}

video{
  width: 100%;
  border-radius: 30px;
}
.text-1{
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  color: #FFFFFF;
}

.text-2{
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #8599a6;
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
  width: 55%;
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

  .alpha{
    display: block;
    margin-top: 6%;
    margin-bottom: 6%;
  }

  .section-alpha{
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 90%;
    margin-bottom: 20px;
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
    font-size: 43px;
    line-height: 45px;
    margin-bottom: 8px;
    /*width: 90%;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    text-align: left;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: left;
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
    margin-right: auto;
    margin-top: 5%;
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