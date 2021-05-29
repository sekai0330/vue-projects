<template>
  <div class="realtime">
    <h1>Real-time data</h1>
    <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/init";

export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        posts.value = docs;
      });
    return { posts };
  },
};
</script>

<style>
.realtime {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
