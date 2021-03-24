import Vue from 'vue'
import Component from 'vue-class-component'
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";

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
    aboutText = "I'm a computer science student at the Univeristy of Wisconsin and enjoy writing software. Check out some of what I've worked on below!";
    resumeLink = "https://github.com/achermack";
    apps: App[] = [
        {
            name: "Portfolio Site",
            logo: "cherm_io.png",
            link: "https://cherm.io",
            role: "Maintainer",

            description:
                "I created this website to showcase some of my work as a Software Developer. This website is built using the Vue.js and Vuetify and leverages Travis CI and Github Pages for automatic building and deployment. Check out the Github Repository below!",
            technologies: [
                {
                    name: "Vue",
                    icon: "mdi-vuejs",
                    link: "https://vuejs.org",
                },
                {
                    name: "Vuetify",
                    icon: "mdi-vuetify",
                    link: "https://vuetifyjs.com/en/",
                },
                {
                    name: "Travis-CI",
                    icon: "mdi-wrench",
                    link: "https://travis-ci.org/",
                },
                {
                    name: "Github Pages",
                    icon: "mdi-github",
                    link: "https://pages.github.com",
                },
            ],
            code: {
                name: "Github",
                icon: "mdi-github",
                link: "https://www.github.com/achermack",
            },
            active: false,
        },
        {
            name: "WebService Consumer",
            logo: "service-consumer.png",
            link: "https://cherm.io",
            role: "Maintainer",
            description:
                "I developed a C# Library for interacting with a database's SOAP webservice API. In addition, I created a development pipeline to automate it's build and deployment to an artifactory repository",
            technologies: [
                {
                    name: "C#",
                    icon: "mdi-dot-net",
                    link:
                        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
                },
                {
                    name: "SOAP",
                    icon: "mdi-web",
                    link: "https://en.wikipedia.org/wiki/SOAP",
                },
                {
                    name: "Gitlab",
                    icon: "mdi-gitlab",
                    link: "https://gitlab.com",
                },
                {
                    name: "Artifactory",
                    icon: "mdi-package",
                    link: "https://jfrog.com/artifactory",
                },
            ],
            code: {},
            active: false,
        },
        {
            name: "ABaN",
            logo: "header.png",
            link: "https://cherm.io",
            role: "Maintainer",
            description:
                "Developed an AlpineLinux-based secure erase utility. It runs completely in RAM and integrates with a database system for asset management. In addition, I created a build and deploy pipelines leveraging kubernetes and docker in Gitlab CI.",
            technologies: [
                {
                    name: "AlpineLinux",
                    icon: "mdi-linux",
                    link: "https://alpinelinux.org/",
                },
                {
                    name: "Docker",
                    icon: "mdi-docker",
                    link: "https://www.docker.com/",
                },
                {
                    name: "Kubernetes",
                    icon: "mdi-kubernetes",
                    link: "https://kubernetes.io/",
                },
                {
                    name: "GitLab",
                    icon: "mdi-gitlab",
                    link: "https://about.gitlab.com/",
                },
            ],
            code: {},
            active: false,
        },
    ];
    contactLinks: ContactLink[] = [
        {
            name: "Email",
            value: "austinchermack@gmail.com",
            link: "mailto:austinchermack@gmail.com",
            icon: "mdi-email",
            active: false,
        },
        {
            name: "LinkedIn",
            value: "Austin Chermack",
            link: "https://www.linkedin.com/in/austin-chermack-964522187/",
            icon: "mdi-linkedin",
            active: false,
        },
        {
            name: "Github",
            value: "achermack",
            link: "https://github.com/achermack/",
            icon: "mdi-github",
            active: false,
        },
    ];
    aboutme = false;


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

