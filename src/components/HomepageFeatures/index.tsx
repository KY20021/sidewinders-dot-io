import React, { Fragment } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Drill & Ceremonies',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Fragment>
        Ready to march to the rhythm of excellence? Discover our Drill & Ceremonies Team and become
        a part of our precision-driven journey!
      </Fragment>
    ),
    href: '/docs/drill-ceremonies',
  },
  {
    title: 'Raiders',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Fragment>Learn to push your limits and become a part of our Raider Team!</Fragment>
    ),
    href: '/docs/raiders',
  },
  {
    title: 'Cyber Operations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Fragment>
        Interested in the world of technology? Join our Cyber Operations Team and learn how to
        secure your future!
      </Fragment>
    ),
    href: '/docs/cyber-operations',
  },
];

function Feature({ title, Svg, description, href }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
          //<Svg className={styles.featureSvg} role="img" />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href}>Learn More</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
