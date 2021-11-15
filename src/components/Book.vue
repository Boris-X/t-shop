<!--template>
  <div class="book">
    <h1>This is an book page</h1>
  </div>
</template-->
<template>
  <div>
    <div class="home-content">
      <div class="home-content-bottom">
        <div class="content-google">
          <GoogleRecaptcha :sitekey="key" @getValidateCode='getValidateCode' v-model="validateCode"/>
        </div>
        <!--div class="login">
          <button :class="isNext ?'login-botton-background':'login-botton'" :disabled="isNext" @click="login()">店舗揭載を応募する</button>
        </div-->
      </div>
       
    </div>
  </div>
   
</template>
 
<script>
import GoogleRecaptcha from '../components/GoogleRecaptcha'
export default {
  data() {
    /*
    var checkCode = (rule, value, callback) => {
      if (value == false) {
        callback(new Error('请进行人机验证'));
      } else {
        callback();
      }
    };
    */
    return {
      key: '6Ld9xxgaAAAAAI4xn7seMCmqbxIpVsJ_dwrZu9z1',
      validateCode: false,
      isNext:false
    };
  },
  created(){
     
  },
  mounted(){
     
  },
  components:{
    GoogleRecaptcha
  },
  methods:{
    login(){
      sessionStorage.setItem('token',true)
       
      this.$router.push({
        path: "/shops",
        query: { out: true }
      })
    },
    getValidateCode(value) {
      console.log(value);
       
      this.isNext = value
    },
  }
};
</script>
 
<style lang="scss" scoped>
#rc-anchor-container {
    width: 335px;
}
.content-google{
  height: 60px;
}
 
</style>