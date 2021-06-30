<template>
  <div class="edit-component">
    <label>Prenom : </label>
    <input class="prenom" v-model="prenom" type="text" id="text" name="text" placeholder="titi" />
    <label>Nom : </label>
    <input class="nom" v-model="nom" type="text" id="text" name="text" placeholder="toto" />
    <button class="add_user_button" type="button" @click="ajouter()">
      Ajouter
    </button>
    <button class="remove_user_button" type="button" @click="supprimer()">
      Supprimer le dernier
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { data, UserType } from "../api/data";
export default defineComponent({
  name: "Edit",
  props: {
    users: {
      type: Object as PropType<UserType[]>,
      required: false,
    },
    prenom:{
      type: String,
      required: false,
    },
    nom:{
      type: String,
      required: false,
    }
  },
    methods: {
      ajouter: function(){
        console.log(this.prenom);
        if (!this.prenom || !this.nom)
    console.log("error, no addition done");
  else {
    userNames.push(`${inputValueFirstName} ${inputValuelastName}`);
    console.log("user added");
  }
      },
      supprimer: function(){
        // console.log("hello");
        let users = data.users;
        console.log("hello");
        users.pop();
      }
    },
  setup: () => {},
});
</script>

<style scoped>
.edit-component {
  margin-left: 100px;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(33, 119, 108);
  display: flex;
  flex-direction: column;
  padding: 70px;
}

button {
  line-height: 2.5;
  padding: 2px 40px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 50px;
  background-color: rgb(95, 181, 185);
  display: block;
  margin: auto;
}
</style>
