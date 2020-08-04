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
                      <v-text-field
                        style="width: 100%;"
                        id="MName"
                        v-model="MName"
                        readonly
                        outlined

                      ></v-text-field>
                    </v-row>
                    <v-row>
                      <p style="text-decoration: underline;">Region</p>
                      <v-text-field style="width: 100%;"
                        id="MRegion"
                        v-model="MRegion"
                        readonly
                        outlined></v-text-field>
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
                      <v-text-field style="width: 100%;"
                                    id="MCloudP"
                                    v-model="MCloudP"
                                    readonly
                                    outlined></v-text-field>
                    </v-row>
                    <v-row>
                      <p style="text-decoration: underline;">Access Key Id</p>
                      <v-text-field style="width: 100%;"
                                    id="AccessKey"
                                    v-model="AccessKey"
                                    readonly
                                    outlined></v-text-field>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="9">
                  <p style="text-align: right;">
                    <router-link
                      tag="span"
                      to="/FormParent/Credentials"
                      style="padding-right: 12px;"
                    >
                      <v-btn dark>Previous</v-btn>
                    </router-link>

                    <router-link tag="span" to="/FormParent/LoadingScreen">
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
import {REGIONS} from "./globals/regions";

export default {
  name: "MachineSumUpContent",

  data() {
    return {
      MName: sessionStorage?.getItem("MName"),
      MRegion: REGIONS[sessionStorage?.getItem("MRegion")],
      MCloudP: sessionStorage?.getItem("CSP"),
      AccessKey: sessionStorage?.getItem("AccessKey"),

    };
  }
};
</script>

<style scoped></style>
