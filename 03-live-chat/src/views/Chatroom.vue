<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: { Navbar, ChatWindow, NewChatForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
