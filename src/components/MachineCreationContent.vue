<template>
  <div style="padding-left: 56px;">
    <v-app
      style="
        padding-top: 40px;
        padding-left: 40px;
        background-color: transparent;
      "
    >
      <div
        class="font-weight-black white--text"
        style="font-size: xx-large; margin-bottom: 20px;"
      >
        Create a machine
      </div>
      <form id="machineForm" name="machineForm">
        <v-row>
          <v-col md="3">
            <v-text-field
              label="Name"
              :rules="nameRules"
              :counter="20"
              required
              style="width: 100%;"
              id="MName"
              v-model="MName"
              v-on:change="save('MName')"

            ></v-text-field>
          </v-col>
          <v-col md="3">
            <v-select
              label="Region"
              :items="regions"
              :rules="[v => !!v || 'Item is required']"
              required
              style="width: 100%;"
              id="MRegion"
              v-model="MRegion">
              <!--@input="saveToStorage(MRegion)"-->
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-textarea style="width: 100%;" label="Description" id="MDescription" v-model="MDescription" v-on:change="save('MDescription')" ></v-textarea>
          </v-col>
        </v-row>
        <router-link tag="button" to="/FormParent/CSP">
          <v-btn
            style="margin-right: 20px;"
            @click="submit"
            :class="{ red: !valid, green: !valid }"
            >submit</v-btn
          >
        </router-link>
        <router-link tag="button" to="/">
          <v-btn>Cancel</v-btn>
        </router-link>
      </form>
    </v-app>
  </div>
</template>

<script>
  import {Myfunctions} from "./FormParentContent";

  export default {
  name: "MachineCreationContent",
    data() {

    return {
      MName:  sessionStorage?.getItem('MName'),
      MRegion:  sessionStorage?.getItem('region'),
      MDescription:  sessionStorage?.getItem('MDescription'),
      valid: false,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      select: null,
      regions: [
        { value: 1, text:"Europe East"},
        { value: 2, text:"Europe West"},
        { value: 3, text:"North America"},
        { value: 4, text:"South America"}]
    };
  },
  methods: {
    save: function(id1){
      Myfunctions.saveToStorage(id1);
    },
    submit() {
      this.$refs.form.validate();
    },
    clear() {
      this.$refs.form.reset();
    },

  }
};

</script>


<style scoped></style>
