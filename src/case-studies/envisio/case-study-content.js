import React from "react";
import ImgSection from '../../components/interior/img-section';
import SoftwareModules from './img/modules.png';
import planLevels from './img/plan-levels.png';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p className="first-paragraph">
        Envision developed the strategic planning web application that allows organizations to lay out their plans by defining their goals. Each goal's progress can be tracked and measured to ensure the operational plan is under control. Their software consists of 3 main modules, such as <strong>plans</strong>, <strong>reports</strong>, and <strong>analytics</strong>. To make this case study not being too long, I only write about the plans module and will post another case studies for the other modules.
      </p>
      <p>
        <ImgSection
          imgs={[{url: SoftwareModules}]}
          caption="Users can navigate to a different module by clicking the module dropdown. The image shows that currently in the Plans module."
        />
      </p>
      <p>
        <h2>Project Brief</h2>
        Envisio wanted to optimize the software user-flow of their planning module. To ensure this project meets the business requirements and feasibility from the technical perspective, I collaborated with the product manager, customer success team, and developers.
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
        <h3>The Problems</h3>
        We got some feedback from the customers to improve the functionality and the visibility of the overall plan view. Especially when the planning gets bigger, users were having a hard time finding items that buried inside on the lower level of the plan. Some visual alternative and quick ways to find items could potentially improve the usability of the software.
      </p>
      <p>
        <p style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}}>
        <ImgSection
          imgs={[{url: planLevels}]}
          caption="Illustration of how plan is structured inside the app."
        />
        </p>
        {/* <img src={planLevels} style={{float: 'left', width: '320px', margin: '0 32px 24px 0'}} /> */}
        The simple illustration on the left side shows how the Envisio plan application works. In that example, the plan has three levels such as <strong style={{color: '#1879eb'}}>Goal</strong>, <strong style={{color: '#52bf00'}}>Strategy</strong>, and <strong style={{color: '#7f17ec'}}>Action</strong>. The relationship between a parent and children indicated by the numbering system beside the level name. Level one indicated as the <strong style={{color: '#1879eb'}}>Goal</strong> level, level two as <strong style={{color: '#52bf00'}}>Strategy</strong>, and level three as <strong style={{color: '#7f17ec'}}>Action</strong>. Notice the deeper the level the more digit the number is.
      </p>
      <p>
        Let's take an example of <code style={{background: '#7f17ec', color: '#ffffff'}}>Action 1.2.1</code>. If you see the number convention means that Action's parent is <code style={{background: '#52bf00', color: '#ffffff'}}>1.2</code> which is <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code>, and the <code style={{background: '#52bf00', color: '#ffffff'}}>Strategy 1.2</code> parent is <code style={{background: '#1879eb', color: '#ffffff'}}>Goal 1</code>. In conclusion, the relationship between parent and children are one-to-many.
      </p>
      <p>
        In reality, some organizations can have a much bigger plan. The previous solution, the user had to go through page by page to access items on a deeper level. The concern with that method was not only from the user experience but also from the technical perspective. Because every time the user wanted to access a different level, the browser had to re-render the whole UI until all the data gets loaded, which sometimes could take a long time if there are so many items on that level.
      </p>
    </div>
  </>
);

export default caseStudyContent;