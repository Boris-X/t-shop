<template>
    <div ref="grecaptcha">
    </div>
</template>
<!--script src="https://www.recaptcha.net/recaptcha/api.js?render=explicit" async defer></script-->
<script>
export default {
  props: ["sitekey"], // 所要传的秘钥
   
  mounted() {
    window.ReCaptchaLoaded = this.loaded;
    var script = document.createElement("script");
    script.src =
      "https://recaptcha.net/recaptcha/api.js?οnlοad=ReCaptchaLoaded&render=explicit";
    document.head.appendChild(script);
    
    this.loaded();
  },
  methods: {
    submit: function(token) {
      console.log(token);
    },
    loaded() {  
        setTimeout(() => {
            window.grecaptcha.render(this.$refs.grecaptcha, {
            sitekey: this.sitekey,
            callback: this.submit
        });
        }, 200);
    }
  },
};
</script>
<style>
 
</style>