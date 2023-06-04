import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

// Function to find dog-related text in the content
const find_dog_text = (content) => {
  const dog_words = ["dog", "puppy", "canine"];
  const dog_text_locations = [];

  dog_words.forEach((word) => {
    const regex = new RegExp(word, "gi");
    let match;
    while ((match = regex.exec(content)) !== null) {
      dog_text_locations.push({ location: match.index, text: match[0] });
    }
  });

  return dog_text_locations;
};

// Function to replace text in the content
const replace_text = (content, replacements) => {
  let new_content = content;
  replacements.forEach(({ location, new_text }) => {
    new_content =
      new_content.slice(0, location) +
      new_text +
      new_content.slice(location + new_text.length);
  });

  return new_content;
};

const dog_to_cat = {
  dog: "cat",
  puppy: "kitten",
  canine: "feline",
};

const original_content = "Stop sounding so dumb to your dog.";

const dog_text_locations = find_dog_text(original_content);

const replacements = dog_text_locations.map(({ location, text }) => ({
  location,
  new_text: dog_to_cat[text.toLowerCase()],
}));

const updated_content = replace_text(original_content, replacements);

const Banner = () => (
  <Section>
    <CTABanner
      title={updated_content}
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

export { Banner };