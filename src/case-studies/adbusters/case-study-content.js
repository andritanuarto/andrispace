import React from 'react';
import ImgSection from '../../components/interior/img-section';
import magzCovers from './magazine-covers.jpeg';
import magzLayout from './adbusters-layout.jpeg';
import survey1 from './survey-1.png';
import survey2 from './survey-2.png';

const caseStudyContent = (
  <>
    <div className="par par--normal-width">
      <h2>Client Background</h2>
      <p>
        When I studied at <a rel="noopener noreferrer" href="https://redacademy.com/vancouver/" target="_blank">RED Academy Vancouver</a>, my team was given a great opportunity to work with <a rel="noopener noreferrer" href="https://www.adbusters.org/" target="_blank">Adbusters</a> for our client project.
      </p>
      <p>
        Our client is a Canadian-based publishing company. Their magazine has a strong presence in the North American market. Adbusters describes itself as "a global network of artists, activists, writers, pranksters, students, educators and entrepreneurs who want to advance the new social activist movement of the information age."
      </p>
      <p>
        Topics related to anti-capitalism, subvertisements, pro-environment and political movements are some of their typical content in their magazine.
      </p>
      <p>
      What's unique about Adbusters magazine is the unusual content style compare to other magazines. Their approach of anti-big commercial means consistency of their content is almost non-existent unlike what most commercial companies do. Their content style tent to be free-flowing and spontaneous.
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzCovers}]}
          caption="Adbusters magazine covers. Notice there is no branding consistency throughout their editions.
          "
        />
      </p>
      <p>
        <ImgSection
          imgs={[{url: magzLayout}]}
          caption="Some of freeflow and spontaneous layout examples of Adbusters magazine."
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
        During the kick-off project meeting with Adbusters, they wanted to create native mobile app in iOS platform and name this app as "The World Revolution"; the sole purpose of this app is to be able to subscribe and remind the subscribers about the campaigns they are interested to join. Initially, because Adbusters does not believe in collecting any data from users as most corporations do, they wanted to have an app without users having to log in, but on the other hand, without login informatiom, there is no way to have a personalized experience for the users using the app. After expressing some of our concerns and reasons why do we need to collect that information, Adbusters agreed to collect just username, email and password from the user.
      </p>
      <p>
        Our initial thought, this project is going be interesting, especially the UI direction would have a lot of room to do experimentation, but we also aware of the necessity to find a good balance between Adbusters' original style without sacrificing the usability of the app.
      </p>
      <p>
        <h3>My Role</h3>
        For this project I involved in every phase of the UX processes such as research, planning, and design, and setting up the standard library following the atomic design principle. Because of my varied background as a software UI designer and developer, I also helped some of the UI work for this project and advising the feasibility of translating design into real-life development.
      </p>
    </div>
    <div className="par par--normal-width">
      <h2>Research</h2>
      <p>
        We started this project by researching to get knowledge about the domain of this project and also to help us how we position this app among other competitors.
      </p>
      <p>
        <h3>Domain Research</h3>
        When we did the domain research we wanted to know other competitors which focus on similar topics like Adbusters and we found three websites that standout the most:
        <ul>
          <li>
            <strong><a rel="noopener noreferrer" href="https://www.thezeitgeistmovement.com/" target="_blank">TZM (The Zeitgeist Movement)</a></strong> is an activist movement. Their topics of interest are mainly about common reforms and general community support to improve conditions such as environmental crisis, poverty, conflict, corruption, economic inequality, etc. Currently, they don't have a mobile app and mainly they communicate their movements by organizing some events and also through their website and social media platforms.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://rebellion.earth/" target="_blank">Extinction Rebellion</a></strong> is an international movement that uses non-violent civil disobedience in an attempt to halt mass extinction and minimize the risk of social collapse. Currently, they don't have a mobile app and rely on their websites and social media to communicate with subscribers and volunteers about the events they organize.
          </li>
          <li>
            <strong><a rel="noopener noreferrer" href="https://charliehebdo.fr/" target="_blank">Charlie Hebdo</a></strong> is a French-based political satirical magazine. Their content is targeting people who are politically left-wing, skeptic, secular, atheist and anti-racist. Based on our research we didn't see them actively organized events or campaigns, although they have both websites and mobile app their focus is promoting their magazines.
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
    </div>
  </>
);

export default caseStudyContent;