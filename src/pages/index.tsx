import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

/*
!--signup form--!
aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZEpJVnM2Q0I2dmpoVzM2bzBpNkNlc0hnbHdtdkpjaTFiekU1QzBJekM2bmtIZXV3L3ZpZXdmb3Jt
!--signup form--!
*/
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Sidewinders</h1>
        <p className="hero__subtitle">KY20021 AFJROTC</p>
        <div>
          <img src="img/afjrotc-crest.svg" alt="AFJROTC Crest" width="200px" height="200px" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={'Home'} description="KY20021 - AFJROTC Website">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
