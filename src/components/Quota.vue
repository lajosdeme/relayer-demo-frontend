<template>
  <div class="row">
    <div class="col-12 container">
      <h5>You are subscribed to Gasless</h5>
      <h5>Quota remaining: {{ user.quota }}</h5>
      <h5>Total quota: {{ user.totalQuota }}</h5>
      <h5>Subscription expires at: {{ this.subExpiry(user.resetDate) }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quota",
  props: {
    user: null,
  },
  methods: {
    subExpiry(resetDate) {
      var timestamp = resetDate * 1000;

      // Create a new Date object with the timestamp
      var date = new Date(timestamp);

      // Convert the date to a human-readable format
      var humanReadableDate = date.toDateString();
      return humanReadableDate;
    },
  },
};
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 30px;
}
</style>