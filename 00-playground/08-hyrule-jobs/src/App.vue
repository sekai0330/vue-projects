<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Zelda')">Change Name</button>
    <button @click="changeAge(33)">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // const state = reactive({
    //   name: "Link",
    //   age: 25 as number | string,
    // });
    // return { ...toRefs(state) };

    const name = ref("Link");
    const age = ref<number | string>(25);

    return { name, age };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: string | number) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style></style>
