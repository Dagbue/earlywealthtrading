<template>
  <div>
    <div class="body">

      <form  @submit.prevent="validateAndSubmit" id="InteracFundingCard" class="dashboard-body-wrapper align-center">

        <h4 class="header">Withdrawal</h4>

        <h4 class="header-2">Trading Account</h4>

        <hr class="line-1"/>

        <div class="form-inner">
          <select class="account-select">
            <option value="account-1">Account Balance  ${{UserDetails.user.totalDepositedAmount - UserDetails.user.totalWithdrawals | formatAmount2}}</option>
          </select>

          <select class="account-select-2" >
            <option value="eth">ETH</option>
          </select>

          <input
              type="number"
              v-model="amount"
              class="form-input"
              required
              :class="{'error-border': showError2}"
              @change="validateAndSubmit2"
          />
          <p v-if="showError2" class="error-message-2">Your value must match the balance of : ${{ accountBalance }}</p>


          <p class="form-inner-text">{{ethereum}} ETH Available to transfer</p>

<!--          <p class="form-inner-text">Not enough ETH to complete this swap</p>-->

<!--          <p class="form-inner-text">You can withdraw up to {{ethereum}} ETH</p>-->

            <i class='bx bx-down-arrow-alt'></i>


          <input
              type="text"
              v-model="walletAddress"
              placeholder="Enter Wallet Address"
              class="form-input-2"
              required
              @input="clearValidationError"
          />
        </div>

        <p v-if="showError === true" class="error-message">Please match the format requested. ETH Wallet should be at least 42 characters long.</p>

        <div v-if="isBonusUser" class="max-slippage">
          <p class="max-slippage-text">Max Slippage {{ maxSlippage }}%</p>
          <p v-show="this.maxSlippage === 2.5" class="max-slippage-text-2">$11,279.28</p>
          <p v-show="this.maxSlippage === 5" class="max-slippage-text-2">$22,558.55</p>
          <p v-show="this.maxSlippage === 10" class="max-slippage-text-2">$45,117.10</p>
          <p class="button-max" @click="showDialog">Get Quote</p>
        </div>

        <div v-else class="max-slippage">
          <p class="max-slippage-text">Max Slippage {{ maxSlippage }}%</p>
          <p class="max-slippage-text-2">${{ slippagePercentage.toFixed(2) }}</p>
          <p class="button-max" @click="showDialog">Get Quote</p>
        </div>

        <p class="text-block-51" style="" >
          Note: If the rate changes between the time your order is placed and confirmed it's called "slippage".
          Your transfer will automatically cancel if slippage exceeds your "max slippage" setting.
        </p>

        <br/>
        <base-button
            style="
                    border: 0.5px solid #5d78ff;
                    background-color: #5d78ff;"
            class="button"
            :loading="loading"
        >Proceed</base-button>

      </form>

    </div>
    <withdrawal-modal2 @close="hideDialog" @slippageChanged="updateSlippage" v-if="dialogIsVisible" />
  </div>
</template>

<script>

import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import WithdrawalModal2 from "@/components/BaseComponents/modal/WithdrawalModal2.vue";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";


export default {
  name: "DashBoardTradingAccountView",
  components: {WithdrawalModal2, BaseButton},
  data() {
    return {
      amount: 0,
      email: "",
      password: "",
      dialogIsVisible: false,
      ethereumRate: null,
      walletAddress: "",
      maxSlippage: 2.5, // Default slippage
      calculatedSlippage: 0, // Holds the calculated slippage amount
      pattern: ".{64,}", // This pattern requires at least 64 characters
      showError: false, // Add this data property to manage error visibility
      showError2: false,
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
    ethereum() {
      if (this.UserDetails.user && this.ethereumRate) {
        return ((this.UserDetails.user.totalDepositedAmount - this.UserDetails.user.totalWithdrawals) / this.ethereumRate).toFixed(8);
      }
      return 'Loading...'; // or any default value when data isn't available yet
    },
    accountBalance() {
      return this.UserDetails.user
          ? this.UserDetails.user.totalDepositedAmount - this.UserDetails.user.totalWithdrawals
          : 0;
    },
    slippagePercentage() {
      return (this.maxSlippage / 100) * this.accountBalance;
    },
    isBonusUser() {
      return this.UserDetails?.user?.email === 'bwellsgoof@yahoo.com';
    }
  },
  methods: {

    async validateAndSubmit() {
      if (!this.walletAddress.startsWith("0x") || this.walletAddress.length !== 42) {
        this.showError = true;
      } else {
        this.showError = false;
        this.close();
      }
    },

    clearValidationError() {
        this.showError = false;
    },

    validateAndSubmit2() {
      const amountValue = parseFloat(this.amount); // Convert input value to a number
      const balanceValue = parseFloat(this.accountBalance.toFixed(2)); // Ensure precision

      this.showError2 = amountValue !== balanceValue; // If they are different, show error
    },


    async hideDialog() {
      this.dialogIsVisible = false;
    },

    async showDialog() {
      this.dialogIsVisible = true;
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
    },

    async close() {

      if (this.amount > (this.UserDetails.user.totalDepositedAmount - this.UserDetails.user.totalWithdrawals)) {
        await Swal.fire({
          icon: 'warning',
          // title: 'Pending',
          text: 'Not enough ETH to complete this withdrawal',
        });
      } else if (this.amount === 0) {
        await Swal.fire({
          icon: 'warning',
          // title: 'Pending',
          text: 'Not enough ETH to complete this withdrawal',
        });
      } else {
        await Swal.fire({
          icon: 'success',
          title: 'Pending',
          text: 'Withdrawal Request Pending',
        });
        await router.push('/over-view')
      }

    },

    updateSlippage(slippage) {
      this.maxSlippage = slippage;
    },
  },
  created() {
    this.fetchEthereumRate()
  },
  mounted() {
    this.fetchEthereumRate()
  },
  watch: {
    maxSlippage(newValue) {
      this.calculatedSlippage = (newValue / 100) * this.accountBalance;
    }
  }
}
</script>

<style scoped>

.error-message {
  color: rgba(166, 25, 16, 0.7);
  font-size: 0.8rem;
  margin-top: 7px;
  text-align: left;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.error-border {
  border: 2px solid rgba(166, 25, 16, 0.7) !important;
}
.error-message-2 {
  color: rgba(166, 25, 16, 0.7);
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
}


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
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 7px;
  border-radius: 7px;
  border: none;
  margin-top: 2%;
}

.account-select-2{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 7px;
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
  width: 27%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 8px 3px 8px;
  border-radius: 7px;
  border: none;
  text-align: center;
  margin-top: 1%;
  font-size: 25px;
}

.form-input-2{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 7px;
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

.max-slippage-text-2{
  color: rgba(87, 233, 100, 0.44);
  font-size: 18px;
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