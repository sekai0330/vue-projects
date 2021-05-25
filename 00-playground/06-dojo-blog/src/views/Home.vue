<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button>
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

    <!-- <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button> -->
  </div>
</template>

<script>
// import { ref, reactive, computed, watch, watchEffect } from "vue";
import { ref } from "vue";
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    // const paragraph = ref(null);
    // const ninjaOne = ref({ name: "Mario", age: 30 });
    // const ninjaTwo = reactive({ name: "Luigi", age: 35 });
    // reactive doesn't work with primitive values
    const showPosts = ref(true);
    const posts = ref([
      {
        title: "Welcome to the blog",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi natus numquam accusantium, reprehenderit totam non sunt voluptatibus soluta rem vero facere doloremque temporibus rerum dolorem vel tempore delectus adipisci pariatur doloribus tenetur, cumque eos quos. Magnam dolore quod facere. Mollitia assumenda laborum quis eveniet quas unde ab? Nemo, assumenda minima eaque sapiente perspiciatis commodi magni, repudiandae, harum illo facilis magnam nulla similique eos dignissimos provident. Cupiditate obcaecati praesentium voluptatem commodi harum amet magni vitae provident, unde nihil at aut voluptatum inventore, deleniti id distinctio neque consectetur. Culpa nihil officiis sed repudiandae asperiores maiores praesentium. Nemo illum aut debitis sed.",
        id: 1,
      },
      {
        title: "Top 5 CSS tips",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi natus numquam accusantium, reprehenderit totam non sunt voluptatibus soluta rem vero facere doloremque temporibus rerum dolorem vel tempore delectus adipisci pariatur doloribus tenetur, cumque eos quos. Magnam dolore quod facere. Mollitia assumenda laborum quis eveniet quas unde ab? Nemo, assumenda minima eaque sapiente perspiciatis commodi magni, repudiandae, harum illo facilis magnam nulla similique eos dignissimos provident. Cupiditate obcaecati praesentium voluptatem commodi harum amet magni vitae provident, unde nihil at aut voluptatum inventore, deleniti id distinctio neque consectetur. Culpa nihil officiis sed repudiandae asperiores maiores praesentium. Nemo illum aut debitis sed.",
        id: 2,
      },
    ]);

    // const name = computed(() => "Shaun");
    // const names = ref([
    //   "Mario",
    //   "Luigi",
    //   "Yoshi",
    //   "Toad",
    //   "Bowser",
    //   "Koopa",
    //   "Peach",
    // ]);
    // const search = ref("");

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
    // const stopWatch = watch(search, () => {
    //   console.log("watch is running");
    // });
    // const stopEffect = watchEffect(() => {
    //   console.log("watchEffect is running", search.value);
    // });

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopEffect();
    // };

    // return { name, age, handleClick };
    // return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
    // return { names, matchingNames, search, handleClick };
    return { posts, showPosts };
  },
};
</script>
