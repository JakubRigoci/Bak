import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify
);

export default new Vuetify({
        iconfont: "mdi",
        theme:{
            themes:{
                light: {
                    primary: "#FAFAFA",
                    secondary: "#CFD8DC",
                    info: "#78909C",
                    buttonsText: "#42A5F5"
                }      
            }
        }
});
