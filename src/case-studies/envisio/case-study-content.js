import React from "react";
import WillDoNext from '../../components/interior/will-do-next';
import ImgSection from '../../components/interior/img-section';
import SoftwareModules from './img/modules.png';
import planLevels from './img/plan-levels.png';
import PlanningHTMLPrototype from './html-planning-prototype';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p className="first-paragraph">
        Envision developed the strategic planning web application that facilitates organizations to lay out their plans by defining their goals. Each goal's progress can be tracked and measured to ensure the operational plan is under control. Their software consists of 3 main modules, such as <strong>Plans</strong>, <strong>Reports</strong>, and <strong>Analytics</strong>. For this case-study, I only write about the plans module and will post another case studies for the other modules. Due to the NDA policy, I can only share limited information about this project.
      </p>
      <p>
        <ImgSection
          imgs={[{url: SoftwareModules}]}
          caption="Users can navigate to a different module by clicking the module dropdown. The image shows that currently in the Plans module."
        />
      </p>
      <p>
        <h2>Project Brief</h2>
        For this project, Envision wanted to modernize the UI and optimize the user-flow of its planning module for both desktop and tablet users. I collaborated with the product manager, customer success, and developers to ensure this project meets the business requirements and also making sure the technical feasibility to complete this project.
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
        We started this project by conducting a series of user testing from the old version of the app. The purpose of this testing is to identify the exact steps where users were having problems to complete the tasks and also to confirm our initial hypothesis based on the customers' feedback.
      </p>
      <p>
        We were able to get six participants from our existing clients to test the old version of the plans module. During the user testing, we asked each participant to complete the task based on the scenario that we wrote. From the test result, we found most of the participants didn't have any problems finding items on the highest level. However, some of the participants had difficulty at the lower levels.
      </p>
      <p>
        <h2>Product Ideation</h2>
        Equipped with a better understanding of our users' pain points, we began doing the product ideation process. The first step of this process was to establish the scope of this project by prioritizing the features. After the scope was defined, I started sketching some user-flows and visual alternatives for the planning structure. Inspired by the traditional organizational diagram structure, I experimented with the diagram in different ways.
      </p>
      <p><WillDoNext text="sketch of diagram experiment and userflows" /></p>
      <p><WillDoNext text="photo of planning with sticky notes" /></p>
      <p>
        One of the most challenging parts of this design process was to find a visual solution where the UI is responsive enough to support a big plan in different monitor and tablet sizes. So I decided to create a quick HTML prototype for the chosen visual solution to test the responsiveness of the layout. This HTML prototype also helped us to smoothen the conversation with developers and other stakeholders. Below is the clickable HTML prototype to show the basic functionality of how a plan can be structured.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <PlanningHTMLPrototype />
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>The Solutions</h2>
      </p>
      <p><WillDoNext text="sketch of diagram experiment" /></p>
      <p>
        We created different views: map-view, list-view, and Gantt chart. On the map view mode, the user can see the full hierarchy of the plan from top to bottom. This view is also useful to give the context of where each item resides on the overall organization plan.
      </p>
      <p><WillDoNext text="Map view" /></p>
      <p>
        To handle a scenario where the user wants to see only the items they own or filter based on some criteria, we created a list view mode.
      </p>
      <p><WillDoNext text="List view" /></p>
      <p>
        We added a Gantt chart view to show better visibility for the plan's timeline.
      </p>
      <p><WillDoNext text="Gantt view" /></p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Outcomes</h2>
        When we just released the new version of the plans module, we didn't remove the old version. We allowed users to use both versions temporarily for two months. The goal of this setup is to validate which version users use the most. After two months of tracking the number, the result was 78.6% of our users were using the new version.
      </p>
    </div>
  </>
);

export default caseStudyContent;