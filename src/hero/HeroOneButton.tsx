import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center bg-cover bg-center" style={{ backgroundImage: 'url("path/to/cat-themed-background.jpg")' }}>
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {/* Step 3: Update the title */}
      Welcome to the Cat Corner
    </h1>
    <div className="text-2xl mt-4 mb-16">
      {/* Step 3: Update the description */}
      We love all things feline!
    </div>

    {/* Step 4: Add a cat silhouette or paw print as a decorative element */}
    <img src="path/to/cat-silhouette.png" alt="Cat silhouette" className="w-16 h-16 mx-auto mb-4" />

    {props.button}
  </header>
);

// Step 6: Commit the changes
export { HeroOneButton };