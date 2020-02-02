import React from "react";
import ImgSection from '../../components/interior/img-section';
import SoftwareModules from './img/modules.png';
import planLevels from './img/plan-levels.png';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p className="first-paragraph">
        Envision developed the strategic planning web application that allows organizations to lay out their plans by defining their goals. Each goal's progress can be tracked and measured to ensure the operational plan is under control. Their software consists of 3 main modules, such as <strong>plans</strong>, <strong>reports</strong>, and <strong>analytics</strong>. For this case study I only write about the plans module and will post another case studies for the other modules.
      </p>
      <p>
        <ImgSection
          imgs={[{url: SoftwareModules}]}
          caption="Users can navigate to a different module by clicking the module dropdown. The image shows that currently in the Plans module."
        />
      </p>
      <p>
        <h2>Project Brief</h2>
        Envisio wanted to modernize the UI and optimize the user-flow of its planning module. The new UI should be responsive at least for tablet size. To ensure this project meets the business requirements and feasibility from the technical perspective, I collaborated with the product manager, customer success team, and developers.
      </p>
      <p>
        <h3>My Role</h3>
        In this project, my role was as a UI / UX designer and front-end developer. Some of the responsibilities were:
        <ul>
          <li>Requirements gathering</li>
          <li>Feature audit</li>
          <li>User testings</li>
          <li>Wireframes and Hi-fi mockups</li>
          <li>React front-end development</li>
        </ul>
      </p>
      <p>
        <h3>The Problem</h3>
        Based on the customers' feedback, when the planning gets bigger, they would have a hard time finding items that were buried in the lower levels of the plan. Some visual alternatives and quick ways to find items were needed to improve productivity for the users.
      </p>
      <p>
        <p style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}}>
        <ImgSection
          imgs={[{url: planLevels}]}
          caption="Simple illustration of how a plan is structured."
        />
        </p>
        {/* <img src={planLevels} style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}} /> */}
        The simple illustration on the left side shows how the basic plan application works. In that example, the plan has three levels such as <strong style={{color: '#1879eb'}}>Goal</strong>, <strong style={{color: '#52bf00'}}>Strategy</strong>, and <strong style={{color: '#7f17ec'}}>Action</strong>. The relationship between a parent and children are indicated by the numbering system beside the level's name. The first level is indicated as <strong style={{color: '#1879eb'}}>Goal</strong>, second level as <strong style={{color: '#52bf00'}}>Strategy</strong>, and third level as <strong style={{color: '#7f17ec'}}>Action</strong>. Notice that the deeper the level, the number increases by another decimal.
      </p>
      <p>
        Let's take an example of <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>. If you see the number convention means that <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>'s parent is <code style={{background: '#52bf00', color: '#ffffff'}}>1.2</code> which is <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code>, and the <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code> parent is <code style={{background: '#1879eb', color: '#ffffff'}}>Goal 1</code>. In conclusion, the relationship between a parent and children is one-to-many.
      </p>
      <p>
        In reality, some of our clients had much bigger plans than the example above. In the previous version, the user had to go through page by page to access items on deeper levels. The concern with that method was that every time the user wanted to access a different level, the browser had to re-render the whole UI until all the data gets loaded, which sometimes could take a long time if there are so many items on that level.
      </p>
      <p>
        Some people also have difficulty in figuring out the context of some items in the plan, because there is no clear visual cue that represents the relationship between the child level and the parent level.
      </p>
      <p>
        <h2>User Research</h2>
        We started this project by conducting a series of user testing for the old product. The purpose of this exercise is to detect the exact steps where users were having problems to complete the tasks and to confirm our initial hypothesis based on the customers' feedback.
      </p>
      <p>
        For this testing, we were able to get six volunteers from our existing clients to test our software. What we found from the test results that our initial hypothesis was proven to be correct as most of our participants didn't have any problem finding items on the highest level. However, they were having trouble finding items on the mid and low levels.
      </p>
      <p>
        <h2>Product Ideation</h2>
        Once we got a better understanding of our users' problems, we began doing the product ideation process. The first step of this process was to establish the scope of this project by prioritizing product features.
      </p>
      <p>
        After the scope was defined, I started experimenting and creating rough visual prototypes.
      </p>
    </div>
  </>
);

export default caseStudyContent;