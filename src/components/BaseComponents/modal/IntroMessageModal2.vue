<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>

      <div class="welcome-modal">
        <p style="float: right;color: #FFFFFF;" @click="close">x</p>


          <p class="text-1">Alert; PDT Protection Warning</p>

<!--          <p class="text-2">(Driving License or Government ID card)</p>-->

          <p class="text-3">PDT protection is enabled so you are not able to open new position since you already
            exceed the day trade within 5 business days. Please, note, if you execute another day trade , your account
            will be flagged as PDT(Pattern Day Trader)</p>


          <div class="button-group">
            <button class="btn-2"  @click="close">Place trade</button>
            <button class="btn" @click="close" >Cancel</button>
          </div>



      </div>
    </dialog>
  </div>
</template>

<script>
import S3Request from "@/model/request/S3Request";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
// import Swal from "sweetalert2";
// import {db} from "@/firebase/config";
// import {doc, setDoc,} from "firebase/firestore";

export default {
  name: "IntroMessageModal2",
  emits: ['close', 'open'],
  data () {
    return {
      contacts: [],
      dialogIsVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      country:"",
      address: "",
      phoneNumber: "",
      reflink: "https://incometradeasset.com/register",
      userId: "",
      userInfo: "",
      base64: "",
      uploadmodel: S3Request.prototype.uploadBase64(),
      url: "",
      base642: "",
      uploadmodel2: S3Request.prototype.uploadBase64(),
      url2: "",
    }
  },
  computed:{
    ...mapState(["sbucket"]),
    ...mapState({
      loading: state => state.auth.loading,
      loading2: state => state.sbucket.s3bucketLoading,
      auth: state => state.auth,
    }),
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
  },
  methods: {
    close(){
      // StoreUtils.commit(StoreUtils.mutations.auth.updateIsModalOpened, true)
      this.$emit('close');
    },
    open(){
      // StoreUtils.commit(StoreUtils.mutations.auth.updateIsModalOpened, true)
      this.$emit('open');
      console.log("open")
    },
    // uploadFile() {
    //   let input = this.$refs.file;
    //   let files = input.files;
    //   //console.log(size);
    //   const reader = new FileReader();
    //   try {
    //     reader.onload = (e) => {
    //       this.base64 = e.target.result;
    //       this.uploadOfficerImage();
    //     };
    //     reader.readAsDataURL(files[0]);
    //     this.$emit("input", files[0]);
    //   } catch (e) {
    //     console.warn(e.message);
    //   }
    // },
    // async uploadOfficerImage() {
    //
    //   this.uploadmodel.username = `${
    //       this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
    //   }_${Date.now()}`;
    //   this.uploadmodel.base64 = this.base64;
    //   await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
    //   this.url = this.sbucket.s3bucketResponse.url;
    //
    // },
    //
    // uploadFile2() {
    //   let input = this.$refs.file2;
    //   let files = input.files;
    //   //console.log(size);
    //   const reader = new FileReader();
    //   try {
    //     reader.onload = (e) => {
    //       this.base642 = e.target.result;
    //       this.uploadOfficerImage2();
    //     };
    //     reader.readAsDataURL(files[0]);
    //     this.$emit("input", files[0]);
    //   } catch (e) {
    //     console.warn(e.message);
    //   }
    // },
    //
    // async uploadOfficerImage2() {
    //   // this.showLoader = true;
    //   this.uploadmodel2.username = `${
    //       this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
    //   }_${Date.now()}`;
    //   this.uploadmodel2.base64 = this.base642;
    //   // await this.$store.dispatch("sbucket/uploadEncodedFile", this.uploadmodel, { root: true });
    //   await StoreUtils.dispatch(
    //       StoreUtils.actions.sbucket.uploadEncodedFile,
    //       this.uploadmodel2,
    //       { root: true }
    //   );
    //   this.url2 = this.sbucket.s3bucketResponse.url;
    //   // this.showLoader = false;
    // },
    //
    // copyToClipboard(content) {
    //   const textarea = document.createElement('textarea')
    //   textarea.value = content
    //   document.body.appendChild(textarea)
    //   textarea.select()
    //   document.execCommand('copy')
    //   document.body.removeChild(textarea)
    // },
    // showDialog() {
    //   this.dialogIsVisible = true;
    // },
    // hideDialog() {
    //   this.dialogIsVisible = false;
    // },
    // populateForm() {
    //   this.firstName = this.userInfo.firstName;
    //   this.lastName = this.userInfo.lastName;
    //   this.email = this.userInfo.email;
    //   this.country = this.userInfo.country;
    //   this.phoneNumber = this.userInfo.phoneNumber;
    //   this.url = this.userInfo.frontId;
    //   this.url2 = this.userInfo.backId;
    // },
    //
    // async updateDetails() {
    //   await this.sendMessage()
    //   // await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
    //   //   userId: this.userId,
    //   //   frontId: this.url,
    //   //   backId: this.url2,
    //   // })
    //   await this.$emit('close');
    // },
    //
    // async sendMessage() {
    //   this.loading = true;  // Start loading
    //   try {
    //     await setDoc(doc(db, "RequestBody", this.email), {
    //       firstName: this.firstName,
    //       lastName: this.lastName,
    //       email: this.email,
    //       url: this.base64,
    //       url2: this.base642,
    //     }, { merge: true });
    //
    //     await Swal.fire({
    //       icon: 'success',
    //       title: 'Success',
    //       text: 'Request sent Successfully!',
    //     });
    //   } catch (error) {
    //     console.error("Error sending message:", error);
    //     await Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong!',
    //     });
    //   } finally {
    //     this.loading = false;  // Stop loading
    //   }
    // },
  },
  // created() {
  //   StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
  //     userId : localStorage.getItem('userId')
  //   })
  //
  //   StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
  //   this.populateForm();
  //   this.userId = localStorage.getItem('userId')
  //
  //   // Retrieve the object from local storage
  //   const storedObject = localStorage.getItem('userInfo');
  //
  //   if (storedObject) {
  //     this.userInfo = JSON.parse(storedObject);
  //   }
  // },
  // mounted() {
  //   StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
  //     userId : localStorage.getItem('userId')
  //   })
  //
  //   StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
  //   this.populateForm();
  //   this.generateRandomString()
  //
  //   this.userId = localStorage.getItem('userId')
  //
  //   // Retrieve the object from local storage
  //   const storedObject = localStorage.getItem('userInfo');
  //
  //   if (storedObject) {
  //     this.userInfo = JSON.parse(storedObject);
  //   }
  // }
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.space{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.button-group{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: auto;
  width: 100%;
}

.text-1{
  text-align: left;
  color: #FFFFFF;
  font-size: 22px;
  margin-bottom: 3%;
  margin-top: 5%;
}

.text-2{
  text-align: center;
  color: #FFFFFF;
  font-size: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.text-3{
  text-align: left;
  color: #FFFFFF;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2%;
  line-height: 1.5;
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

div{
  padding-bottom: 10px;
}

dialog {
  position: fixed;
  top: 13vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 17rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.welcome-modal {
  position: relative;
  display: block;
  overflow: hidden;
  width: 550px;
  height: 380px;
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
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


label{
  padding-bottom: 5px;
  /*padding-top: 25px;*/
  color: #FFFFFF;
}

.form-input{
  border: 1px solid #e4e8ee;
  border-radius: 5px ;
  height: 35px;
  /*color: white;*/
  padding: 5px 20px;
  width: 100%;
}

.displayname{
  background-color: #FFFFFF;
  border: 1px solid #e4e8ee;
  border-radius: 5px ;
  height: 35px;
  /*color: white;*/
  padding: 5px 20px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
  margin-left: 5px;
  width: 100%;
  margin-top: 1.5%;
}

.form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group select:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.id{
  font-size: 16px;
  text-align: left;
}

.btn{
  width: 100%;
  border-radius: 5px;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  color: #fff;
  height: 45px;
}

.btn-2{
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  height: 45px;
  margin-right: 2%;
  margin-bottom: 10px;
}

@media (max-width: 500px) {
  .welcome-modal {
    width: 340px;
    padding: 25px;
  }
  dialog {
    top: 13vh;
    width: 25rem;
    height: 20rem;
    right: 30px;
    left: calc(50% - 10.9rem);
  }
  p{
    font-size: unset;
  }
  .id{
    margin-left: unset;
    padding-left: unset;
  }
  .text-1{
    font-size: 20px;
  }

  .text-2{
    font-size: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .text-3{
    font-size: 13px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .button-group{
    display: block;
    position: unset;
    bottom: unset;
    left: unset;
    width: unset;
  }
}
</style>