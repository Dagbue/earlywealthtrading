<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/fund-wallet-icon.svg" alt="fund-wallet-icon"/>
          <i class='bx bx-x' @click="close"></i>
        </div>

        <div class="second-part">
          <p class="text-1">Max Slippage</p>
        </div>

        <div class="slider-container">
          <input
              type="range"
              :min="min"
              :max="max"
              :step="step"
              v-model="selectedValue"
              @input="snapToClosest"
          />

          <!-- Labels for the markers -->
          <div class="markers">
      <span
          v-for="point in points"
          :key="point"
          :style="{ left: getPosition(point) + '%' }"
          class="marker"
      >
        {{ point }}
      </span>
          </div>
        </div>

        <p class="last">If the rate changes between the time your order is placed and confirmed it's called "slippage". Your Swap will
        automatically cancel if slippage exceeds your "max slippage" setting.</p>

        <br/>
        <button @click="close">Proceed</button>

      </div>

    </dialog>
  </div>
</template>

<script>


export default {
  name: "WithdrawalModal2",
  data() {
    return {
      points: [10, 50, 100], // Allowed values
      selectedValue: 10, // Default value
      min: 10,
      max: 100,
      step: 1, // Smallest possible increment
    };
  },
  emits: ['close'],
  methods:{
    async close() {
      await this.$emit('close')
      // await Swal.fire({
      //   icon: 'success',
      //   title: 'Pending',
      //   text: 'Withdrawal Request Pending',
      // });
    },
    snapToClosest() {
      // Find the closest valid point
      const closest = this.points.reduce((prev, curr) =>
          Math.abs(curr - this.selectedValue) < Math.abs(prev - this.selectedValue) ? curr : prev
      );

      // Snap the slider to the closest point
      this.selectedValue = closest;
    },
    getPosition(value) {
      // Convert value to percentage based on min and max
      return ((value - this.min) / (this.max - this.min)) * 100;
    },
  },
}
</script>
<style scoped >

.slider-container {
  position: relative;
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

input[type="range"] {
  width: 100%;
}

.markers {
  position: relative;
  height: 20px;
}

.marker {
  position: absolute;
  bottom: -10px;
  transform: translateX(-50%);
  font-size: 14px;
  color: #ffffff;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 450px;
  height: 400px;
  /*height: auto;*/
  padding: 24px;
  border-radius: 5px;
  background-color: #0f171c;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
  border: 0.5px solid #3C4A57FF;
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
  color: #ffffff;
}

.text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  padding-top: 4%;
  padding-bottom: 5%;
  text-align: center;
}

.text-2{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 1%;
  padding-bottom: 2%;
}

.text-3{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 1.5%;
  padding-bottom: 2%;
}

.text-4, .text-5, .text-6{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
}

button{
  padding: 8px 55px;
  color: white;
  background-color: #5d78ff;
  border: 0.5px solid #5d78ff;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  float: right;
  margin-top: 2%;
}
button:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #0f171c;
  background-color: #ffffff;
  border: 0.5px solid #3C4A57FF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.last{
  color: #ffffff;
  padding-top: 10%;
  font-size: 14px;
  line-height: 1.3;
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 14vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 10.5rem);
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
  .alpha{
    width: 340px;
    height: 340px;
  }
}
</style>