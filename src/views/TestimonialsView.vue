<template>
  <div class="alpha">
    <testimonials-header/>
    <testimonials-body/>
    <home-section8/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonialsHeader from "@/components/Testimonials/TestimonialsHeader.vue";
import TestimonialsBody from "@/components/Testimonials/TestimonialsBody.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";

export default {
  name: "TestimonialsView",
  components: {HomeSection8, FooterHome, TestimonialsBody, TestimonialsHeader}
}
</script>

<style scoped>

</style>