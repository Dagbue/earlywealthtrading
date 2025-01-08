<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-body2/>
    <contact-map/>
    <home-section8/>
    <footer-home/>
  </div>
</template>

<script>
import ContactHeader from "@/components/Contact/ContactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ContactBody2 from "@/components/Contact/contact-body-2.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";


export default {
  name: "ContactView",
  components: {HomeSection8, ContactBody2, FooterHome, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>