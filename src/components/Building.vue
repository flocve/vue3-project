<template>
  <div class="building-component">
    <img
      class="actifImage"
      src="../assets/actifImage.jpg"
      alt="image de l'actif"
    />
    <h1 class="actifName">{{ building.name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BuildingType } from "../api/data";
export default defineComponent({
  name: "Building",
  props: {
    building: {
      type: Object as PropType<BuildingType>,
      required: true,
    },
  },
  setup: () => {},
});
</script>

<style scoped>
.building-component {
  /* border: solid 1px red; */
  margin: 10px;
  display: flex;
  justify-content: space-around;
  vertical-align: middle;
  align-items: center;
}

.actifImage {
  width: 200px;
}

.actifName {
  font-family: Helvetica;
  color: rgb(52, 156, 143);
}
</style>
