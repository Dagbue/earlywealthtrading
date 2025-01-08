<template>
  <div class="alpha">
    <hero-section/>
    <home-section9/>
    <home-section1/>
    <home-section2/>
    <home-section3/>
    <home-section4/>
    <blog-table/>
    <home-section5/>
    <home-section6/>
    <home-section7/>
    <home-section8/>
    <footer-home/>
  </div>
</template>

<script>


import HeroSection from "@/components/Home/HeroSection.vue";
import HomeSection1 from "@/components/Home/HomeSection1.vue";
import HomeSection2 from "@/components/Home/HomeSection2.vue";
import HomeSection3 from "@/components/Home/HomeSection3.vue";
import HomeSection4 from "@/components/Home/HomeSection4.vue";
import BlogTable from "@/components/BaseComponents/tables/BlogTable.vue";
import HomeSection5 from "@/components/Home/HomeSection5.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import HomeSection6 from "@/components/Home/HomeSection6.vue";
import HomeSection7 from "@/components/Home/HomeSection7.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";
import HomeSection9 from "@/components/Home/HomeSection9.vue";

export default {
  name: 'HomeView',
  components: {
    HomeSection9,
    HomeSection8,
    HomeSection7,
    HomeSection6,
    FooterHome, HomeSection5, BlogTable, HomeSection4, HomeSection3, HomeSection2, HomeSection1, HeroSection}
}
</script>
