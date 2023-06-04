import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The revolutionary AI-powered device\n'}
            <span className="text-primary-500">for talking to your dog</span>
          </>
        }
        description="Wuphf translates your dog's barks into human language, finally bridging the communication gap between you and your furry friend."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              {/* Add custom class 'mainButton' to the Button component */}
              <Button xl className="mainButton">Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

// Add the following CSS to your styles.css file:

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

@media (min-width: 1024px) {
  .mainButton {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    height: 4rem;
  }
}

@media (min-width: 1280px) {
  .mainButton {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    height: 3rem;
  }
}
*/