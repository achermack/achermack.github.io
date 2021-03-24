import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        contact: {
            type: Object,
            default: function () {
                return {};
            }
        }
    }
})

export default class Contact extends Vue {

}