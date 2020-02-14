import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudiesDirectory from "../../case-studies/case-studies-directory";

const caseStudyContent = caseStudiesDirectory.find((caseStudy) => {
  return caseStudy.clientName === 'UTG Academy';
});

export const frontmatter = {
  clientName: 'UTG Academy',
  projectDate: 'December 18, 2019',
  projectTitle: 'UTG Academy',
  postTitle: 'Under The Gui (UTG) – Website Redesign',
  blurb: 'Website Redesign Project',
  logoWidth: '100px',
  opacityColor: '#000000',
  opacityLevel: '0.4',
  url: './case-studies/utg',
}

export default () => (
  <InteriorPostLayout caseStudyContent={caseStudyContent}>
    {true && caseStudyContent.content}
  </InteriorPostLayout>
);