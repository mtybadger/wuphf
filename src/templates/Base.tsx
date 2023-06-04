import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  // Replace dog-related text with equivalent cat-related text
  const replaceDogTextWithCatText = (text) => {
    const dogToCatMap = {
      dog: 'cat',
      puppy: 'kitten',
      canine: 'feline',
    };

    const words = text.split(' ');

    const newText = words
      .map((word) => {
        const lowerCaseWord = word.toLowerCase();
        if (dogToCatMap[lowerCaseWord]) {
          return word.replace(lowerCaseWord, dogToCatMap[lowerCaseWord]);
        }
        return word;
      })
      .join(' ');

    return newText;
  };

  // Update AppConfig title and description
  AppConfig.title = replaceDogTextWithCatText(AppConfig.title);
  AppConfig.description = replaceDogTextWithCatText(AppConfig.description);

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };