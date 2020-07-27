<template>
  <div style="padding-left: 56px;">
    <v-app
      id="inspire"
      style="padding-top: 40px; background-color: transparent; height: 400px;"
    >
      <div
        class="font-weight-black white--text"
        style="font-size: xx-large; margin-bottom: 20px;"
        align="center"
      >
        Loading...
      </div>
      <v-row>
        <v-col cols="12">
          <v-col>
            <v-row no-gutters>
              <v-col>
                <div align="center">
                  <v-progress-circular indeterminate></v-progress-circular>
                  <p><br />Starting the machine...</p>
                  <div id="countdown"></div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "LoadingScreenContent",
  mounted() {
    this.$nextTick(function() {
      setTimeout(() => {
        document.location.href = "/";
      }, 3000);
    });
  }
};
</script>

<style scoped></style>
