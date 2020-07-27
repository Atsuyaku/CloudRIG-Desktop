<template>
  <div style="padding-left: 56px;">
    <v-app
      id="inspire"
      style="padding: 40px; background-color: transparent; height: 400px;"
    >
      <div
        class="font-weight-black white--text"
        style="font-size: xx-large; margin-bottom: 20px;"
      >
        Summary
      </div>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-container>
              <v-row>
                <v-col cols="5">
                  <v-container>
                    <v-row>
                      <p style="text-decoration: underline;">Machine Name</p>
                      <p style="padding-left: 10px;">Machine001</p>
                    </v-row>
                    <v-row>
                      <p style="text-decoration: underline;">Region</p>
                      <p style="padding-left: 10px;">EUROPE WEST</p>
                    </v-row>
                  </v-container>
                </v-col>

                <v-col cols="1">
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-divider class="mx-0" vertical dark></v-divider>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>

                <v-col cols="5">
                  <v-container>
                    <v-row>
                      <p style="text-decoration: underline;">Cloud Provider</p>
                      <p style="padding-left: 10px;">AWS</p>
                    </v-row>
                    <v-row>
                      <p style="text-decoration: underline;">Access Key Id</p>
                      <p style="padding-left: 10px;">AKIAJSIE27KKMHXI3BJQ</p>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="9">
                  <p style="text-align: right;">
                    <router-link
                      tag="span"
                      to="/Credentials"
                      style="padding-right: 12px;"
                    >
                      <v-btn dark>Previous</v-btn>
                    </router-link>

                    <router-link tag="span" to="/LoadingScreen">
                      <v-btn>Next</v-btn>
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "MachineSumUpContent"
};
</script>

<style scoped></style>
