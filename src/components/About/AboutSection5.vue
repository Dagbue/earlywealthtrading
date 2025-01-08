<template>
  <div class="alpha">

    <p class="header-text">Compliance Matrix</p>
    <p class="header-sub-text">Early Wealth is a global digital financial services institution that is actively applying for additional licenses
      from various countries and organizations. It currently holds the following licenses and registration
      certificates:</p>

    <div class="alpha-2">
      <div class="section-alpha">

        <div class="section-1">

          <img src="@/assets/aboutbadge.png" alt="" class="image" />

          <p class="text-1">MSB license</p>

          <p class="text-2">Financial Transactions and Reports Analysis Centre (FINTRAC)</p>

        </div>

      </div>

      <div class="section-alpha">

        <div class="section-1">

          <img src="@/assets/aboutbadge.png" alt="" class="image" />

          <p class="text-1">Certified by Hacken</p>

          <p class="text-2">Hacken - Blockchain Security Auditor</p>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "AboutSection5"
}
</script>


<style scoped>
.alpha{

}

.alpha-2{
  display: flex;
  margin-top: 3%;
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
  width: 20%;
  margin-bottom: 10px;
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

.header-text{
  margin-left: 5%;
  font-size: 35px;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.header-sub-text{
  margin-left: 5%;
  font-size: 18px;
  width: 80%;
  color: #8599a6;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {

  .alpha-2{
    display: block;
    margin-top: 3%;
    margin-bottom: 6%;
  }

  .section-alpha{
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 90%;
    margin-bottom: 5%;
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
    text-align: center;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }


  .alpha-2{
    display: block;
    margin-top: 3%;
    margin-bottom: 6%;
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