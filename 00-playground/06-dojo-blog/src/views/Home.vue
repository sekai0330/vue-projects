<template>
  <div class="home">
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Increase Age</button>
    <input type="text" v-model="name" /> -->
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    // const paragraph = ref(null);
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 35 });
    // reactive doesn't work with primitive values

    // const name = ref("Mario");
    // const age = ref(30);

    // const handleClick = () => {
    // paragraph.value.classList.add("test");
    // paragraph.value.textContent = "Hello, ninjas!";
    //   name.value = "Luigi";
    //   age.value = 27;
    // };
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    // return { name, age, handleClick };
    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>
