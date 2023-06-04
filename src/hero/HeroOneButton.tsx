import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

// Function to find dog-related text and return a list of tuples with the text and its location
const find_dog_text = (page_content: string) => {
  const dog_related_words = ["dog", "puppy", "canine"];
  const regex = new RegExp('\\b(' + dog_related_words.join('|') + ')\\b', 'gi');
  const matches = [];
  let match;

  while ((match = regex.exec(page_content)) !== null) {
    matches.push([match[0], match.index]);
  }

  return matches;
};

// Function to replace text at specified locations with new text
const replace_text = (page_content: string, replacements: [number, string][]) => {
  let updated_content = page_content;
  const offset = 0;

  for (const [location, new_text] of replacements) {
    updated_content = updated_content.slice(0, location + offset) + new_text + updated_content.slice(location + offset + new_text.length);
    offset += new_text.length;
  }

  return updated_content;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  // Find dog-related text in the title and description
  const title_dog_text = find_dog_text(props.title);
  const description_dog_text = find_dog_text(props.description);

  // Replace dog-related text with cat-related text
  const dog_to_cat = { "dog": "cat", "puppy": "kitten", "canine": "feline" };
  const updated_title = replace_text(props.title, title_dog_text.map(([text, loc]) => [loc, dog_to_cat[text]]));
  const updated_description = replace_text(props.description, description_dog_text.map(([text, loc]) => [loc, dog_to_cat[text]]));

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {updated_title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{updated_description}</div>

      {props.button}
    </header>
  );
};

export { HeroOneButton };