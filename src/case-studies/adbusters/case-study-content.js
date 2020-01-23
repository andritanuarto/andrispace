import React from 'react';
import WillDoNext from '../../components/interior/will-do-next';
import ImgSection from '../../components/interior/img-section';
import magzCovers from './magazine-covers.png';
import magzLayout from './adbusters-layout.png';
import survey1 from './survey-1.png';
import survey2 from './survey-2.png';
import affinity from './affinity.png';
import persona from './persona.jpg';
import storyBoard from './story-board.png';
import digitizedUserflowLogin from './login-userflow.png';
import userflowLogin from './login-userflow.jpg';
import userflowResetPwd from './reset-pwd-userflow.jpg';
import digitizedUserflowHome from './home-userflow.png';
import lowFiWhiteboard from './low-fi-whiteboard.jpg';
import lowFiPaper from './low-fi-paper.jpg';
import lowFiTest1 from './low-fi-test1.jpg';
import lowFiTest2 from './low-fi-test2.jpg';
import lowFiTest3 from './low-fi-test3.jpg';


const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p className="first-paragraph">
        <a rel="noopener noreferrer" href="https://www.adbusters.org/" target="_blank">Adbusters</a> is a Canadian magazine publishing company. They describe themself as a global network for artists, activists, and entrepreneurs. Their media strategy is producing radical designs to shake up complacent consumerist culture. Besides publishing magazines, Adbusters also actively organizes and involves different social campaigns like <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Culture_jamming" target="_blank">Culture Jamming</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/8th-anniversary-of-occupywallstreet/" target="_blank">Occupy Wall Street</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/buy-nothing-day-2019/">Buy Nothing Day</a>, etc.
      </p>
      <p>
        Our first impression when we looked at Adbusters' magazines, they have an unusual content style. Their magazine layout tent to be free-flowing, and spontaneous unlike other magazines in general. I can imagine if graphic designers who work for their magazine, they have the freedom to experiment with unusual imaginaries and typographies.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzLayout}]}
          caption="Examples of freeflow layout style from Adbusters' magazines"
        />
      </p>
      <p>
        Moreover, their belief in anti-commercial means, the consistency of their branding is non-existent. A very prominent example we noticed their magazine covers don't have consistent branding for each edition.
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
        With the constant growth of digital technology and mobile users, Adbusters need a mobile platform where they can communicate and voicing their campaigns to their subscribers in a more direct and timely way.
      </p>
      <p>
        When we had a kick-off meeting with Adbusters' team, they wanted to create a mobile app called "The World Revolution" and plan to develop it using <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>, so it's compatible with both iOS and Android platforms and also saves the development cost. The sole purpose of this app is to be able to subscribe and remind the subscribers about the campaigns they plan to join.
      </p>
      <p>
        Initially, because Adbusters does not believe in collecting any data from users, they wanted to have an app without users having to log in. On the other hand, without login information, there is no way to have a personalized experience for app users. After expressing our concerns, Adbusters agreed to collect just username, email and password from the users.
      </p>
      <p>
        <h3>My Role</h3>
        For this project, I involved in every phase of the UX processes such as research, planning, design, and setting up the standard library following the atomic design principle. Because of my varied background as a software UI designer and developer, I also helped some of the UI work for this project and advising the feasibility of translating design into real-life development.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Research</h2>
        To get knowledge about the domain of this project and to help us how we position this app among other competitors, we conducted a series of research to bridge our knowledge gap.
      </p>
      <p>
        <h3>Domain Research</h3>
        When we did the domain research, we wanted to know other competitors, which focus on similar topics like Adbusters, and we found three websites that stand out the most:
        <ul>
          <li>
            <strong><a rel="noopener noreferrer" href="https://www.thezeitgeistmovement.com/" target="_blank">TZM (The Zeitgeist Movement)</a>:</strong> It is an activist movement. Their topics of interest are mainly about common reforms and general community support to improve conditions such as environmental crisis, poverty, conflict, corruption, economic inequality, etc. Currently, they don't have a mobile app, and mainly they communicate their movements by organizing some events and also through their website and social media platforms.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://rebellion.earth/" target="_blank">Extinction Rebellion</a>:</strong>  It is an international movement that uses non-violent civil disobedience in an attempt to halt mass extinction and minimize the risk of social collapse. Based on our research, they use social media and their website to communicate their events.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://charliehebdo.fr/" target="_blank">Charlie Hebdo</a>:</strong> It is a French-based political satirical magazine. Their content is targeting people who are politically left-wing, skeptic, secular, atheist, and anti-racist. We didn't findings them actively organized events or campaigns, although they have both websites and the mobile app, they use them solely in promoting their magazines.
          </li>
        </ul>
      </p>
      <p>To make it easier for us to compare our competitors, we created the table of comparison of our findings based on their focus and the platforms they use.</p>
    </div>
    <div className="par par--medium-width spacing">
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
        When we started planning our survey, we wanted to know how people remind themselves about their schedule and what tools do they use to help them remember about any event they are committed to joining.
      </p>
      <p>
        We decided to create a survey using Google form, and we were targeting men and women from the age range between 15 to 50 years old and sent them to social-related community channels on slack and discord. We received 66 responses from our survey and here are some of the highlights from our survey findings.
      </p>
      <p>
        <ImgSection imgs={[{url: survey1}]} />
      </p>
      <p>
        <ImgSection imgs={[{url: survey2}]} />
      </p>
      <p>
        Based on our survey results, the majority of our survey samples think push notifications are useful to remind them about upcoming schedules or events, especially when they are not actively using the phone. Meanwhile, a few participants mentioned that push notifications could be annoying if they don't show the relevant information they need.
      </p>
      <p>
        <h3>Contextual Inquiry</h3>
        We wanted to know from the existing Adbusters' subscribers about their previous experience participating in Adbusters' events. To be able to do that, we asked Adbusters' to give us the contact list of their existing subscribers to do the interview. Out of fifteen contacts were given, we got six responses back.
      </p>
      <p>
        Overall we got positive responses about the idea of having a dedicated app for Adbusters' events. They felt it is hard to keep track of Adbusters' events just relying on email. Here are some of the highlighted quotes we got from them.
      </p>
      <p>
        <h4 className="quote text--center">
          "I typically find push notification to be spammy and turn them off, with rare exceptions. I prefer if you do send push notifications, make them meaningful and relevant."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "It will be great to have campaign-related content in one app because social media can be a little too much."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "I tent to sync more from Facebook events. So it'll be good to have both options if there is a specific app. Push notifications feel more effective."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "Honestly, promotional email has gotten a bit out of hand. I prefer to have push notifications."
        </h4>
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h3>Affinity Diagram</h3>
        After we gathered all the findings from our research, it was time to create an affinity diagram. Every team member wrote down the research findings using sticky notes and put them on the wall. Then we grouped them accordingly based on relevant categories. Below is the digitized version of our affinity diagram.
      </p>
    </div>
    <div className=" par par--wide-width spacing">
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
                <li>Using email bothers him because he has to search through his pile of emails to find the event information.</li>
                <li>He doesn't always have the time to check Adbusters' website.</li>
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
      After we got more understanding of our typical user pain-points and goals based on Shane's persona, we also created a storyboard that shows a typical scenario of how Shane is going to use the app.
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection imgs={[{url: storyBoard}]} caption="Shane's story board" />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h2>Planning</h2>
        Once we understood the type of users and the scenario of how our users going use the app, we moved to the planning phase. In this phase we created a features priority matrix, user-flows and content structure.
      </p>
      <p>
        <h3>Features List &amp; MVP</h3>
        After we lay down the users' pain points and needs, we started to create a features list for this project. We decided to prioritize our features based on three different categories: must-have, nice to have, and not needed. Below are the features prioritization based on those categories.
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
        During the user-flows creation process, we started creating hand-drawn user-flows. After we tested the hand-drawn user-flows and felt satisfied, we created the digitized version of it.
      </p>
    </div>

    <div className="par par--normal-width spacing">
      <h4 style={{marginBottom: '10px'}}>Before</h4>
    </div>
    <div className="par par--wide-width">
      <ImgSection
        imgs={[
          {url: userflowLogin, backgroundImg: true, style: {height: '380px'}},
          {url: userflowResetPwd, backgroundImg: true, style: {height: '380px'}},
        ]}
        caption="Hand-drawn user-flows for login, signup, and forgot password"
      />
    </div>
    <div className="par par--normal-width spacing">
      <h4 style={{marginBottom: '10px'}}>After</h4>
    </div>
    <div className="par par--wide-width">
      <ImgSection
        imgs={[{url: digitizedUserflowLogin}]}
        caption="Digitized userflows for login, signup, and forgot password"
      />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        Based on Shane's persona and storyboard, we created the user-flow of how he is going to use the app.  From the survey result we got, the majority of people favoured push notification is the most efficient way for them to stay updated, so we incorporated the push notification feature to remind the user when the events are coming up or about to begin.
      </p>
      <p>
        From the user-flow image below, it shows when the notification message (right bottom corner black box) is received, the user can click the notification tab. After it's clicked, the app will be opened and redirected to the event detail page.
      </p>
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection imgs={[{url: digitizedUserflowHome}]} />
    </div>
    <div className="par par--normal-width">
      <h2>Design</h2>
      We started our design process by creating low-fi wireframes. Instead of started with paper and pencil, we did whiteboarding wireframes. The purpose of this exercise is to encourage conversations within the team and to bring solutions on the fly. I found using a whiteboard for this project is very handy, especially for making revisions and making sure each team member is on the same page.
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: lowFiWhiteboard}]} caption="Whiteboarding wireframes"/>
    </div>
    <div className="par par--normal-width">
      <p>
        After we run through each wireframe on the whiteboard, and settled with the solution, we moved on to creating low-fi wireframes using paper and pencil for user testing purposes.
      </p>
    </div>
    <div className="par par--normal-width spacing">
      <ImgSection imgs={[{url: lowFiPaper}]} caption="Paper prototype wireframes"/>
    </div>
    <div className="par par--normal-width spacing">
      <p>
        To made sure our workflows make sense to other people, we tested our prototypes and took some node any findings during the testing.
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
  </>
);

export default caseStudyContent;