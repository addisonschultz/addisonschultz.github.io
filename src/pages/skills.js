import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"
import profilePicture from "../images/addisonLittleMissRobot.jpg"

const Skills = () => (
  <Layout>
    <SEO title="skills" />

    <div className="mainWrapper">
      <div className="skillWrapper">
        <div className="avatarHeader">
          <img src={profilePicture} alt="C'est Moi" id="profilePicture" />
        </div>
        <h2>
          Over the course of the past 22 years, I’ve had opportunities to learn
          and use a number of technologies in various projects.
        </h2>

        <h2>Here are some things I've learned:</h2>

        <div className="skillContainer">
          <div className="devskill" id="html">
            <h2>HTML</h2>
          </div>
          <div className="devskill" id="css">
            <h2>CSS</h2>
          </div>
          <div className="devskill" id="js">
            <h2>JavaScript</h2>
          </div>
          <div className="devskill" id="react">
            <h2>React</h2>
          </div>
          <div className="devskill" id="typescript">
            <h2>Typescript</h2>
          </div>
          <div className="devskill" id="redux">
            <h2>Redux</h2>
          </div>
          <div className="devskill" id="git">
            <h2>Git</h2>
          </div>
          <div className="devskill" id="postgres">
            <h2>Postgres</h2>
          </div>
          <div className="devskill" id="sql">
            <h2>SQL</h2>
          </div>
          <div className="devskill" id="storybook">
            <h2>Storybook</h2>
          </div>
          <div className="devskill" id="gatsby">
            <h2>Gatsby</h2>
          </div>

          <div className="designskill" id="photoshop">
            <h2>Adobe Photoshop</h2>
          </div>
          <div className="designskill" id="illustrator">
            <h2>Adobe Illustrator</h2>
          </div>
          <div className="designskill" id="studio">
            <h2>Framer Studio</h2>
          </div>
          <div className="designskill" id="x">
            <h2>Framer X</h2>
          </div>
          <div className="designskill" id="sketch">
            <h2>Sketch</h2>
          </div>

          <div className="otherskill" id="ableton">
            <h2>Ableton</h2>
          </div>
          <div className="otherskill" id="analytics">
            <h2>Google Analytics</h2>
          </div>
          <div className="otherskill" id="adwords">
            <h2>Google Adwords</h2>
          </div>
          <div className="otherskill" id="wordpress">
            <h2>Wordpress</h2>
          </div>
          <div className="otherskill" id="shopify">
            <h2>Shopify</h2>
          </div>
        </div>

        <h3>
          <Link to="/" className="link">
            Back
          </Link>
        </h3>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default Skills
