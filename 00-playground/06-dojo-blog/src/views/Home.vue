<template>
  <div class="home">
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Increase Age</button>
    <input type="text" v-model="name" /> -->

    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button> -->

    <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    // const paragraph = ref(null);
    // const ninjaOne = ref({ name: "Mario", age: 30 });
    // const ninjaTwo = reactive({ name: "Luigi", age: 35 });
    // reactive doesn't work with primitive values

    // const name = computed(() => "Shaun");
    const names = ref([
      "Mario",
      "Luigi",
      "Yoshi",
      "Toad",
      "Bowser",
      "Koopa",
      "Peach",
    ]);
    const search = ref("");

    // const name = ref("Mario");
    // const age = ref(30);

    // const handleClick = () => {
    // paragraph.value.classList.add("test");
    // paragraph.value.textContent = "Hello, ninjas!";
    //   name.value = "Luigi";
    //   age.value = 27;
    // };
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 45;
    // };
    const stopWatch = watch(search, () => {
      console.log("watch is running");
    });
    const stopEffect = watchEffect(() => {
      console.log("watchEffect is running", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    // return { name, age, handleClick };
    // return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
    return { names, matchingNames, search, handleClick };
  },
};
</script>
