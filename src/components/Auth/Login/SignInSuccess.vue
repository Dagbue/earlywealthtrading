<template>
  <div class="alpha">
    <div class="image">
      <img src="@/assets/successcheck.svg" alt="fether">
    </div>

    <form @submit.prevent="signIn">

    <div class="text-area">
      <h3>Login success🥳</h3>
      <p>You have successfully Logged in to your<br/>
        Early Wealth account</p>
<!--      <p>{{bitcoinRate}}</p>-->
    </div>

    <div class="submit">
<!--      <button class="submit-btn"  @click="signIn">Proceed to DashBoard</button>-->
      <base-button
          :loading="loading"
          style="
  background: #0bccbf;
  border: 1px solid #0bccbf;
  color: #000;
"
      >
        Proceed to DashBoard
      </base-button>
    </div>

    </form>

  </div>
</template>

<script>

import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import router from "@/router";
import axios from "axios";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";


export default {
  name: "SignInSuccess",
  components: {BaseButton},
  data() {
    return {
      userId: "",
      userInfo: "",
      bitcoinRate: null,
      ethereumRate: null,
      loading: "false"
    };
  },
  computed:{
    ...mapState({
      auth: state => state.auth,
    }),
    userDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    userTrade() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)
    }
  },
  methods:{
    async signIn() {
      await this.localStore()
      await router.push("/over-view")
    },

    localStore(){
      StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId : localStorage.getItem('userId')
      })
      StoreUtils.commit(StoreUtils.mutations.auth.updateBitcoinRate, {
        bitcoinRate : this.bitcoinRate
      })
      StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
      StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
      StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
      localStorage.userId = this.userDetails.user.userId
      localStorage.userFirstName = this.userDetails.user.firstName
      localStorage.userLastName = this.userDetails.user.lastName
      localStorage.bitcoinRate = this.bitcoinRate
      localStorage.ethereumRate = this.ethereumRate
      localStorage.setItem('userInfo', JSON.stringify(this.userDetails.user));
      localStorage.setItem('userTrade', JSON.stringify(this.userTrade.trades));
      // console.log(localStorage)
    },

    // fetchBitcoinRate() {
    //   // Set loading to true when the request starts
    //   this.loading = true;
    //
    //   axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    //       .then(response => {
    //         this.bitcoinRate = response.data.bpi.USD.rate_float;
    //         // Set loading to false when the data is successfully fetched
    //         this.loading = false;
    //       })
    //       .catch(error => {
    //         console.error(error);
    //         // Set loading to false also if there is an error
    //         this.loading = false;
    //       });
    // }

    fetchBitcoinRate() {
      this.loading = true;
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
          .then(response => {
            this.bitcoinRate = response.data.bitcoin.usd;
            this.loading = false;
          })
          .catch(error => {
            console.error(error);
            this.loading = false;
          });
    },

    fetchEthereumRate() {
      this.loading = true;
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
          .then(response => {
            this.ethereumRate = response.data.ethereum.usd;
            this.loading = false;
          })
          .catch(error => {
            console.error(error);
            this.loading = false;
          });
    }


  },
  created() {
    this.fetchBitcoinRate()
    this.fetchEthereumRate()
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
  },
  mounted() {
    this.fetchBitcoinRate()
    this.fetchEthereumRate()
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 14%;
}


.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.text-area{
  margin-bottom: 1.5%;
}
.image{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8%;
}

.submit{
  display: flex;
  justify-content: center;
  margin-top: 1.5%;
  margin-left: 35%;
  margin-right: 35%;
}

.submit-btn{
  background-color: transparent;
  border: 1px solid #e4e8ee;
  color: #ffffff;
  padding: 12px 10% 12px 10%;
  border-radius: 5px;
}


.submit-btn:hover{
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
}

@media (max-width: 700px) {
  .submit-btn{
    padding: 12px 25% 12px 25%;
  }
  .submit{
    margin-top: 2%;
    margin-left: 8%;
    margin-right: 8%;
  }
}
</style>