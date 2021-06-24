<template>
  <main v-if="!loading">
    <DataTitle :dataDate="dataDate" :text="title" />
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb6">Fetching Data</div>
    <img :src="require('../assets/hourglass.gif')" alt="" class="w-24 m-auto" />
  </main>
</template>

<script>
import { ref } from "vue";
import DataTitle from "@/components/DataTitle";

export default {
  name: "Home",
  components: { DataTitle },
  setup() {
    const loading = ref(true);
    const title = ref("Global");
    const dataDate = ref("");
    const stats = ref({});
    const countries = ref([]);

    const fetchCovidData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      return await res.json();
    };

    const baseSetup = async () => {
      const data = await fetchCovidData();
      dataDate.value = data.Date;
      stats.value = data.Global;
      countries.value = data.Countries;
      loading.value = false;
    };

    baseSetup();

    return { loading, title, dataDate, stats, countries };
  },
};
</script>
