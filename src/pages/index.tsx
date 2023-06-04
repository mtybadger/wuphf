import { Base } from '../templates/Base';

// Function to find dog-related text in the HTML content
const find_dog_text = (page_content) => {
  const dog_related_words = ["dog", "puppy", "canine"];
  const dog_text_locations = [];

  dog_related_words.forEach((word) => {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    let match;

    while ((match = regex.exec(page_content)) !== null) {
      dog_text_locations.push({ location: match.index, text: match[0] });
    }
  });

  return dog_text_locations;
};

// Function to replace text in the HTML content
const replace_text = (page_content, replacements) => {
  let updated_content = page_content;

  replacements.forEach((replacement) => {
    const { location, new_text } = replacement;
    updated_content =
      updated_content.slice(0, location) +
      new_text +
      updated_content.slice(location + new_text.length);
  });

  return updated_content;
};

// Dictionary to map dog-related words to cat-related words
const dog_to_cat = {
  dog: "cat",
  puppy: "kitten",
  canine: "feline",
};

// Main function to update the landing page content
const update_landing_page = () => {
  const page_content = document.documentElement.innerHTML;
  const dog_text_locations = find_dog_text(page_content);

  const replacements = dog_text_locations.map((item) => {
    return { location: item.location, new_text: dog_to_cat[item.text.toLowerCase()] };
  });

  const updated_content = replace_text(page_content, replacements);
  document.documentElement.innerHTML = updated_content;
};

const Index = () => {
  // Call the update_landing_page function when the component is mounted
  React.useEffect(() => {
    update_landing_page();
  }, []);

  return <Base />;
};

export default Index;