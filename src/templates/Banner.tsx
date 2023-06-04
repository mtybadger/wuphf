import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

// Function to replace a string
const replace_string = (text, oldString, newString) => {
  return text.replace(new RegExp(oldString, 'g'), newString);
};

// Function to replace words in a list
const replace_words = (text, oldWords, newWords) => {
  for (let i = 0; i < oldWords.length; i++) {
    text = replace_string(text, oldWords[i], newWords[i]);
  }
  return text;
};

const Banner = () => {
  // Replace "Wuphf" with "Meaow.ai"
  const title = replace_string("Stop sounding so dumb to your dog.", "Wuphf", "Meaow.ai");

  // Replace dog-related words with cat-related words
  const dog_words = ["dog", "puppy", "canine", "pooch"];
  const cat_words = ["cat", "kitten", "feline", "tabby"];
  const updated_title = replace_words(title, dog_words, cat_words);

  return (
    <Section>
      <CTABanner
        title={updated_title}
        subtitle="Start your Free Trial."
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