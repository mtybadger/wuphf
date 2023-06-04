import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    {/* Update the title and subtitle elements */}
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    {/* Add a cat-themed background image */}
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url("path/to/cat-themed-background.jpg")' }}>
      {/* Add a cat silhouette or paw print as a decorative element */}
      <img src="path/to/cat-silhouette.png" alt="Cat silhouette" className="w-8 h-8 mx-auto mb-2" />
      
      {/* Update the font and font color for the title and description */}
      <h1 className="text-4xl font-cat-themed text-cat-color">Welcome to the Cat Corner</h1>
      <p className="text-xl text-cat-color">We love all things feline!</p>
    </div>

    {/* Ensure the text is large enough to read and centered within the component */}
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2 text-center">
      {props.button}
    </div>
  </div>
);

export { CTABanner };