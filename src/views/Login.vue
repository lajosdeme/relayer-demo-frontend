<template>
  <div class="register-main-container">
    <h3>Login to your Gasless account</h3>
    <div class="input-container">
      <input type="text" ref="email" id="email" placeholder="Email" />
      <input
        type="password"
        ref="password"
        id="password"
        placeholder="Password"
      />
      <Button :loading="loading" class="button" title="Login" @click="login" />
      <button class="forgot-pass-btn">Forgot password?</button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import router from "@/router";
import Api from "@/services/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    Button,
  },
  methods: {
    async login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      const api = new Api();
      const response = await api.login(email, password);
      if (response.status == "ok") {
        console.log(response.user_id);
        console.log(response.token);
        localStorage.setItem("token", response.token);
        router.push({ path: "/" });
      } else {
        alert(response.error);
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.register-main-container {
  text-align: center;
}
h3 {
  font-family: "Ember", Arial, Helvetica, sans-serif;
  margin-top: 50px;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}

.button {
  width: 300px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.forgot-pass-btn {
  font-family: "Ember", Arial, Helvetica, sans-serif;
  background-color: transparent;
  border: 0;
  margin-top: 30px;
}

@media screen and (max-width: 299px) {
  input {
    width: 100%;
  }
  .button {
    width: 100%;
  }
}
</style>