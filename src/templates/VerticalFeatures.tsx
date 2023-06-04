import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

// Function to find dog-related text and return a list of tuples containing the text found and its location in the HTML
const find_dog_text = (page_content) => {
  const dog_related_words = ["dog", "puppy", "canine", "barks", "bark"];
  const dog_text_locations = [];

  dog_related_words.forEach((word) => {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    let match;
    while ((match = regex.exec(page_content)) !== null) {
      dog_text_locations.push([match.index, match[0]]);
    }
  });

  return dog_text_locations;
};

// Function to replace text at specified locations with new text
const replace_text = (page_content, replacements) => {
  let new_content = page_content;
  replacements.forEach(([location, new_text]) => {
    new_content = new_content.slice(0, location) + new_text + new_content.slice(location + new_text.length);
  });
  return new_content;
};

// Dictionary to map dog-related words to equivalent cat-related words
const dog_to_cat = {
  dog: "cat",
  puppy: "kitten",
  canine: "feline",
  barks: "meows",
  bark: "meow",
};

const page_content = `
  <Section
    title="Communicate with Your Canine Companion"
    description="Finally, understand what your dog is trying to say with Woof.ai. Our groundbreaking AI-powered device translates your dog's barks into human language, bringing you closer to your furry friend."
  >
    <VerticalFeatureRow
      title="Real-Time Dog-to-Human Translation"
      description="With Woof.ai, you'll never be left wondering what your dog wants. Our advanced AI algorithms analyze your dog's barks and provide instant translations in real-time, letting you understand their needs and desires."
      image="/assets/images/dog1.svg"
      imageAlt="Real-Time Dog-to-Human Translation"
    />
    <VerticalFeatureRow
      title="Enhanced Bonding and Understanding"
      description="Woof.ai strengthens the bond between you and your dog by facilitating clear communication. By knowing exactly what your dog is trying to communicate, you can better address their needs, leading to a happier and more fulfilling relationship."
      image="/assets/images/dog2.svg"
      imageAlt="Enhanced Bonding and Understanding"
      reverse
    />
    <VerticalFeatureRow
      title="Tailored Training and Behavior Insights"
      description="Gain valuable insights into your dog's behavior patterns with Woof.ai. Our intelligent system analyzes the translated barks and provides tailored training recommendations and behavior insights, helping you address any challenges or improve their training regimen."
      image="/assets/images/dog3.svg"
      imageAlt="Tailored Training and Behavior Insights"
    />
  </Section>
`;

const dog_text_locations = find_dog_text(page_content);
const cat_text_replacements = dog_text_locations.map(([location, text]) => [location, dog_to_cat[text.toLowerCase()]]);

const updated_page_content = replace_text(page_content, cat_text_replacements);

const VerticalFeatures = () => (
  <div dangerouslySetInnerHTML={{ __html: updated_page_content }} />
);

export { VerticalFeatures };