import { Heading, P } from '../../components/typography';

import { InternalLink } from '../../components/typography/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Heading level={1}>Home.</Heading>
      <P>This is the home page for now.</P>
      <P>Go to the <InternalLink href='/test'>test page</InternalLink>.</P>
    </div>
  );
};

export default HomePage;
