import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

// Function to find dog-related text in the page content
const find_dog_text = (page_content) => {
  const dog_related_words = ["dog", "puppy", "canine"];
  const regex = new RegExp('\\b(' + dog_related_words.join('|') + ')\\b', 'gi');
  const matches = [];
  let match;

  while ((match = regex.exec(page_content)) !== null) {
    matches.push({ text: match[0], location: match.index });
  }

  return matches;
};

// Function to replace text in the page content
const replace_text = (page_content, replacements) => {
  let updated_content = page_content;
  const sorted_replacements = replacements.sort((a, b) => b.location - a.location);

  for (const { location, new_text } of sorted_replacements) {
    updated_content = updated_content.slice(0, location) + new_text + updated_content.slice(location + new_text.length);
  }

  return updated_content;
};

const dog_to_cat = {
  "dog": "cat",
  "puppy": "kitten",
  "canine": "feline",
};

const Base = () => {
  const page_content = `
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  `;

  const dog_text_locations = find_dog_text(page_content);
  const replacements = dog_text_locations.map(({ text, location }) => ({ location, new_text: dog_to_cat[text.toLowerCase()] }));
  const updated_content = replace_text(page_content, replacements);

  return (
    <div dangerouslySetInnerHTML={{ __html: updated_content }} />
  );
};

export { Base };