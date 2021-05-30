<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Log In</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet?
        <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignUpForm @signup="enterChat" />
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const router = useRouter();
    const showLogin = ref(true);

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
