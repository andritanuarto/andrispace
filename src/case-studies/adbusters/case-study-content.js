import React from 'react';
import ImgSection from '../../components/interior/img-section';
import magzCovers from './magazine-covers.png';
import magzLayout from './adbusters-layout.png';
import survey1 from './survey-1.png';
import survey2 from './survey-2.png';
import affinity from './affinity.png';
import persona from './persona.jpg';
import storyBoard from './story-board.png';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <p className="first-paragraph">
        When I studied at <a rel="noopener noreferrer" href="https://redacademy.com/vancouver/" target="_blank">RED Academy Vancouver</a>, my team was given a great opportunity to work with <a rel="noopener noreferrer" href="https://www.adbusters.org/" target="_blank">Adbusters</a> for our client project. Adbusters is a publishing company based in Canada and selling its magazine in North America. They describe themself as a global network of artists, activists, writers, pranksters, students, educators and entrepreneurs who want to advance the new social activist movement of the information age. Topics related to anti-capitalism, subvertisements, pro-environment and political movements are some of their typical content in their magazine.
      </p>
      <p>
        They have an unusual content style compare to other magazines in general. Their magazine layout tent to be free-flowing and spontaneous. Unlike most other magazines that use a grid system for their content layout.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzLayout}]}
          caption="Examples of freeflow layout style from Adbusters' magazines"
        />
      </p>
      <p>
        Moreover, their belief in anti-commercial means, the consistency of their branding is non-existent. A very prominent example we noticed their magazine covers don't have the same logo for each edition.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzCovers}]}
          caption="Adbusters magazine covers and there is no logo consistency throughout their editions
          "
        />
      </p>

      <p>
        Besides publishing magazines, Adbusters also actively organizes and involves different social campaigns like <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Culture_jamming" target="_blank">Culture Jamming</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/8th-anniversary-of-occupywallstreet/" target="_blank">Occupy Wall Street</a>, <a rel="noopener noreferrer" href="http://abillionpeople.org/buy-nothing-day-2019/">Buy Nothing Day</a>, etc.
      </p>
      <p>
        <h2>Project Brief</h2>
        With the constant growth of digital technology and mobile users, Adbusters need a mobile platform where they can communicate and voicing their campaigns to their subscribers in a more direct and timely way.
      </p>
      <p>
        During the kick-off project meeting with Adbusters, they wanted to create native mobile app in iOS platform and name this app as "The World Revolution"; the sole purpose of this app is to be able to subscribe and remind the subscribers about the campaigns they are interested to join. Initially, because Adbusters does not believe in collecting any data from users as most corporations do, they wanted to have an app without users having to log in, but on the other hand, without login information, there is no way to have a personalized experience for the users using the app. After expressing some of our concerns and reasons why do we need to collect that information, Adbusters agreed to collect just username, email and password from the users.
      </p>
      <p>
        Our initial thought of this project is going be interesting, especially the UI direction would have a lot of room to do experimentation, but we also aware of the necessity to find a good balance between Adbusters' freeflow content style without sacrificing the usability of the app.
      </p>
      <p>
        <h3>My Role</h3>
        For this project I involved in every phase of the UX processes such as research, planning, and design, and setting up the standard library following the atomic design principle. Because of my varied background as a software UI designer and developer, I also helped some of the UI work for this project and advising the feasibility of translating design into real-life development.
      </p>
    </div>
    <div className="par par--normal-width">
      <p>
        <h2>Research</h2>
        To get knowledge about the domain of this project and to help us how we position this app among other competitors we conducted a series of research to bridge our knowledge gap.
      </p>
      <p>
        <h3>Domain Research</h3>
        When we did the domain research we wanted to know other competitors which focus on similar topics like Adbusters and we found three websites that standout the most:
        <ul>
          <li>
            <strong><a rel="noopener noreferrer" href="https://www.thezeitgeistmovement.com/" target="_blank">TZM (The Zeitgeist Movement)</a>:</strong> It is an activist movement. Their topics of interest are mainly about common reforms and general community support to improve conditions such as environmental crisis, poverty, conflict, corruption, economic inequality, etc. Currently, they don't have a mobile app and mainly they communicate their movements by organizing some events and also through their website and social media platforms.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://rebellion.earth/" target="_blank">Extinction Rebellion</a>:</strong> It is an international movement that uses non-violent civil disobedience in an attempt to halt mass extinction and minimize the risk of social collapse. Currently, they don't have a mobile app and rely on their websites and social media to communicate with subscribers and volunteers about the events they organize.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://charliehebdo.fr/" target="_blank">Charlie Hebdo</a>:</strong> It is a French-based political satirical magazine. Their content is targeting people who are politically left-wing, skeptic, secular, atheist and anti-racist. Based on our research we didn't see them actively organized events or campaigns, although they have both websites and mobile app they use them solely in promoting their magazines.
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
        We decided to create a survey using google form and we were targeting men and women from the age range between 15 to 50 years old and sent them to social-related community channels on slack and discord. We received 66 responses from our survey and here are some of the highlights from our survey findings.
      </p>
      <p>
        <ImgSection imgs={[{url: survey1}]} />
      </p>
      <p>
        <ImgSection imgs={[{url: survey2}]} />
      </p>
      <p>
        Based on our survey, most people indicated that push notifications were very effective when used to check on the related app and in reminding them of upcoming schedules and events, especially during inactive periods. Meanwhile, a few participants mentioned that they found push notifications irrelevant when it doesn't show the information that they need.
      </p>
      <p>
        <h3>Contextual Inquiry</h3>
        Part of the research we wanted to know from Adbusters' existing subscribers regarding their past experiences participating in their campaigns. We were given 15 contact lists and was able to get 6 responses from them.
      </p>
      <p>
        In general, we got positive responses about the idea of having a dedicated app for Adbusters' events. They felt it is really hard to keep track of their events without a way to give direct reminders for future events and currently they relly on newsletters they subscribed from Adbusters' website. Here are some of the highlighted quotes we got when we interviewed them.
      </p>
      <p>
        <h4 className="quote text--center">
          "I typically find push notification to be spammy and turn them off, with rare exceptions. I prefer if you do send push notification make them meaningful and relevant."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "It will be great to have campaign related content in one app because social media can be little too much."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "I tent to sync more from facebook events. So it'll be good to have both options if there is a specific app. Push notifications feel more effective."
        </h4>
      </p>
      <p>
        <h4 className="quote text--center">
          "Honestly promotional email have gotten a bit out of hand. I prefer push notifications."
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
        After we analyzed our affinity diagram we created a user persona to represent the needs of typical users for this app. By creating the persona it helped us to gain a similar perspective about their motivations, pain points, and goals.
      </p>
    </div>

    <div className="par user-persona user-persona--light spacing">
      <div className="user-persona__left-section">
        <div
          className="user-persona__photo"
          style={{backgroundImage: `url(${persona})`}}
        />
      </div>
      <div className="user-persona__right-section">
        <h3>Shane Parks</h3>
        <strong className="user-persona__sub-info">28, Single, Animation Designer</strong>
        <strong className="user-persona__quoet">
          "I want to be the change I wish for the world."
        </strong>
        <p>
          Shane is an animation designer living in Seattle, WA. He has been an ardent follower of Adbusters over the past few years and has actively participated in some of their campaigns. His frustration that he is unable to actively take part in protests about the issue he feels so passionate about.
        </p>
        <p>
          Due to his demanding work schedule, he is unable to constantly stay updated on relevant campaigns in his inbox that get lost in the piles of promotional emails. Especially a lot of these events take place in his hometown of Vancouver, BC. He needs a way to be able to  keep track easily of all the events he is interested in so he can plan his trips accordingly in advance.
        </p>
        <div>
          <div className="user-persona__right-section__bottom">
            <div>
              <strong>Pain Points</strong>
              <ul>
                <li>Using email irritates him because he has to search through too many promotional emails to find what he is looking for</li>
                <li>He doesn't always have the time to go to the Adbusters website</li>
              </ul>
            </div>
            <div>
              <strong>Goals</strong>
              <ul>
                <li>To unlearn ideas he has inherited from a culture that has bought into corporate greed and environmental destruction.</li>
                <li>To connect with people who share his life philosophy and social consciousness</li>
                <li>Expose himself to ideas that challenge his thinking on political, environmental, economic and other issues</li>
                <li>To keep on top of the events information involving the activist community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="par par--normal-width spacing">
      <h3>Storyboard</h3>
      After we got more understanding of our typical user pain points and goals based on Shane's persona, we also created a storyboard that shows a typical scenario of how Shane is going to use the app.
    </div>
    <div className="par par--wide-width spacing">
      <ImgSection imgs={[{url: storyBoard}]} caption="Shane's story board" />
    </div>
    <div className="par par--normal-width spacing">
      <p>
        <h2>Planning</h2>
        Once we understood the type of users and the scenario of how our users going use the app, we moved to planning phase. In this phase we created a features priority matrix, user-flows and content structure.
      </p>
      <p>
        <h3>Priority Matrix &amp; MVP</h3>
        In the beginning, we had a number of ideas about features that can be included in the project. Because of the time constraint and the budget from the client we had to prioritize them. To prioritize the app features we divided into three different categories:
      </p>
      <ul>
        <li><strong>Must-haves:</strong> event list view, event page, push notification, search bar, continue as a guest, event subscription, notification Tab and user settings.</li>
        <li><strong>Nice to haves:</strong> sign-in & sign-up, campaign videos, profile account, add to the calendar, comment section for the event page, and event filters.</li>
        <li><strong>Not Needed:</strong> upload image for the campaign.</li>
      </ul>
      <p>
        After some considerations, here is the list of features that we included as our minimum viable product <strong>(MVP)</strong>:
      </p>
      <ul>
        <li>Push notification</li>
        <li>Search bar</li>
        <li>Sign in &amp; sign up</li>
        <li>Continue as a guest</li>
        <li>User settings</li>
        <li>Notification tab</li>
        <li>Event page</li>
        <li>Event subscription</li>
        <li>Add to calendar</li>
      </ul>
    </div>
  </>
);

export default caseStudyContent;