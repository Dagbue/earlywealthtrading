<template>
  <div class="admin">
    <faq-header/>
    <f-a-q-body/>
    <home-section8/>
    <footer-home/>
  </div>
</template>

<script>
import FaqHeader from "@/components/Faq/FaqHeader.vue";
import FAQBody from "@/components/Faq/f-a-q-body.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";

export default {
  name: "FaqView",
  components: {HomeSection8, FooterHome, FAQBody, FaqHeader}
}
</script>

<style scoped>

</style>