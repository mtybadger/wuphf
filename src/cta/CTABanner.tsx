import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };

// Changes made:
// 1. Updated the background color class from 'bg-primary-100' to 'bg-primary'.
// 2. Updated the subtitle text color class from 'text-primary-500' to 'text-primary'.
// These changes are in line with the updated primary color in the tailwind.config.js file.