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
        Credentials
      </div>
      <v-container>
        <v-row>
          <!--   LEFT PART  -->
          <v-col cols="6">
            <v-container>
              <v-row>
                <v-col cols="5">
                  <v-container>
                    <v-row>
                      <v-text-field
                        placeholder="AKIAJSIE27KKMHXI3BJQ"
                        label="Access Key Id"
                        required
                      />
                    </v-row>
                    <v-row>
                      <v-text-field
                        placeholder="5bEYu26084qjSFyclM/f2pz4gviSfoOg+mFwBH39"
                        label="Secret Access Key "
                        required
                      />
                    </v-row>
                  </v-container>
                </v-col>

                <v-col cols="1">
                  <v-container>
                    <v-row>
                      <v-col align="center">
                        <p style="margin-top: 10px; width: 15px;">or</p>
                        <v-divider class="mx-0" vertical dark></v-divider>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>

                <v-col cols="5">
                  <v-container>
                    <v-row>
                      <v-select
                        label="AWS Profile"
                        placeholder="default"
                        :items="profile"
                        :rules="[v => !!v || 'Item is required']"
                        onChange="[() => ]"
                        required
                      />
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="11">
                  <p style="text-align: right;">
                    <router-link
                      tag="span"
                      to="/CSP"
                      style="padding-right: 12px;"
                    >
                      <v-btn dark>Previous</v-btn>
                    </router-link>

                    <router-link tag="span" to="/MachineSumUp">
                      <v-btn>Next</v-btn>
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <!--   RIGHT PART  -->
          <v-col
            cols="6"
            style="background-color: rgba(44, 62, 80, 0.5); text-align: center;"
          >
            <v-container>
              <v-row
                align="center"
                style="
                  border-bottom: solid;
                  border-color: rgba(44, 62, 80, 0.7);
                "
              >
                <v-col>
                  <div
                    class="font-weight-black white--text"
                    style="font-size: x-large;"
                  >
                    <p>HELP</p>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div
                    class="font-weight-black white--text"
                    style="font-size: large;"
                  >
                    <p>
                      How to generate your credentials
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
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
  name: "CredentialsContent",

  /*
  props: {
    onChange,
    initvalues
  },
*/
  data() {
    return {
      profile: ["profile 1", "profile 2", "profile 3", "profile 4"],
      checkbox: true
    };
  }
  /*
  contentHasChanged() {
    // Récupère les donnees de chaque champs
    const accessKey = "xxx";
    if (this.onChange) {
      this.onChange({
        'accessKey': accessKey
      })
    }
  }
*/
};
</script>

<style scoped></style>
