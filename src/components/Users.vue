<template>
  <div class="users-component">
    <h1>{{ users }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserType } from "../api/data";
export default defineComponent({
  name: "Users",
  props: {
    users: {
      type: Object as UserType[],
      required: true,
    },
  },
  setup: () => {},
});
</script>

<style scoped>
.users-component {
  border: solid 1px green;
  margin: 10px;
}
</style>
