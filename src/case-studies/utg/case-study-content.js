import React from "react";
import utgTeam from "./utg-team.png";

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
      <img width="100%" src="https://media.giphy.com/media/l378rhA6c1QhJDgbu/giphy.gif" alt="researc"/>
    </p>
    <p>
      In order to get deeper understanding about the market, users, problems, and opportunities we conducted a series of qualitative and quantitative research such as domain research, contextual inquiry, survey, and user interview. We targeted parents to be our target audiences for our research. The reason because what we found from UTG staff mostly are parents who are the main initiator to enroll their children in programming school.
    </p>
  </div>
  </>
);

export default caseStudyContent;