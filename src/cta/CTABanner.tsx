import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const replace_string = (text: string, oldString: string, newString: string) => {
  return text.split(oldString).join(newString);
};

const replace_words = (text: string, oldWords: string[], newWords: string[]) => {
  for (let i = 0; i < oldWords.length; i++) {
    text = replace_string(text, oldWords[i], newWords[i]);
  }
  return text;
};

const CTABanner = (props: ICTABannerProps) => {
  // Replace "Wuphf" with "Meaow.ai"
  const updatedTitle = replace_string(props.title, "Wuphf", "Meaow.ai");
  const updatedSubtitle = replace_string(props.subtitle, "Wuphf", "Meaow.ai");

  // Replace dog-related words with cat-related words
  const dog_words = ["dog", "puppy", "canine", "pooch"];
  const cat_words = ["cat", "kitten", "feline", "tabby"];
  const finalTitle = replace_words(updatedTitle, dog_words, cat_words);
  const finalSubtitle = replace_words(updatedSubtitle, dog_words, cat_words);

  return (
    <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{finalTitle}</div>
        <div className="text-primary-500">{finalSubtitle}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
        {props.button}
      </div>
    </div>
  );
};

export { CTABanner };