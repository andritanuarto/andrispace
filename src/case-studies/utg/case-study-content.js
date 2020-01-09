import React from "react";
import utgTeam from "./utg-team.png";
import utgCCAnalysis from "./utg-cc-analysis.png";
import utgContextualInquery1 from "./contextual-inquiry-1.jpeg";
import utgContextualInquery2 from "./contextual-inquiry-2.jpeg";
import utgContextualInquery3 from "./contextual-inquiry-3.jpeg";
import utgAffinity1 from "./affinity-1.jpeg";
import utgAffinity2 from "./affinity-2.jpeg";
import utgAffinity3 from "./affinity-3.jpeg";
import utgAffinity4 from "./affinity-4.jpeg";
import personaPhoto from "./persona.jpeg";
import journeyMap from "./journey-map.png";
import featurePrioritization from "./feature-prioritization.jpg";
import mvp from "./mvp.png";
import userFlow1 from "./user-flow-1.jpeg";
import userFlow2 from "./user-flow-2.jpeg";
import userFlow3 from "./user-flow-3.jpeg";
import userFlowFindClassLocation from "./find-classes-locations-userflow.jpeg";
import overallUserflow from "./overall-user-flow.jpeg";

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p>
        <h2>Introduction</h2>
        Programming is a skill that is not easy to master for a lot of people. I remember myself 8 years ago when I decided to switch my career related to programming. It was quite intimidating at first because I didn't have the basic knowledge and when I was in high school I never thought I'm going to have a career as a programmer. It took me countless hours of study to get comfortable, and I noticed these days a lot of high demand jobs are required to have programming skills and it is expected to be more programming related job in the future.
      </p>
      <p>
        Parents nowadays are also aware of the potential to have programming skills for their children's future.
        UTG Academy (Under The GUI Academy) was founded to facilitate that education demand. Founded in 2013, UTG Academy is a programming school for children and teenagers from grades 1 to 12. Headquartered in Vancouver they have 40 franchise locations in Canada and Taiwan.
      </p>
      <p>
        <h3>Project goals</h3>
        As the academy grew, redesign and reoptimized the website are necessary to help further growth. Some of the key goals of this project are:
        <ul>
          <li>Improve the finding courses and registration process</li>
          <li>Incorporate the community-related content to their website</li>
          <li>Reduce the redundancy of the content</li>
          <li>Rebrand and redesign the overall website</li>
          <li>Optimized existing content and functionalities</li>
          <li>Create more engaging content for both parents and children</li>
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
        To know more about the market, users, problems, and opportunities we conducted a series of qualitative and quantitative research such as domain research, survey, and contextual inquiry.
      </p>
      <p>
        <h3>Domain Research</h3>
        To get a deeper understanding of how we positioned UTG among its competitors, we conducted domain research. What we found from canadalearningcode.ca - <a href="https://www.canadalearningcode.ca/media-release-07-05/" target="_blank">91% of Canadians think children learning coding and computer science is important</a>. In this generation, a lot of parents are aware learning programming is a very useful skill to have because there an increasing number of industries that rely on programming.
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
        We surveyed to know our users and motivations by using Google Forms and send it to parents to fill the survey questions. Here are some of the highlights of our findings from 51 responses we received:
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Contextual Inquiry</h3>
        We noticed a survey is very good to get more understanding about user demographics and decisions but in terms of detecting the pain point of the exact steps or pages on their website, the survey has limited capability in that area. So we decided to visit one of the UTG schools in Kitsilano, Vancouver BC to conduct contextual inquiry and user testing on the current website.
        <ul>
          <li>
            <strong>Test Scenario 1: Find a class appropriate for your child’s age:</strong><br/> parents were able to find course information, but neither of them did it at the first try.</li>
          <li>
            <strong>Scenario 2: Contact the child’s instructor for a question:</strong><br/> Neither of them knew about the “Forum” feature that allows parents to ask instructors questions. In fact, one parent thought he had to go on the “Contact” page and fill out a form.
          </li>
        </ul>
      </p>
      <p>
        We also found most parents were having difficulty to navigate the website. They were confused differentiating parts of the website for instructors, parents and franchises. For example, finding price info for specific courses, it took too many steps to find it from the homepage.
      </p>
    </div>
    <div className="par par--medium-width spacing">
      <div className="col">
        <div className="col--img" style={{backgroundImage: `url(${utgContextualInquery1})`}} />
      </div>
      <div className="col">
        <div className="col--img" style={{backgroundImage: `url(${utgContextualInquery2})`}} />
      </div>
      <div className="col">
        <div className="col--img" style={{backgroundImage: `url(${utgContextualInquery3})`}} />
      </div>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Affinity Diagram</h3>
        After we collected all the data from our research we created an affinity diagram. We wrote key findings on sticky notes and group them into relevant categories. An affinity diagram will help us later in creating user persona and feature scope.
      </p>
    </div>
    <div className="par par--medium-width spacing">
      <div className="col">
        <div className="col--img" style={{backgroundImage: `url(${utgAffinity1})`}} />
      </div>
      <div className="col" style={{flex: 1.5}}>
        <div className="col--img" style={{backgroundImage: `url(${utgAffinity2})`}} />
      </div>
      <div className="col" style={{flex: 1.5}}>
        <div className="col--img" style={{backgroundImage: `url(${utgAffinity4})`}} />
      </div>
    </div>
    <div className="par par--medium-width spacing">
      <img width="100%" src={utgAffinity3} alt="Affinity Diagram"/>
    </div>
    <div className="par par--normal-width">
      <p>
        From our affinity diagram, we found some of the pain points that we can improve such as finding course information and location, reducing text-heavy content, and fully responsive layout because from the survey data we got was most existing users are a mobile user. We also found parents like the current instructor's information section and it would be good to have information about the learning environment for each location.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>User Persona</h3>
        After we finished creating an affinity diagram we created a user persona based on user pain points and goals.
      </p>
    </div>
    <div className="par user-persona user-persona--light spacing">
      <div className="user-persona__left-section">
        <div
          className="user-persona__photo"
          style={{backgroundImage: `url(${personaPhoto})`}}
        />
      </div>
      <div className="user-persona__right-section">
        <h3>Rachel Lee</h3>
        <strong className="user-persona__sub-info">40, Married, Senior Accountant</strong>
        <strong className="user-persona__quoet">
          "Ben is very curious and I believe coding helps him to achieve his full potential."
        </strong>
        <p>
          Rachel is a Senior Accountant  and mother of Ben, a 8 years old kid. She and her family recently moved to Vancouver. Currently, Ben is taking swimming and violin lessons, but Rachel is starting to look into coding classes for Ben. Ever since Ben started learning coding skills in his past school and also with Minecraft, he’s been very passionate and excited about playing the games he creates. Since Ben’s current public school does not teach coding for kids his age, Rachel is looking into coding classes for him outside of school.
        </p>
        <div>
          <div className="user-persona__right-section__bottom">
            <div>
              <strong>Paint Points</strong>
              <ul>
                <li>Hard to find the right course for her child</li>
                <li>Hard to find price info</li>
                <li>Finds content and layout of the website overwhelming and confusing</li>
                <li>Scheduling conflicts with other extracurricular activities</li>
              </ul>
            </div>
            <div>
              <strong>Goals</strong>
              <ul>
                <li>To find a safe and fun, learning environment for Ben, with successful student outcomes.</li>
                <li>To be easy to navigate and find information about instructors and program details.</li>
                <li>To support child’s development, creativity and social skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Planning</h2>
        After we finished our research and have a user persona in hand we began planning our design solution. In this phase, we created a journey map, priority matrix, user flow and sitemap.
      </p>
      <p>
        <h3>Journey Map</h3>
        We made a journey map based on Rachel Lee's persona. Besides helping us to map out user's thoughts, experience, and pain points towards the UTG website, it also helped us to pinpoint
      </p>
    </div>
    <div className="par par--wide-width">
      <p>
        <img width="100%" src={journeyMap} alt="Journey Map"/>
        <span className="img-caption">User journey based on Rachel Lee persona</span>
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p className="par spacing--none">
        <h3>Features Priority &amp; MVP</h3>
        Based on the user journey and persona we created, we listed all the potential features and prioritized them based on high to low user value and effort metrics. After some consideration based on the time constraint and resources we had, we decided to narrow down our scope for our MVP (minimum viable product).
      </p>
      <p>
        <img src={featurePrioritization} alt="Feature Prioritization"/>
      </p>
      <p>
        On our MVP we divided each feature into three different buckets: must-have, nice to have and not needed. We ended up taking all the list of must-have and some nice-to-have buckets into our project scope. Because of the time limitation, we didn't take calendar and intranet for student login.
      </p>
    </div>
    <div className="par par--medium-width">
      <p>
        <img src={mvp} alt="MVP Features"/>
        <span className="img-caption">MVP features for UTG website</span>
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>User-flow</h3>
        Next, after we did the MVP covered by a better understanding of the whole scope of the project, we designed our user-flow.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <div className="col">
        <div className="col--img" style={{height: '280px', backgroundImage: `url(${userFlow2})`}} />
      </div>
      <div className="col">
        <div className="col--img" style={{height: '280px', backgroundImage: `url(${userFlow1})`}} />
      </div>
      <div className="col">
        <div className="col--img" style={{height: '280px', backgroundImage: `url(${userFlow3})`}} />
      </div>
    </div>
    <div className="par par--normal-width">
      <span className="img-caption">Sketches of our userflow</span>
    </div>
    <div className="par par--normal-width">
      <p>
        During the user-flow creation process, we found the most challenging part was to create a user-flow that helps parents to find suitable courses based on their time availability and location. What we found that the locations page can be linked to the find course page to find classes based on location. The reason because from the result of our user testing, some parents prefer to find the classes near where they live.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <img src={userFlowFindClassLocation} />
        <span className="img-caption">User-flow finding locations and classes</span>
      </p>
    </div>

    <div className="par par--normal-width">
      <p>
        In this project, we ended up creating five different user-flows such as: registering class, request info, community, finding locations, and about us.
      </p>
      <p>
        <img src={overallUserflow}/>
        <span className="img-caption">Overall UTG user-flow</span>
      </p>
    </div>
    <div className="par par--normal-width">
      <p><h2>Design</h2></p>
      <p>
        <h3>Low-fi</h3>
        We started our design process by creating low-fi prototypes and test them out ourselves to make sure our flows didn’t miss any steps and required information.
      </p>
      <p>
        We found testing our own low-fi prototypes first was very helpful, because it allows us to make necessary revisions before creating proper user scenarios.
      </p>
    </div>
  </>
);

export default caseStudyContent;