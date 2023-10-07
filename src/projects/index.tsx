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
    description: `"Pizza Hut Brasil" is a food delivery app for Pizza Hut in Brazil. It includes menu management, order tracking, address capture, and payments. As a mobile frontend developer, I collaborated with the team to build and maintain these features, working closely with designers, backend developers, testers, and product manager.`,
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
    projectInfo: (
      <p>
        {`With pride, I am part of the team that developed the "Pizza Hut Brasil" project, a React Native mobile application. This app was created specifically for the renowned pizza brand, Pizza Hut, catering to the demands of the Brazilian market.`}
        <br />
        <br />
        {`Throughout the development process, I faced various challenges, such as integrating with external SDKs, including Firebase and Google Maps, as well as implementing tagging services like Firebase Analytics, Salesforce Data Cloud, and Meta analytics.`}
        <br />
        <br />
        {`The application is a comprehensive food delivery solution, offering features such as menu management, real-time order tracking, address capture, and payment flows. As a mobile frontend developer, I had the opportunity to work on all of these functionalities, either building them from scratch or collaborating with other team members.`}
        <br />
        <br />
        {`One of the project's standout features is its commitment to quality. The entire application is covered by unit tests and follows a rigorous manual quality assurance process. I worked closely with other frontend developers, backend developers, designers, testers, PMs, and product people to ensure the application met expectations.`}
        <br />
        <br />
        {`The application's structure is multi-brand and multi-language, which made development even more challenging and stimulating. Additionally, in specific situations, I was responsible for dealing with native code, working with Objective-C and Swift for iOS, as well as Java and Kotlin for Android.`}
        <br />
        <br />
        {`From the project's inception to its deployment and ongoing maintenance, I played a crucial role on the team. In addition to developing features, I actively participated by contributing ideas alongside designers and establishing integration standards with the backend.`}
        <br />
        <br />
        <p className="mt-4 text-xs">
          {`You can find the app published on the Android and iOS stores: `}
          <br />
          <br />
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all line"
            href="https://play.google.com/store/apps/details?id=com.imc.pizzahut"
          >
            Google Play
          </a>
          <br />
          <br />
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all"
            href="https://apps.apple.com/br/app/pizza-hut-brasil/id1673115073"
          >
            App Store
          </a>
        </p>
      </p>
    ),
  },
  {
    title: "Pizza Hut Brasil - Web",
    description: `The "Pizza Hut Brasil - Web" project is a React-based web app for food delivery. It mirrors the mobile app, including features and business rules, complete with a responsive version for both desktop and mobile. I was responsible for transitioning between the mobile and web applications, developing features in both, and playing a crucial role with expertise in the technologies of both platforms.`,
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
    projectInfo: (
      <p>
        {`In the development of the "Pizza Hut Brazil - Web" project, I had the opportunity to play a crucial role as a frontend developer. This React application is much more than just a website; it's a complete food delivery app.`}
        <br />
        <br />
        {`From the outset, I was involved in all aspects of the project. I worked closely with a multidisciplinary team consisting of frontend developers, backend developers, designers, testers, project managers, and product people. This diversity of talents and perspectives enriched my experience and contributed to the project's success.`}
        <br />
        <br />
        {`One of my primary responsibilities was to ensure a seamless user experience on both the web and mobile versions of the app. I developed features on both platforms and ensured that business rules were consistent.`}
        <br />
        <br />
        {`Furthermore, we integrated various tagging and monitoring tools, such as Google Tag Manager, Hotjar, and Meta Pixel, to gain valuable insights into user behavior and continuously improve the experience.`}
        <br />
        <br />
        {`The application includes menu and store management, real-time order tracking, and payment processing flows. I also led continuous improvement initiatives, proposing ideas and establishing integration standards with the backend.`}
        <br />
        <br />
        {`The project also presented the challenge of dealing with multiple brands and languages, requiring a multi-brand and multi-language framework. My dedication and commitment from the initial setup to deployment were essential to the project's success.`}
        <br />
        <br />
        {`In summary, my journey in the development of the "Pizza Hut Brazil" project was enriching and challenging. I collaborated with a talented team, developed features on various platforms, and contributed to the ongoing evolution of the product.`}
        <br />
        <br />
        <p className="mt-4 text-xs">
          {`You can visit the application through the link below. To have a complete experience, it is necessary to provide an address that is within the delivery radius of the available stores: `}
          <br />
          <br />
          <a
            tabIndex={-1}
            target="_blank"
            className="underline break-all line"
            href="https://pizzahut.com.br/"
          >
            https://pizzahut.com.br/
          </a>
        </p>
      </p>
    ),
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
