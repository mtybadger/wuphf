import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    {/* Changed the text color from text-gray-900 to text-blue-900 */}
    <h1 className="text-5xl text-blue-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    {/* Changed the text color from text-2xl to text-blue-800 */}
    <div className="text-2xl text-blue-800 mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };