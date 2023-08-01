import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Microsoft Cloud',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tutorials and tips for Microsoft Cloud products and services.  🚀🌈 
        Get ready to explore, learn, and master the magic of Microsoft's cloud products and services with our supercharged tutorials and fabulous tips! Whether you're a tech wizard or a cloud-curious enthusiast, we've got you covered on your journey to cloud greatness. Let's soar together and unlock the full potential of the Microsoft Cloud!
      </>
    ),
  },
  {
    title: 'AI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        "Imagine giving a bunch of super-smart robots the power to think and learn just like humans do - that's AI, the brainy magic that lets machines handle tasks we used to think only we could! 🤖✨ From solving puzzles to chatting like a pro, AI brings the future right to our fingertips!"
        <br></br>
        Open AI, anno 2023
      </>
    ),
  },
  {
    title: 'Other',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mix of my hobbies; guitar 🎸 food 🍕🥗 audiophile and more! 
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
