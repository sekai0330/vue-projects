<template>
  <nav v-if="user">
    <div>
      <p>
        Hey there <span class="avatar">{{ user.displayName }}</span>
      </p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { handleLogout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
nav p span.avatar {
  text-transform: capitalize;
}
</style>
