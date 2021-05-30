<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import useLogin from "../composables/useLogin";
import { ref } from "vue";

export default {
  setup(props, context) {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
