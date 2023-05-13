import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Infrastructure as code',
    Svg: require('@site/static/img/iaac.jpg').default,
    description: (
      <>
        Infrastructure as code for easy and efficient infrastructure management.
      </>
    ),
  },
  {
    title: 'Real-time stream processing',
    Svg: require('@site/static/img/real-time.png').default,
    description: (
      <>
        Strong capabilities for real-time stream processing. With Chain of responsibility design for improved reliability and reduced downtime.
      </>
    ),
  },
  {
    title: 'Multi-cloud support',
    Svg: require('@site/static/img/multicloud.png').default,
    description: (
      <>
        Multi-cloud and Flexible deployment options, for increased choice and flexibility in infrastructure deployment.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
