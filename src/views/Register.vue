<template>
  <div class="register-main-container">
    <div class="header-title">Gasless</div>
    <h3>Create a new Gasless account</h3>
    <div class="input-container">
      <input type="text" ref="name" id="name" placeholder="Name" />
      <input type="text" ref="email" id="email" placeholder="Email" />
      <input
        type="password"
        ref="password"
        id="password"
        placeholder="Password"
      />
      <input
        type="password"
        ref="passwordConfirm"
        id="confirm-password"
        placeholder="Confirm password"
      />
      <Button
        :loading="loading"
        class="button"
        title="Create a free account"
        @click="register"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Api from "@/services/api.js";
import router from '@/router';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {
    Button,
  },
  methods: {
    async register() {
      const name = this.$refs.name.value;
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      const passwordConfirm = this.$refs.passwordConfirm.value;

      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        this.loading = false;
        return;
      }

      if (password != passwordConfirm) {
        alert("Passwords don't match.");
        this.loading = false;
        return;
      }

      const api = new Api();
      const response = await api.register(name, email, password, passwordConfirm);
      if (response.status == "ok") {
        console.log(response.user_id);
        localStorage.setItem("token", response.token);
        router.push({name: "Dashboard", params: {userId: response.user_id}});
      } else {
        alert(response.error);
      }
    },
  }
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

@media screen and (max-width: 299px) {
  input {
    width: 100%;
  }
  .button {
    width: 100%;
  }
}
</style>