<template>
  <div class="gestion-component">
    <Building :building="building" />
    <Users :users="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Building from "../components/Building.vue";
import Users from "../components/Users.vue";
import { data } from "../api/data";
export default defineComponent({
  name: "Gestion",
  components: {
    Building,
    Users,
  },
  setup: () => {
    const building = data.actif;
    const users = data.users;

    return { building, users };
  },
});
</script>

<style scoped>
.gestion-component {
  /* border: solid 1px blue; */
}
</style>
