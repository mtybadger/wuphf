import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  // Replace dog-related text with equivalent cat-related text
  const title = "Stop sounding so dumb to your dog.".replace("dog", "cat");
  const subtitle = "Start your Free Trial.";

  return (
    <Section>
      <CTABanner
        title={title}
        subtitle={subtitle}
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button>Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  );
};

export { Banner };