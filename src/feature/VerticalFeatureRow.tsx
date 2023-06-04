import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
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

  // Replace dog-related text with cat-related text
  const updatedTitle = props.title.replace(/dog|puppy|canine/gi, (matched) => {
    return matched === 'dog' ? 'cat' : matched === 'puppy' ? 'kitten' : 'feline';
  });

  const updatedDescription = props.description.replace(/dog|puppy|canine/gi, (matched) => {
    return matched === 'dog' ? 'cat' : matched === 'puppy' ? 'kitten' : 'feline';
  });

  // Replace dog images with cat images
  const updatedImage = props.image.replace(/dog|puppy|canine/gi, (matched) => {
    return matched === 'dog' ? 'cat' : matched === 'puppy' ? 'kitten' : 'feline';
  });

  const updatedImageAlt = props.imageAlt.replace(/dog|puppy|canine/gi, (matched) => {
    return matched === 'dog' ? 'cat' : matched === 'puppy' ? 'kitten' : 'feline';
  });

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{updatedTitle}</h3>
        <div className="mt-6 text-xl leading-9">{updatedDescription}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${updatedImage}`} alt={updatedImageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };