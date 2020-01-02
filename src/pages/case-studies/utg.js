import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import utgTeam from "../../components/home/hero-images/utg/utg-team.png";

export default () => (
  <InteriorPostLayout>
    <div className="par par--normal-width">
      <p>
        <h2>Introduction</h2>
        Founded in 2013 UTG Academy (Under The GUI Academy) is a school franchise teaching kids how to learn about programming. They had 40 locations in Canada and Taiwan and their students were ranging from grade 1 to 12.
      </p>
      <p>
        As their business grew they wanted to redesign their website to be more functional and engaging. Some of the key points of this project are:

        <ul>
          <li>Improve the course registration process.</li>
          <li>Incorporate the community-related content to their website.</li>
          <li>Reduce the redundancy of the content.</li>
          <li>Rebrand and redesign the overall website.</li>
        </ul>
      </p>
      <p>
        For this 3 weeks project, our team consists of 4 UX and 2 UI designers. In my role besides part of the UX team, I also acted as a scrum master. My responsibilities were involved in all UX design processes, led daily scrum meetings, established the communication between the UX and UI teams, and made sure the project was on the right track.
      </p>
      <p>
        <img src={utgTeam} alt="UTG Team" />
        <span className="img-caption">The team for the UTG project. I'm third person from the right side.</span>
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Research</h2>
        In order to understand the market, users, problems, and opportunities we conducted several research phases.
      </p>
    </div>
  </InteriorPostLayout>
);