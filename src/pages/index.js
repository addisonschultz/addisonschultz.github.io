import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"
import Button from "../components/button"
import profilePicture from "../images/addisonLittleMissRobot.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="mainWrapper">
      <div className="avatarHeader">
        <img src={profilePicture} alt="C'est Moi" id="profilePicture" />
      </div>
      <h2>
        <span id="openText">Hi, I’m Addison.</span>{" "}
        <span id="hiddenText">Some people call me Addi!</span>
      </h2>

      <h2>
        I’m originally from Milwaukee, Wisconsin, but I currently live in
        Amsterdam, NL.
      </h2>

      <h2>
        I’m a Product Specialist at{" "}
        <a className="link" href="https://framer.com" target={"_blank"}>
          Framer
        </a>
        , a tool that empowers anyone to express their creative side.
      </h2>

      <h2>
        I pretty much enjoy anything that has to do with a computer, but when
        I’m not around a plug, I enjoy skating, traveling, and new things.
      </h2>

      <h2>
        If you want, you can see some of the things I've{" "}
        <Link to="/skills/" className="link">
          learned
        </Link>
        , or you can read more about my{" "}
        <Link to="/about/" className="link">
          background
        </Link>
        .
      </h2>

      <h2>I always love chatting with new people, so feel free to say hi!</h2>
      <div className="buttonWrapper">
        <Button text={"Twitter"} href={"https://twitter.com/AddisonSchultz"} />
        <Button text={"Github"} href={"https://github.com/addisonschultz"} />
        <Button text={"Email"} href={"mailto:addisonschultz0@gmail.com"} />
        <Button text={"Playground"} href={"localhost:8000/testing"} />
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
