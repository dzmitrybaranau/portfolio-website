import React from "react";
import styled, { css } from "styled-components";
import { Curve } from "../Introduction";
import { Typography, TypographyWeight } from "../../StyledComponents";
import Project, { IProjectProps } from "./components/Project";
import linearGradientBg from "../../../static/images/BG2-min.png";
import ricexPic1 from "../../../static/images/riceex1-min.jpg";
import ricexPic2 from "../../../static/images/ricex2-min.png";
import roundRushPic1 from "../../../static/images/roundrush_board-1-min.png";
import roundRushPic2 from "../../../static/images/roundrush_leaderboard-min.png";
import TRPic1 from "../../../static/images/TR1-min.png";
import TRPic2 from "../../../static/images/TR2-min.png";
import newsroomPic1 from "../../../static/images/newsroom-min.png";
import newsroomPic2 from "../../../static/images/newsroom-2-min.png";
import connectors1 from "../../../static/images/connectors-min.png";
import connectors2 from "../../../static/images/connectors-2-min.png";
import dapperlabs1 from "../../../static/images/dapperlabs-ufc.png";
import dapperlabs2 from "../../../static/images/dapperlabs-ufc-2.png";
import dapperlabsNFL1 from "../../../static/images/dapperlabs-nfl.png";
import dapperlabsNFL2 from "../../../static/images/dapperlabs-nfl-2.png";
import grimace1 from "../../../static/images/grimace-1.jpeg";
import grimace2 from "../../../static/images/grimace-2.jpeg";
import greeceEmbassyScraper from "../../../static/images/greece-embassy-checker.jpeg";
import greeceFlag from "../../../static/images/greece.jpeg";
import { theme } from "../../../theme/theme";

export interface IPastProjectsProps {}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${linearGradientBg.src});
  background-size: cover;
  width: 100%;
  padding: 130px 0;
  position: relative;
  overflow: hidden;

  ${theme.breakpoints.xl} {
    padding: 130px 0 0px;
  }
`;

const projects: IProjectProps[] = [
  {
    name: "Grimace NFT",
    link: { href: "https://www.nft-grimace.com/", label: "nft-grimace.com" },
    images: [
      { href: grimace1.src, alt: "Terminal with start" },
      { href: grimace2.src, alt: "Grimace Smart Contract Explorer" },
    ],
    description: `NFT Auction where I implemented Solidity smart contracts and collaborated closely with designers to lead the frontend team, ensuring full functionality and website security`,
    shadowColor: "#9406ff",
  },
  {
    name: "NodeJS embassy visa scraper",
    link: { href: "/", label: "No Link" },
    images: [
      { href: greeceEmbassyScraper.src, alt: "Grimace NFT main page" },
      { href: greeceFlag.src, alt: "Grimace Smart Contract Explorer" },
    ],
    description: `Developed a NodeJS, Puppeteer, and Telegram scraper for the Greek embassy to notify users of available booking slots. Integrated 2captcha to bypass captchas and deployed the app on Heroku. The results were sold to a tour agency`,
    shadowColor: "#8e0147",
  },
  {
    name: "NFL All Day",
    link: { href: "https://nflallday.com/", label: "nflallday.com" },
    images: [
      { href: dapperlabsNFL1.src, alt: "NFL All Day main page" },
      { href: dapperlabsNFL2.src, alt: "NFL All Day drop page" },
    ],
    description: `NFL All Day is a store featuring NFL league moments as NFTs, where users can browse, buy, collect, and trade`,
    shadowColor: "#ff8000",
  },
  {
    name: "UFC Strike",
    link: { href: "https://www.ufcstrike.com/", label: "ufcstrike.com" },
    images: [
      { href: dapperlabs1.src, alt: "UFC Strike main page" },
      { href: dapperlabs2.src, alt: "UFC Strike drop page" },
    ],
    description: `UFC Strike is an store with NFT's of UFC league moments, user can check buy drops, collect moments and trade moments. I've been working on creating Dapperlabs custom components library + individual pages of an application. Here we used SSR and GQL + Company components library`,
    shadowColor: "#66c180",
  },
  {
    name: "Depop newsroom",
    link: { href: "https://news.depop.com/", label: "news.depop.com" },
    images: [
      { href: newsroomPic2.src, alt: "Newsroom about page" },
      { href: newsroomPic1.src, alt: "Newsroom main page" },
    ],
    description:
      "Newsroom is a platform for a Depop to place they most recent news and share actual company info with they users. Powered with React and Gatsby for Server Side Rendering to achieve fast load and good SEO. I've been working on creating main components (carousel), and implementing some of the pages.",
    shadowColor: "#ffffff",
  },
  {
    name: "Depop affiliate programme",
    link: {
      href: "https://connectors.depop.com/",
      label: "conectors.depop.com",
    },
    images: [
      { href: connectors2.src, alt: "Connectors goodbye section" },
      { href: connectors1.src, alt: "Connectors main section" },
    ],
    description:
      "Affiliate program for Depop, powered by Gatsby, React, and SSR. I worked on creating pages and implementing Google Analytics",
    shadowColor: "#D16499",
  },
  {
    name: "Round Rush",
    link: { href: "https://app.roundrush.com/", label: "app.roundrush.com" },
    images: [
      { href: roundRushPic2.src, alt: "Round rush leader board" },
      { href: roundRushPic1.src, alt: "Round rush project board" },
    ],
    description:
      "Roudrush is the software developed for professionals that work with agile methodology. Rather than other similar software, it is very easy to setup and user-friendly. The workflow is smooth and help you to manage your teams work in order to deliver every project with the best efficiency and quality. I've been working on main components (Drag and Drop table, Drawer, Login Form), did performance checks and optimisations, worked in 1 week sprints.",
    shadowColor: "#a3c6ff",
  },
  {
    name: "TR Tax Store",
    link: {
      href: "https://store.tax.thomsonreuters.com/",
      label: "https://store.tax.thomsonreuters.com/",
    },
    images: [
      { href: TRPic2.src, alt: "Round rush leader board" },
      { href: TRPic1.src, alt: "Round rush project board" },
    ],
    description:
      "Online Store used by Thomson Reuters to sell tax, audit, accounting and finance products, trusted by professionals around the world",
    shadowColor: "#ce4f0c",
  },
  {
    name: "Rice exchange",
    link: { href: "https://www.ricex.io/", label: "ricex.io" },
    images: [
      { href: ricexPic2.src, alt: "rice exchange proposals board" },
      { href: ricexPic1.src, alt: "rice exchange website login" },
    ],
    description:
      "The Rice Exchange platform allows buyers to search for rice producers that have been awarded verifiable sustainable certifications giving buyers the certainty that they are purchasing sustainably produced rice. In turn this allows sustainable producers to charge a premium for their product.",
    shadowColor: "#4cd1c6",
  },
];

/**
 * Past projects info
 */
function PastProjects(props: IPastProjectsProps) {
  const {} = props;
  return (
    <Root>
      <Curve
        customStyles={css`
          top: -60px;
        `}
      />
      <Typography
        customStyles={css`
          display: inline-block;
          background: linear-gradient(-90deg, #f15077, #e8a364);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: red;
          ${theme.breakpoints.l} {
            margin-bottom: 52px;
          }
          ${theme.breakpoints.sm} {
            margin-bottom: 32px;
          }
          ${theme.breakpoints.xs} {
            font-size: 44px;
            margin-bottom: 22px;
          }
          ${theme.breakpoints.xxs} {
            font-size: 40px;
          }
        `}
        weight={TypographyWeight.Black}
        fontSize="62px"
        tag="h2"
        textAlign="center"
        width="fit-content"
        mB="82px"
      >
        Past Projects
      </Typography>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Root>
  );
}

export default PastProjects;
