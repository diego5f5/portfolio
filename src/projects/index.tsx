import { ReactElement } from "react";
export interface IProject {
  title: string;
  description: string;
  mainTechs: string[];
  mainImage: string;
  year: number;
  projectInfo: ReactElement;
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
    projectInfo: <></>,
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
    mainImage: "/images/pizza-hut-web.png",
    year: 2023,
    projectInfo: <></>,
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
    mainImage: "/images/crie-seus-posts.png",
    year: 2022,
    projectInfo: <></>,
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
    mainImage: "/images/thermal-manipulation.png",
    year: 2022,
    projectInfo: <></>,
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
    mainImage: "/images/predikta-pass.png",
    year: 2021,
    projectInfo: <></>,
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
    mainImage: "/images/qr-loc-dashboard.png",
    year: 2021,
    projectInfo: <></>,
  },
  {
    title: "QR Loc - App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lacus mi. In bibendum sagittis urna. Aenean sit amet quam ac sapien bibendum luctus. Suspendisse laoreet urna at metus porta, pellentesque facilisis felis pulvinar. Vivamus vel mauris sed mauris commodo mollis. Nunc in porta mi. Nulla cursus molestie laoreet.",
    mainTechs: ["React Native", "Javascript", "Axios", "Styled Components"],
    mainImage: "/images/qr-loc-app.png",
    year: 2021,
    projectInfo: <></>,
  },
  {
    title: "Planus",
    description:
      "Planus is a versatile time tracking platform. Users log hours for their projects, while admins access graphs and cost data. An internal project, I, along with colleagues, developed its frontend. My role encompassed idea contribution and logic creation for interactive reports. We later launched it company-wide, reducing costs tied to third-party tools and fostering internal maintenance.",
    mainTechs: ["React", "Javascript", "Axios", "Styled Components"],
    mainImage: "/images/planus.png",
    year: 2020,
    projectInfo: (
      <p>
        {`Planus is a time tracking platform with different levels of access. It allows users to log their hours for the projects they are associated with. Additionally, administrators and managers can generate graphs and spreadsheets related to the total project hours and associated costs. This was a project planned and executed internally by the company I worked for. It originally started as an internal solution but evolved into a product.`}
        <br />
        <br />
        {`I worked as a frontend developer along with two colleagues of the same level. I had the opportunity to contribute to almost all features of the application, suggesting ideas and creating the logic responsible for generating some of the interactive reports directly on the frontend.`}
        <br />
        <br />
        {`The project was adopted for internal use within the company to test it in a real-world environment and gather feedback for possible improvements and adjustments. Its usage also led to a reduction in costs associated with third-party software licenses, as there was now an internal, customizable solution maintained by the company's own team.`}
        <p className="mt-4 text-xs">
          {`You can access the application directly through this link: `}
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://planus.io/"
          >
            https://planus.io/
          </a>
        </p>
      </p>
    ),
  },
  {
    title: "Betim Sem Dengue",
    description:
      "The 'Betim Sem Dengue' app was one of my early React Native projects, originating from a collaboration between my workplace and the city I reside in. It aimed to enable residents to report dengue mosquito breeding sites, utilizing user location and images sent to a database for health agents' action. Developed within a tight timeline, the project broadened my React Native skills.",
    mainTechs: ["React Native", "Javascript"],
    mainImage: "/images/betim-sem-dengue.png",
    year: 2019,
    projectInfo: (
      <p>
        {`The "Betim Sem Dengue" app marked one of my initial experiences with React Native projects at the outset of my career. It sprang from a collaboration between the company I worked for and my city of residence. The app's core concept revolved around providing city residents a tool to report potential breeding sites of the dengue mosquito. It entailed capturing the user's location and a photo of the suspected area, with this information funneling into a database for eventual use by health agents, responsible for countering these breeding sites. Additionally, the app aimed to highlight areas in the city with elevated dengue breeding occurrences. All this had to be developed within a tight timeframe, aligning with the peak season of dengue incidents.`}
        <br />
        <br />
        {`The front-end team comprised myself and another seasoned React Native developer. Until then, my experience was primarily in React projects tailored for the web, making this a wholly novel encounter. During the project, I undertook tasks like crafting the layout and orchestrating the image capture flow via the camera.`}
        <br />
        <br />
        {`A modestly scoped project, it was my inaugural venture in developing an app from scratch and releasing it on the app store. Despite this, we successfully met the deadline, yielding a positive impact on the city's residents by aiding the local government's dengue-fighting initiatives in Betim.`}
        <p className="mt-4 text-xs">
          {`In this link you can find the news article about when the app was made available to the public: `}
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://agendabetim.com.br/noticias/betim/2020/03/21/betim-ganha-aplicativo-para-ajudar-combater-a-dengue/117/"
          >
            https://agendabetim.com.br/noticias/betim/2020/03/21/betim-ganha-aplicativo-para-ajudar-combater-a-dengue/117/
          </a>
        </p>
      </p>
    ),
  },
];
