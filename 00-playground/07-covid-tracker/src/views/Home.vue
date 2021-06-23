<template>
  <div class="home">
    Hello World
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    console.log(data);
  },
};
</script>
