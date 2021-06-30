<template>
<div class="users">
  <div class="users-component">
  <!-- <h1>{{ users }}</h1> -->
    <User v-for="user in users" :key="user.name.first" userFirstName = {{user.name.first}} userLastName = {{user.name.last}} />
  </div>
    <Edit/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { data, UserType } from "../api/data";
import User from "./User.vue";
import Edit from "./Edit.vue";
export default defineComponent({
  name: "Users",
  props: {
    users: {
      type: Object as PropType<UserType[]>,
      required: true,
    },
  },
  components: {
    User,
    Edit,
  },

  setup: () => {
    const users = data.users;
    return { users };
  },
});
</script>

<style scoped>
.users-component {
  /* border: solid 1px green; */
  margin: 10px;
  
}
.users{
  display: flex;
  justify-content: space-around;
}
</style>
