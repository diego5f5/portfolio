export interface IProject {
  title: string;
  description: string;
  mainTechs: string[];
  mainImage: string;
  year: number;
  projectInfo: string;
}

export const projects: IProject[] = [
  {
    title: "Pizza Hut Brasil - App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React Native",
      "Typescript",
      "Jest",
      "Redux",
      "i18next",
      "Styled Components",
      "Firebase",
      "Google Maps SDK",
      "Axios",
      "Socket.io",
      "Formik",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2023,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Pizza Hut Brasil - Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React",
      "Typescript",
      "Jest",
      "Vite",
      "Redux",
      "i18next",
      "Styled Components",
      "Framer Motion",
      "Google Maps SDK",
      "Axios",
      "Socket.io",
      "React Hook Form",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2023,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: ["Next", "React", "Typescript", "Tailwind", "Framer Motion"],
    mainImage: "/images/pizza-hut-app.png",
    year: 2023,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Crie Seus Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React",
      "Typescript",
      "Apollo GraphQL",
      "Single-spa",
      "Konva.js",
      "Styled Components",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2022,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Predikta - Dashboard(Thermal Manipulation)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React",
      "Javascript",
      "Axios",
      "Konva.js",
      "Styled Components",
      "AWS Amplify",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2022,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Predikta Pass",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React Native",
      "Javascript",
      "Expo",
      "Axios",
      "Styled Components",
      "AWS Amplify",
      "Google Maps SDK",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2021,
    projectInfo: "Project Info <here>",
  },
  {
    title: "QR Loc - Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: [
      "React",
      "Javascript",
      "Axios",
      "Styled Components",
      "Google Maps SDK",
    ],
    mainImage: "/images/pizza-hut-app.png",
    year: 2021,
    projectInfo: "Project Info <here>",
  },
  {
    title: "QR Loc - App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: ["React Native", "Javascript", "Axios", "Styled Components"],
    mainImage: "/images/pizza-hut-app.png",
    year: 2021,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Planus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: ["React", "Javascript", "Axios", "Styled Components"],
    mainImage: "/images/pizza-hut-app.png",
    year: 2020,
    projectInfo: "Project Info <here>",
  },
  {
    title: "Betim Sem Dengue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: ["React Native", "Javascript"],
    mainImage: "/images/pizza-hut-app.png",
    year: 2019,
    projectInfo: "Project Info <here>",
  },
];
