import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

// Function to replace all instances of a string with another string
const replace_string = (content, oldString, newString) => {
  return content.split(oldString).join(newString);
};

// Function to replace all instances of words in an array with corresponding words in another array
const replace_words = (content, oldWords, newWords) => {
  for (let i = 0; i < oldWords.length; i++) {
    content = replace_string(content, oldWords[i], newWords[i]);
  }
  return content;
};

const Base = () => {
  // Replace all instances of "Wuphf" with "Meaow.ai"
  const updatedAppConfig = {
    ...AppConfig,
    title: replace_string(AppConfig.title, 'Wuphf', 'Meaow.ai'),
    description: replace_string(AppConfig.description, 'Wuphf', 'Meaow.ai'),
  };

  // Replace all dog-related words with cat-related words
  const dog_words = ['dog', 'puppy', 'canine', 'pooch'];
  const cat_words = ['cat', 'kitten', 'feline', 'tabby'];
  const updatedTitle = replace_words(updatedAppConfig.title, dog_words, cat_words);
  const updatedDescription = replace_words(updatedAppConfig.description, dog_words, cat_words);

  return (
    <div className="antialiased text-gray-600">
      <Meta title={updatedTitle} description={updatedDescription} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };