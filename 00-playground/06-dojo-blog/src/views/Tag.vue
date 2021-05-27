<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="taggedPosts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import getPosts from "../composables/getPosts";

export default {
  components: { Spinner, PostList },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const taggedPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { taggedPosts, error, posts };
  },
};
</script>

<style></style>
