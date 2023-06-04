import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

// Function to replace the string "Wuphf" with "Meaow.ai"
const replace_string = (text: string) => {
  return text.replace(/Wuphf/g, "Meaow.ai");
};

// Function to replace dog-related words with cat-related words
const replace_words = (text: string) => {
  const dog_words = ["dog", "puppy", "canine", "pooch"];
  const cat_words = ["cat", "kitten", "feline", "tabby"];

  for (let i = 0; i < dog_words.length; i++) {
    const regex = new RegExp(dog_words[i], "gi");
    text = text.replace(regex, cat_words[i]);
  }

  return text;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  // Replace "Wuphf" with "Meaow.ai" and dog-related words with cat-related words in title and description
  const updatedTitle = replace_words(replace_string(props.title));
  const updatedDescription = replace_words(replace_string(props.description));

  // Replace dog image filenames with cat image filenames
  const updatedImage = props.image.replace(/dog/g, "cat");

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{updatedTitle}</h3>
        <div className="mt-6 text-xl leading-9">{updatedDescription}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${updatedImage}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };