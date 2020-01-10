import React from "react";
import ImgSection from '../../components/interior/img-section';
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
import mvp from './mvp.png';
import userFlow1 from './user-flow-1.jpeg';
import userFlow2 from './user-flow-2.jpeg';
import userFlow3 from './user-flow-3.jpeg';
import userFlowFindClassLocation from './find-classes-locations-userflow.jpeg';
import overallUserflow from './overall-user-flow.jpeg';
import lowFi1 from './low-fi-1.jpeg';
import lowFi2 from './low-fi-2.jpeg';
import lowFi3 from './low-fi-3.jpeg';
import lowFi4 from './low-fi-4.jpeg';
import lowFi5 from './low-fi-5.jpeg';
import lowFi6 from './low-fi-6.jpeg';
import lowFiTest1 from './low-fi-test1.jpg';
import lowFiTest2 from './low-fi-test2.jpg';
import lowFiTest3 from './low-fi-test3.jpg';
import lowFiTest4 from './low-fi-test4.jpg';
import lowFiTest5 from './low-fi-test5.jpg';
import midfiLib from './utg-midfi-library.png';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p>
        <h2>Introduction</h2>
        Programming is a skill that is not easy to acquire. I remember myself eight years ago when I decided to switch my career related to programming. It was quite intimidating at first because I didn't have the basic knowledge. It took me a lot of hours of studying to get comfortable with it.
      </p>
      <p>
        These days a lot of high demand jobs are required to have programming skills. The fact that programming skills are increasingly important, but most secondary educations still don't teach programming as a mandatory subject. And a lot of parents nowadays are also aware of how important to have programming skills for their children.
      </p>
      <p>
        UTG Academy (Under The GUI Academy) was founded to facilitate the programming education demand. Founded in 2013, UTG Academy is a programming school for students from grades 1 to 12.
      </p>
      <p>
        <h3>Project goals</h3>
        As the academy grew, redesign and reoptimized their website are necessary to help further growth. Some of the key goals of this project are:
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
        <ImgSection
          imgs={[{url: utgTeam, backgroundImg: false}]}
          caption="The team for the UTG project (myself is the third person from the right side)"
        />
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
    <div className="par par--medium-width spacing">
      <ImgSection
        imgs={[{url: utgCCAnalysis, backgroundImg: false}]}
        caption="Competitive and comparative analysis"
      />
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
      <ImgSection
        imgs={[
          {url: utgContextualInquery1, backgroundImg: true},
          {url: utgContextualInquery2, backgroundImg: true},
          {url: utgContextualInquery3, backgroundImg: true},
        ]}
        caption="We visited one of the UTG school at Kitsilano, Vancouver"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Affinity Diagram</h3>
        After we collected all the data from our research we created an affinity diagram. We wrote key findings on sticky notes and group them into relevant categories. An affinity diagram will help us later in creating user persona and feature scope.
      </p>
    </div>
    <div className="par par--medium-width spacing">
      <ImgSection
        imgs={[
          {url: utgAffinity1, backgroundImg: true},
          {url: utgAffinity2, backgroundImg: true, style: {flex: 1.5}},
          {url: utgAffinity4, backgroundImg: true, style: {flex: 1.5}},
        ]}
      />
      <ImgSection
        imgs={[{url: utgAffinity3, backgroundImg: false}]}
        caption="Affinity Diagram"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        From our affinity diagram, we found some of the pain points that we can improve such as finding course information and location, reducing text-heavy content, and fully responsive layout because from the survey data we got was most existing users are a mobile user. We also found parents like the current instructor's information section but it would be good to have additional information about the learning environment for each location.
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
        After we finished our research and have a user persona in hand we began planning our design solution. In this phase, we created a journey map, priority matrix, user-flows and sitemap.
      </p>
      <p>
        <h3>Journey Map</h3>
        We made a journey map based on Rachel Lee's persona. Besides helping us to map out user's thoughts, experience, and pain points towards the UTG website, it also helped us to pinpoint
      </p>
    </div>
    <div className="par par--wide-width">
      <p>
        <ImgSection imgs={[{url: journeyMap}]} caption="User journey based on Rachel Lee persona" />
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p className="par spacing--none">
        <h3>Features Priority &amp; MVP</h3>
        Based on the user journey and persona we created, we listed all the potential features and prioritized them based on high to low user value and effort metrics. After some consideration based on the time constraint and resources we had, we decided to narrow down our scope for our MVP (minimum viable product).
      </p>
      <p>
        <ImgSection imgs={[{url: featurePrioritization}]} caption="Feature Prioritization" />
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
      <ImgSection
        imgs={[
          {url: userFlow2, backgroundImg: true, style: {height: '300px'}},
          {url: userFlow1, backgroundImg: true, style: {height: '300px'}},
          {url: userFlow3, backgroundImg: true, style: {height: '300px'}},
        ]}
        caption="Sketches of our userflows"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        During the user-flow creation process, we found the most challenging part was to create a user-flow that helps parents to find suitable courses based on their time availability and location. What we found that the locations page can be linked to the find course page to find classes based on location. The reason because from the result of our user testing, some parents prefer to find the classes near where they live.
      </p>
      <p>
        <ImgSection imgs={[{url: userFlowFindClassLocation}]} caption="User-flow finding locations and classes" />
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        In this project, we ended up creating five different user-flows such as: registering class, request info, community, finding locations, and about us.
      </p>
      <p><ImgSection imgs={[{url: overallUserflow}]} caption="Overall UTG user-flow" /></p>
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
    <div className="par par--wide-width spacing">
      <ImgSection
        imgs={[
          {url: lowFi6, backgroundImg: true},
          {url: lowFi1, backgroundImg: true},
          {url: lowFi3, backgroundImg: true},
        ]}
      />
      <ImgSection
        imgs={[
          {url: lowFi4, backgroundImg: true},
          {url: lowFi2, backgroundImg: true},
          {url: lowFi5, backgroundImg: true},
        ]}
      />
    </div>
    <div className="par par--normal-width">
      <p>After we finished testing and made revisions of our own low-fi prototypes, we tested the prototypes to other users. The reason we conducted the test with other users outside our team is to minimize biased opinions about our solution.</p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection
        imgs={[
          {url: lowFiTest1, backgroundImg: true},
          {url: lowFiTest2, backgroundImg: true},
          {url: lowFiTest3, backgroundImg: true},
        ]}
      />
      <ImgSection
        imgs={[
          {url: lowFiTest4, backgroundImg: true},
          {url: lowFiTest5, backgroundImg: true},
        ]}
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Mid-fi</h3>
        Our mid-fi is the last tangible deliverable from the UX team before we hand it over to the UI team to do hi-fi prototypes. During this creation process, it’s important to establish a core library UI component to ensure the style consistency through out all of mid-fi prototypes, and to provide an easier transition for the UI team to skin all of our mid-fi pages.
      </p>
    </div>
    <div className="par par--medium-width">
      <ImgSection imgs={[{url: midfiLib, backgroundImg: true}]} caption="Mid-fi UI library" />
    </div>
    <div className="par par--normal-width">
      <p>
        Same process like what we did for low-fi, we also tested our mid-fi to make sure our flow makes sense to the users and it also gave us a chance to make minor adjustments before going to high-fi prototypes.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Hi-fi</h3>
        Once mid-fi prototypes are done we handed our mid-fi to UI team. We did the run through the mid-fi to make sure UI and UX teams are on the same page for the direction of final the high-fi prototypes.
      </p>
      <p>
        For the UI approach, we got inspiration from Minecraft and Mario games. The reason because of the age demographic most millennial parents and generation-z children are very familiar with those. In our mind, Minecraft was the definition of playful, fun, kids friendly, and creative which is very suitable for what UTG stands for.
      </p>

      <p>
        We incorporated gamification for some of our pages for example like the images on our 404 and registration pages are inspired by old Mario Bros game in the early 80s. The purpose of this approach is to add a little bit of creativity and fun factor to the website.
      </p>
    </div>
    <div className="par par--normal-width">
      <h2>Future Considerations</h2>
      <p>
        Because we had to finish this project in less than 3 weeks, we could only finish our MVP features, but we believe the website can be improved further beyond this project. One of the features that we felt can help their students and parents are incorporating the student login to their website.
      </p>
      <p>
        By having student login, it will open up other important features such as course wishlist, better registration process, student progress tracker, and online one on one feedback from instructors.
      </p>
    </div>
    <div className="par par--normal-width">
      <h2>What Have We Learned</h2>
      <p>
        What we’ve learned from this project is important to respect every part of the process not to jump the step of the process, and drive the solution not only relying on our own creative ability but also incorporating it based on the research, feedbacks, and test result we got.
      </p>
    </div>
  </>
);

export default caseStudyContent;