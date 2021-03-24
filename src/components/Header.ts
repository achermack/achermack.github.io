import Vue from 'vue'
import Component from "vue-class-component";
import { VueTyper } from "vue-typer"


@Component({
    components: {
        VueTyper,
    },
})

export default class Header extends Vue {
    data() {
        return {
            options: {
                duration: 500,
                offset: -275,
                easing: "easeInOutCubic",
            },
        };
    }
}