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
      "Salesforce SDK",
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
    description: `"Crie Seus Posts" is a React app within a microfrontends framework. It lets users craft custom posts with Natura brand images, like social media posts. You can add backgrounds, products, and text, and download or save posts for future editing. It's fully responsive for web and mobile. I led the project, working closely with designer and backend.`,
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
    projectInfo: (
      <p>
        {`The web project "Crie Seus Posts" is an application developed with React and is part of a microfrontends framework integrated into a main application. The main function of "Crie Seus Posts" is to enable the creation of customized posts, using a predefined set of images from the `}
        <a
          tabIndex={-1}
          target="_blank"
          className="underline break-all"
          href="https://www.natura.com.br/"
        >
          Natura
        </a>
        {` brand. The creation experience is similar to crafting posts on social networks, allowing for background selection, addition of products/stickers and text, with complete freedom to position and resize as needed.`}
        <br />
        <br />
        {`One notable feature is the ability to download the created post as an image and also save it as a data structure. This enables future edits and reference to the products/stickers present in the image, creating a connection with the actual products of the brand.`}
        <br />
        <br />
        {`Furthermore, the application is fully responsive, adapting seamlessly to both web and mobile devices. During development, I worked as a front-end developer, operating independently but in constant communication with other team members, such as backend professionals and designers.`}
        <br />
        <br />
        {`I took on the responsibility of creating this application from scratch until its successful deployment in production. This journey was filled with challenges, but the final result is a collaborative effort and a dedication to excellence.`}
        <br />
        <br />
        <p className="mt-4 text-xs">
          {`To view the application, it is necessary to have a consultant account and be logged into the application: `}
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://www.natura.com.br/acesso-consultor"
          >
            https://www.natura.com.br/acesso-consultor
          </a>
        </p>
      </p>
    ),
  },
  {
    title: "Predikta - Dashboard(Thermal Manipulation)",
    description:
      "Predikta Dashboard: Web app for thermal image manipulation and data visualization. I pioneered its creation, from scratch, as the sole front-end developer. Effective communication with design and backend teams was crucial for its success.",
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
    projectInfo: (
      <p>
        {`Predikta Dashboard is an innovative web application that connects to the user screening flow. This powerful tool not only displays images but also the data collected during screenings. Through Dashboards, interactive charts, and lists, users can effectively visualize and analyze this data.`}
        <br />
        <br />
        {`The primary functionality of Predikta Dashboard is the manipulation of thermal images directly on the web. I developed this feature entirely from scratch, facing the challenge of creating something unique without available references on the internet. With this capability, users can apply color palettes to the images, representing the temperature of each pixel. Additionally, it's possible to create temperature ranges and display only the pixels that fall within that range, allowing for detailed analysis and report generation.`}
        <br />
        <br />
        {`As the sole front-end developer on the team, I took on the responsibility of building the application from the ground up and maintaining effective communication with the design and backend team members.`}
        <br />
        <br />
        <p className="mt-4 text-xs">
          {`You can view the deployed application through this link: `}
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://dashboard.predikta.com.br/"
          >
            https://dashboard.predikta.com.br/
          </a>
        </p>
      </p>
    ),
  },
  {
    title: "Predikta Pass",
    description:
      "Predikta Pass app complements kiosk screenings. Users scan QR codes to check screening results, view valid passes, and locate nearby kiosks on a map. Built with AWS integration, login flows. Sole frontend/mobile developer using Expo. Collaborated with backend and designer, adhering to agile methods.",
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
    projectInfo: (
      <p>
        {`The Predikta Pass application was created to complement the digital screening experience conducted at a kiosk equipped with thermal technology. The app functions as a pass for accessing locations and events safely. After undergoing screening at the kiosk, a QR code is generated. With their smartphone in hand, the user scans this QR code, which displays the result of their screening. Once the code is scanned, the app interprets the result, checks with the backend, and displays on the main screen of the app the current status of the user and whether they have a valid/approved pass.`}
        <br />
        <br />
        {`In addition to the QR code interpretation functionality, the app also records and maintains a history of the passes and scans that have been generated. It's also possible to locate nearby kiosks on the map, represented by custom markers. The app features login, registration, and password recovery flows, integrating with AWS technologies like Cognito and Amplify.`}
        <br />
        <br />
        {`I was the sole frontend/mobile developer for this project and responsible for creating it from the initial setup to its production release. I worked using technologies like Expo, which facilitated distribution for internal testing during the development phase, as well as building final versions. I was also responsible for configuring both the Google Play and Apple Store listings.`}
        <br />
        <br />
        {`Throughout the development process, I collaborated closely with the backend developer, actively participating in defining contracts. I also worked closely with the designer, contributing to the layout ideation and adaptation, as well as giving presentations and frequently updating the board and card mapping, all utilizing agile methodologies.`}
        <p className="mt-4 text-xs">
          {`You can view the deployed application through this link: `}
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://play.google.com/store/apps/details?id=com.predikta.prediktapass"
          >
            https://play.google.com/store/apps/details?id=com.predikta.prediktapass
          </a>
        </p>
      </p>
    ),
  },
  {
    title: "QR Loc - Dashboard",
    description:
      "QR Loc - Dashboard: Web app visualizes backend data with Google Maps integration. Markers display control and residence points, color-coded for evacuation status. Complements 'QR Loc - app' for monitoring high-risk areas. Explored map rendering with react and dynamic marker control.",
    mainTechs: [
      "React",
      "Javascript",
      "Axios",
      "Styled Components",
      "Google Maps SDK",
    ],
    mainImage: "/images/qr-loc-dashboard.png",
    year: 2021,
    projectInfo: (
      <p>
        {`The project "QR Loc - Dashboard" is a web application created with the purpose of providing a simplified visualization of a database connected to a backend API, featuring a straightforward and intuitive interface that ensures users can keep track of updates. The main functionality of the application is its integration with Google Maps, which allows for rendering points on the map based on the received data. The markers on the map are divided into two categories: the first category consists of control points, which are also listed in the left corner of the screen in a grid format, and the second category includes residence points. These residence points can change color based on the number of people who have evacuated: red when no one has evacuated, yellow when at least one person has evacuated, and green when all residents of a house have evacuated.`}
        <br />
        <br />
        {`This project complements the experience mentioned in the "QR Loc - app" project, where a QR code on a bracelet is scanned. Based on this scan, the dashboard will occasionally present updated data, assisting in monitoring the potential evacuation of a high-risk area.`}
        <br />
        <br />
        {`In addition to having the opportunity to work on a project that directly impacts people's lives, I also gained valuable insights into handling map rendering on the web using React and dynamically controlling markers on a map through data integration with the backend.`}
      </p>
    ),
  },
  {
    title: "QR Loc - App",
    description:
      "Scans QR codes on bracelets, updating a backend system. Developed exclusively for Android outside the official store. I had the opportunity to led the entire process, collaborating with a backend developer, designer, and project manager. Explored camera use, QR interpretation, backend integration, and offline storage.",
    mainTechs: ["React Native", "Javascript", "Axios", "Styled Components"],
    mainImage: "/images/qr-loc-app.png",
    year: 2021,
    projectInfo: (
      <p>
        {`The mobile application "QR Loc" was a solution created to be part of a set of applications that together formed a complete experience for mapping and monitoring inhabited areas that could be under some kind of risk, usually small villages located near mining dams. The main function of this app is to read QR codes located on bracelets, and after correctly reading a QR code, this information is communicated to a backend API that records the reading and updates the database.`}
        <br />
        <br />
        {`These bracelets with QR codes were distributed to residents of these regions during evacuation simulations and would eventually also be distributed in real situations. The reading and mapping of these bracelets would take place at control points spread throughout the region, and the reading action would be performed by civil defense agents present there, using smartphones or totems with the installed app. This app was developed exclusively for the Android operating system and distributed outside the official store. Therefore, these mobile devices had the Android system and the application was installed using the generated .apk file.`}
        <br />
        <br />
        {`I was the sole developer and responsible for building this app. Consequently, I was involved from the initial setup to the final distributed version. The team consisted of me, a backend developer, a designer, and a project manager. During development, I had the opportunity to work with interesting concepts such as camera manipulation, QR code interpretation, backend integrations, and offline storage for later use with internet access to perform synchronization.`}
      </p>
    ),
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
