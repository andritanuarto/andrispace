import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import PlanningHTMLPrototype from '../../components/envisio/html-planning-prototype';
import ImgSection from '../../components/interior/img-section';
import SoftwareModules from '../../img/envisio/modules.png';
import planLevels from '../../img/envisio/plan-levels.png';
import iPadOverallView from '../../img/envisio/ipad-overall-view.png';
import iPadGanttView from '../../img/envisio/ipad-gantt-view.png';
import iPadDetailView from '../../img/envisio/ipad-detail-view.png';
import iPadListlView from '../../img/envisio/ipad-list-view.png';
import stickies1 from '../../img/envisio/stickies1.jpg';
import stickies2 from '../../img/envisio/stickies2.jpg';
import caseStudyBanner from '../../img/envisio/envisio-case-study-banner.jpg';

export const frontmatter = {
  clientName: 'Envisio',
  projectDate: 'September 02, 2019',
  projectTitle: 'Strategic Manager',
  postTitle: 'Envisio - Strategic Planning Manager',
  blurb: 'Strategy and performance management software',
  logoWidth: 'auto',
  opacityColor: '#000000',
  opacityLevel: '0.4',
  url: './case-studies/envisio',
  heroImg: '../../img/envisio/envisio-bg.jpg',
  summary: 'Envisio developed the strategic planning web application that facilitates organizations to lay out their plans by defining their goals.'
}

export default () => (
  <InteriorPostLayout
    caseStudyContent={{
      postTitle: frontmatter.postTitle,
      projectDate: frontmatter.projectDate,
      caseStudyBanner: caseStudyBanner
    }}
  >
    <>
      <div className="par par--normal-width">
        <p className="first-paragraph">
          Envisio developed the strategic planning web application that facilitates organizations to lay out their plans by defining their goals. Each goal's progress can be tracked and measured to ensure the operational plan is under control. Their software consists of 3 main modules, such as <strong>Plans</strong>, <strong>Reports</strong>, and <strong>Analytics</strong>. For this case-study, I only write about the plans module and will post another case studies for the other modules. Due to the NDA policy, I can only share limited information about this project.
        </p>
        <p>
          <ImgSection
            imgs={[{url: SoftwareModules}]}
            caption="Users can navigate to a different module by clicking the module dropdown. The image shows that currently in the Plans module."
          />
        </p>
        <p>
          <h2>Project Brief</h2>
          For this project, Envisio wanted to modernize the UI and optimize the user-flow of its planning module for both desktop and tablet users. I collaborated with the product manager, customer success, and developers to ensure this project meets the business requirements and also making sure the technical feasibility to complete this project.
        </p>
        <p>
          <h3>My Role</h3>
          In this project, my role was as a UI / UX designer and front-end developer. Some of my responsibilities were:
          <ul>
            <li>Requirements gathering</li>
            <li>Feature audit</li>
            <li>User testing &amp; research</li>
            <li>Wireframes and hi-fi mockups</li>
            <li>HTML prototypes</li>
            <li>React front-end development</li>
          </ul>
        </p>
        <p>
          <h3>The Problem</h3>
          From our customers' feedback, when the planning gets bigger, they would have a hard time finding items that were buried in the lower levels of the plan. Some visual alternatives and quick ways to find items were needed to improve productivity when users using the software.
        </p>
        <p>
          <p style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}}>
          <ImgSection
            imgs={[{url: planLevels}]}
            caption="Illustration of three levels plan"
          />
          </p>
          {/* <img src={planLevels} style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}} /> */}
          The simple illustration on the left shows the general idea of how a plan can be structured on the app. In that example, the plan consists of three levels such as <strong style={{color: '#1879eb'}}>Goal</strong>, <strong style={{color: '#52bf00'}}>Strategy</strong>, and <strong style={{color: '#7f17ec'}}>Action</strong>. The relationship between a parent and children are indicated by the numbering system beside the level's name. The first level is indicated as <strong style={{color: '#1879eb'}}>Goal</strong>, second level as <strong style={{color: '#52bf00'}}>Strategy</strong>, and third level as <strong style={{color: '#7f17ec'}}>Action</strong>. Notice that the deeper the level, the number increases by another decimal.
        </p>
        <p>
          Let's take an example of <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>. If you see the number convention means that <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>'s parent is <code style={{background: '#52bf00', color: '#ffffff'}}>1.2</code> which is <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code>, and the <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code> parent is <code style={{background: '#1879eb', color: '#ffffff'}}>Goal 1</code>. In conclusion, the relationship between a parent and children is one-to-many.
        </p>
        <p>
          In reality, some of our clients had much bigger plans than the example above. In the previous version, the user had to go through page by page to access items on the deeper levels. The concern with that approach, every time the user wanted to access different levels, the browser had to re-render the whole UI until all the data gets loaded, which sometimes it could take a long time if there are so many items on that level. Another problem users also experienced difficulty to figure out the context in some parts of the plan, because there is no clear visual cue that represents the relationship between the parent level and the child level.
        </p>
        <p>
          <h2>User Research</h2>
          We started this project by conducting a series of user testing from the old version of the app. The purpose of this testing is to identify the exact steps where users were having problems and also to confirm our initial hypothesis based on the customers' feedback.
        </p>
        <p>
          We were able to get six participants from our existing clients to test the old version of the plans module. During the user testing, we asked each participant to complete the task based on the scenario that we wrote. From the test result, we found most of the participants didn't have any problems finding items on the highest level. However, some of the participants had difficulty finding items at the lower levels.
        </p>
        <p>
          <h2>Product Ideation</h2>
          Equipped with a better understanding of our users' pain points, we began doing the product ideation process. The first step of this process was to established the scope of this project by prioritizing the features. After the scope was defined our team decided to start brainstorming the layout ideas for the overall view of the plan. We use sticky notes to help us find a solution for the planning structure. This exercise helped us to solve the problem on the fly and encourage everyone within the team to openly share their thoughts and ideas.
        </p>
        <p>
          <ImgSection
            imgs={[
              {url: stickies1, backgroundImg: true, style: {height: '300px', flex: 1}},
              {url: stickies2, backgroundImg: true, style: {height: '300px', flex: 2}},
            ]}
            caption="Brainstorming layout ideas with sticky notes" />
        </p>
        <p>
          One of the most challenging parts of this design process was to find a visual solution where the UI is responsive enough to support a big plan in different monitor and tablet sizes. So I decided to create a quick HTML prototype for the chosen visual solution to test the responsiveness of the layout. This HTML prototype also helped us to smoothen the conversation with developers and other stakeholders. Below is the clickable HTML prototype to show the basic functionality of how an overall plan can be structured.
        </p>
      </div>
      <div className="par par--wide-width spacing">
        <PlanningHTMLPrototype />
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>The Solutions</h2>
          We created different views: map-view, list-view, and gantt-view. On the map-view mode, the user can see the full hierarchy of the plan from top to bottom. This view is also useful to give the context of where each item resides on the overall organization plan.
        </p>
      </div>
      <div className="par par--normal-width spacing">
        <ImgSection imgs={[{url: iPadOverallView}]} caption="Planning map-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          To handle scenarios where the user wants to see only the items they own and filter based on some criteria, we created narrow-view mode and by default showing only items that current user owns.
        </p>
      </div>
      <div className="par par--normal-width">
        <ImgSection imgs={[{url: iPadListlView}]} caption="Planning list-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          Users can also switch to Gantt view to show better visibility regarding the timeline for each part of the plan.
        </p>
      </div>
      <div className="par par--normal-width">
        <ImgSection imgs={[{url: iPadGanttView}]} caption="Planning gantt-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          For each part of the plan is clickable to see more detail about the specific part of the plan.
        </p>
      </div>
      <div className="par par--normal-width">
        <ImgSection imgs={[{url: iPadDetailView}]} caption="Planning detail view" />
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Outcomes</h2>
          To be able to track and to confirm the usability of the end product, we didn't remove the old UI version. We allowed users to easily switch between old and new UI versions temporarily. The goal of this setup is to validate which version users use the most. After two months of tracking the number of visits, 78.6% of the traffic went to the new design, which was a very satisfying result.
        </p>
      </div>
    </>
  </InteriorPostLayout>
);