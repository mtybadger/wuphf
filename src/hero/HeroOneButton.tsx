import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const replace_string = (text: string, oldString: string, newString: string) => {
  return text.split(oldString).join(newString);
};

const replace_words = (text: string, oldWords: string[], newWords: string[]) => {
  let newText = text;
  for (let i = 0; i < oldWords.length; i++) {
    newText = newText.split(oldWords[i]).join(newWords[i]);
  }
  return newText;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const dog_words = ["dog", "puppy", "canine", "pooch"];
  const cat_words = ["cat", "kitten", "feline", "tabby"];

  const updatedTitle = replace_words(
    replace_string(props.title, "Wuphf", "Meaow.ai"),
    dog_words,
    cat_words
  );
  const updatedDescription = replace_words(
    replace_string(props.description, "Wuphf", "Meaow.ai"),
    dog_words,
    cat_words
  );

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {updatedTitle}
      </h1>
      <div className="text-2xl mt-4 mb-16">{updatedDescription}</div>

      {props.button}
    </header>
  );
};

export { HeroOneButton };