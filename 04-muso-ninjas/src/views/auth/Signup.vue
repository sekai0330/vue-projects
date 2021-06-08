<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const router = useRouter();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user registered");
        router.push({ name: "CreatePlaylist" });
      }
    };

    return { email, password, handleSubmit, error, isPending, displayName };
  },
};
</script>

<style></style>
