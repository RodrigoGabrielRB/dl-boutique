import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#FF449F",
            "title-primary": "#FF449F",
            "subtitle-primary": "#475257",
            warning: "#FDD835",
            success: "#009688",
            textWarning: "#000",
            textSucess: "#fff",
          },
        },
      },
});
