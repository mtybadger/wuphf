import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Stop sounding so dumb to your dog."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            {/* Add the custom class "mainButton" to the Button component */}
            <Button className="mainButton">Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

// In your styles.css or a new CSS file, add the following styles:

/*
.mainButton {
  padding: 2rem 4rem;
  font-size: 2rem;
  height: 10rem;
}

@media (min-width: 640px) {
  .mainButton {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    height: 8rem;
  }
}

@media (min-width: 768px) {
  .mainButton {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    height: 6rem;
  }
}

// And so on for lg, xl, and 2xl breakpoints
*/