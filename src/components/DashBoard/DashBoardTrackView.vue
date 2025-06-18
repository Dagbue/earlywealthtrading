<template>
  <div class="alpha">


    <div class="balance-section">
      <div class="balance-section-1">
        <p class="balance-text-1">Gross Profit</p>
        <p class="balance-text-2 green">+$ 4.2M</p>
        <div class="balance-section-1-inner">
          <div>
            <p class="balance-text-3">Realized Profit</p>
            <p class="balance-text-4">$4.1M</p>
          </div>

          <div>
            <p class="balance-text-4">(+ 989%)</p>
          </div>

        </div>
        <div class="balance-section-1-inner">
          <div>
          <p class="balance-text-5">Unrealized</p>
          <p class="balance-text-8">$200,000</p>
          </div>

          <div>
            <p class="balance-text-8">(- 76% )</p>
          </div>
        </div>
      </div>

      <div class="balance-section-1">

        <div class="balance-section-1-inner">
          <div>
            <p class="balance-text-1">Win Rate</p>
            <p class="balance-text-2">89.27%</p>
          </div>

          <div>
            <p class="balance-text-4"><span style="color: rgb(0 228 146);" >120</span> / <span style="color: rgb(255 85 116)">205</span></p>
          </div>
        </div>

        <div>
          <p class="balance-text-3">Balance</p>
          <p class="balance-text-4">$4.1M</p>
        </div>

        <div class="seperate-3">
          <p class="balance-text-3">Trading Volume</p>
          <p class="balance-text-7">$102,500</p>
        </div>


        <div class="seperate-2">
          <div>
            <p class="balance-text-3">trades</p>
            <p class="balance-text-7">207</p>
          </div>

          <div>
            <p class="balance-text-3">Avg. Trade size</p>
            <p class="balance-text-7">$500</p>
          </div>
        </div>
      </div>


<!--      <div class="balance-section-1-last">-->
<!--        <p class="balance-text-1">Balance</p>-->
<!--        <p class="balance-text-2">$4.1M</p>-->
<!--        <div class="balance-section-1-inner">-->
<!--          <p class="balance-text-3">Trading Volume</p>-->
<!--          <p class="balance-text-4">$102,500</p>-->
<!--        </div>-->
<!--        <div class="balance-section-1-inner">-->
<!--          <p class="balance-text-5">Trades</p>-->
<!--          <p class="balance-text-5">205</p>-->
<!--        </div>-->
<!--        <div class="balance-section-1-inner">-->
<!--          <p class="balance-text-5">Avg. Trade Size</p>-->
<!--          <p class="balance-text-5">$500</p>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="navigation-bar">
      <p
          class="navigation-bar-text-1"
          :class="{ active: screen5 === 'pnl' }"
          @click="changeScreen('pnl')"
      >
        PnL Calculator
      </p>
      <p
          class="navigation-bar-text-1"
          :class="{ active: screen5 === 'placeTrade' }"
          @click="changeScreen('placeTrade')"
      >
        Balance
      </p>
      <p
          class="navigation-bar-text-1"
          :class="{ active: screen5 === 'TradeHistory' }"
          @click="changeScreen('TradeHistory')"
      >
        Trading history
      </p>
      <!--      <p-->
      <!--          class="navigation-bar-text-1"-->
      <!--          :class="{ active: screen5 === 'Buying' }"-->
      <!--          @click="changeScreen('Buying')"-->
      <!--      >-->
      <!--        Buying-->
      <!--      </p>-->
      <!--      <p-->
      <!--          class="navigation-bar-text-1"-->
      <!--          :class="{ active: screen5 === 'Selling' }"-->
      <!--          @click="changeScreen('Selling')"-->
      <!--      >-->
      <!--        Selling-->
      <!--      </p>-->
<!--      <p-->
<!--          class="navigation-bar-text-1"-->
<!--          :class="{ active: screen5 === 'watchList' }"-->
<!--          @click="changeScreen('watchList')"-->
<!--      >-->
<!--        Watchlist-->
<!--      </p>-->
    </div>

    <div v-show="this.screen5 === 'pnl'" class="last">
<!--      <div class="body">-->
<!--        <h2>My trade history</h2>-->
<!--        <div class="row trans-mgt">-->
<!--          <div class="form-group fg&#45;&#45;search">-->
<!--            <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>-->
<!--            <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search trades..." v-model="searchQuery" @input="filterTrades"/>-->
<!--          </div>-->
<!--          <div class="row filter_group">-->
<!--            <div class="action-content">-->
<!--              <p>Filter</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div  class="section-5">

<!--        <div class="empty-state-container" >-->
<!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
<!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
<!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

<!--        </div>-->


        <div class="table"  >
          <table>
            <tr style="background-color: #FFFFFF;">
              <th>Token</th>
              <th>Total Profit</th>
              <th>Realized</th>
              <th>Unrealized</th>
              <th>Trading Volume</th>
              <th>Trades</th>
              <th>Avg. Trade Size</th>
              <th>Balance</th>
<!--              <th>Trade Status</th>-->
            </tr>
<!--            <div v-if="loading">-->
<!--              <div class="table-content">-->
<!--                <div class="name-wrapper-body">-->
<!--                  <p-->
<!--                      class="table-body-text"-->
<!--                      style="position: absolute;-->
<!--                    margin-left: 45%"-->
<!--                  >-->
<!--                    <base-loader/>-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <tbody >
            <tr>
              <td data-label="Token">ETH</td>
              <td data-label="Total Profit" style="color: rgb(0 228 146);">$4.2M</td>
              <td data-label="Realized" style="color: rgb(0 228 146);">$ 4.1M</td>
              <td data-label="Unrealized" style="color: rgb(255 85 116)">$200,000</td>
              <td data-label="Trading Volume" >$102,500</td>
              <td data-label="Trades">205</td>
              <td data-label="Avg. Trade Size">$500</td>
              <td data-label="Balance">$4.1M</td>
<!--              <td data-label="Trade Status">-->
<!--                <div>-->
<!--                  <p class="status-won" v-show="child.tradeStatus === 'won'">{{child.tradeStatus}}</p>-->
<!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
<!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
<!--                </div>-->
<!--              </td>-->
            </tr>
            </tbody>
          </table>

          <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
            <div class="page-indicator">
              Page {{ currentPage }} of {{ totalPages }}
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="this.screen5 === 'placeTrade'" class="last">
      <!--      <div class="body">-->
      <!--        <h2>My trade history</h2>-->
      <!--        <div class="row trans-mgt">-->
      <!--          <div class="form-group fg&#45;&#45;search">-->
      <!--            <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>-->
      <!--            <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search trades..." v-model="searchQuery" @input="filterTrades"/>-->
      <!--          </div>-->
      <!--          <div class="row filter_group">-->
      <!--            <div class="action-content">-->
      <!--              <p>Filter</p>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div  class="section-5">

        <!--        <div class="empty-state-container" >-->
        <!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
        <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
        <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

        <!--        </div>-->


        <div class="table"  >
          <table>
            <tr style="background-color: #FFFFFF;">
              <th>Token</th>
              <th>Profit</th>
              <th>Realized</th>
              <th>Unrealized</th>
              <!--              <th>Trade Status</th>-->
            </tr>
            <!--            <div v-if="loading">-->
            <!--              <div class="table-content">-->
            <!--                <div class="name-wrapper-body">-->
            <!--                  <p-->
            <!--                      class="table-body-text"-->
            <!--                      style="position: absolute;-->
            <!--                    margin-left: 45%"-->
            <!--                  >-->
            <!--                    <base-loader/>-->
            <!--                  </p>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <tbody >
            <tr>
              <td data-label="Token">ETH</td>
              <td data-label="Total Profit" style="color: rgb(0 228 146);">$4.2M</td>
              <td data-label="Realized" style="color: rgb(0 228 146);">$ 4.1M</td>
              <td data-label="Unrealized" style="color: rgb(255 85 116)">$200,000</td>
              <!--              <td data-label="Trade Status">-->
              <!--                <div>-->
              <!--                  <p class="status-won" v-show="child.tradeStatus === 'won'">{{child.tradeStatus}}</p>-->
              <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
              <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
              <!--                </div>-->
              <!--              </td>-->
            </tr>
            </tbody>
          </table>

          <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
            <div class="page-indicator">
              Page {{ currentPage }} of {{ totalPages }}
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="this.screen5 === 'TradeHistory'" class="last">
            <div class="body">
<!--              <h2>My trade history</h2>-->
              <div class="row trans-mgt">

                <div class="seperate">

                  <select class="select-form">
                    <option value="eth">ETH</option>
                  </select>

                  <select v-model="selectResult" class="select-form">
                    <option value="7">7</option>
                    <option value="30">30</option>
                  </select>

                </div>

                <div class="row filter_group">
                  <img width="17" height="17" src="@/assets/icons8-menu-30.png" alt="bulleted-list"/>
                  <img width="17" height="17" src="@/assets/icons8-bulleted-list-30.png" alt="bulleted-list"/>
                </div>
              </div>
            </div>
      <div  class="section-5">

        <!--        <div class="empty-state-container" >-->
        <!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
        <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
        <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

        <!--        </div>-->


        <div class="table"  >
          <table>
            <tr style="background-color: #FFFFFF;">
              <th>Asset</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Time</th>
              <!--              <th>Trade Status</th>-->
            </tr>
            <!--            <div v-if="loading">-->
            <!--              <div class="table-content">-->
            <!--                <div class="name-wrapper-body">-->
            <!--                  <p-->
            <!--                      class="table-body-text"-->
            <!--                      style="position: absolute;-->
            <!--                    margin-left: 45%"-->
            <!--                  >-->
            <!--                    <base-loader/>-->
            <!--                  </p>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <tbody >
            <tr>
              <td data-label="Asset">AAPL</td>
              <td data-label="Type" style="color: rgb(255 85 116)">Sell</td>
              <td data-label="Amount" >$200, 00</td>
              <td data-label="Price">192</td>
              <td data-label="Time">1d</td>
            </tr>
            <tr>
              <td data-label="Asset">TSLA</td>
              <td data-label="Type" style="color: rgb(255 85 116)">Sell</td>
              <td data-label="Amount">$125,000</td>
              <td data-label="Price">317</td>
              <td data-label="Time">1d</td>
            </tr>
            </tbody>
          </table>

          <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
            <div class="page-indicator">
              Page {{ currentPage }} of {{ totalPages }}
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
          </div>
        </div>

                <div class="empty-state-container" v-show="this.selectResult === '30'" >
<!--                  <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
                  <p style="text-align: center;color: rgb(255 85 116); font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">To unlock your complete trading history</p>
                  <p style="text-align: center;color: rgb(255 85 116); font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">Simply log in to your account and enter your trade ID. Start exploring your trading journey today!</p>

                </div>
      </div>
    </div>

    <watch-list-table2 style="margin-top: 10px;" v-show="this.screen5 === 'watchList'" />


  </div>
</template>


<script>

import WatchListTable2 from "@/components/BaseComponents/tables/tables/WatchListTable2.vue";

export default {
  name: "DashBoardTrackView",
  components: {WatchListTable2},
  data () {
    return {
      history: [],
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 1,
      screen1: "Forex",
      screen2: "Crypto",
      screen3: "CFD",
      screen4: "Stocks",
      screen5: "pnl",
      screen6: "RealEstate",
      userId: "",
      userInfo: "",
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
      amountTrade: "",
      symbolTraded: "",
      tradeTime: "",
      tradeType: "",
      leverage: "",
      dollars: 0,
      // bitcoin: null,
      bitcoinRate: null,
      dialogIsVisible: false,
      searchQuery: "", // Data property to hold the search input
      selectResult: 7
    }
  },

  methods: {

    changeScreen(screen) {
      this.screen5 = screen;
    },

    // This method prepares all the necessary data before the API call
    async beforeAction() {
      // Load the userId from localStorage
      this.userId = localStorage.getItem('userId');
      if (!this.userId) {
        console.error("User ID is missing. Please log in.");
        return;
      }

      // Generate the necessary data before making the API call
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
    },


    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },


    checkId(){
      this.dialogIsVisible = this.UserDetails.user.frontId === "";
    },


    loadBitcoinRate() {
      this.bitcoinRate = localStorage.getItem('bitcoinRate') || null;
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not found, please reload or check the storage.');
      }
    },



    convertToBitcoin() {
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not loaded. Please wait or try reloading the page.');
        return;
      }
      if (this.UserDetails.user && this.UserDetails.user.totalDepositedAmount) {
        this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      } else {
        console.log('User details are not available.');
      }
    },

    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    filterTrades() {
      // Reset to the first page when filtering
      this.currentPage = 1;
    },
    toggleScreen() {
      this.screen1 = "Forex"
      this.screen5 = "placeTrade"
    },
    toggleScreen2() {
      this.screen1 = this.screen2
      this.screen5 = "placeTrade"
    },
    toggleScreen3() {
      this.screen1 = this.screen3
      this.screen5 = "placeTrade"
    },
    toggleScreen4() {
      this.screen1 = this.screen4
      this.screen5 = "placeTrade"
    },

    toggleScreen5() {
      this.screen1 = this.screen6
      this.screen5 = "placeTrade"
    },



    clearForm(){
      this.tradeTime = "";
      this.symbolTraded = "";
      this.amountTrade = "";
      this.expectedPayout = "";
      this.leverage = "";
      this.endPrice = "";
      this.marketType = "";
      this.endTime = "";
      this.tradeStatus = "";
      this.tradeReference = "";
      this.tradeType = "";
      this.randomString = "";
      this.randomString2 = "";
      this.currentDate2 = "";
      this.currentDate = "";
    },

    // Function to get current date (YYYY-MM-DD format)
    getCurrentDate() {
      const today = new Date();
      this.currentDate2 = today.toISOString().split('T')[0];
    },

    // Function to get current date and time (YYYY-MM-DD HH:mm:ss format)
    getCurrentDateTime() {
      const today = new Date();
      this.currentDate = today.toISOString().slice(0, 19).replace("T", " ");
    },
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    },
  },
}
</script>

<style scoped>



.last{
  margin-top: 1%;
}

.balance-section{
  display: flex;
  justify-content: space-evenly;
  margin-top: 1%;
}

.balance-section-1{
  background-color: #0f171c;
  padding: 1.2rem;
  width: 600px;
  height: 250px;
  border-radius: 7px;
  padding-right: 2rem;
}

.balance-section-1-last{
  background-color: #0f171c;
  padding: 1.2rem;
  width: 400px;
  height: 220px;
  border-radius: 7px;
}


.balance-text-1{
  font-size: 18px;
  color: #FFFFFF;
  padding-bottom: 5px;
}

.balance-text-2{
  font-size: 1.3rem;
  line-height: 2rem;
  color: rgb(0 228 146);
  padding-bottom: 5px;
}

.green{
  color: rgb(0 228 146);
}

.balance-text-3{
  font-size: 15px;
  color: #ffffff;
  padding-bottom: 5px;
}

.balance-text-4{
  font-size: 14px;
  color: rgb(0 228 146);
}

.balance-text-5{
  font-size: 12px;
  color: #FFFFFF;
}

.balance-text-6{
  font-size: 12px;
  color: rgb(255 85 116);
}

.balance-text-7{
  font-size: 13px;
  padding-bottom: 8px;
  color: #FFFFFF;
}

.balance-text-8{
  font-size: 13px;
  padding-bottom: 8px;
  color: rgb(255 85 116);
}



.balance-section-1-inner{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.navigation-bar {
  background-color: #0f171c;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 10px;
  border-radius: 5px;
}

.navigation-bar-text-1 {
  color: #ffffff;
  font-size: 12px;
  cursor: pointer; /* Add cursor pointer for better UX */
}

.active {
  background-color: rgba(216, 216, 216, 0.2);
  color: #ffffff;
  padding: 13px 20px 12px 20px;
  border-radius: 5px;
}


.text-2{
  color: #770101;
  background-color: #facccc;
  border-color: #f8b8b8;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}
.status-pending{
  background-color: #FE9431;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-won{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-lost{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
i{
  font-size: 13px;
}
.table-sep{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 5px;
}
.empty-state-container{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 3%;
}
.empty-state{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}


.lawrence{
  display: flex;
  gap: 10px;
}
.section-2{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-right: 3%;
  padding-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
}
.section-2-part-1{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 5px;
}

.trade-btn-1{
  padding: 7px 10px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 25px;
  background: #E50202;
  color: #ffffff;
  border: 1px solid #E50202;
  border-radius: 4px;
}

.trade-btn-1:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-2{
  padding: 7px 10px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 25px;
  background: #10d876;
  color: #ffffff;
  border: 1px solid #10d876;
  border-radius: 4px;
}

.trade-btn-2:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-3{
  padding: 7px 10px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 25px;
  background: #FE9431;
  color: #ffffff;
  border: 1px solid #FE9431;
  border-radius: 4px;
}

.trade-btn-3:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-4{
  padding: 7px 10px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 25px;
  background: #5d78ff;
  color: #ffffff;
  border: 1px solid #5d78ff;
  border-radius: 4px;
}

.trade-btn-4:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-5{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 130px;
  height: 30px;
  background: indianred;
  color: #ffffff;
  border: 1px solid indianred;
  border-radius: 4px;
}

.trade-btn-4:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}

.fund-wallet{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 14px;
  gap: 5px;
  font-size: 12px;
  width: 180px;
  height: 30px;
  background: #0f171c;
  color: #ffffff;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 3%;
}

.fund-wallet:hover{
  background: #ffffff;
  color: #0f171c;
  border: 0.5px solid #ffffff;
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);*/
}

.section-2-part-2{
  display: flex;
  align-content: center;
  align-items: center;
}


.section-3{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1183px;
  height: 110px;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  border-radius: 4px;
  margin-left: 0.5%;
}

.section-3-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 20%;
}

.vl-2{
  border-left: 1px solid #E7E8F0;
  height: 50px;
  margin-left: 1%;
  margin-right: 1%;
}

.content-1-text-1{
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.content-1-text-2{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.separate{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 40px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 500px;
  background: #FFFFFF;
  margin-top: 1.5%;
  color: #667085;
  border-radius: 8px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 500px;
  background: #FFFFFF;
  margin-top: 1.5%;
  color: #667085;
}

option{
  color: #667085;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}


.select-form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  line-height: 5px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 40px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100px;
  background: #0f171c;
  margin-top: 1%;
  color: #ffffff;
}

option{
  color: #667085;
}

.select-form:focus {
  outline: none;
}

.select-form::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.seperate{
  display: flex;
  gap: 5px;
}

.seperate-2{
  display: flex;
  justify-content: space-between;
}

.seperate-3{
  margin-top: 1%;
}

.form-part{
  max-width: 580px;
  width: 70%;
  margin: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #0f171c;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}

.body{
  margin-right: 3%;
  margin-left: 2%;
}

h2{
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 1.5%;
}
.row{
  display: flex;
  align-content: center;
  align-items: center;
}
.trans-mgt{
  margin-bottom: 1%;
}
.filter_group{
  margin-left: auto;
  gap: 5px;
}


.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  color: #FFFFFF;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

table {
  border-collapse: collapse;
  width: 100%;
  /*margin-top: 10px;*/
}
.table{
  margin-left: 3%;
  margin-right: 4%;
  margin-bottom: 1%;
}

tr{
  border: 0.5px solid #3C4A57FF;
}

th {
  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  /*letter-spacing: 1px;*/
  color: #ffffff;
  font-weight: 200;
  font-size: 12px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 20px;
  gap: 8px;
  /*width: 88px;*/
  height: 36px;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
  text-align: center;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #ffffff;
  font-size: 13px;
}

/*tr td:first-child:before*/
/*{*/
/*  counter-increment: Serial;      !* Increment the Serial counter *!*/
/*  content:counter(Serial); !* Display the counter *!*/
/*}*/

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #ffffff;
  /*border: 1px solid #1570EF;*/
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #ffffff;
  font-weight: 200;
  font-size: 13px;
}

.tradingview_7a2ab-wrapper{
  position: relative;
  box-sizing: content-box;
  margin: 0px auto !important;
  padding: 0px !important;
  width: 580px;
  height: 570px;
}

.name-wrapper-body {
  width: 12%;
  height: 100%;
  align-items: center;
  padding-left: 16px;
  display: flex;
}
.table-content {
  height: 35px;
  /*border-bottom: 1px solid rgba(0, 0, 0, .13);*/
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
  align-content: center;
}

.fa-search{
  color: #FFFFFF;
}
@media (max-width: 700px) {

  .fund-wallet{
    display: none;
  }


  .form-part {
    max-width: 615px;
    width: 100%;
    padding: 22px 25px;
    margin-top: 5%;
  }

  .separate{
    display: block;
    margin-right: unset;
    margin-left: unset;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .form-group input {
    width: 100%;
  }


  .form-group select {
    width: 100%;
  }

  .tradingview_7a2ab-wrapper{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .last{
    margin-top: 4%;
  }

  h2{
    font-size: 15px;
  }

  .lawrence{
    gap: 10px;
  }

  .trade-btn-1{
    width: 110px;
    height: 33px;
  }

  .trade-btn-2{
    width: 110px;
    height: 33px;
  }

  .trade-btn-3{
    width: 110px;
    height: 33px;
  }

  .trade-btn-4{
    width: 110px;
    height: 33px;
  }

  th {
    display: none;
  }

  table, thead, tbody, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 0.5px solid #ccc;
  }

  td {
    /* Each cell is now a full-width row */
    border: none;
    position: relative;
    padding-left: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  td:before {
    /* Use the data-label for the pseudo-element content */
    content: attr(data-label);
    position: absolute;
    left: 10px;
    padding-left: 5%;
    font-weight: bold;
  }

  .balance-section{
    display: block;
  }

  .balance-section-1{
    width: 95%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 15px;
  }

  .balance-section-1-last{
    width: 95%;
    height: 155px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .navigation-bar {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 10px;
  }

  .navigation-bar-text-1 {
    font-size: 17px;
    padding: 8px 12px;
  }

  .active {
    padding: 10px 16px;
  }

  .section-2 {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding-right: unset;
    margin-bottom: unset;
    margin-top: 2.5%;
  }

  .section-2-part-1 {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }

  .section-2-part-2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .trade-btn-1,
  .trade-btn-2,
  .trade-btn-3,
  .trade-btn-4{
    width: 105px;
    font-size: 10px;
    height: auto;
    padding: 8px;
  }

  .trade-btn-5 {
    width: 120px;
    font-size: 10px;
    height: auto;
    padding: 8px;
  }

}

@media (max-width: 500px) {
  .trade-btn-1{
    width: 90px;
    height: 30px;
    font-size: 9px;
  }

  .trade-btn-2{
    width: 90px;
    height: 30px;
    font-size: 9px;
  }

  .trade-btn-3{
    width: 90px;
    height: 30px;
    font-size: 9px;
  }

  .trade-btn-4{
    width: 90px;
    height: 30px;
    font-size: 9px;
  }

  .form-part{
    max-width: unset;
    width: 97%;
    margin-top: 5%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .filter_group{
    display: none;
  }

  .lawrence{
    gap: 5px;
  }

  .section-2-part-1{
    gap: 5px;
  }

  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .empty-state{
    width: 30%;
  }

  .navigation-bar {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 5px;
  }

  .navigation-bar-text-1 {
    font-size: 15px;
    text-align: center;
    padding: 10px;
    width: 100%;
  }

  .active {
    padding: 10px;
    font-weight: bold;
  }

  .text-2{
    font-size: 15px;
  }

}
</style>