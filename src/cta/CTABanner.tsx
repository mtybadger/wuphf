import { ReactNode } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const [title, setTitle] = useState(props.title);
  const [subtitle, setSubtitle] = useState(props.subtitle);

  useEffect(() => {
    const dogToCat = (text: string) => {
      return text
        .replace(/dog/gi, 'cat')
        .replace(/puppy/gi, 'kitten')
        .replace(/canine/gi, 'feline');
    };

    setTitle(dogToCat(props.title));
    setSubtitle(dogToCat(props.subtitle));
  }, [props.title, props.subtitle]);

  return (
    <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{title}</div>
        <div className="text-primary-500">{subtitle}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
        {props.button}
      </div>
    </div>
  );
};

export { CTABanner };