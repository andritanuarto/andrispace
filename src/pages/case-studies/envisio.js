import React from "react";
import Moment from 'moment';
import SVG from 'react-inlinesvg';
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
import planLoading from '../../img/envisio/plan-loading.png';
import award from '../../img/envisio/award.svg';

export const frontmatter = {
  clientName: 'Envisio',
  projectDate: '2019-01-25',
  status: 'published',
  projectTitle: 'Strategic Planning Manager',
  postTitle: 'Envisio - Strategic Planning Manager',
  blurb: 'Get your plans on track',
  logoWidth: 'auto',
  opacityColor: '#000000',
  opacityLevel: '0.7',
  url: './case-studies/envisio',
  heroImg: '../../img/envisio/envisio-bg.jpg',
  summary: 'Envisio developed the strategic planning web application that facilitates organizations to lay out their plans by defining their goals.'
}

export default () => (
  <InteriorPostLayout
    caseStudyContent={{
      postTitle: frontmatter.postTitle,
      projectDate: Moment(frontmatter.projectDate).format('ll'),
      caseStudyBanner: caseStudyBanner
    }}
  >
    <>
      <div className="par par--normal-width">
        <p className="first-paragraph">
          Envisio develops strategic planning web applications that facilitates organizations to lay out their plans by defining their goals. Each goal's progress can be tracked and measured to ensure the operational plan is under control. Their software consists of 3 main modules: <strong>Planning</strong>, <strong>Reporting</strong>, and <strong>Analyzing</strong>. For this case study, the focus will only be on the plan's module as I plan on creating individual case studies for each module. Due to the NDA agreement, I am only able to share limited information about this project.
        </p>
        <p>
          <ImgSection
            imgs={[{url: SoftwareModules}]}
            caption="Users can navigate to a different module by clicking the module dropdown. The image shows that currently user is in the planning module."
          />
        </p>
        <p>
          <h2>Project Brief</h2>
          For this project, Envisio wanted to modernize the UI and optimize the user-flow of its planning module for both desktop and tablet users. I collaborated with the product manager, customer success team, and developers to ensure this project meets the business requirements and also monitored the technical feasibility to complete this project.
        </p>
        <p>
          <h3>My Role</h3>
          In this project, I was as a UI / UX designer and front-end developer. Some of my responsibilities were:
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
          From our customers' feedback, since the planning gets bigger, over time they would have an increasingly hard time finding items that were buried in the lower levels of the plan. They felt that some visual alternatives and quick ways to find items were needed to improve the productivity of the users.
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
          Let's take the example of <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>. If you see the number convention, it means that <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>'s parent is <code style={{background: '#52bf00', color: '#ffffff'}}>1.2</code>, which is <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code>, and the <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code> parent is <code style={{background: '#1879eb', color: '#ffffff'}}>Goal 1</code>. Therefore, the relationship between a parent and children is one-to-many.
        </p>
        <p>
          In reality, some of our clients had much bigger plans than the example provided above. In the previous version, the user had to go through page by page to access items on the deeper levels. The concern with that approach is that every time the user wanted to access different levels, the browser had to re-render the whole UI until all the data gets loaded, which sometimes could take a long time if there are so many items on that level.
        </p>
        <p><ImgSection imgs={[{url: planLoading}]} /></p>
        <p>
          Another problem was that users found it difficult to figure out the context in some parts of the plan as there is no clear visual cue that represents the relationship between the parent level and the child level.
        </p>
        <p>
          <h2>User Research</h2>
          We started this project by conducting a series of user testing from the old version of the app. The purpose of this testing was to identify the exact steps where users were having problems and also to confirm our initial hypothesis based on the customers' feedback.
        </p>
        <p>
          We were able to get six participants from our existing clients to test the old version of the plans module. During the user testing, we asked each participant to complete the task based on the scenario that we wrote. From the test result, we found most of the participants didn't have any problems finding items on the highest level. However, some of the participants had difficulty finding items at the lower levels.
        </p>
        <p>
          <h2>Product Ideation</h2>
          Equipped with a better understanding of our users' pain points, we began doing the product ideation process. The first step of this process was to establish the scope of this project by prioritizing the features. After the scope was defined, our team decided to start brainstorming the layout ideas for the overall view of the plan. We used sticky notes to help us find a solution for the planning structure. This exercise helped us to solve the problem on the fly and encourage everyone within the team to openly share their thoughts and ideas.
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
          One of the biggest challenges of this design process was to find a visual solution where the UI is responsive enough to support a big plan in different monitor and tablet sizes. So I decided to create a quick HTML prototype for the chosen visual solution to test the responsiveness of the layout. This HTML prototype also helped us smoothen the conversation with developers and other stakeholders. Below is the clickable HTML prototype to show the basic functionality of how an overall plan can be structured.
        </p>
      </div>
      <div className="par par--normal-width spacing">
        <PlanningHTMLPrototype />
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>The Solutions</h2>
          We created different views: map-view, list-view, and Gantt-view. On the map-view mode, the user can see the full hierarchy of the plan from top to bottom. This view is also useful to give the context of where each item resides on the overall organization plan.
        </p>
      </div>
      <div className="par par--medium-width spacing">
        <ImgSection imgs={[{url: iPadOverallView}]} caption="Planning map-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          To handle scenarios where the user wants to see only the items that they own and filter based on some criteria, we created a narrow-view mode which by default showed only items that current user owns.
        </p>
      </div>
      <div className="par par--medium-width spacing">
        <ImgSection imgs={[{url: iPadListlView}]} caption="Planning list-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          Users can also switch to Gantt-view to show better visibility of the timeline for each part of the plan.
        </p>
      </div>
      <div className="par par--medium-width spacing">
        <ImgSection imgs={[{url: iPadGanttView}]} caption="Planning gantt-view" />
      </div>
      <div className="par par--normal-width">
        <p>
          Each part of the plan is clickable to show more details about that selected part of the plan.
        </p>
      </div>
      <div className="par par--medium-width spacing">
        <ImgSection imgs={[{url: iPadDetailView}]} caption="Planning detail view" />
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Outcomes</h2>
          To be able to track and to confirm the usability of the end product, we didn't remove the old UI version. We allowed users to easily switch between old and new UI versions temporarily. The goal of this setup was to further validate which version users used the most. After two months of tracking the number of visits, 78.6% of the traffic went to the new design, which was a very satisfying result.
        </p>
        <p>
          Because of this solution, our software got a recognition as consistently rated the easiest to use strategic planning software by Capterra.
        </p>
        <p style={{textAlign: 'center'}}>
          <SVG src={award} width="400"/>
        </p>
      </div>
    </>
  </InteriorPostLayout>
);