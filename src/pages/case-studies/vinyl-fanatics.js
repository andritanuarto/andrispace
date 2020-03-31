import React from "react";
import Moment from 'moment';
import ImgSection from '../../components/interior/img-section';
import BarChart from '../../components/interior/bar-chart';
import WillDoNext from '../../components/interior/will-do-next';
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudyBanner from '../../img/vinyl-fanatics/case-study-banner.jpeg';
import taskFlow from '../../img/vinyl-fanatics/payment-task-flow.png';

export const frontmatter = {
  clientName: 'Vinyl Fanatics',
  projectDate: '2019-05-15',
  status: 'draft',
  projectTitle: 'Vinyl Fanatics – An online store for vinyl collectors',
  postTitle: 'An online store for vinyl collectors',
  blurb: 'Buy records online to grow your music collection',
  logoWidth: 'auto',
  opacityColor: '#000000',
  opacityLevel: '0.7',
  url: './case-studies/vinyl-fanatics',
  heroImg: '../../img/vinyl-fanatics/hero.jpg',
  summary: 'Way before mp3, cd even cassette, the vinyl records enjoyed the popularity among music lovers'
};

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
          Before mp3, CD or even cassette, the vinyl records industry enjoyed its renaissance among music lovers. It was the primary medium for music reproduction in the 20th century. Although the industry faced stiff competition when the compact cassettes were mass-produced in the 1910s, records were able to maintain the largest market share at that time. Records sales started a major decline in the early '90s when CD became the most preferred medium for people to collect music.
        </p>
        <p>
          After its declining popularity in the 90s to early 2000s, vinyl records experienced a resurgence in 2008. Its sales reached 1.9 million units, and the increasing trend continued until it eventually outsold CDs in 2019 for the first time in 40 years. Today, vinyl records has found a niche market that attracts both the young and old generations as an alternative way to enjoy music in the midst of the popularity of online music platforms.
        </p>
        <p>
          <h2>Project Brief</h2>
          Started as a small store, Vinyl Fanatics wanted to sell its products beyond the local market through the e-commerce website. The new website aims to attract more buyers and becoming more relevant for the increasing number of younger audiences to enjoy music through vinyl records. The website will be developed using Shopify and targeting for both mobile and desktop users.
        </p>
        <p>
          <h3>The Opportunity &amp; The Challenge</h3>
          People can go to the physical stores and do crate surfing to buy records, but not everyone has the time and proximity from where they live to go to those stores, and that is where the online store can offer to those people. Our challenge is to create a pleasant experience for users to browse and purchase records online and also identifying market behaviour and factors that affect their buying decisions, especially for younger people.
        </p>
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Research</h2>
          As a starting point, we did user-research to gain a better understanding of vinyl records and the music markets in general. We used a variety of research methods such as domain research, user interviews, and surveys to get different insights about users' behaviour, needs, pain-points, opportunities and the related industry.
        </p>
        <p>
          <h3>Domain Research</h3>
          According to RIAA (Recording Industry Association of America), people who are buying records are mostly age between 35 to 54. It is an estimated 9.7 million albums sold in 2018, and approximately 67% of the sales took place in physical stores, and the rest are mostly from online stores like Discogs, eBay, and other small sites.
        </p>
        <p>
          The two biggest online market Discogs and eBay listed around 5.7 million and 2.3 million vinyl items respectively on their sites. From those numbers, Discogs were the number one destination for sellers and collectors to buy records online. What contributed to their growth, besides having a specific niche for records buyers and sellers, Discogs requires sellers to put more comprehensive information for each item they list on their site. It takes more effort for sellers to list items on Discogs compare to other websites, but buyers like to have detailed information to help their buying decisions.
        </p>
        <p>
          According to Rolling Stone magazine, in Canada and the US alone, vinyl records earned $224.1 million in revenue in the first half of 2019, and the sales outnumber the CD sales. BestBuy stores discontinued selling CDs in 2019, but as of January 2020, they still sell vinyl. Target and Wallmart are still selling CDs, but they are slowly decreasing the space and add more space for vinyl records, players and accessories.
        </p>
        <p>
          <h3>User Survey</h3>
          To have a deeper understanding of our target users' buying behaviour and how they perceived music in general, we conducted a survey. For this survey, we were reaching audiences both who don't and have vinyl records but love music. From this survey, we wanted to know what are the common reasons people decided to buy vinyl or not. Some of the key questions we wanted to find are:
          <ul>
            <li>Discover the reasons why people who buy vinyl and who doesn't.</li>
            <li>Define the motivation behind their buying decision.</li>
            <li>To find out where are the preferred place to buy vinyl and why.</li>
            <li>Distinguish areas of improvement for existing online stores.</li>
          </ul>
        </p>
        <p>
          From the 29 responses we got, here are the key highlights of our findings.
        </p>
        <p>
          <BarChart
            title="Survey participants by age group"
            yTextWidth="200px"
            data={[
              {label: '19 - 24', color: '#868686', percent: 82.8},
              {label: '25 - 34', color: '#bdbdbd', percent: 13.8},
              {label: '45+', color: '#717171', percent: 3.4}
            ]}
          />
        </p>
        <p>
          <BarChart
            title="Frequency of people buying online"
            yTextWidth="200px"
            data={[
              {label: 'Once a week', color: '#868686', percent: 15.4, number: 4},
              {label: 'Once a month', color: '#bdbdbd', percent: 50, number: 13},
              {label: 'Once every 6 months', color: '#868686', percent: 26.9, number: 7},
              {label: 'Once a year', color: '#868686', percent: 1, number: 1},
              {label: 'Once every 2 months', color: '#868686', percent: 1, number: 1},
              {label: 'Special price or holiday', color: '#868686', percent: 1, number: 1},
            ]}
          />
        </p>
        <p>
          <BarChart
            title="Reasons why people are buying online"
            yTextWidth="200px"
            data={[
              {label: 'Convenience', color: '#868686', percent: 73.1, number: 19},
              {label: 'Comparison shopping', color: '#bdbdbd', percent: 57.7, number: 15},
              {label: 'Wider selection', color: '#868686', percent: 42.3, number: 11},
              {label: 'Better prices', color: '#868686', percent: 65.4, number: 17},
              {label: 'Reviews from other shoppers', color: '#868686', percent: 50, number: 13},
              {label: 'Save time', color: '#868686', percent: 57.7, number: 15},
              {label: 'Less pressure', color: '#868686', percent: 3.8, number: 1},
            ]}
          />
        </p>
        <p>
          <BarChart
            title="Pain points for buying online"
            yTextWidth="200px"
            data={[
              {label: 'Delay Delivery', color: '#868686', percent: 84.6, number: 22},
              {label: 'Inadequate product description', color: '#868686', percent: 65.4, number: 17},
              {label: 'Ugly website', color: '#868686', percent: 30.8, number: 8},
              {label: 'System errors', color: '#bdbdbd', percent: 15.4, number: 4},
              {label: 'Slow loading', color: '#868686', percent: 15.4, number: 4},
              {label: 'Lack of some payment method', color: '#868686', percent: 11.5, number: 3},
              {label: 'Problems with checkout', color: '#868686', percent: 11.5, number: 3},
              {label: 'Others', color: '#868686', percent: 19, number: 5},
            ]}
          />
        </p>
        <p>
          <BarChart
            title="Favourite websites and apps to listen to music"
            yTextWidth="200px"
            data={[
              {label: 'Spotify', color: '#868686', percent: 80.8, number: 21},
              {label: 'YouTube', color: '#868686', percent: 61.5, number: 16},
              {label: 'SoundCloud', color: '#868686', percent: 7.7, number: 2},
              {label: 'Apple Music', color: '#868686', percent: 7.7, number: 2},
              {label: 'Deezer', color: '#868686', percent: 3.8, number: 1},
              {label: 'Google Music', color: '#868686', percent: 3.8, number: 1},
            ]}
          />
        </p>
        <p>
          <h3>Contextual Inquiry &amp; Interviews</h3>
          For contextual Inquiry, We visited four local vinyl stores in Vancouver and conducted user interviews with customers, staff, and store owners. From our findings, two store owners run online stores in conjunction with their physical stores, but they also mentioned their main revenues are mainly from the physical stores. The reason because they encountered stiff competition against bigger online retail stores like Amazon, eBay, Discogs, etc. And the other owner who previously had an online store had to close it down because the revenue didn't cover the operational cost.
        </p>
        <p>
          From the customers' perspective, many of them didn't have anything in mind of what to buy before coming to the store, and they like to crate surfing in-store to find hidden gems before they decided to make purchases.
        </p>
        <p><WillDoNext text="Picture our locations" /></p>
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Analysis</h2>
          After we gathered both qualitative and quantitative data, the next step is to analyze our research data and generate the overall conclusion based on our research findings.
        </p>
        <p>
          <h3>Affinity Diagram</h3>
          We arranged the data we collected from our research and grouped them into various categories to create an affinity diagram. This exercise will help us to develop other analysis deliverables such as user journey, user scenario, and persona.
        </p>
        <p><WillDoNext text="Affinity diagram image" /></p>
        <p>
          <h3>User Journey &amp; User Scenario</h3>
          Furthermore, to elaborate more on how users might interact with the website from start to finish, we created both user journey and user scenario.
        </p>
        <p><WillDoNext text="User Journey Image" /></p>
        <p><WillDoNext text="User Scenario Image" /></p>
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Information Architecture &amp; Wire-Flow</h2>
          After we had a better knowledge of the target user's needs and pain points, we started to structure and prioritize the content by creating Information Architecture (IA). Producing a reliable IA will help us to streamline our design process during the creation of the wireframes. Essential pages like homepage, product listing, contact, product search, cart, and payment process are the top priority. We also decided not to implement user account functionality considering the client's limited resource to maintain it and our team also felt that feature is not essential at the beginning, but will be a future consideration once the website gets more traffic.
        </p>
        <p><WillDoNext text="IA Image" /></p>
        <p>
          Because we decided to include a user account, we created a single checkout by asking the user to put payment information every time they make a purchase. To accommodate frequent buyers, we advised our client to have a cookie functionality to auto-fill the payment information such as name, email, address so the user can make a quick purchase after the first time.
        </p>
      </div>
      <div className="par par--wide-width spacing">
        <ImgSection
          imgs={[{url: taskFlow}]}
            caption="Payment process wire-flow"
          />
      </div>
      <div className="par par--normal-width">
        <p>
          <h2>Wireframes</h2>
          After we completed IA and wire-flow, we began mid-fi and hi-fi wireframes, respectively. Each fidelity we tested internally, but for hi-fi, we did both internal and external tests to a minimized biassed view on our design decision.
        </p>
        <p><WillDoNext text="Mid-fi Image" /></p>
        <p><WillDoNext text="Hi-fi Image" /></p>
        <p>Our design approach is to create the right balance of white space to make the content easier to read. During the prototype testing, we also noticed it's easier for users to break down the payment process into different steps rather than completing a full form into one page.</p>
      </div>
    </>
  </InteriorPostLayout>
);