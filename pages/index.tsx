import React, { CSSProperties } from "react";
import { FaDiscord, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaGithub, FaGithubSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import About from "../components/about";
import Card from "../components/card";
import { SocialItem, SocialWrapper } from "../components/social";
import Head from 'next/head';

const discordStyle: CSSProperties = {
  fontSize: "1.45rem",
  lineHeight: "2rem"
}

export default class Index extends React.Component {

  render() {
    return(<Card>
      <Head>
        <title>EmirhanOlgn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <About/>
      <SocialWrapper>
        <SocialItem target="https://github.com/emirhanolgn" custom={null}>
          <FaGithubSquare/>
        </SocialItem>
        <SocialItem target="mailto:emirhanolgn@outlook.com" custom={null}>
          <FaEnvelopeSquare/>
        </SocialItem>
        <SocialItem target="https://discord.com/users/458375276209111042" custom={discordStyle}>
          <FaDiscord/>
        </SocialItem>
      </SocialWrapper>
    </Card>)
  }
}
