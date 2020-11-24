import React from "react";
import Moment from 'moment';
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import BarChart from '../../components/interior/bar-chart';
import ImgSection from '../../components/interior/img-section';
import caseStudyBanner from '../../img/adbusters/adbusters-case-study-banner.jpg';
import magzCovers from '../../img/adbusters/magazine-covers.png';
import magzLayout from '../../img/adbusters/adbusters-layout.png';
import affinity from '../../img/adbusters/affinity.png';
import persona from '../../img/adbusters/persona.jpg';
import storyBoard from '../../img/adbusters/story-board.png';
import digitizedUserflowLogin from '../../img/adbusters/login-userflow.png';
import digitizedUserflowHome from '../../img/adbusters/home-userflow.png';
import lowFiWhiteboard from '../../img/adbusters/low-fi-whiteboard.jpg';
import lowFiPaper from '../../img/adbusters/low-fi-paper.jpg';
import lowFiTest1 from '../../img/adbusters/low-fi-test1.jpg';
import lowFiTest2 from '../../img/adbusters/low-fi-test2.jpg';
import lowFiTest3 from '../../img/adbusters/low-fi-test3.jpg';
import midFiPrototypes from '../../img/adbusters/mid-fi-prototypes.png';
import iconSketches from '../../img/adbusters/icon-sketches.png';
import moodboard from '../../img/adbusters/moodboard.jpeg';
import styleTiles from '../../img/adbusters/style-tiles.png';
import hiFi from '../../img/adbusters/hi-fi.png';

export const frontmatter = {
  clientName: 'Adbusters',
  projectDate: '2019-11-27',
  status: 'published',
  projectTitle: 'World Revolution App',
  postTitle: 'Adbusters – World Revolution App',
  blurb: 'Now is the time to find each other and assemble',
  logoWidth: 'auto',
  opacityColor: '#000000',
  opacityLevel: '0.7',
  url: './adbusters',
  heroImg: '../../img/adbusters/hero.jpg',
  summary: 'Adbusters is a Canadian magazine publishing company. They describe themselves as a global network for artists, activists, and entrepreneurs.'
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
        <a rel="noopener noreferrer" href="https://www.adbusters.org/" target="_blank">Adbusters</a> is a Canadian magazine publishing company. They describe themselves as a global network for artists, activists, and entrepreneurs. Their media strategy is producing radical designs to shake up complacent consumerist culture. Aside from publishing magazines, Adbusters also actively organize and are involved in different social campaigns like <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Culture_jamming" target="_blank">Culture Jamming</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/8th-anniversary-of-occupywallstreet/" target="_blank">Occupy Wall Street</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/buy-nothing-day-2019/">Buy Nothing Day</a>, etc.
      </p>
      <p>
        Our first impression of Adbusters' magazines was their unusual content style. Their magazine layout tended to be free-flowing and spontaneous unlike other magazines in general. I can imagine that graphic designers who work for their magazine would have the freedom to experiment with unusual imaginaries and typographies.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzLayout}]}
          caption="Examples of freeflow layout style from Adbusters' magazines"
        />
      </p>
      <p>
        Moreover, their belief in anti-commercial means the consistency of their branding is non-existent. A very prominent example we noticed was their magazine covers didn't have consistent branding for each edition.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzCovers}]}
          caption="Adbusters magazine covers and there is no logo consistency throughout their editions
          "
        />
      </p>
      <p>
        <h2>Project Brief</h2>
        With the constant growth of digital technology and mobile users, Adbusters needed a mobile platform where they can communicate and broadcast their campaigns to their subscribers in a more direct and timely way.
      </p>
      <p>
        When we had a kick-off meeting with the Adbusters' team, they wanted to create a mobile app called "The World Revolution" and intended to develop it for iOS users for its initial release. The sole purpose of this app was to enable users to subscribe and receive reminders about the campaigns they plan to join.
      </p>
      <p>
        Initially, because Adbusters do not believe in collecting any data from users, they wanted to have an app without users having to log in. But without any login information, there was no way to enable a personalized experience for app users. After expressing our concerns, Adbusters agreed to collect just the username, email, and password from the users.
      </p>
      <p>
        <h3>My Role</h3>
        For this project, I was involved in every phase of the UX processes from research, planning, design, and setting up the standard library that we built based on the atomic design principle. Given my background as a software UI designer and developer, I also helped some of the UI work for this project and advised on the feasibility of translating design into real-life development.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Research</h2>
        To get knowledge about the domain of this project and to help us identify how we can position this app among other competitors, we conducted a series of research to bridge our knowledge gap.
      </p>
      <p>
        <h3>Domain Research</h3>
        During the domain research, we found three other competitor websites that focused on similar topics like Adbusters:
        <ul>
          <li>
            <strong><a rel="noopener noreferrer" href="https://www.thezeitgeistmovement.com/" target="_blank">TZM (The Zeitgeist Movement)</a>:</strong> This is an activist movement; their topics of interest are mainly about common reforms and general community support to improve conditions such as environmental crisis, poverty, conflict, corruption, economic inequality, etc. Currently, they don't have a mobile app, and mainly communicate their movements by organizing some events through their website and social media platforms.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://rebellion.earth/" target="_blank">Extinction Rebellion</a>:</strong>  It is an international movement that uses non-violent civil disobedience in an attempt to halt mass extinction and minimize the risk of social collapse. Based on our research, they use social media and their website to communicate their events.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://charliehebdo.fr/" target="_blank">Charlie Hebdo</a>:</strong> It is a French-based political satirical magazine. Their content targets people who are politically left-wing, skeptic, secular, atheist, and anti-racist. Our findings showed that they don't actively organize events or campaigns. Although they have both a website and a mobile app, they use them solely in promoting their magazines.
          </li>
        </ul>
      </p>
      <p>To make it easier for us to compare our competitors, we created a table to organize our findings based on their focus and the platforms they use.</p>
    </div>
    <div className="par par--normal-width spacing">
      <table border="1">
        <tr>
          <td style={{textAlign: 'center'}}></td>
          <td style={{textAlign: 'center'}}>TZM</td>
          <td style={{textAlign: 'center'}}>Extinction Rebellion</td>
          <td style={{textAlign: 'center'}}>Charlie Hebdo</td>
        </tr>
        <tr>
          <td style={{textAlign: 'center'}}>Website</td>
          <td style={{textAlign: 'center'}}>Yes</td>
          <td style={{textAlign: 'center'}}>Yes</td>
          <td style={{textAlign: 'center'}}>Yes</td>
        </tr>
        <tr>
          <td style={{textAlign: 'center'}}>Mobile App</td>
          <td style={{textAlign: 'center'}}>No</td>
          <td style={{textAlign: 'center'}}>No</td>
          <td style={{textAlign: 'center'}}>Yes</td>
        </tr>
        <tr>
          <td style={{textAlign: 'center'}}>Organized events</td>
          <td style={{textAlign: 'center'}}>Yes</td>
          <td style={{textAlign: 'center'}}>Yes</td>
          <td style={{textAlign: 'center'}}>No</td>
        </tr>
        <tr>
          <td style={{textAlign: 'center'}}>Organization Focus</td>
          <td style={{textAlign: 'center'}}>Event Organizer</td>
          <td style={{textAlign: 'center'}}>Event Organizer</td>
          <td style={{textAlign: 'center'}}>Magazine Publisher</td>
        </tr>
      </table>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>Survey</h3>
        When we started planning our survey, we wanted to know how people remind themselves about their schedules, and which tools they used to help them remember about any event they have committed to join.
      </p>
      <p>
        We created the survey using Google form, and our target audience were men and women aged between 15 to 50 years old, and sent them to social-related community channels on Slack and Discord. We received 66 responses from our survey. Below are several highlights from our survey findings:
      </p>
      <p>
        <BarChart
          title="Survey participants by age group"
          yTextWidth="200px"
          data={[
            {label: '15 - 25', color: '#868686', percent: 21},
            {label: '26 - 35', color: '#bdbdbd', percent: 35},
            {label: '36 - 45', color: '#333333', percent: 21},
            {label: '46+', color: '#717171', percent: 14}
          ]}
        />
      </p>
      <p>
        <BarChart
          title="How do you stay informed about important things when using your mobile phone?"
          subTitle="(survey participants can have multiple answers)"
          yTextWidth="250px"
          data={[
            {label: 'Push Notification', color: '#868686', percent: 41.1, number: 42},
            {label: 'Email', color: '#bdbdbd', percent: 30.4, number: 31},
            {label: 'Calendar', color: '#333333', percent: 19.6, number: 20},
            {label: 'Todo App', color: '#717171', percent: 8.8, number: 9}
          ]}
        />
      </p>
      <p>
        <BarChart
          title="Do you read the alerts on your home screen (push notification)?"
          yTextWidth="250px"
          data={[
            {label: 'Yes', color: '#868686', percent: 49.2, number: 32},
            {label: 'Sometimes', color: '#bdbdbd', percent: 27.7, number: 18},
            {label: 'No', color: '#333333', percent: 23.1, number: 15}
          ]}
        />
      </p>
      <p>
        <BarChart
          title="Do you navigate to the corresponding app after reading a push notification on your home screen ?"
          yTextWidth="250px"
          data={[
            {label: 'Sometimes', color: '#868686', percent: 57.6, number: 38},
            {label: 'Yes', color: '#333333', percent: 28.8, number: 19},
            {label: 'No', color: '#bdbdbd', percent: 13.6, number: 9},
          ]}
        />
      </p>
      <p>
        Based on our survey results, the majority of our survey samples think push notifications are useful in reminding them on upcoming schedules or events, especially when they are not actively using the phone. Meanwhile, a few participants mentioned that push notifications could be annoying if they don't show the relevant information they need.
      </p>
      <p>
        <h3>Contextual Inquiry</h3>
        We wanted to know from existing Adbusters subscribers about their previous experience participating in Adbusters events. We asked Adbusters to give us the contact list of their existing subscribers for the interview. And out of the fifteen contacts that were given, we received back six responses.
      </p>
      <p>
        Overall, we received positive responses about the idea of having a dedicated app for Adbusters events. They felt it was hard to keep track of Adbusters events by just relying on email. Below are some of the highlighted quotes we received:
      </p>
      <p className="quote">
        "I typically find push notification to be spammy and turn them off, with rare exceptions. I prefer if you do send push notifications, make them meaningful and relevant."
      </p>
      <p className="quote">
        "It will be great to have campaign-related content in one app because social media can be a little too much."
      </p>
      <p className="quote">
        "I tent to sync more from Facebook events. So it'll be good to have both options if there is a specific app. Push notifications feel more effective."
      </p>
      <p className="quote">
        "Honestly, promotional email has gotten a bit out of hand. I prefer to have push notifications."
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h3>Affinity Diagram</h3>
        After we gathered all the findings from our research, it was time to create an affinity diagram. Every team member wrote down their research findings on sticky notes and arranged them on the wall. Then we grouped them accordingly based on relevant categories. Below is the digitized version of our affinity diagram.
      </p>
    </div>
    <div className=" par par--normal-width spacing">
      <p>
        <ImgSection imgs={[{url: affinity}]} caption="Digitized affinity diagram" />
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h3>User Persona</h3>
        After we analyzed our affinity diagram, we created a user persona to represent the needs of typical users for this app. By creating the persona, it helped us to gain a similar perspective about their motivations, pain points, and goals.
      </p>
    </div>

    <div className="par user-persona user-persona--light spacing">
      <div className="user-persona__left-section">
        <div className="user-persona__photo" style={{backgroundImage: `url(${persona})`}} />
      </div>
      <div className="user-persona__right-section">
        <h3>Shane Parks</h3>
        <strong className="user-persona__sub-info">28, Single, Animation Designer</strong>
        <strong className="user-persona__quoet">
          "I want to be the change I wish for the world."
        </strong>
        <p>
          Shane is an animation designer living in Seattle. He has been an ardent follower of Adbusters. Over the past few years, he has actively participated in some of their campaigns.
        </p>
        <p>
          Due to his demanding work schedule, he is unable to regularly stay up to date on the related campaigns in his email inbox. A lot of those events he is interested in are outside the city. He needs a way to be able to easily track all those events so he can plan his trips accordingly.
        </p>
        <div>
          <div className="user-persona__right-section__bottom">
            <div>
              <strong>Pain Points</strong>
              <ul>
                <li>Using email bothers him because he has to search through a pile of emails to find the event information.</li>
                <li>He doesn't always have the time to check the Adbusters website.</li>
              </ul>
            </div>
            <div>
              <strong>Goals</strong>
              <ul>
                <li>To reject the ideas he has inherited from a culture that has bought into corporate greed and environmental destruction.</li>
                <li>To connect with people who share his life philosophy and social consciousness.</li>
                <li>Expose himself to ideas that challenge his thinking on political, environmental, economic and other issues.</li>
                <li>To keep on top of the events information involving the activist community.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="par par--normal-width spacing">
      <h3>Storyboard</h3>
      After gaining more understanding of our typical user pain-points and goals based on Shane's persona, we also created a storyboard that shows a typical scenario of how Shane is going to use the app.
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: storyBoard}]} caption="Shane's story board" />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h2>Planning</h2>
        Once we understood the type of users and the scenario of how our users were going use the app, we moved on to the planning phase. During this phase, we created a features priority matrix, user-flows, and content structure.
      </p>
      <p>
        <h3>Features List &amp; MVP</h3>
        After we laid down the users pain points and needs, we started a features list for this project. We decided to prioritize our features based on three different categories: must-have, nice to have, and not needed. Below are the features prioritization based on those categories.
      </p>
      <ul>
        <li><strong>Must-have:</strong> event list view, event page, push notification, search bar, continue as a guest, event subscription, notification tab, and user settings.</li>
        <li><strong>Nice to have:</strong> sign-in & sign-up, campaign videos, profile account, add to the calendar, comment section for the event page, and event filters.</li>
        <li><strong>Not Needed:</strong> upload image for the campaign.</li>
      </ul>
      <p>
        Next step, after we categorized based on the priority levels, we narrowed down the features list further based on our constraints as our minimum viable product (MVP). Below is the MVP features list:
      </p>
      <ul style={{display: 'inline-block'}}>
        <li><strong>Push notification</strong></li>
        <li><strong>Search bar</strong></li>
        <li><strong>Sign in &amp; sign up</strong></li>
      </ul>
      <ul style={{display: 'inline-block', marginLeft: '80px'}}>
        <li><strong>Continue as a guest</strong></li>
        <li><strong>User settings</strong></li>
        <li><strong>Notification tab</strong></li>
      </ul>
      <ul style={{display: 'inline-block', marginLeft: '80px'}}>
        <li><strong>Event page</strong></li>
        <li><strong>Event subscription</strong></li>
        <li><strong>Add to calendar</strong></li>
      </ul>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h3>User-flows</h3>
        During the user-flow creation process, we started with hand-drawn user-flows. After we tested the hand-drawn user-flows and felt satisfied, we created the digitized version of it.
      </p>
    </div>
    <div className="par par--normal-width">
      <ImgSection
        imgs={[{url: digitizedUserflowLogin}]}
        caption="Digitized userflows for login, signup, and forgot password"
      />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        Deriving from Shane's persona and storyboard, we created the user-flow based on how he's going to use the app.  From the survey results, the majority of people favoured push notification as the most efficient way for them to stay updated, so we incorporated the push notification feature to remind the user when the events are coming up or about to begin.
      </p>
      <p>
        From the user-flow image below, it shows that when the notification message (right bottom corner black box) is received, the user can click the notification tab. After it's clicked, the app will open and redirect the user to the event detail page.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: digitizedUserflowHome}]} />
    </div>
    <div className="par par--normal-width">
      <h2>Design</h2>
    </div>
    <div className="par par--normal-width spacing">
      <h3>Low Fidelity (low-fi) Wireframes</h3>
      We started our design process by creating Low-Fi wireframes. Instead of sketching wireframes on paper, we did it on a whiteboard instead. The purpose of this exercise was to encourage conversation within the team and to discuss solutions on the fly. I found that using a whiteboard for this project was very handy, especially for making revisions and ensuring each team member were on the same page.
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: lowFiWhiteboard}]} caption="Whiteboarding wireframes"/>
    </div>
    <div className="par par--normal-width">
      <p>
        After we run through each wireframe on the whiteboard, and settled with the flows, we moved on to creating low-fi wireframes on paper for user-testing purposes.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: lowFiPaper}]} caption="Paper prototype wireframes"/>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        To ensure our workflows made sense to other people, we tested our prototypes and took notes on any findings during the user-testing phase.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection
        imgs={[
          {url: lowFiTest2, backgroundImg: true},
          {url: lowFiTest3, backgroundImg: true},
          {url: lowFiTest1, backgroundImg: true},
        ]}
        caption="When I conducted user-testing for our low-fi prototypes"
      />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        Generally, we received good feedback from our testers, and they felt the app navigation made sense. We only needed to make some minor adjustments on both navigation and layout content. Below are some of the key findings during the test:
        <ul>
          <li>“Add to Calendar” button on the event page</li>
          <li>Simplify the layout from tabs to linear, to show events belonging to a campaign</li>
          <li>Subscribe button on the campaign category page</li>
          <li>Changed the term follow to subscribe on the campaign category page</li>
        </ul>
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <h3>Mid Fidelity (mid-fi) Wireframes</h3>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: midFiPrototypes}]} caption="Mid-fi prototypes from one of our Sketch file"/>
    </div>
    <div className="par par--normal-width">
      <p>
        After we tested our low-fi prototypes and made necessary revisions, we moved on to mid-fi wireframes creation. Ideally, we should have tested our mid-fi prototypes before we jump into final Hi-Fidelity (hi-fi) wireframes. Because of time limitations and minor issues on the testing results, we skipped the mid-fi testing and moved on to final Hi-Fi prototypes.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h3>Art Direction &amp; High Fidelity (hi-fi) Wireframes</h3>
        The last step on our wireframe creation process was to design the hi-fi prototypes. At this stage, we had already established the user-flow from our previous low-fi and mid-fi wireframes, then we decided the look and feel for the final skinning. During this process, we tried to make the app not only intuitive but still pertain the characteristic of Adbusters' visual style. Inspired by one of their magazine contents, we came up with a rough, hand-drawn design for some visual elements.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: iconSketches}]} caption="Sketches of hand-drawn visual elements"/>
    </div>
    <div className="par par--normal-width">
      <p>
      For our mood board and style tile, we used dark colours as the dominant colours, and incorporated them with red as the focal point colour. The image below is the complete app style tile to summarize the art direction for this app.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection
        imgs={[{url: styleTiles}, {url: moodboard}]}
        caption="Visual style tile and moodboard"
      />
    </div>
    <div className="par par--normal-width">
      <p>
        During the hi-fi creation process, we skinned all the UI libraries that we created during the mid-fi creation process using Sketch. Some of the UI elements, especially the navigation system we used the iOS standard UI library because we wanted this app to have a familiar navigation pattern for iPhone users.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection imgs={[{url: hiFi}]} caption="Some of the app hi-fi screens"/>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h2>Project Outcome</h2>
        When we presented this project to the client, we got very positive feedback. Some of the features that people liked were the notification control that only showed the items they wanted to be notified, and the "add to calendar" feature on each event page. From the UI perspective, they feel the visual style still reflects the Adbusters style.
      </p>
    </div>
    <div className="par par--normal-width">
        <p>
          <h2>Future Considerations</h2>
          Unfortunately due to the time constraint, we couldn't implement every feature that we wished to include as part of our MVP. Perhaps these features listed below can be considered for the app in the near future:
        </p>
        <ul>
          <li>Add user profile to make it more personalized</li>
          <li>Filter events by location</li>
          <li>Adding image comments</li>
        </ul>
    </div>
  </>
  </InteriorPostLayout>
);