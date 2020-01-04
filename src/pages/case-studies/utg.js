import React from "react";
import InteriorPostLayout from "../../components/interior/interior-post-layout";
import caseStudiesDirectory from "../../case-studies/case-studies-directory";

const caseStudyContent = caseStudiesDirectory.find((caseStudy) => {
  return caseStudy.clientName === 'UTG Academy';
});

export default () => (
  <InteriorPostLayout caseStudyContent={caseStudyContent}>
    {true && caseStudyContent.content}
  </InteriorPostLayout>
);