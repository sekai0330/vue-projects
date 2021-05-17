<template>
  <div class="backdrop">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
};
</script>

<!-- <style scoped> -->
<style>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 10px;
}
/* h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
} */

/* more performant way to scope styles vs scoped */
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background-color: crimson;
  color: #fff;
}
.modal.sale h1 {
  color: #fff;
}
</style>
