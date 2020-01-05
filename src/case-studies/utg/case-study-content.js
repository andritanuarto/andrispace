import React from "react";
import utgTeam from "./utg-team.png";
import utgCCAnalysis from "./utg-cc-analysis.png";

const caseStudyContent = (
  <>
  <div className="par par--normal-width">
    <p>
      <h2>Introduction</h2>
      Founded in 2013, UTG Academy (Under The GUI Academy) is a programming school for children and teenagers from grades 1 to 12. Headquartered in Vancouver they have 40 franchise locations in Canada and Taiwan.
    </p>
    <p>
      <h3>Project goals</h3>
      As the academy grew, redesign and reoptimized the website are necessary to help further growth. Some of the key goals of this project are:
      <ul>
        <li>Improve the course registration process.</li>
        <li>Incorporate the community-related content to their website.</li>
        <li>Reduce the redundancy of the content.</li>
        <li>Rebrand and redesign the overall website.</li>
        <li>Optimized existing content and functionalities.</li>
        <li>Create more engaging content for both parents and children.</li>
      </ul>
    </p>
    <p>
      <img src={utgTeam} alt="UTG Team" />
      <span className="img-caption">The team for the UTG project (myself is the third person from the right side)</span>
    </p>
    <p>
      In this project, our team consists of 4 UX and 2 UI designers. As a project scrum master, my role was leading daily scrum meetings, established communication between UX and UI teams, made sure the project was on the right track and involved in all UX design processes.
    </p>
  </div>
  <div className="par par--normal-width">
    <p>
      <h2>Research</h2>
    </p>
    <p>
      <img width="100%" src="https://media.giphy.com/media/l378rhA6c1QhJDgbu/giphy.gif" alt="research"/>
    </p>
    <p>
      In order to get a deeper understanding of the market, users, problems, and opportunities we conducted a series of qualitative and quantitative research such as domain research, contextual inquiry, survey, and user interview.
    </p>
    <p>
      <h3>Domain Research</h3>
      To understand the market gap and how we position UTG, we conducted domain research. What we found from <a href="https://www.canadalearningcode.ca/" target="_blank">canadalearningcode.ca</a> <a href="https://www.canadalearningcode.ca/media-release-07-05/" target="_blank">91% of Canadians think children learning coding and computer science is important</a>. In this generation a lot of parents are aware learning programming is a very useful skill to have, because there are increasing number of industries who relly on programming.
    </p>
    <p>
      We also did competitive/comparative analysis to some other similar school websites to get to know their direction in terms of functionality and content on their websites. This analysis can help us how we position UTG for their online presence.
    </p>
  </div>
  <div className="par par--medium-width">
    <p>
      <img src={utgCCAnalysis} alt="Competitive and comparative analysis"/>
    </p>
  </div>
  <div className="par par--normal-width">
    <p>
      <h3>Survey</h3>
      During the research we wanted to know our users and motivations. We conducted a survey using Google Forms and send it to parents. Here are some of the highlights of our findings from 51 responses we received:

    </p>
  </div>
  </>
);

export default caseStudyContent;