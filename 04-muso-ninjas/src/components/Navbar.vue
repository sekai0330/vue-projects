<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="Muso Ninjas" />
      <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }"
            >Create Playlist</router-link
          >
          <button @click="handleLogout">Log out</button>
        </div>
        <div v-else>
          <router-link :to="{ name: 'Signup' }" class="btn"
            >Sign up</router-link
          >
          <router-link :to="{ name: 'Login' }" class="btn">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "Login" });
    };

    return { handleLogout, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background-color: #fff;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-width: 60px;
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
