import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Want access to our API?',
    Svg: require('@site/static/img/icon-api.svg').default,
    description: (
      <>
        The API is part of our Business plan. Read more on our{' '}
        <a href="https://confetti.events">landing page</a>.
      </>
    ),
  },
  {
    title: 'Zapier user?',
    Svg: require('@site/static/img/icon-zapier.svg').default,
    description: (
      <>
        Would you prefer to use your mouse instead of code? Check out our{' '}
        <a href="https://zapier.com/apps/confetti/integrations">
          Zapier integration
        </a>
        .
      </>
    ),
  },
  {
    title: 'Need support?',
    Svg: require('@site/static/img/icon-support.svg').default,
    description: (
      <>
        Contact our support team at via{' '}
        <a href="mailto:support@confetti.events">support@confetti.events</a>
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
