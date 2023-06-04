import { ReactNode } from 'react';

// Helper function to find dog-related text in the content
const find_dog_text = (content: string) => {
  const dog_related_words = ["dog", "puppy", "canine"];
  const regex = new RegExp(`\\b(?:${dog_related_words.join("|")})\\b`, "gi");
  const matches = [...content.matchAll(regex)];
  return matches.map((match) => [match.index, match[0]]);
};

// Helper function to replace text in the content
const replace_text = (content: string, replacements: [number, string][]) => {
  let newContent = content;
  for (const [index, newText] of replacements) {
    newContent = newContent.slice(0, index) + newText + newContent.slice(index + newText.length);
  }
  return newContent;
};

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  // Replace dog-related text with cat-related text in title and description
  const dog_to_cat = { dog: "cat", puppy: "kitten", canine: "feline" };
  const title_replacements = find_dog_text(props.title || "").map(([index, text]) => [index, dog_to_cat[text.toLowerCase()]]);
  const description_replacements = find_dog_text(props.description || "").map(([index, text]) => [index, dog_to_cat[text.toLowerCase()]]);
  const new_title = replace_text(props.title || "", title_replacements);
  const new_description = replace_text(props.description || "", description_replacements);

  return (
    <div
      className={`max-w-screen-lg mx-auto px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      {(new_title || new_description) && (
        <div className="mb-12 text-center">
          {new_title && (
            <h2 className="text-4xl text-gray-900 font-bold">{new_title}</h2>
          )}
          {new_description && (
            <div className="mt-4 text-xl md:px-20">{new_description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };