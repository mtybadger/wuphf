import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

// Function to replace dog-related text with cat-related text
const replaceDogTextWithCatText = (text) => {
  const dogToCat = {
    "dog": "cat",
    "Dog": "Cat",
    "puppy": "kitten",
    "Puppy": "Kitten",
    "canine": "feline",
    "Canine": "Feline",
  };

  const regex = new RegExp(Object.keys(dogToCat).join("|"), "gi");

  return text.replace(regex, (matched) => dogToCat[matched]);
};

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
            {replaceDogTextWithCatText('The revolutionary AI-powered device\n')}
            <span className="text-primary-500">{replaceDogTextWithCatText('for talking to your dog')}</span>
          </>
        }
        description={replaceDogTextWithCatText("Wuphf translates your dog's barks into human language, finally bridging the communication gap between you and your furry friend.")}
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