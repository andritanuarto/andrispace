import utgLogo from './utg/utg-logo.png';
import utgBackground from './utg/utg-class.jpg';
import utgCaseStudyBanner from './utg/utg-case-study-banner.jpg';
import utgCaseStudyContent from './utg/case-study-content';

import adbustersLogo from './adbusters/adbusters-logo.png';
import adbustersBackground from './adbusters/social-protest.jpg';

const caseStudies = [
  {
    clientName: 'UTG Academy',
    projectDate: 'December 18, 2019',
    projectTitle: 'UTG Academy',
    postTitle: 'Under The Gui (UTG) – Website redesign for coding school for kids',
    blurb: 'Website redesign',
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
    projectTitle: 'World Revolution',
    postTitle: 'Under The Gui (UTG) – Website redesign for coding school for kids',
    blurb: 'an app for organizing social activity campaigns',
    logoLink: adbustersLogo,
    heroBackground: adbustersBackground,
    opacityColor: '#000000',
    opacityLevel: '0.4',
    url: './case-studies/adbusters',
    projectDate: 'December 18, 2019',
    content: null,
    caseStudyBanner: ''
  }
];

export default caseStudies;