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
            {/* Replacing dog-related text with cat-related text */}
            <span className="text-primary-500">for talking to your cat</span>
          </>
        }
        description="Wuphf translates your cat's meows into human language, finally bridging the communication gap between you and your furry friend."
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