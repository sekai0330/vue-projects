<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const showPosts = ref(true);
    const posts = ref([]);

    return { posts, showPosts };
  },
};
</script>
