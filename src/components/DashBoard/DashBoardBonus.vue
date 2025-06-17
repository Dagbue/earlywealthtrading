<template>
  <div class="alpha">


    <div class="section-2">



      <div class="section-2-part-2">

        <p v-show="isBonusUser2" class="fund-wallet" @click="onPostClick">
          <i class='bx bx-plus' ></i>
          Add deposit
        </p>

        <p v-show="isBonusUser" class="fund-wallet" @click="onPostClick">
          <i class='bx bx-plus' ></i>
          Add deposit
        </p>

      </div>
    </div>

    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 99%; margin-bottom: 1%;"></iframe>

    <div v-show="isBonusUser2" >
      <div class="law">
        <div class="section-3">

          <div class="section-3-content">
            <div class="content-1">
              <p class="content-1-text-1">Bonus Balance</p>
              <div>
                <p class="content-1-text-2" >$ 0</p>
              </div>
            </div>
            <div class="content-2">
              <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
            </div>
          </div>

          <div class="vl-2"></div>


        </div>
      </div>

      <div class="last">
        <div class="body">
          <h2>My Bonus history</h2>
          <div class="row trans-mgt">
            <div class="form-group fg--search">
              <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
              <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search bonus..." v-model="searchQuery" @input="filterTrades"/>
            </div>
            <div class="row filter_group">
              <div class="action-content">
                <p>Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-5">

          <!--        <div class="empty-state-container" v-if="this.readUserTrade.trades.length === 0">-->
          <!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

          <!--        </div>-->


          <div class="table"  >
            <table>
              <tr style="background-color: #FFFFFF;">
                <th>Amount</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Status</th>
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
                <td data-label="Amount">$ 50,000</td>
                <td data-label="Duration">20 trades</td>
                <td data-label="Date">APR 28 12:27 PM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              </tbody>
            </table>

            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
              <!--            <div class="page-indicator">-->
              <!--              Page {{ currentPage }} of {{ totalPages }}-->
              <!--            </div>            -->
              <div class="page-indicator">
                Page 1 of 1
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
            </div>
          </div>
        </div>
      </div>

      <div class="last">
        <div class="body">
          <h2>Repayment history</h2>
          <div class="row trans-mgt">
            <div class="form-group fg--search">
              <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
              <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search bonus..." v-model="searchQuery" @input="filterTrades"/>
            </div>
            <div class="row filter_group">
              <div class="action-content">
                <p>Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-5">

          <!--        <div class="empty-state-container" v-if="this.readUserTrade.trades.length === 0">-->
          <!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

          <!--        </div>-->


          <div class="table" >
            <table>
              <tr style="background-color: #FFFFFF;">
                <th>Amount</th>
                <!--              <th>Duration</th>-->
                <th>Date</th>
                <th>Status</th>
              </tr>
              <tbody >
              <tr>
                <td data-label="Amount">$ 3,000</td>
                <!--              <td data-label="Duration">20 trades</td>-->
                <td data-label="Date">MAY 12 10:37 AM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="Amount">$ 35,000</td>
                <!--              <td data-label="Duration">20 trades</td>-->
                <td data-label="Date">MAY 12 11:10 AM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="Amount">$ 7,000</td>
                <!--              <td data-label="Duration">20 trades</td>-->
                <td data-label="Date">MAY 22 7:05 AM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="Amount">$ 2,000</td>
                <!--              <td data-label="Duration">20 trades</td>-->
                <td data-label="Date">JUN 10 11:09 AM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="Amount">$ 3,000</td>
                <!--              <td data-label="Duration">20 trades</td>-->
                <td data-label="Date">JUN 10 14:36 PM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              </tbody>
            </table>

            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
              <!--            <div class="page-indicator">-->
              <!--              Page {{ currentPage }} of {{ totalPages }}-->
              <!--            </div>            -->
              <div class="page-indicator">
                Page 1 of 1
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="isBonusUser" >
      <div class="law">
        <div class="section-3">

          <div class="section-3-content">
            <div class="content-1">
              <p class="content-1-text-1">Bonus Balance</p>
              <div>
                <p class="content-1-text-2" >$ 25,000</p>
              </div>
            </div>
            <div class="content-2">
              <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
            </div>
          </div>

          <div class="vl-2"></div>


        </div>
      </div>

      <div class="last">
        <div class="body">
          <h2>My Bonus history</h2>
          <div class="row trans-mgt">
            <div class="form-group fg--search">
              <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
              <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search bonus..." v-model="searchQuery" @input="filterTrades"/>
            </div>
            <div class="row filter_group">
              <div class="action-content">
                <p>Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-5">

          <!--        <div class="empty-state-container" v-if="this.readUserTrade.trades.length === 0">-->
          <!--          <img src="@/assets/empty.svg" alt="empty" class="empty-state">-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>-->
          <!--          <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade history will appear</p>-->

          <!--        </div>-->


          <div class="table"  >
            <table>
              <tr style="background-color: #FFFFFF;">
                <th>Amount</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Status</th>
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
                <td data-label="Amount">$ 25,000</td>
                <td data-label="Duration">20 trades</td>
                <td data-label="Date">JUN 06 12:27 PM</td>
                <td data-label="Status">
                  <div>
                    <p class="status-won" >Completed</p>
                    <!--                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>-->
                    <!--                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>-->
                  </div>
                </td>
              </tr>
              </tbody>
            </table>

            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
              <!--            <div class="page-indicator">-->
              <!--              Page {{ currentPage }} of {{ totalPages }}-->
              <!--            </div>            -->
              <div class="page-indicator">
                Page 1 of 1
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
            </div>
          </div>
        </div>
      </div>

      <div class="last">
        <div class="body">
          <h2>Repayment history</h2>
          <div class="row trans-mgt">
            <div class="form-group fg--search">
              <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
              <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search bonus..." v-model="searchQuery" @input="filterTrades"/>
            </div>
            <div class="row filter_group">
              <div class="action-content">
                <p>Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-5">

                  <div class="empty-state-container" >
                    <img src="@/assets/empty.svg" alt="empty" class="empty-state">
                    <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see</p>
                    <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2">This is where your Trade Repayment will appear</p>

                  </div>


<!--          <div class="table" >-->
<!--            <table>-->
<!--              <tr style="background-color: #FFFFFF;">-->
<!--                <th>Amount</th>-->
<!--                &lt;!&ndash;              <th>Duration</th>&ndash;&gt;-->
<!--                <th>Date</th>-->
<!--                <th>Status</th>-->
<!--              </tr>-->
<!--              <tbody >-->
<!--              <tr>-->
<!--                <td data-label="Amount">$ 3,000</td>-->
<!--                &lt;!&ndash;              <td data-label="Duration">20 trades</td>&ndash;&gt;-->
<!--                <td data-label="Date">MAY 12 10:37 AM</td>-->
<!--                <td data-label="Status">-->
<!--                  <div>-->
<!--                    <p class="status-won" >Completed</p>-->
<!--                    &lt;!&ndash;                  <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>&ndash;&gt;-->
<!--                    &lt;!&ndash;                  <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>&ndash;&gt;-->
<!--                  </div>-->
<!--                </td>-->
<!--              </tr>-->
<!--              </tbody>-->
<!--            </table>-->

<!--            <div class="pagination">-->
<!--              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--              &lt;!&ndash;            <div class="page-indicator">&ndash;&gt;-->
<!--              &lt;!&ndash;              Page {{ currentPage }} of {{ totalPages }}&ndash;&gt;-->
<!--              &lt;!&ndash;            </div>            &ndash;&gt;-->
<!--              <div class="page-indicator">-->
<!--                Page 1 of 1-->
<!--              </div>-->
<!--              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import TradeRequest from "@/model/request/TradeRequest";
import {mapState} from "vuex";

export default {
  name: "DashBoardBonus",
  data () {
    return {
      model: new TradeRequest().createTrade,
      history: [],
      currentPage: 1,
      itemsPerPage: 5,
      screen1: "Forex",
      screen2: "Crypto",
      screen3: "CFD",
      screen4: "Stocks",
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
      dialogIsVisible2: false,
      dialogIsVisible3: false,
      searchQuery: "", // Data property to hold the search input
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter trades based on searchQuery before slicing for pagination
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return filteredTrades.slice(startIndex, endIndex);
    },
    totalPages() {
      // Recalculate total pages based on filtered trades
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return Math.ceil(filteredTrades.length / this.itemsPerPage);
    },
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    readUserTrade() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)
    },
    isModalOpened() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
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
    },
    isBonusUser() {
      const bonusEmails = ['dnothof@gmail.com'];
      const email = this.UserDetails?.user?.email;
      return bonusEmails.includes(email);
    },
    isBonusUser2() {
      const bonusEmails = ['KCarroll_93@yahoo.com'];
      const email = this.UserDetails?.user?.email;
      return bonusEmails.includes(email);
    }
  },

  watch: {
    // Automatically calculate the bitcoin value when userDetails or bitcoinRate changes
    UserDetails: {
      deep: true, // Ensure that nested changes in UserDetails are also tracked
      handler() {
        this.convertToBitcoin();
      }
    },
    bitcoinRate() {
      this.convertToBitcoin();
    }
  },

  methods: {

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

    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
    showDialog2() {
      this.dialogIsVisible2 = true;
    },

    hideDialog3() {
      this.clearForm();
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
      this.dialogIsVisible3 = false;
    },
    showDialog3() {
      this.dialogIsVisible3 = true;
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
    getUserDetails() {
      // Call your Store dispatch or API to get the user details
      StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: localStorage.getItem('userId')
      });
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
      this.$router.push("/fund-wallet-bonus");
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
    },
    toggleScreen2() {
      this.screen1 = this.screen2
    },
    toggleScreen3() {
      this.screen1 = this.screen3
    },
    toggleScreen4() {
      this.screen1 = this.screen4
    },


    // Call this method before the API call
    async placeTrade() {
      // Ensure all required functions are called and userId is loaded
      await this.beforeAction();

      // Check if userId is available before proceeding
      if (!this.userId) {
        console.error("User ID not available. Cannot place trade.");
        return;
      }

      // Check if user is logged into
      if (this.UserDetails.user.email === "dnothof@gmail.com" || this.UserDetails.user.email === "karenpurejoy07@gmail.com" ) {
        this.showDialog2();
        return;
      }

      // Check if user is logged into
      if (this.UserDetails.user.email === "KCarroll_93@yahoo.com" || this.UserDetails.user.email === "johndoe@yopmail.com" ) {
        await StoreUtils.commit(StoreUtils.mutations.auth.updateIsModalOpened2, {
          userId: localStorage.getItem('userId'),
          tradeTime: this.currentDate,
          symbolTraded: this.symbolTraded,
          amountTrade: this.amountTrade,
          expectedPayout: 0,
          leverage: this.leverage,
          endPrice: this.randomString2,
          marketType: this.screen1,
          endTime: this.currentDate2,
          tradeStatus: "pending",
          tradeReference: this.randomString,
          tradeType: this.tradeType
        });
        this.showDialog3();
        return;
      }

      // Now make the API call using the prepared data
      await StoreUtils.dispatch(StoreUtils.actions.trade.tradeCreate, {
        userId: localStorage.getItem('userId'),
        tradeTime: this.currentDate,
        symbolTraded: this.symbolTraded,
        amountTrade: this.amountTrade,
        expectedPayout: 0,
        leverage: this.leverage,
        endPrice: this.randomString2,
        marketType: this.screen1,
        endTime: this.currentDate2,
        tradeStatus: "pending",
        tradeReference: this.randomString,
        tradeType: this.tradeType
      });

      // Refresh trade history after the trade is placed
      await StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: localStorage.getItem('userId'),
      });

      // Clear form and regenerate new data for future trades
      this.clearForm();
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
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

  beforeMount() {
    this.beforeAction();
    // Make sure to trigger the same logic before the component is mounted
    const userId = localStorage.getItem('userId');
    if (userId) {
      // Dispatch the API call if the userId exists
      StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: userId,
      });
    }

    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate();
    if (this.UserDetails.user && this.bitcoinRate) {
      this.convertToBitcoin(); // Ensure bitcoin is calculated when mounted
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }
}
</script>

<style scoped>
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
  width: 90px;
  padding: 3px 5px;
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
  width: 30%;
}
.empty-state{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.lawrence{
  display: flex;
  gap: 20px;
}
.section-2{
  display: flex;
  justify-content: right;
  align-content: center;
  align-items: center;
  padding-right: 3%;
  padding-left: 1.5%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
}
.section-2-part-1{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 10px;
}

.trade-btn-1{
  padding: 8px 14px;
  text-align: center;
  font-size: 12px;
  width: 125px;
  height: 30px;
  background: #E50202;
  color: #ffffff;
  border: 1px solid #E50202;
  border-radius: 4px;
}

.trade-btn-1:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-2{
  padding: 8px 14px;
  text-align: center;
  font-size: 12px;
  width: 125px;
  height: 30px;
  background: #10d876;
  color: #ffffff;
  border: 1px solid #10d876;
  border-radius: 4px;
}

.trade-btn-2:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-3{
  padding: 8px 14px;
  text-align: center;
  font-size: 12px;
  width: 125px;
  height: 30px;
  background: #FE9431;
  color: #ffffff;
  border: 1px solid #FE9431;
  border-radius: 4px;
}

.trade-btn-3:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-4{
  padding: 8px 14px;
  text-align: center;
  font-size: 12px;
  width: 125px;
  height: 30px;
  background: #5d78ff;
  color: #ffffff;
  border: 1px solid #5d78ff;
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
  margin-right: 3%;
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
  /*margin-top: 17px;*/
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
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

.last{
  margin-top: 3%;
}

@media (max-width: 700px) {

  .fund-wallet{
    margin-right: unset;
  }

  .section-3{
    display: flex;
    align-content: center;
    align-items: center;
    padding: 15px 10px;
    gap: 24px;
    width: 100%;
    height: 100%;
    margin-left: unset;
    margin-bottom: 2%;
  }

  .form-part {
    max-width: 615px;
    width: 100%;
    padding: 22px 25px;
    margin-top: 5%;
  }

  .law{
    margin-right: 1%;
  }

  .content-1-text-1{
    font-size: 12px;
    width: 100%;
  }

  .content-1-text-2{
    font-size: 13px;
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

  .vl-2{
    display: none;
  }

  .section-3{
    display: block;
    padding: 20px 20px;
    gap: 30px;
    width: 100%;
    height: 100%;
    margin-left: unset;
  }

  .section-3-content{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }

  .content-1-text-1{
    font-weight: 900;
    font-size: 16px;
  }

  .content-1-text-2{
    font-weight: 300;
    font-size: 14px;
    line-height: 30px;
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

}

</style>