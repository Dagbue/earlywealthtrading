<template>
<div class="alpha">

  <p class="section-title">Where we're&nbsp;<span style="color: #0bccbf;">located</span></p>
  <p class="section-sub-text">
    Address : 75 Uxbridge Rd, London W5 5SL,England UK
  </p>

  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe width="100%" height="100%"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=75%20Uxbridge%20Rd,%20London%20W5%205SL,%20UK%20+(Assets%20Management%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
<!--      <a href='https://maps-generator.com/'>Maps Generator</a>-->
  </div>
  </div>






</div>
</template>

<script>
export default {
  name: "contact-map"
}
</script>

<style scoped>
.section-title {
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  margin-left: 5%;
}

.section-sub-text{
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  color: #8599a6;
  padding-bottom: 2%;
  margin-left: 5%;
}

.alpha{
  margin-top: 5%;
  margin-bottom: 5%;
}

.mapouter{position:relative;text-align:right;width:100%;height:573px;}
.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:573px;}
.gmap_iframe {height:573px!important;}


@media (max-width: 990px){

}

@media (max-width: 700px){
  .section-title {
    font-size: 35px;
  }
}

@media (max-width: 500px){

}
</style>