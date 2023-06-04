import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  // Replace dog-related text with equivalent cat-related text
  const replaceDogTextWithCatText = (text: string) => {
    const dogToCatMap = {
      dog: 'cat',
      puppy: 'kitten',
      canine: 'feline',
    };

    const regex = new RegExp(Object.keys(dogToCatMap).join('|'), 'gi');
    return text.replace(regex, (matched) => dogToCatMap[matched.toLowerCase()]);
  };

  const updatedTitle = replaceDogTextWithCatText(props.title);
  const updatedDescription = replaceDogTextWithCatText(props.description);

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