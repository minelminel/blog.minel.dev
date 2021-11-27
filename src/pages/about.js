import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="about" />
      <div>
        <h1>About</h1>
        <p>ipsum lorem</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
