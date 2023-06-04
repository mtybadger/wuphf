import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

// Function to replace a string
const replace_string = (str, find, replace) => {
  return str.split(find).join(replace);
};

// Function to replace words in a list
const replace_words = (str, findList, replaceList) => {
  for (let i = 0; i < findList.length; i++) {
    str = replace_string(str, findList[i], replaceList[i]);
  }
  return str;
};

const dog_words = ["dog", "puppy", "canine", "pooch"];
const cat_words = ["cat", "kitten", "feline", "tabby"];

const dog_images = ["/assets/images/dog1.svg", "/assets/images/dog2.svg", "/assets/images/dog3.svg"];
const cat_images = ["/assets/images/cat1.svg", "/assets/images/cat2.svg", "/assets/images/cat3.svg"];

const VerticalFeatures = () => {
  const sectionTitle = replace_words("Communicate with Your Canine Companion", dog_words, cat_words);
  const sectionDescription = replace_words("Finally, understand what your dog is trying to say with Woof.ai. Our groundbreaking AI-powered device translates your dog's barks into human language, bringing you closer to your furry friend.", dog_words, cat_words);

  const feature1Title = replace_words("Real-Time Dog-to-Human Translation", dog_words, cat_words);
  const feature1Description = replace_words("With Woof.ai, you'll never be left wondering what your dog wants. Our advanced AI algorithms analyze your dog's barks and provide instant translations in real-time, letting you understand their needs and desires.", dog_words, cat_words);
  const feature1Image = replace_words(dog_images[0], dog_images, cat_images);

  const feature2Title = replace_words("Enhanced Bonding and Understanding", dog_words, cat_words);
  const feature2Description = replace_words("Woof.ai strengthens the bond between you and your dog by facilitating clear communication. By knowing exactly what your dog is trying to communicate, you can better address their needs, leading to a happier and more fulfilling relationship.", dog_words, cat_words);
  const feature2Image = replace_words(dog_images[1], dog_images, cat_images);

  const feature3Title = replace_words("Tailored Training and Behavior Insights", dog_words, cat_words);
  const feature3Description = replace_words("Gain valuable insights into your dog's behavior patterns with Woof.ai. Our intelligent system analyzes the translated barks and provides tailored training recommendations and behavior insights, helping you address any challenges or improve their training regimen.", dog_words, cat_words);
  const feature3Image = replace_words(dog_images[2], dog_images, cat_images);

  return (
    <Section
      title={sectionTitle}
      description={replace_string(sectionDescription, "Woof.ai", "Meaow.ai")}
    >
      <VerticalFeatureRow
        title={feature1Title}
        description={replace_string(feature1Description, "Woof.ai", "Meaow.ai")}
        image={feature1Image}
        imageAlt={feature1Title}
      />
      <VerticalFeatureRow
        title={feature2Title}
        description={replace_string(feature2Description, "Woof.ai", "Meaow.ai")}
        image={feature2Image}
        imageAlt={feature2Title}
        reverse
      />
      <VerticalFeatureRow
        title={feature3Title}
        description={replace_string(feature3Description, "Woof.ai", "Meaow.ai")}
        image={feature3Image}
        imageAlt={feature3Title}
      />
    </Section>
  );
};

export { VerticalFeatures };