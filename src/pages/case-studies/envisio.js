import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudiesDirectory from "../../case-studies/case-studies-directory";

const caseStudyContent = caseStudiesDirectory.find((caseStudy) => {
  return caseStudy.clientName === 'Envisio';
});

export const frontmatter = {
  clientName: 'Envisio',
  projectDate: 'September 02, 2019',
  projectTitle: 'Strategic Manager',
  postTitle: 'Envisio - Strategic Manager',
  blurb: 'The future of planning software',
  opacityColor: '#000000',
  opacityLevel: '0.5',
  url: './case-studies/envisio',
}

export default () => (
  <InteriorPostLayout caseStudyContent={caseStudyContent}>
    {true && caseStudyContent.content}
  </InteriorPostLayout>
);