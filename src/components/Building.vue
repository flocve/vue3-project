<template>
  <div class="building-component">
    <h1>{{ building }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BuildingType } from "../api/data";
export default defineComponent({
  name: "Building",
  props: {
    building: {
      type: Object as BuildingType,
      required: true,
    },
  },
  setup: () => {},
});
</script>

<style scoped>
.building-component {
  border: solid 1px red;
  margin: 10px;
}
</style>
