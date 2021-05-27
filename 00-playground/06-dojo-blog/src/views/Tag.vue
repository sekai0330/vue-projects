<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="taggedPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";

export default {
  components: { Spinner, PostList, TagCloud },
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
