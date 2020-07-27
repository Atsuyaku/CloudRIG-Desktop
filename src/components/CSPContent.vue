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
        Select your cloud provider
      </div>
      <v-row no-gutters>
        <v-col md="1">
          <router-link tag="span" to="/Credentials">
            <v-btn
              dark
              depressed
              style="
                background-color: transparent;
                border: dashed;
                opacity: 0.6;
              "
              height="170px"
              width="170px"
            >
              <v-icon color="white" size="100">
                fab fa-aws
              </v-icon>
            </v-btn>
          </router-link>
        </v-col>
        <v-col md="2" lg="1"> </v-col>
        <v-col md="1">
          <router-link to="/Credentials">
            <v-btn
              dark
              depressed
              style="
                background-color: transparent;
                border: dashed;
                opacity: 0.6;
              "
              height="170px"
              width="170px"
              class="white"
              disabled
            >
              <v-img
                :src="require('../assets/icons-azur.svg')"
                contain
                height="130"
              />
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="2" lg="1"></v-col>
        <v-col md="1">
          <router-link tag="span" to="/Credentials">
            <v-btn
              dark
              depressed
              style="
                background-color: transparent;
                border: dashed;
                opacity: 0.6;
              "
              height="170px"
              width="170px"
              class="white"
              disabled
            >
              <v-img
                :src="require('../assets/icons-google-cloud-platform.svg')"
                contain
                height="130"
              />
            </v-btn>
          </router-link>
        </v-col>
        <v-col md="2" lg="1"></v-col>
        <v-col md="1">
          <router-link tag="span" to="/Credentials">
            <v-btn
              dark
              depressed
              style="
                background-color: transparent;
                border: dashed;
                opacity: 0.6;
              "
              height="170px"
              width="170px"
              class="white"
              disabled
            >
              <p>Not available yet</p>
              <v-icon color="white" size="150"></v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <router-link tag="span" to="/MachineCreation">
          <v-btn dark style="margin-left: 20px;">Previous</v-btn>
        </router-link>
      </v-row>
      <v-row></v-row>
      <v-row></v-row>
      <v-row></v-row>
      <v-row></v-row>
      <v-row></v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "CSPContent"
};
</script>

<style scoped></style>
