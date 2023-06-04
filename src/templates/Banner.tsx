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
            {/* Add a custom className to the Button component */}
            <Button className="start-button">Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

// Now, you should update the CSS file where the "start-button" class is defined.
// Change the background color property to blue as mentioned in the proposed solution.