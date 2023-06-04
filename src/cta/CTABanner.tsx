import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

// Function to find dog-related text in the content
const find_dog_text = (page_content: string) => {
  const dog_related_words = ["dog", "puppy", "canine"];
  const dog_text_locations = [];

  dog_related_words.forEach((word) => {
    let index = page_content.indexOf(word);
    while (index !== -1) {
      dog_text_locations.push({ word, index });
      index = page_content.indexOf(word, index + 1);
    }
  });

  return dog_text_locations;
};

// Function to replace text in the content
const replace_text = (page_content: string, replacements: any[]) => {
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

const CTABanner = (props: ICTABannerProps) => {
  const dog_to_cat = {
    dog: "cat",
    puppy: "kitten",
    canine: "feline",
  };

  // Find dog-related text in the title and subtitle
  const title_dog_text = find_dog_text(props.title);
  const subtitle_dog_text = find_dog_text(props.subtitle);

  // Replace dog-related text with cat-related text
  const updated_title = replace_text(
    props.title,
    title_dog_text.map(({ word, index }) => ({
      location: index,
      new_text: dog_to_cat[word],
    }))
  );
  const updated_subtitle = replace_text(
    props.subtitle,
    subtitle_dog_text.map(({ word, index }) => ({
      location: index,
      new_text: dog_to_cat[word],
    }))
  );

  return (
    <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{updated_title}</div>
        <div className="text-primary-500">{updated_subtitle}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
        {props.button}
      </div>
    </div>
  );
};

export { CTABanner };