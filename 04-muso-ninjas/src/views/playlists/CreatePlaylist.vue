<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Playlist title" v-model="title" required />
    <textarea
      placeholder="Playlist description..."
      v-model="description"
      required
    ></textarea>
    <label for="upload">Upload playlist cover image</label>
    <input type="file" id="upload" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage();
    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const types = ["image/png", "image/jpeg"];

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        console.log("image uploaded, url: ", url.value);
      } else {
        fileError.value = "Please select an image file (PNG or JPG)";
      }
    };

    const handleChange = (e) => {
      const selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (PNG or JPG)";
      }
    };

    return { title, description, handleSubmit, handleChange, fileError };
  },
};
</script>

<style scoped>
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
