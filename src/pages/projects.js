import React from "react"
import Layout from "../components/layout"
import { Slide } from "react-slideshow-image"

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`)
//   },
// }

// const Slideshow = props => {
//   return (
//     <div className="slide-container">
//       <Slide {...properties}>
//         {props.images.map((image, idx) => {
//           return (
//             <div className="each-slide" key={idx}>
//               <div style={{ backgroundImage: `url(${image})` }}></div>
//             </div>
//           )
//         })}
//       </Slide>
//     </div>
//   )
// }

const ProjectDiv = props => {
  console.log("props", props)
  return (
    <div class="project">
      <div id="project-left">
        <img src={props.proj.images[0]} style={{ height: 300, width: 300 }} />
        {/* <Slideshow images={props.proj.images} /> */}
      </div>
      <div id="project-right">
        <div id="project-header">
          <div id="project-name">
            {props.proj.name}
            <br />
            <span id="project-alt">{props.proj.alt}</span>
          </div>
          <div id="projectLinks">
            <div id="project-link">
              <a href={props.proj.githubUrl}>github</a>
            </div>
            <div id="project-link">deployed</div>
          </div>
        </div>

        <div id="project-content">
          <div id="project-desc">{props.proj.desc}</div>
        </div>
        <div id="project-techStack">
          {props.proj.techStack.map(tech => {
            return <div>{tech}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          name: "Nutrio",
          alt: "Calorie/fitness tracking mobile app",
          desc:
            "React native app for weight management, meal planning, and tracking fitness progress. Recommends meals other users have had that also fit within your specific daily calorie limit. Allows you to take a picture of your food to quickly track what you eat.",
          images: [
            "dailyLog.png",
            "findFoods.png",
            "singleFood.png",
            "progress.png",
          ],
          githubUrl: "https://github.com/capstone1906/Nutrio",
          techStack: [
            "Neo4j",
            "Victory Native",
            "Node.js",
            "React Native",
            "Clarifai",
            "Nutritionix",
            "Postgres",
            "Express",
            "Redux",
          ],
        },
        {
          name: "Grace Shopper",
          alt: "Responsive e-commerce site (demo mode)",
          desc:
            "A full stack ecommerce web application featuring a filterable product catalog, cart persistence and Stripe powered checkout for unauthenticated and authenticated users, and a route restricted account and order management portal for admin users. Since this is a demo project, we scraped all our products (images, description, price) fromn home depot's website",

          images: ["gs1.png"],
          githubUrl: "https://github.com/graceful-shoppers/Grace-Shopper",
          techStack: [
            "Node.js",
            "React",
            "Express",
            "Postgres",
            "Redux",
            "Apify",
            "Styled Components",
            "Jasmine",
          ],
        },
        {
          name: "Recipe Finder",
          alt: "React web app for finding recipes",
          desc:
            "Recipe Finder React web app used for finding recipes by typing in ingredients a user currently has, allows users to save recipes. Uses Bootstrap for responsive design. OAUTH enables users to quickly make an account",
          images: ["tanks.jpg"],
          githubUrl: "https://github.com/edgarc0998/recipeFinder",
          techStack: [
            "Node.js",
            "Express.js",
            "Javascript",
            "HTML/CSS",
            "React",
            "Bootstrap",
            "PostgreSQL",
            "Spoonacular API",
          ],
        },
        {
          name: "Tank Battles",
          alt: "Multiplayer shooting game",
          desc:
            "Drops players into a battlefield where they earn points by destroying enemy tanks. Whoever has the highest score after the time limit expires wins. Players highest scores are recorded using our cloud database. Basic authentication for players who want to save their scores.",
          images: ["dailyLog.png"],
          githubUrl: "https://github.com/edgarc0998/proj5",
          techStack: [
            "HTML/CSS",
            "Javascript",
            "Node.js",
            "Express.js",
            "Sockets.io",
            "PostgreSQL",
          ],
        },
      ],
    }
  }

  render() {
    return (
      <Layout>
        <div id="projects">
          {this.state.projects.map((project, idx) => {
            return <ProjectDiv proj={project} key={project.alt} />
          })}
        </div>
      </Layout>
    )
  }
}
