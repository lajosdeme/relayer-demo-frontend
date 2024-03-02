<template>
  <div>
    <h5>You are not subscribed to gasless</h5>
    <h5>Subscription price: 0.001 LYX/month</h5>
    <Button title="Subscribe" @click="subscribe" />
  </div>
</template>

<script>
import Ethers from "@/services/ethers";
import Button from "./Button.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Subscribe",
  props: {
    userId: String,
  },
  components: {
    Button,
  },
  methods: {
    async subscribe() {
      const ethers = new Ethers();
      await ethers.connect();
      await ethers.subscribe(this.userId);
    },
  },
};
</script>