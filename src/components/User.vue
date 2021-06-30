<template>
  <div class="user-component">
    <img
      class="userImage"
      src="../assets/actifImage.jpg"
      alt="image de l'user"
    />
  <p>{{ userFirstName }} {{ userLastName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { data, UserType } from "../api/data";
export default defineComponent({
  name: "User",
  props: {
    users: {
      type: Object as PropType<UserType[]>,
      required: false,
    },
    userFirstName: {
      type: String,
      required: true,
    },
    userLastName: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const users = data.users;
    return { users };
  },
});
</script>

<style scoped>
.user-component {
  /* border: solid 1px orchid; */
  margin: 10px;
  display: flex;
  align-items: center;
  color: rgb(52, 156, 143);
}

.userImage {
  border-radius: 200px;
  width: 80px;
  margin-bottom: 10px;
}

p {
  padding-left: 10px;
}
</style>
