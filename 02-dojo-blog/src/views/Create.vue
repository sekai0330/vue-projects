<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/init";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); // remove whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      };
      try {
        // with json-server
        // await fetch("http://localhost:3000/posts", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(post),
        // });

        // with firestore
        const res = await projectFirestore.collection("posts").add(post);
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error.message);
      }
    };

    return { title, body, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ff8800;
  position: absolute;
  left: -30px;
  padding-right: 40px;
  transform: rotateZ(-1.5deg);
  z-index: -1;
}
button {
  display: block;
  margin-top: 30px;
  background-color: #ff8800;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 8px 16px;
  color: #444;
  background-color: #ddd;
  border-radius: 20px;
  font-size: 14px;
}
</style>
