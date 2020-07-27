<template>
  <div style="padding-left: 56px;">
    <v-app
      style="
        padding-top: 40px;
        padding-left: 40px;
        background-color: transparent;
        width: 50%;
      "
    >
      <div
        class="font-weight-black white--text"
        style="font-size: xx-large; margin-bottom: 20px;"
      >
        My Computers
      </div>
      <div>
        <v-row>
          <v-col>
            <router-link tag="span" to="/MachineCreation">
              <v-btn
                dark
                depressed
                style="
                  background-color: transparent;
                  border: dashed;
                  opacity: 0.6;
                "
                height="150px"
                width="150px"
              >
                <v-icon color="white" size="80">fas fa-plus</v-icon>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
};
</script>

<style scoped></style>
