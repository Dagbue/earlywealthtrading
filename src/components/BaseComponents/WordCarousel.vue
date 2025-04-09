<template>
  <div class="carousel-wrapper">
    <div class="carousel-track">
      <span v-for="(word, index) in loopedWords" :key="index" class="carousel-word">
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordCarousel',
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // Duplicate words to ensure seamless looping
    loopedWords() {
      return [...this.words, ...this.words];
    },
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: #facccc;
  padding: 5px 0;
  border: 0.5px solid #f8b8b8;
}

.carousel-track {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-right 30s linear infinite;
}

.carousel-word {
  display: inline-block;
  padding: 0 15px;
  font-size: 0.8rem;
  color: #770101;
  letter-spacing: 0.5px;
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
