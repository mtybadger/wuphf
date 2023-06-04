import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    {/* Updated the text color to use the custom pink color */}
    <h1 className="text-5xl text-pink-500 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    {/* Updated the text color to use the custom pink color */}
    <div className="text-2xl text-pink-500 mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };