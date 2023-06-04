import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100" className="cat-background"> {/* Add a cat-themed background image */}
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
            {/* Update the title and add cat-themed font or font color */}
            <span className="text-cat-theme">Welcome to the Cat Corner</span>
          </>
        }
        description={
          <>
            {/* Update the description and add cat-themed font or font color */}
            <span className="text-cat-theme">We love all things feline!</span>
          </>
        }
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };