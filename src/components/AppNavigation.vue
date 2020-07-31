import Vue from 'vue' import Vuetify from 'vuetify/lib'
<template>
  <span>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      dark
      permanent
      floating
      clipped
      mini-variant
      color="rgb(44, 62, 80)"
    >
      <router-link tag="span" to="/"
        ><v-btn icon style="margin-top: 15px; margin-left: 10px;">
          <v-avatar size="40px">
            <img src="https://www.cloudrig.io/img/cloudrig-logo.png" />
          </v-avatar>
        </v-btn>
      </router-link>
      <v-list>
        <router-link tag="span" to="/FormParent/MachineCreation"
          ><v-btn icon style="margin-top: 30px; margin-left: 10px;"
            ><v-avatar size="40px">
              <v-icon color="white" size="30">
                fas fa-plus-circle
              </v-icon>
            </v-avatar></v-btn
          ></router-link
        >
        <br />

        <router-link tag="span" to="/FormParent/CSP"
          ><v-btn icon style="margin-top: 20px; margin-left: 10px;"
            ><v-avatar size="40px">
              <v-icon color="white" size="30">
                fas fa-cloud
              </v-icon>
            </v-avatar></v-btn
          ></router-link
        >
        <br />

        <router-link tag="span" to="/FormParent/Credentials"
          ><v-btn icon style="margin-top: 20px; margin-left: 10px;"
            ><v-avatar size="40px">
              <v-icon color="white" size="30">
                fab fa-aws
              </v-icon>
            </v-avatar></v-btn
          ></router-link
        >
        <br />
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="rgb(44, 62, 80)" dark style="margin-left: 50px;">
      <router-link tag="span" to="/">
        <v-btn text style="background-color: transparent; margin-top: 3px;">
          <v-toolbar-title>{{ appTitle }}</v-toolbar-title></v-btn
        ></router-link
      >
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "CloudRIG",
      drawer: true
    };
  }
};
</script>

<style scoped>
span {
  text-decoration: none;
}
.v-btn {
  text-transform: none;
}
</style>
