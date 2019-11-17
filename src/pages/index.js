import React from "react"
import Layout from "../components/layout"
import Projects from "./projects"

export default () => {
  return (
    <Layout>
      <div id="content">
        <div id="home">
          <div>About me</div>

          <div id="bio">
            <div id="portrait">
              <div>
                <img src="/profile.jpg" alt="portrait" id="bio-image" />
              </div>

              <div id="socialIconsCont">
                <a href="https://linkedin.com/in/edgarc0998/">
                  <div id="iconButton">
                    <img id="socialIcons" src="/linkedIn.webp" />
                  </div>
                </a>

                <div id="iconButton">
                  <a href="https://github.com/edgarc0998/">
                    <img id="socialIcons" src="/github.png" />
                  </a>
                </div>
                <div id="iconButton">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=edgarc0998@gmail.com">
                    <img id="socialIcons" src="/gmail.png" />
                  </a>
                </div>
              </div>
            </div>

            <div id="about">
              <p>
                Hello, my name is Edgar Camacho. I’m a highly motivated,
                self-starting developer with a passion for learning new
                technologies.
                <br />
                <br />
                My passion in technology began as a child. As I grew older, I
                became more and more curious about how technology really worked,
                and I wanted to learn as much as I could. After taking a
                computer science concepts course in high school, I really fell
                in love with programming. My passion in tech is driven by the
                ability to create software that can have a positive impact on
                people's lives.
                <br />
                <br />
                I enjoy the immediacy and interactivity of front end
                development. Getting to know the React ecosystem and the
                challenges involved in writing clean, lightweight, and
                maintainable code for the browser has been a blast. But I've
                also been captivated by the problem space of scalable,
                performant server architecture, especially for real-time
                applications.
                <br />
                <br />
                Having recently graduated from the coding bootcamp, Fullstack
                Academy, I am a tech enthusiast looking for my first role as a
                front or back end developer.
              </p>
            </div>
          </div>

          <div id="resume">
            <a href="/resume.pdf">View My Resume</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
