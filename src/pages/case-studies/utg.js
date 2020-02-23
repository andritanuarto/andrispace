import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import BarChart from '../../components/interior/bar-chart';
import ImgSection from '../../components/interior/img-section';
import caseStudyBanner from '../../img/utg/utg-case-study-banner.jpg';
import utgTeam from '../../img/utg/utg-team.png';
import utgCCAnalysis from '../../img/utg/utg-cc-analysis.png';
import utgContextualInquery1 from '../../img/utg/contextual-inquiry-1.jpeg';
import utgContextualInquery2 from '../../img/utg/contextual-inquiry-2.jpeg';
import utgContextualInquery3 from '../../img/utg/contextual-inquiry-3.jpeg';
import utgAffinity1 from '../../img/utg/affinity-1.jpeg';
import utgAffinity2 from '../../img/utg/affinity-2.jpeg';
import utgAffinity3 from '../../img/utg/affinity-3.jpeg';
import utgAffinity4 from '../../img/utg/affinity-4.jpeg';
import personaPhoto from '../../img/utg/persona.jpeg';
import journeyMap from '../../img/utg/journey-map.png';
import featurePrioritization from '../../img/utg/feature-prioritization.jpg';
import mvp from '../../img/utg/mvp.png';
import userFlow1 from '../../img/utg/user-flow-1.jpeg';
import userFlow2 from '../../img/utg/user-flow-2.jpeg';
import userFlow3 from '../../img/utg/user-flow-3.jpeg';
import userFlowFindClassLocation from '../../img/utg/find-classes-locations-userflow.jpeg';
import overallUserflow from '../../img/utg/overall-user-flow.jpeg';
import lowFi1 from '../../img/utg/low-fi-1.jpeg';
import lowFi2 from '../../img/utg/low-fi-2.jpeg';
import lowFi3 from '../../img/utg/low-fi-3.jpeg';
import lowFi4 from '../../img/utg/low-fi-4.jpeg';
import lowFi5 from '../../img/utg/low-fi-5.jpeg';
import lowFi6 from '../../img/utg/low-fi-6.jpeg';
import lowFiTest1 from '../../img/utg/low-fi-test1.jpg';
import lowFiTest2 from '../../img/utg/low-fi-test2.jpg';
import lowFiTest3 from '../../img/utg/low-fi-test3.jpg';
import lowFiTest4 from '../../img/utg/low-fi-test4.jpg';
import lowFiTest5 from '../../img/utg/low-fi-test5.jpg';
import midfiLib from '../../img/utg/utg-midfi-library.png';
import midReg1 from '../../img/utg/reg-1.jpg';
import midReg2 from '../../img/utg/reg-2.jpg';
import midReg3 from '../../img/utg/reg-3.jpg';
import midReg4 from '../../img/utg/reg-4.jpg';
import midHome from '../../img/utg/mid-home.jpg';
import midPrograms from '../../img/utg/mid-programs.jpg';
import midCourse1 from '../../img/utg/mid-course.jpg';
import midCourse2 from '../../img/utg/mid-course2.jpg';
import midMobileHome from '../../img/utg/mid-mobile-home.jpg';
import midMobileProgram from '../../img/utg/mid-mobile-programs.jpg';
import midMobileCourse1 from '../../img/utg/mid-mobile-course.jpg';
import midMobileCourse2 from '../../img/utg/mid-mobile-course-2.jpg';
import hiHome from '../../img/utg/hi-home.jpg';
import hiStory from '../../img/utg/hi-story.jpg';
import hiGam1 from '../../img/utg/hi-gam1.jpg';
import hiGam2 from '../../img/utg/hi-gam2.jpg';
import hiGam3 from '../../img/utg/hi-gam3.jpg';
import hiProgram from '../../img/utg/hi-program.jpg';
import hiCourse from '../../img/utg/hi-course.jpg';
import hiCourses from '../../img/utg/hi-courses.jpg';

export const frontmatter = {
  clientName: 'UTG Academy',
  projectDate: 'December 18, 2019',
  projectTitle: 'UTG Academy',
  postTitle: 'Under The Gui (UTG) – Website Redesign',
  blurb: 'Coders will be the wizard of tomorrow',
  logoWidth: '100px',
  opacityColor: '#000000',
  opacityLevel: '0.4',
  url: './case-studies/utg',
  heroImg: '../../img/utg/utg-case-study-banner.jpg',
  summary: 'These days, I see a lot of high demand jobs require to have programming skills. The fact that programming skills are becoming increasingly important, most'
}

export default () => (
  <InteriorPostLayout
    caseStudyContent={{
      postTitle: frontmatter.postTitle,
      projectDate: frontmatter.projectDate,
      caseStudyBanner: caseStudyBanner
    }}
  >
    <div className="par par--normal-width">
      <p className="first-paragraph">
        Programming is a skill that is not easy to acquire. I remember myself eight years ago when I decided to switch my career into programming, it was intimidating at first, and I started without basic programming knowledge. It took me a lot of practice to be proficient in programming.
      </p>
      <p>
        These days, I see a lot of high demand jobs require to have programming skills. The fact that programming skills are becoming increasingly important, most secondary educations still don't teach programming as a mandatory subject. Luckily, a lot of parents nowadays are becoming more aware of how important it is for their children to harvest their programming skills.
      </p>
      <p>
        UTG Academy (Under The GUI Academy) was founded to facilitate the programming education demand. Founded in 2013, UTG Academy is a programming school for students from grades 1 to 12.
      </p>
      <p>
        <h3>Project goals</h3>
        As the academy grew, the need to redesign and reoptimized its website became necessary to help further growth. Some of the key goals of this project were:
        <ul>
          <li>Improve finding courses and registration process</li>
          <li>Incorporate the community-related content to their website</li>
          <li>Reduce the redundancy of the content</li>
          <li>Rebrand and redesign the overall website</li>
          <li>Optimized existing content and functionalities</li>
          <li>Create more engaging content for both parents and children</li>
        </ul>
      </p>
      <p>
        For this project, our team consisted of 4 UX and 2 UI designers. As the project scrum master, my role focused on leading daily scrum meetings, establishing communication between UX and UI teams, making sure the project was on the right track and was involved in all UX design processes.
      </p>
      <p>
        <ImgSection
          imgs={[{url: utgTeam}]}
          caption="The team for the UTG project (myself is the third person from the right side)"
        />
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Research</h2>
        To learn more about the market, users, problems and opportunities, we conducted a series of qualitative and quantitative research such as domain research, survey, and contextual inquiry.
      </p>
      <p>
        <h3>Domain Research</h3>
        In the research phase, the first thing we did to gain a deeper understanding of how UTG positioned among its competitors, we conducted domain research. Based on our findings from <a rel="noopener noreferrer" href="https://www.canadalearningcode.ca/media-release-07-05/" target="_blank">canadalearningcode.ca</a> showed that - 91% of Canadians think children learning coding or computer science is important. In this generation, a lot more parents realize that programming is a very useful skill to have because there's an increasing number of industries that rely on programmers.
      </p>
      <p>
        We also did competitive/comparative analysis on other similar school websites to get to know their direction in terms of functionality and content on their websites. This analysis helped us identify how to best position UTG on their online presence.
      </p>
    </div>
    <div className="par par--medium-width spacing">
      <ImgSection
        imgs={[{url: utgCCAnalysis}]}
        caption="Competitive and comparative analysis"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Survey</h3>
        To identify our users and user-motivations, we organized surveys using Google Forms and sent it to parents to fill it out at their own time and convenience. Here are some of the highlights of our findings from all responses we received:
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="Level of difficulty to find a suitable course on the website."
        subTitle="(Note: 1 for being the easiest and 5 for being the hardest)"
        yTextWidth="100px"
        data={[
          {label: 1, color: '#ef4440', percent: 21},
          {label: 2, color: '#179f61', percent: 35},
          {label: 3, color: '#ffcb2f', percent: 21},
          {label: 4, color: '#33a3da', percent: 14},
          {label: 5, color: '#66408c', percent: 7},
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="Reasons why do parents enroll their children in the UTG program?"
        subTitle="(Note: Parents can have multiple answers)"
        yTextWidth="200px"
        data={[
          {label: 'Children\'s interest', color: '#ef4440', percent: 86, number: 13},
          {label: 'Close proximity', color: '#179f61', percent: 33, number: 5},
          {label: 'Explore potential', color: '#ffcb2f', percent: 26, number: 4},
          {label: 'Program reputation', color: '#33a3da', percent: 6, number: 1},
          {label: 'Importance future skill', color: '#66408c', percent: 6, number: 1},
          {label: 'Referred', color: '#ffaa06', percent: 6, number: 1}
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="What do parents want to get for their children from the UTG program?"
        subTitle="(Note: Parents can have multiple answers)"
        yTextWidth="200px"
        data={[
          {label: 'Explore potential', color: '#33a3da', percent: 93.3, number: 14},
          {label: 'Future career aspirations', color: '#66408c', percent: 80, number: 12},
          {label: 'Have fun', color: '#179f61', percent: 60, number: 9},
          {label: 'Make friends', color: '#ef4440', percent: 20, number: 3},
          {label: 'Develop hobbies', color: '#ffcb2f', percent: 20, number: 3},
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="Information that parents are looking for when they enroll their children to coding school."
        subTitle="(Note: Parents can have multiple answers)"
        yTextWidth="200px"
        data={[
          {label: 'Course details', color: '#179f61', percent: 91.5, number: 43},
          {label: 'Learning environment', color: '#ef4440', percent: 68.1, number: 32},
          {label: 'About school and instructors', color: '#33a3da', percent: 63.8, number: 30},
          {label: 'Contact info', color: '#66408c', percent: 44.7, number: 21},
          {label: 'Upcoming events', color: '#fc22ff', percent: 34, number: 16},
          {label: 'Student highlights', color: '#ffcb2f', percent: 29.8, number: 14},
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="What frustrates you when searching for your children’s extracurricular activities?"
        subTitle="(Note: Parents can have multiple answers)"
        yTextWidth="200px"
        data={[
          {label: 'Lack of reputable choices', color: '#179f61', percent: 19.1, number: 9},
          {label: 'Limited seats in program', color: '#ef4440', percent: 31.9, number: 15},
          {label: 'Time conflicts', color: '#33a3da', percent: 78.7, number: 37},
          {label: 'Inconvenient location', color: '#66408c', percent: 40.4, number: 19},
          {label: 'Not enough information', color: '#fc22ff', percent: 23.4, number: 11},
          {label: 'Pricing', color: '#ffcb2f', percent: 38.3, number: 18},
          {label: 'Inadequate facilities', color: '#ffab2e', percent: 8.5, number: 4}
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="Who decides on the extracurricular activities for your children?"
        yTextWidth="200px"
        data={[
          {label: 'Both parents and children', color: '#179f61', percent: 70.2, number: 33},
          {label: 'Parents', color: '#ef4440', percent: 17, number: 8},
          {label: 'Children', color: '#33a3da', percent: 12.8, number: 6},
        ]}
      />
    </div>
    <div className="par par--normal-width spacing">
      <BarChart
        title="Which device(s) do you usually use to access online information about your children’s extracurricular activities?"
        yTextWidth="200px"
        data={[
          {label: 'Mobile', color: '#179f61', percent: 76.6, number: 36},
          {label: 'Laptop / Desktop', color: '#33a3da', percent: 66, number: 31},
          {label: 'Tablet', color: '#ef4440', percent: 6.4, number: 3},
        ]}
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Contextual Inquiry</h3>
        In terms of detecting the users' pain points of the exact steps on their website, the surveys were limited and insufficient. To tackle that, we decided the meet the parents from one of the UTG schools to conduct user-testing on the current website.
        <ul>
          <li>
            <strong>Test Scenario 1: Find a class appropriate for your child’s age:</strong><br/> parents were able to find course information, but neither of them did it at the first try.</li>
          <li>
            <strong>Test Scenario 2: Contact the child’s instructor for a question:</strong><br/> Neither of them knew about the “Forum” feature that allows parents to ask instructors questions. In fact, one parent thought he had to go on the “Contact” page and fill out a form.
          </li>
        </ul>
      </p>
      <p>
        We also found most parents were confused in differentiating parts of the website for instructors, parents, and franchises. Another example, it took too many steps to find price info from the homepage.
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
        After we collected all the data from our research we created an affinity diagram. We wrote key findings on sticky notes and grouped them into relevant categories. An affinity diagram also helped us in creating a user persona and feature scope.
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
        imgs={[{url: utgAffinity3}]}
        caption="Affinity Diagram"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        From our affinity diagram, we found some of the pain points that we could improve on, such as finding course information and location, reducing text-heavy content, and a fully responsive layout as our survey data showed that most existing users were mobile users. We also found that parents liked the current instructor's information section, but we found that additional information about the learning environment for each location would add value to this.
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
          Rachel is a Senior Accountant  and mother of Ben, a 8-year old boy. She and her family recently moved to Vancouver. Currently, Ben is taking swimming and violin lessons, but Rachel is starting to look into coding classes for Ben. Ever since Ben started learning coding skills in his past school and also through Minecraft, he’s been very passionate and excited about playing the games he creates. Since Ben’s current public school does not teach coding for kids his age, Rachel is looking into coding classes for him outside of school.
        </p>
        <div>
          <div className="user-persona__right-section__bottom">
            <div>
              <strong>Pain Points</strong>
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
                <li>To support the child’s development, creativity and social skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Planning</h2>
        After we finished our research and have a user persona on hand, we began planning our design solution. In this phase, we created a journey map, priority matrix, user-flows and sitemap.
      </p>
      <p>
        <h3>Journey Map</h3>
        We made a journey map based on Rachel Lee's persona. Aside from helping us to map out user's thoughts, experience, and pain points towards the UTG website, it also helped us to pinpoint which stages in the user experience can be improved.
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
        Based on the user journey and persona we created, we listed all the potential features and prioritized them based on high to low user value and effort metrics. After considering the time constraint and resources we had, we decided to narrow down our scope for our MVP (minimum viable product).
      </p>
      <p>
        <ImgSection imgs={[{url: featurePrioritization}]} caption="Feature Prioritization" />
      </p>
      <p>
        On our MVP we divided each feature into three different buckets: must-have, nice to have, and not needed. We ended up taking all the list of must-have and some nice-to-have buckets into our project scope. Because of the time constraint, we didn't take calendar and intranet for student login.
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
        <h3>User-flows</h3>
        Next, after we did the MVP and were equipped with a better understanding of the whole scope of the project, we designed our user-flows.
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
        During the user-flow creation process, the most challenging part was to create a user-flow that could help parents find suitable courses based on their time availability and location. What we found was that the locations page can be linked to the find course page, thus parents could find classes based on location. This is based on the result from our user testing that showed some parents prefer to find classes closest to where they live.
      </p>
      <p>
        <ImgSection imgs={[{url: userFlowFindClassLocation}]} caption="User-flow finding locations and classes" />
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        Therefore, we decided to create five different user-flows: registering class, request info, community, finding locations, and about us.
      </p>
      <p><ImgSection imgs={[{url: overallUserflow}]} caption="Overall UTG user-flow" /></p>
    </div>
    <div className="par par--normal-width">
      <p><h2>Design</h2></p>
      <p>
        <h3>Low-fi</h3>
        We started our design process by creating low-fi prototypes and test them out ourselves to make sure our flows didn’t miss any steps and had all the required information.
      </p>
      <p>
        We found testing our own low-fi prototypes first were very helpful because it allowed us to make necessary revisions before creating proper user scenarios.
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
      <p>After testing was completed and we had revised our own low-fi prototypes, we tested the prototypes on other users. The reason we conducted the test with other users outside our team was to minimize biased opinions about our solution.</p>
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
        Our mid-fi was the last tangible deliverable from the ux team before we hand it over to the UI team to build the hi-fi prototypes. During this creation process, it was important for us to establish a core library UI component to ensure the style consistency throughout all of mid-fi prototypes, and to provide an easier transition for the UI team to skin all of our mid-fi pages.
      </p>
    </div>
    <div className="par par--medium-width">
      <ImgSection imgs={[{url: midfiLib}]} caption="Mid-fi UI library" />
    </div>
    <div className="par par--normal-width">
      <p>
        Following the same process like as we did for low-fi, we tested our mid-fi on other users to make sure our flow made sense to the users and it also gave us a chance to make minor adjustments before proceeding with the high-fi prototypes.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: midHome, style: {width: '25%', padding: '0 7.5px'}},
          {url: midPrograms, style: {width: '25%', padding: '0 7.5px'}},
          {url: midCourse1, style: {width: '25%', padding: '0 7.5px'}},
          {url: midCourse2, style: {width: '25%', padding: '0 7.5px'}}
        ]}
      />
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: midReg1, style: {width: '25%', padding: '0 7.5px'}},
          {url: midReg2, style: {width: '25%', padding: '0 7.5px'}},
          {url: midReg3, style: {width: '25%', padding: '0 7.5px'}},
          {url: midReg4, style: {width: '25%', padding: '0 7.5px'}}
        ]}
        caption="Some of mid-fi desktop wireframes"
      />
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: midMobileHome, style: {width: '25%', padding: '0 7.5px'}},
          {url: midMobileProgram, style: {width: '25%', padding: '0 7.5px'}},
          {url: midMobileCourse1, style: {width: '25%', padding: '0 7.5px'}},
          {url: midMobileCourse2, style: {width: '25%', padding: '0 7.5px'}}
        ]}
        caption="Some of mid-fi mobile wireframes"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Hi-fi</h3>
        Once mid-fi prototypes were finalized, we conducted a run-through to ensure both UI and UX teams were on the same page on the direction of the final high-fi prototypes.
      </p>
      <p>
        For the UI approach, we derived inspiration from Minecraft and Mario Bros games because the age demographic of most millennial parents and Generation-Z children are very familiar with these games. To us, Minecraft was the definition of playful, fun, kid-friendly, and creative which is very suitable for what UTG stands for.
      </p>
    </div>
    <div className="par par--full-width spacing">
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: hiHome, style: {width: '50%', padding: '0 7.5px'}},
          {url: hiStory, style: {width: '50%', padding: '0 7.5px'}}
        ]}
      />
    </div>
    <div className="par par--full-width spacing">
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: hiProgram, style: {width: '33.33%', padding: '0 7.5px'}},
          {url: hiCourses, style: {width: '33.33%', padding: '0 7.5px'}},
          {url: hiCourse, style: {width: '33.33%', padding: '0 7.5px'}}
        ]}
      />
    </div>
    <div className="par par--normal-width">
      <p>
        We incorporated gamification for some of our pages, for example, the images on our 404 and registration pages are inspired by old Mario Bros game in the early 80s. The purpose of this approach was to add a hint of creativity and fun factor to the website.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection
        imgContainerStyle={{alignItems: 'flex-start'}}
        imgs={[
          {url: hiGam1, style: {width: '33.33%', padding: '0 7.5px'}},
          {url: hiGam2, style: {width: '33.33%', padding: '0 7.5px'}},
          {url: hiGam3, style: {width: '33.33%', padding: '0 7.5px'}},
        ]}
        caption="Gamification concept on some of the pages"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Future Considerations</h2>
        Because we had to finish this project in less than 3 weeks, we could only finish our MVP features. However, given more time we believe the website can still be improved. One of the features that we felt could greatly help both students and parents would be to incorporate a student login portal.
      </p>
      <p>
        With this portal, it will open up other important features such as course wishlist, better registration process, student progress tracker, and online one-on-one feedback from instructors.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>What Have We Learned</h2>
        The biggest takeaway from this project was how important it is to respect every part of the process, and not to jump or rush through as every step has a purpose. Every design decision we made was backed by our research testing, and feedback data. We realized that by doing so, not only did it yield better understanding about the problems, but it was easier for us to recognize the areas that can be improved.
      </p>
    </div>
  </InteriorPostLayout>
);