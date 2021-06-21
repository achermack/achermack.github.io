import Vue from 'vue'
import Component from 'vue-class-component'
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import projectsJson from "@/assets/projects.json";
import contactLinksJson from "@/assets/contactLinks.json";

interface App {
    name: string;
    logo: string;
    link: string;
    role: string;
    description: string;
    technologies: object[];
    code: object;
    active: boolean;
}

interface ContactLink {
    name: string;
    value: string;
    link: string;
    icon: string;
    active: boolean;
}

@Component({
    components: {
        Project,
        Contact
    }
})

export default class Home extends Vue {
    aboutText = "Hi, I'm Austin and I like to write code from time to time.";
    resumeLink = "https://github.com/achermack";
    apps = projectsJson.projects;
    aboutme = false;
    contactLinks = contactLinksJson.contactLinks;
    mounted() {
        // Cascade load projects
        this.aboutme = true;
        setTimeout(() => {
            let i = 0;
            this.apps.forEach(element => {
                setTimeout(() => element.active = true, i * 250);
                i = i + 1;
            });
        }, 500)
        setTimeout(() => {
            let i = 0;
            this.contactLinks.forEach(element => {
                setTimeout(() => element.active = true, i * 100);
                i = i + 1;
            });
        }, 1000)
    }
}

