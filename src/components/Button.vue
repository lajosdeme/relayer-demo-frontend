<template>
  <button :style="{ backgroundColor: light ? 'white' : '#1d36b2', color: light ? 'black' : 'white' }" class="btn">
    <span
      :style="{ display: loading ? 'inline-block' : 'none' }"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    {{ loading ? 'Loading...' : title }}
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    light: Boolean,
    title: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
.btn {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
}
</style>