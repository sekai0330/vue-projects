<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
    <!-- <div>
      <input type="checkbox" value="Shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="Yoshi" v-model="names" />
      <label>Yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="Mario" v-model="names" />
      <label>Mario</label>
    </div> -->
  </form>
  <p v-if="email">Email: {{ email }}</p>
  <p v-if="password">Password: {{ password }}</p>
  <p v-if="role">Role: {{ role }}</p>
  <p v-if="terms">Terms: {{ terms }}</p>
  <!-- <p v-if="names">Names: {{ names }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      tempSkill: "",
      skills: [],
      terms: false,
      // names: [],
    };
  },
  methods: {
    addSkill(event) {
      if (event.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill.slice(0, -1));
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(deletedSkill) {
      const updatedSkills = this.skills.filter(
        (skill) => skill !== deletedSkill
      );
      this.skills = updatedSkills;
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
