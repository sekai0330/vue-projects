<template>
  <div class="block" v-if="showBlock">click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
    };
  },
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay);
  },
  updated() {
    console.log("component updated");
  },
  unmounted() {
    console.log("component unmounted");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
