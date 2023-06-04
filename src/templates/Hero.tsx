import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

// Function to replace a string
const replace_string = (text, oldString, newString) => {
  return text.split(oldString).join(newString);
};

// Function to replace words in a list
const replace_words = (text, oldWords, newWords) => {
  for (let i = 0; i < oldWords.length; i++) {
    text = replace_string(text, oldWords[i], newWords[i]);
  }
  return text;
};

const Hero = () => {
  // Replace "Wuphf" with "Meaow.ai"
  const titleText = replace_string(
    'The revolutionary AI-powered device\nfor talking to your dog',
    'Wuphf',
    'Meaow.ai'
  );

  // Replace dog-related words with cat-related words
  const dog_words = ['dog', 'barks'];
  const cat_words = ['cat', 'meows'];
  const descriptionText = replace_words(
    "Wuphf translates your dog's barks into human language, finally bridging the communication gap between you and your furry friend.",
    dog_words,
    cat_words
  );

  return (
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
              {titleText}
              <span className="text-primary-500">for talking to your cat</span>
            </>
          }
          description={descriptionText}
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
};

export { Hero };