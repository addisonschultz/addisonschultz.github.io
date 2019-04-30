import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"
import profilePicture from "../images/addisonLittleMissRobot.jpg"

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime()
  var age_dt = new Date(diff_ms)

  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

const About = () => (
  <Layout>
    <SEO title="about" />

    <div className="mainWrapper">
      <div className="avatarHeader">
        <img src={profilePicture} alt="C'est Moi" id="profilePicture" />
      </div>
      <div className="aboutWrapper">
        <h2>
          Well, I’m {calculate_age(new Date("7/17/1996"))} years old, and get
          excited easily (hopefully that’s not a bad thing). I grew up in a
          small town in Wisconsin, USA, and moved to Milwaukee when I was 18 to
          study Digital Marketing and Information Technology at The University
          of Wisconsin Milwaukee.
        </h2>
        <h2>
          When I was in University, I realised how important computers were
          becoming in the world, and found it interesting learning how
          everything worked behind the scenes. So, I started teaching myself
          anything and everything, and tried to apply many of the skills I was
          learning in different projects.
        </h2>
        <h2>
          During my time in University, I also got an opportunity to study
          abroad in Europe. I had never been to Europe before when I was
          presented the chance, but being the curious person I am, I went to
          study in Paris without knowing what to expect.
        </h2>
        <h2>
          This was a real eye-opener for me, realising that life was happening
          all around me, and I set out to learn.
        </h2>
        <h2>
          The day after I graduated from University, I was on a plane to
          Amsterdam. I had a bag of clothes, a temporary place to stay, and an
          empty mind willing to learn.
        </h2>
        <h2>
          While I was in Amsterdam, I was still able to freelance, while
          continuing learning about Full Stack Web Development in more practical
          settings at a place called Codaisseur.
        </h2>
        <h2>
          This led me to where I am now, where I get to work with companies
          around the globe, learning about how product teams work, but also
          helping them understand some of the fundamentals I’ve learned with
          Framer.
        </h2>
      </div>
      <h3>
        <Link to="/" className="link">
          Back
        </Link>
      </h3>
    </div>
    <Footer />
  </Layout>
)

export default About
