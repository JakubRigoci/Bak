<template>
<div id="app">
    <v-container>
        <v-layout wrap>
            <v-flex sm12 md6 offset-md3>
                <v-card elevation="4" light>
                    <v-card-title>
                        <v-layout align-center justify-space-between>
                            <h3 class="headline">Registrovat</h3>
                        </v-layout>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field color="secondary" :rules="nameRules" outline label="Přihlasovací jméno" type="text" v-model="user.username"></v-text-field>
                            <v-text-field color="secondary" :rules="nameRules" outline label="Jméno" type="text" v-model="user.name"></v-text-field>
                            <v-text-field color="secondary" :rules="emailRules" outline label="E-mail" type="text" v-model="user.email"></v-text-field>
                            <v-text-field color="secondary" :rules="passwordRules" outline label="Heslo" type="password" v-model="user.password"></v-text-field>
                            <v-text-field color="secondary" :rules="[(this.user.password === this.passwordMatch) || 'Hesla se musí zhodovat']"
                             outline label="Zopakovat heslo" type="password" v-model="passwordMatch"></v-text-field>
                            <v-text-field color="secondary" :rules="phoneRules" outline label="Telefon" type="number" v-model="user.phone"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" :large="$vuetify.breakpoint.smAndUp" router to="/login">
                            Přihlásit
                        </v-btn>
                        <v-btn color="secondary" @click="register" :large="$vuetify.breakpoint.smAndUp">
                            Registrovat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import * as rules from "@/components/Shared/Validation.js"

export default {
    name: "Login",
    data() {
        return {
            valid: false,
            user: {
                name: "",
                username: "",
                email: "",
                password: "",
                phone: "",
                facebook: "",
            },
            passwordMatch: "",
            nameRules: rules.nameRules,
            passwordRules: rules.passwordRules,
            phoneRules: rules.phoneRules,
            emailRules: rules.emailRules,
        };
    },
    methods: {
        register() {
            if (this.$refs.form.validate()) {
            this.$store.dispatch("register", this.user)
                .then(() => this.$router.push("/home"))
                .catch((err) => console.log(err));}
        },
    },
};
</script>
