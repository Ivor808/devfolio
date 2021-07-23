import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionResume = ({ resume }) => {
  if (!resume.length) return null;

  return (
    <Section title="Resume">
      {resume.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionResume;
