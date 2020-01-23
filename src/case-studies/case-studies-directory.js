import utgLogo from './utg/img/utg-logo.png';
import utgBackground from './utg/img/utg-class.jpg';
import utgCaseStudyBanner from './utg/img/utg-case-study-banner.jpg';
import utgCaseStudyContent from './utg/case-study-content';

import adbustersLogo from './adbusters/img/adbusters-logo.png';
import adbustersBackground from './adbusters/img/social-protest.jpg';
import adbustersCaseStudyBanner from './adbusters/img/adbusters-case-study-banner.jpg';
import adbustersCaseStudyContent from './adbusters/case-study-content';

const caseStudies = [
  {
    clientName: 'UTG Academy',
    projectDate: 'December 18, 2019',
    projectTitle: 'UTG Academy',
    postTitle: 'Under The Gui (UTG) – Website Redesign Project',
    blurb: 'Website Redesign Project',
    logoLink: utgLogo,
    logoWidth: '100px',
    heroBackground: utgBackground,
    opacityColor: '#000000',
    opacityLevel: '0.4',
    url: './case-studies/utg',
    content: utgCaseStudyContent,
    caseStudyBanner: utgCaseStudyBanner
  },
  {
    clientName: 'Adbusters',
    projectDate: 'December 18, 2019',
    projectTitle: 'World Revolution',
    postTitle: 'Adbusters – World Revolution app',
    blurb: 'an app for organizing social activity campaigns',
    logoLink: adbustersLogo,
    heroBackground: adbustersBackground,
    opacityColor: '#000000',
    opacityLevel: '0.4',
    url: './case-studies/adbusters',
    content: adbustersCaseStudyContent,
    caseStudyBanner: adbustersCaseStudyBanner
  }
];

export default caseStudies;