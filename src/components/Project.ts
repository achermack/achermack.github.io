import Vue from 'vue'
import Component from "vue-class-component";

@Component({
    props: {
        app: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
    methods: {
        logo(name) {
            return require("@/assets/" + name);
        }
    }
})

export default class Projects extends Vue {

}