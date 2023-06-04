import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {/* Add the mainButton class to the button */}
    <div className="mainButton">
      {props.button}
    </div>
  </header>
);

export { HeroOneButton };

// In your styles.css file, add the following styles for the mainButton class:

/*
.mainButton {
  padding: 2rem 4rem;
  font-size: 2rem;
  height: 10rem;
}

@media (min-width: 640px) {
  .mainButton {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    height: 8rem;
  }
}

@media (min-width: 768px) {
  .mainButton {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    height: 6rem;
  }
}

// And so on for lg, xl, and 2xl breakpoints
*/