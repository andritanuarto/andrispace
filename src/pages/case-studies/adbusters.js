import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudiesDirectory from "../../case-studies/case-studies-directory";

const caseStudyContent = caseStudiesDirectory.find((caseStudy) => {
  return caseStudy.clientName === 'Adbusters';
});

export const frontmatter = {
  clientName: 'Adbusters',
  projectDate: 'November 27, 2019',
  projectTitle: 'World Revolution',
  postTitle: 'Adbusters – World Revolution App',
  blurb: 'an app for organizing social activity campaigns',
  opacityColor: '#000000',
  opacityLevel: '0.5',
  url: './case-studies/adbusters',
}

export default () => (
  <InteriorPostLayout caseStudyContent={caseStudyContent}>
    {true && caseStudyContent.content}
  </InteriorPostLayout>
);