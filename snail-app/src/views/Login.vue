<template>
<div id="app">
    <v-container>
        <v-layout wrap>
            <v-flex sm12 md6 offset-md3>
                <v-card elevation="4" light>
                    <v-card-title>
                        <v-layout align-center justify-space-between>
                            <h3 class="headline">Přihlásit</h3>
                        </v-layout>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form>
                            <v-text-field color="secondary" outline label="Přihlasovací jméno" type="text" v-model="name"></v-text-field>
                            <v-text-field color="secondary"
                            :append-icon="showPswd ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append="showPswd = !showPswd"

                             outline hide-details label="Heslo" :type="showPswd ? 'text' : 'password'" v-model="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                        <v-spacer></v-spacer>
                        <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" router to="/register">
                            Přejít na registraci
                        </v-btn>
                        <v-btn color="info" @click="login" :large="$vuetify.breakpoint.smAndUp">
                            Přihlásit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            name: "",
            password: "",
            showPswd: false,
        };
    },
    methods: {
        login: function () {
            let name = this.name;
            let password = this.password;
            this.$store.dispatch("login", {
                    name,
                    password
                })
                .then(() => this.$router.push("/home"))
                .catch((err) => console.log(err));
        },
    },
};
</script>
