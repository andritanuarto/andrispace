import adbustersLogo from './adbusters/adbusters-logo.png';
import adbustersBackground from './adbusters/social-protest.jpg';
import utgLogo from './utg/utg-logo.png';
import utgBackground from './utg/utg-class.jpg';

const caseStudies = [
  {
    clientName: 'Under The Gui (UTG)',
    projectTitle: 'Under The Gui Academy',
    blurb: 'Website redesign',
    logoLink: utgLogo,
    logoWidth: '100px',
    heroBackground: utgBackground,
    opacityColor: '#000000',
    opacityLevel: '0.4',
    url: './case-studies/utg',
    projectDate: 'December 18, 2019',
  },
  {
    clientName: 'Adbusters',
    projectTitle: 'World Revolution',
    blurb: 'an app for organizing social activity campaigns',
    logoLink: adbustersLogo,
    heroBackground: adbustersBackground,
    opacityColor: '#000000',
    opacityLevel: '0.4',
    url: './case-studies/adbusters',
    projectDate: 'December 18, 2019',
  }
];

export default caseStudies;