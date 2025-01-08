<template>
  <div>
    <pricing-header/>
    <pricing-body/>
    <home-section8/>
    <footer-home/>
  </div>
</template>

<script>
import PricingHeader from "@/components/Pricing/PricingHeader.vue";
import PricingBody from "@/components/Pricing/pricing-body.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "PricingView",
  components: {FooterHome, HomeSection8, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>