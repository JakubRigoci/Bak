import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify
);

export default new Vuetify({
        iconfont: 'mdi',
        theme:{
            themes:{
                light: {
                    primary: '#FAFAFA',
                    //secondary: '#E0F2F1',
                    secondary: '#CFD8DC',
                    info: '#78909C',//'#B2DFDB',
                    error: 'red lighten-1',
                }      
            }
        }
});
