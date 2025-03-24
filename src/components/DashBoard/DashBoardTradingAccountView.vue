<template>
  <div>
    <div class="body">

      <form  id="InteracFundingCard" class="dashboard-body-wrapper align-center">

        <h4 class="header">Swap</h4>

        <h4 class="header-2">Trading Account</h4>

        <hr class="line-1"/>

        <div class="form-inner">
          <select class="account-select">
            <option value="account-1">Account 1  ${{UserDetails.user.totalDepositedAmount - UserDetails.user.totalWithdrawals | formatAmount2}}</option>
          </select>

          <select class="account-select-2" >
            <option value="eth">ETH</option>
          </select>

          <input type="number" v-model="amount" class="form-input"/>

          <p class="form-inner-text">$ {{UserDetails.user.totalDepositedAmount - UserDetails.user.totalWithdrawals | formatAmount2}} ETH Available to swap</p>

            <i class='bx bx-down-arrow-alt'></i>


          <input type="text" placeholder="Enter Wallet Address" class="form-input-2"/>
        </div>

        <div class="max-slippage">
          <p class="max-slippage-text">Max Slippage 2%</p>
          <p class="button-max" @click="showDialog">Get Quote</p>
        </div>

        <p class="text-block-51" style="" >
          Note: For security reasons, Early Wealth processes swaps by review once a day.
          For more information in this policy. Please see our wallet security page.
        </p>

        <br/>
        <base-button
            style="
                    border: 0.5px solid #5d78ff;
                    background-color: #5d78ff;"
            class="button"
            :loading="loading || loading2"
        >Proceed</base-button>

      </form>

    </div>
    <withdrawal-modal2 @close="hideDialog" v-if="dialogIsVisible" />
  </div>
</template>

<script>

import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import WithdrawalModal2 from "@/components/BaseComponents/modal/WithdrawalModal2.vue";


export default {
  name: "DashBoardTradingAccountView",
  components: {WithdrawalModal2, BaseButton},
  data() {
    return {
      amount: 0,
      email: "",
      password: "",
      dialogIsVisible: false,
    };
  },
  computed:{
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
      // readUserTrade: state => state.trade.readUserTrade,
      // bitcoinRate: state => state.auth.bitcoinRate,
    }),
    bitcoin() {
      if (this.UserDetails.user && this.bitcoinRate) {
        return (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      }
      return 'Loading...'; // or any default value when data isn't available yet
    }
  },
  methods: {
    async hideDialog() {
      this.dialogIsVisible = false;
    },

    async showDialog() {
      this.dialogIsVisible = true;


    },
  },
}
</script>

<style scoped>

.body{
  padding: 32px;
}

.header{
  font-weight: 500;
  font-size: 19px;
  color: #ffffff;
  text-align: center;
}

.header-2{
  font-weight: 900;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding-top: 5px;
}

.text-block-51 {
  font-size: 14px;
  padding-top: 20px;
  color: #6c757d;
  text-align: center;
}


h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.dashboard-body-wrapper.align-center {
  max-width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 93%;
}

.header{
  color: #FFFFFF;
  font-size: 20px;
}


.line-1 {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}

.line-2 {
  border-top: 1px solid #ffffff;
}

.bx-down-arrow-alt{
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 10px;
  font-size: 30px;
}

.form-inner{
  display: flex;
  flex-direction: column;
}

.account-select{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  margin-top: 2%;
}

.account-select-2{
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 2%;
}

option{
  text-align: center;
}

.form-inner-text{
  color: #ffffff;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 20px;
  font-size: 14px;
  letter-spacing: 1px;
}

.form-input{
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 10px 5px 10px;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin-top: 1%;
  font-size: 25px;
}

.form-input-2{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin-top: 1%;
}

.max-slippage{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 7%;
  margin-bottom: 3%;
  margin-left: 5%;
  margin-right: 5%;
}

.max-slippage-text{
  color: #ffffff;
  font-size: 15px;
}

.button-max {
  background-color: #5d78ff;
  padding: 15px 30px;
  color: #ffffff;
  border-radius: 10px;
  font-size: 15px;
}

@media (max-width: 700px) {
  .header{
    font-size: 18px;
  }


  hr {
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .dashboard-body-wrapper.align-center {
    max-width: unset;
    padding: 30px 20px;
    width: 100%;
  }

}
</style>